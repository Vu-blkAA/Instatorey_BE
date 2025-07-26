import { Module } from '@nestjs/common';
import { PostHashtagsService } from './post_hashtags.service';
import { PostHashtagsController } from './post_hashtags.controller';

@Module({
  controllers: [PostHashtagsController],
  providers: [PostHashtagsService],
})
export class PostHashtagsModule {}
