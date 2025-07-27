import { Comment } from "src/domains/comments/entities/comment.entity";
import { Like } from "src/domains/likes/entities/like.entity";
import { Media } from "src/domains/medias/entities/media.entity";
import { PostHashtag } from "src/domains/post_hashtags/entities/post_hashtag.entity";
import { PostShare } from "src/domains/post_shares/entities/post_share.entity";
import { PostView } from "src/domains/post_views/entities/post_view.entity";
import { User } from "src/domains/users/entities/user.entity";
import { Post_Enum, Post_Visibility_Enum } from "src/enums/post.enum";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: Post_Enum

    @Column()
    caption: string;

    @Column()
    visibility: Post_Visibility_Enum

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

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
