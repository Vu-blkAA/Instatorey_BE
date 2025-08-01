import { TABLE_NAME } from "src/constants/table_name";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";
import { Post } from "./post.entity";
import { Like } from "./like.entity";

@Entity(TABLE_NAME.COMMENT)
export class Comment extends BaseEntity {
    @Column()
    content: string;

    @ManyToOne(() => User, user => user.comments)
    @JoinColumn({ name: 'user_id'})
    user: User

    @ManyToOne(() => Post, post => post.comments)
    @JoinColumn({ name: 'post_id'})
    post: Post

    @OneToMany(() => Comment, comment => comment.parentComment)
    replies: Comment[];

    @ManyToOne(() => Comment, comment => comment.replies)
    @JoinColumn({ name: 'parent_comment_id'})
    parentComment: Comment;

    @OneToMany(() => Like, like => like.comment)
    likes: Like[]
} 