import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media, User } from 'src/entities';
import { Media_Enum } from 'src/enums/media.enum';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Media) private mediaRepository: Repository<Media>
  ) {}
  async create(createUserDto: CreateUserDto) {
    let avatar: Media;
    const {avatarUrl, ...rest} = createUserDto;

    if(avatarUrl) {
      avatar = this.mediaRepository.create({
        path: avatarUrl,
        type: Media_Enum.IMAGE,
      });
      await this.mediaRepository.save(avatar);
    };

    const user = this.userRepository.create({
      ...rest,
      avatar: avatar ? avatar : null
    });

    return await this.userRepository.save(user);
  }

  async findAll(){
    return this.userRepository.find({
      relations: {
        avatar: true,
      }
    })
  }

  async findOne(id: number) {
    return this.userRepository.findOne({
      where: { id },
      relations: {
        avatar: true,
      }
    })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { avatarUrl, ...rest} = updateUserDto;

    const user = await this.userRepository.findOne({
      where: { id },
      relations: {
        avatar: true,
      }
    });

    if(avatarUrl && avatarUrl !== user?.avatar?.path) {
      const avatar = this.mediaRepository.create({  
        path: avatarUrl,
        type: Media_Enum.IMAGE,
      });

      await this.mediaRepository.save(avatar);
      user.avatar = avatar;
    }

    this.userRepository.merge(user, rest);
    
    return await this.userRepository.save(user);
  }

}
