import * as bcrypt from 'bcrypt';
import { Role } from "src/constants/role.enum";
import { TABLE_NAME } from "src/constants/table_name";
import { Gender_Enum } from "src/enums/user.enum";
import { BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Comment } from "./comment.entity";
import { Conversation } from "./conversation.entity";
import { Like } from "./like.entity";
import { Media } from "./media.entity";
import { Message } from "./message.entity";
import { Notification } from "./notification.entity";
import { Post } from "./post.entity";
import { PostShare } from "./post_share.entity";
import { PostView } from "./post_view.entity";
import { RefreshToken } from './refresh-token.entity';
import { ShortVideo } from "./short_video.entity";
import { ShortVideoView } from "./short_video_view.entity";
import { UserBlock } from "./user_block.entity";
import { UserFollower } from "./user_follower.entity";

@Entity(TABLE_NAME.USER)
export class User extends BaseEntity {
    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({type: 'date', nullable: true, default: null})
    dob: Date;

    @Column({ unique: true })
    phoneNumber: string;
    
    @Column({ unique: true })
    email: string;

    @Column({type: 'enum', enum: Role, nullable: true, default: Role.USER})
    role: Role;

    @Column({type: 'enum', enum: Gender_Enum, nullable: true, default: null})
    gender: Gender_Enum

    @Column({nullable: true, default: null})
    bio: string;

    @Column({ unique: true })
    username: string;

    @Column({ select: false })
    password: string; // how to hash password

    @Column({default: true, nullable: true})
    isActive: boolean;

    @Column({nullable: true, type: 'timestamptz'})
    lastActiveAt: Date;

    @OneToOne(() => Media, media => media.user, {nullable: true})
    @JoinColumn({ name: 'avatar_id'})
    avatar: Media

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

    @OneToMany(() => RefreshToken, refreshToken => refreshToken.user)
    refreshTokens: RefreshToken[]

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    async comparePassword(password: string) {
        console.log(this.password, 'this.password');
        console.log(password, 'password');
        return await bcrypt.compare(this.password, password);
    }
} 