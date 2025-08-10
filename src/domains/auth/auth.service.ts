import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { SignInDto } from './dto/sign-in.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ACCESS_TOKEN_CONSTANT } from 'src/constants/access_token.constant';
import { RefreshToken } from 'src/entities/refresh-token.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(RefreshToken) private refreshTokenRepository: Repository<RefreshToken>,
    private userService: UsersService,
    private jwtService: JwtService
  ){}
  
  async signIn(signInDto: SignInDto) {
    const { username, password } = signInDto;
    const user = await this.validate(username, password);

    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      dob: user.dob,
      username: user.username,
      email: user.email,
      isActive: user.isActive,
      role: user.role
    };

    return {
      accessToken: await this.jwtService.signAsync(payload, { expiresIn: ACCESS_TOKEN_CONSTANT.EXPIRE_SECONDS }),
      refreshToken: await this.createRefreshToken(user),
    }
  }

  signUp(signUpDto: CreateUserDto) {
    return this.userService.create(signUpDto);
  }

  async validate(username: string, password: string) {
    const user = await this.userRepository.createQueryBuilder('user')
      .where('user.username = :username', { username })
      .addSelect('user.password')
      .getOne();

    if(!user) {
      throw new NotFoundException('User not found');
    };

    const isValidPassword = await bcrypt.compare(password, user.password);

    if(!isValidPassword) {
      throw new UnauthorizedException('Invalid password');
    }

    return user;
  }

  async createRefreshToken(user: User): Promise<string> {
    const refreshToken = await this.jwtService.signAsync(
      { userId: user.id }, 
      { expiresIn: ACCESS_TOKEN_CONSTANT.REFRESH_TOKEN_EXPIRE_SECONDS }
    );

    // Revoke all refresh tokens of user
    await this.refreshTokenRepository.update({ user }, { revoked: true })

    await this.refreshTokenRepository.save({
      refreshToken,
      user,
      revoked: false,
      isExpired: false,
      expiresAt: new Date(Date.now() + ACCESS_TOKEN_CONSTANT.REFRESH_TOKEN_EXPIRE_SECONDS * 1000),
    });

    return refreshToken;
  }

  async refreshAccessToken(refreshToken: string) {
    const refreshTokenEntity = await this.refreshTokenRepository.findOne(
      {where: { refreshToken, isExpired: false, revoked: false }, relations: { user: true }}
    );

    if(!refreshTokenEntity) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    if(refreshTokenEntity.expiresAt < new Date()) {
      await this.refreshTokenRepository.update({ refreshToken }, { isExpired: true });
      throw new UnauthorizedException('Refresh token expired');
    }

    const user = refreshTokenEntity.user;

    const payload = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      dob: user.dob,
      username: user.username,
      email: user.email,
      isActive: user.isActive,
      role: user.role
    };

    return {
      accessToken: await this.jwtService.signAsync(payload, { expiresIn: ACCESS_TOKEN_CONSTANT.EXPIRE_SECONDS }),
      refreshToken: await this.createRefreshToken(user),
    }
  }

}
