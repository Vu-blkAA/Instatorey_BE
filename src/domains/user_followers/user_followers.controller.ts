import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserFollowersService } from './user_followers.service';
import { CreateUserFollowerDto } from './dto/create-user_follower.dto';
import { UpdateUserFollowerDto } from './dto/update-user_follower.dto';

@Controller('user-followers')
export class UserFollowersController {
  constructor(private readonly userFollowersService: UserFollowersService) {}

  @Post()
  create(@Body() createUserFollowerDto: CreateUserFollowerDto) {
    return this.userFollowersService.create(createUserFollowerDto);
  }

  @Get()
  findAll() {
    return this.userFollowersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userFollowersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserFollowerDto: UpdateUserFollowerDto) {
    return this.userFollowersService.update(+id, updateUserFollowerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userFollowersService.remove(+id);
  }
}
