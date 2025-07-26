import { Injectable } from '@nestjs/common';
import { CreateUserFollowerDto } from './dto/create-user_follower.dto';
import { UpdateUserFollowerDto } from './dto/update-user_follower.dto';

@Injectable()
export class UserFollowersService {
  create(createUserFollowerDto: CreateUserFollowerDto) {
    return 'This action adds a new userFollower';
  }

  findAll() {
    return `This action returns all userFollowers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userFollower`;
  }

  update(id: number, updateUserFollowerDto: UpdateUserFollowerDto) {
    return `This action updates a #${id} userFollower`;
  }

  remove(id: number) {
    return `This action removes a #${id} userFollower`;
  }
}
