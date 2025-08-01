import { Module } from '@nestjs/common';
import { UserFollowersService } from './user_followers.service';
import { UserFollowersController } from './user_followers.controller';
import { UserFollower } from '../../entities/user_follower.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserFollower])],
  controllers: [UserFollowersController],
  providers: [UserFollowersService],
})
export class UserFollowersModule {}
