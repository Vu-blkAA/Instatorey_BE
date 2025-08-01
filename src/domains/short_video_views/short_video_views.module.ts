import { Module } from '@nestjs/common';
import { ShortVideoViewsService } from './short_video_views.service';
import { ShortVideoViewsController } from './short_video_views.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortVideoView } from '../../entities/short_video_view.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShortVideoView])],
  controllers: [ShortVideoViewsController],
  providers: [ShortVideoViewsService],
})
export class ShortVideoViewsModule {}
