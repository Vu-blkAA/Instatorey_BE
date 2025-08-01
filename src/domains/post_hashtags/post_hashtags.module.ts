import { Module } from '@nestjs/common';
import { PostHashtagsService } from './post_hashtags.service';
import { PostHashtagsController } from './post_hashtags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostHashtag } from '../../entities/post_hashtag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostHashtag])],
  controllers: [PostHashtagsController],
  providers: [PostHashtagsService],
})
export class PostHashtagsModule {}
