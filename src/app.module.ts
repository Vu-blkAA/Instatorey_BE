import { TypeOrmModule } from "@nestjs/typeorm";
import { LikesModule } from "./domains/likes/likes.module";
import { PostSharesModule } from "./domains/post_shares/post_shares.module";
import { PostViewsModule } from "./domains/post_views/post_views.module";
import { PostsModule } from "./domains/posts/posts.module";
import { UserFollowersModule } from "./domains/user_followers/user_followers.module";
import { UsersModule } from "./domains/users/users.module";
import { NotificationsModule } from "./domains/notifications/notifications.module";
import { ConversationsModule } from "./domains/conversations/conversations.module";
import { MessagesModule } from "./domains/messages/messages.module";
import { HashtagsModule } from "./domains/hashtags/hashtags.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Module } from "@nestjs/common";  
import { ShortVideosModule } from "./domains/short_videos/short_videos.module";
import { ShortVideoViewsModule } from "./domains/short_video_views/short_video_views.module";
import { MediasModule } from "./domains/medias/medias.module";
import { CommentsModule } from "./domains/comments/comments.module";
import { UserBlocksModule } from './domains/user_blocks/user_blocks.module';
import { PostHashtagsModule } from "./domains/post_hashtags/post_hashtags.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1235',
      database: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
    PostsModule,
    UserFollowersModule,
    LikesModule,
    CommentsModule,
    PostViewsModule,
    PostSharesModule,
    ShortVideosModule,
    ShortVideoViewsModule,
    MediasModule,
    NotificationsModule,
    ConversationsModule,
    MessagesModule,
    HashtagsModule,
    PostHashtagsModule,
    UserBlocksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
