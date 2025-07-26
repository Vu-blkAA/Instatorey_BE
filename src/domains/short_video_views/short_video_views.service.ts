import { Injectable } from '@nestjs/common';
import { CreateShortVideoViewDto } from './dto/create-short_video_view.dto';
import { UpdateShortVideoViewDto } from './dto/update-short_video_view.dto';

@Injectable()
export class ShortVideoViewsService {
  create(createShortVideoViewDto: CreateShortVideoViewDto) {
    return 'This action adds a new shortVideoView';
  }

  findAll() {
    return `This action returns all shortVideoViews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shortVideoView`;
  }

  update(id: number, updateShortVideoViewDto: UpdateShortVideoViewDto) {
    return `This action updates a #${id} shortVideoView`;
  }

  remove(id: number) {
    return `This action removes a #${id} shortVideoView`;
  }
}
