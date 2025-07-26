import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShortVideoViewsService } from './short_video_views.service';
import { CreateShortVideoViewDto } from './dto/create-short_video_view.dto';
import { UpdateShortVideoViewDto } from './dto/update-short_video_view.dto';

@Controller('short-video-views')
export class ShortVideoViewsController {
  constructor(private readonly shortVideoViewsService: ShortVideoViewsService) {}

  @Post()
  create(@Body() createShortVideoViewDto: CreateShortVideoViewDto) {
    return this.shortVideoViewsService.create(createShortVideoViewDto);
  }

  @Get()
  findAll() {
    return this.shortVideoViewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shortVideoViewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShortVideoViewDto: UpdateShortVideoViewDto) {
    return this.shortVideoViewsService.update(+id, updateShortVideoViewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shortVideoViewsService.remove(+id);
  }
}
