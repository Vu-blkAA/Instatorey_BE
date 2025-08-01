import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import typeorm from "./config/typeorm";
import { CommentsModule } from "./domains/comments/comments.module";
import { ConversationsModule } from "./domains/conversations/conversations.module";
import { FilesModule } from "./domains/files/files.module";
import { HashtagsModule } from "./domains/hashtags/hashtags.module";
import { LikesModule } from "./domains/likes/likes.module";
import { MediasModule } from "./domains/medias/medias.module";
import { MessagesModule } from "./domains/messages/messages.module";
import { NotificationsModule } from "./domains/notifications/notifications.module";
import { PostHashtagsModule } from "./domains/post_hashtags/post_hashtags.module";
import { PostSharesModule } from "./domains/post_shares/post_shares.module";
import { PostViewsModule } from "./domains/post_views/post_views.module";
import { PostsModule } from "./domains/posts/posts.module";
import { ShortVideoViewsModule } from "./domains/short_video_views/short_video_views.module";
import { ShortVideosModule } from "./domains/short_videos/short_videos.module";
import { UserBlocksModule } from './domains/user_blocks/user_blocks.module';
import { UserFollowersModule } from "./domains/user_followers/user_followers.module";
import { UsersModule } from "./domains/users/users.module";
import { CoreModule } from "./core/core.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeorm],
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
     inject: [ConfigService],
     useFactory: async (configService: ConfigService) => configService.get('typeorm')!,
    }),
    CoreModule,
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
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
