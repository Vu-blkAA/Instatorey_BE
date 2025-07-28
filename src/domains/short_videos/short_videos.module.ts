import { Module } from '@nestjs/common';
import { ShortVideosService } from './short_videos.service';
import { ShortVideosController } from './short_videos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShortVideo } from './entities/short_video.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShortVideo])],
  controllers: [ShortVideosController],
  providers: [ShortVideosService],
})
export class ShortVideosModule {}
