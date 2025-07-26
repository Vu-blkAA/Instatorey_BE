import { Module } from '@nestjs/common';
import { PostViewsService } from './post_views.service';
import { PostViewsController } from './post_views.controller';

@Module({
  controllers: [PostViewsController],
  providers: [PostViewsService],
})
export class PostViewsModule {}
