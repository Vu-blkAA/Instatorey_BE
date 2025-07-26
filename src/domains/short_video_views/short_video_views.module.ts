import { Module } from '@nestjs/common';
import { ShortVideoViewsService } from './short_video_views.service';
import { ShortVideoViewsController } from './short_video_views.controller';

@Module({
  controllers: [ShortVideoViewsController],
  providers: [ShortVideoViewsService],
})
export class ShortVideoViewsModule {}
