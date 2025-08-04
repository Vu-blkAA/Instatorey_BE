import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from '../../entities/post.entity';
import { UsersModule } from '../users/users.module';
import { MediasModule } from '../medias/medias.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), MediasModule, UsersModule],
  controllers: [PostsController],
  providers: [PostsService],
  exports: [PostsService]
})
export class PostsModule {}
