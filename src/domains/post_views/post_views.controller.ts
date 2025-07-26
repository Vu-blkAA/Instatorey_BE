import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PostViewsService } from './post_views.service';
import { CreatePostViewDto } from './dto/create-post_view.dto';
import { UpdatePostViewDto } from './dto/update-post_view.dto';

@Controller('post-views')
export class PostViewsController {
  constructor(private readonly postViewsService: PostViewsService) {}

  @Post()
  create(@Body() createPostViewDto: CreatePostViewDto) {
    return this.postViewsService.create(createPostViewDto);
  }

  @Get()
  findAll() {
    return this.postViewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postViewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePostViewDto: UpdatePostViewDto) {
    return this.postViewsService.update(+id, updatePostViewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postViewsService.remove(+id);
  }
}
