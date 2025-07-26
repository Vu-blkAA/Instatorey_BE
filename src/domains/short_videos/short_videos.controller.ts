import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShortVideosService } from './short_videos.service';
import { CreateShortVideoDto } from './dto/create-short_video.dto';
import { UpdateShortVideoDto } from './dto/update-short_video.dto';

@Controller('short-videos')
export class ShortVideosController {
  constructor(private readonly shortVideosService: ShortVideosService) {}

  @Post()
  create(@Body() createShortVideoDto: CreateShortVideoDto) {
    return this.shortVideosService.create(createShortVideoDto);
  }

  @Get()
  findAll() {
    return this.shortVideosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shortVideosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShortVideoDto: UpdateShortVideoDto) {
    return this.shortVideosService.update(+id, updateShortVideoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shortVideosService.remove(+id);
  }
}
