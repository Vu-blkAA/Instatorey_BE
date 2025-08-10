import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefreshToken } from 'src/entities/refresh-token.entity';
import { RefreshTokenService } from './refresh_token.service';

@Module({
  imports: [TypeOrmModule.forFeature([RefreshToken])],
  controllers: [],
  providers: [RefreshTokenService],
})
export class RefreshTokenModule {}
