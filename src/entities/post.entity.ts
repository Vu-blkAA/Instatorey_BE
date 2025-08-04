import { Post_Enum, Post_Status_Enum, Post_Visibility_Enum } from "src/enums/post.enum";
import { TABLE_NAME } from "src/constants/table_name";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";
import { Like } from "./like.entity";
import { Comment } from "./comment.entity";
import { PostView } from "./post_view.entity";
import { PostShare } from "./post_share.entity";
import { Media } from "./media.entity";
import { PostHashtag } from "./post_hashtag.entity";

@Entity(TABLE_NAME.POST)
export class Post extends BaseEntity {
    @Column({ type: 'enum', enum: Post_Enum, default: Post_Enum.IMAGE})
    type: Post_Enum

    @Column({ nullable: true })
    caption: string;

    @Column({ type: 'enum', enum: Post_Visibility_Enum, default: Post_Visibility_Enum.PUBLIC})
    visibility: Post_Visibility_Enum

    @Column({ type: 'enum', enum: Post_Status_Enum, default: Post_Status_Enum.ENABLED })
    status: Post_Status_Enum;

    @Column({ nullable: true })
    deletedAt: Date;

    @ManyToOne(() => User, user => user.posts)
    @JoinColumn({ name: 'user_id'})
    user: User

    @OneToMany(() => Like, like => like.post)
    likes: Like[]

    @OneToMany(() => Comment, comment => comment.post)
    comments: Comment[]

    @OneToMany(() => PostView, postView => postView.post)
    postViews: PostView[]

    @OneToMany(() => PostShare, postShare => postShare.post)
    postShares: PostShare[]

    @OneToMany(() => Media, media => media.post)
    medias: Media[]

    @OneToMany(() => PostHashtag, postHashtag => postHashtag.post)
    postHashtags: PostHashtag[]
} 