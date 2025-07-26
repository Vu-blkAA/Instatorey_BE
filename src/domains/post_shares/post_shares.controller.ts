import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostSharesService } from './post_shares.service';
import { CreatePostShareDto } from './dto/create-post_share.dto';
import { UpdatePostShareDto } from './dto/update-post_share.dto';

@Controller('post-shares')
export class PostSharesController {
  constructor(private readonly postSharesService: PostSharesService) {}

  @Post()
  create(@Body() createPostShareDto: CreatePostShareDto) {
    return this.postSharesService.create(createPostShareDto);
  }

  @Get()
  findAll() {
    return this.postSharesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postSharesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostShareDto: UpdatePostShareDto) {
    return this.postSharesService.update(+id, updatePostShareDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postSharesService.remove(+id);
  }
}
