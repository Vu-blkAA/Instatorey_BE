import { Module } from '@nestjs/common';
import { ShortVideosService } from './short_videos.service';
import { ShortVideosController } from './short_videos.controller';

@Module({
  controllers: [ShortVideosController],
  providers: [ShortVideosService],
})
export class ShortVideosModule {}
