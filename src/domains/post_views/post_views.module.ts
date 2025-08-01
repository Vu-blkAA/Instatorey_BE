import { Module } from '@nestjs/common';
import { PostViewsService } from './post_views.service';
import { PostViewsController } from './post_views.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostView } from '../../entities/post_view.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostView])],
  controllers: [PostViewsController],
  providers: [PostViewsService],
})
export class PostViewsModule {}
