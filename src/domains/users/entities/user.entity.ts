import { Comment } from "src/domains/comments/entities/comment.entity";
import { Like } from "src/domains/likes/entities/like.entity";
import { Notification } from "src/domains/notifications/entities/notification.entity";
import { PostShare } from "src/domains/post_shares/entities/post_share.entity";
import { PostView } from "src/domains/post_views/entities/post_view.entity";
import { Post } from "src/domains/posts/entities/post.entity";
import { ShortVideoView } from "src/domains/short_video_views/entities/short_video_view.entity";
import { ShortVideo } from "src/domains/short_videos/entities/short_video.entity";
import { UserBlock } from "src/domains/user_blocks/entities/user_block.entity";
import { UserFollower } from "src/domains/user_followers/entities/user_follower.entity";
import { Gender_Enum } from "src/enums/user.enum";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    avatarUrl: string;

    @Column()
    dob: Date;

    @Column()
    phoneNumber: string;
    
    @Column()
    email: string;

    @Column()
    gender: Gender_Enum

    @Column()
    bio: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column({default: true})
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({nullable: true})
    lastActiveAt: Date;

    // This user follows another user
    @OneToMany(() => UserFollower, userFollower => userFollower.follower)
    following: UserFollower[] 

    // Anyone follows this user
    @OneToMany(() => UserFollower, userFollower => userFollower.followed)
    followers: UserFollower[]

    // This user blocks another user
    @OneToMany(() => UserBlock, userBlock => userBlock.blocker)
    blocker: UserBlock[]

    // This user is blocked by another user
    @OneToMany(() => UserBlock, userBlock => userBlock.blocked)
    blocked: UserBlock[]

    @OneToMany(() => Post, post => post.user)
    posts: Post[]

    @OneToMany(() => Like, like => like.user)
    likes: Like[]

    @OneToMany(() => Comment, comment => comment.user)
    comments: Comment[]

    @OneToMany(() => PostView, postView => postView.user)
    postViews: PostView[]

    @OneToMany(() => PostShare, postShare => postShare.user)
    postShares: PostShare[]

    @OneToMany(() => ShortVideo, shortVideo => shortVideo.user)
    shortVideos: ShortVideo[]

    @OneToMany(() => ShortVideoView, shortVideoView => shortVideoView.user)
    shortVideoViews: ShortVideoView[]

    @OneToMany(() => Notification, notification => notification.fromUser)
    sentNotifications: Notification[]

    @OneToMany(() => Notification, notification => notification.toUser)
    receivedNotifications: Notification[]

    // @OneToMany(() => Conversation, conversation => conversation.startedBy)
    // conversations: Conversation[]



}
