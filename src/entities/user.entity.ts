import { Gender_Enum } from "src/enums/user.enum";
import { TABLE_NAME } from "src/constants/table_name";
import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { UserFollower } from "./user_follower.entity";
import { UserBlock } from "./user_block.entity";
import { Post } from "./post.entity";
import { Like } from "./like.entity";
import { Comment } from "./comment.entity";
import { PostView } from "./post_view.entity";
import { PostShare } from "./post_share.entity";
import { ShortVideo } from "./short_video.entity";
import { ShortVideoView } from "./short_video_view.entity";
import { Notification } from "./notification.entity";
import { Conversation } from "./conversation.entity";
import { Message } from "./message.entity";

@Entity(TABLE_NAME.USER)
export class User extends BaseEntity {
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

    @Column({nullable: true})
    lastActiveAt: Date;

    // This user follows another user
    @OneToMany(() => UserFollower, userFollower => userFollower.follower)
    following: UserFollower[] 

    // Anyone follows this user
    @OneToMany(() => UserFollower, userFollower => userFollower.followed)
    followers: UserFollower[]

    // This user blocks another user
    @OneToMany(() => UserBlock, userBlock => userBlock.blockBy)
    blockBy: UserBlock[]

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

    @OneToMany(() => Conversation, conversation => conversation.startedBy)
    startedConversations: Conversation[]

    @OneToMany(() => Conversation, conversation => conversation.receivedBy)
    receivedConversations: Conversation[]

    @OneToMany(() => Message, message => message.user)
    messages: Message[]
} 