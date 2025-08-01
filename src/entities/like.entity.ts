import { TABLE_NAME } from "src/constants/table_name";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";
import { Post } from "./post.entity";
import { Comment } from "./comment.entity";

@Entity(TABLE_NAME.LIKE)
export class Like extends BaseEntity {
    @Column({default: false})
    isLiked: boolean;

    // Make sure that user and post or comment must be unique
    @ManyToOne(() => User, user => user.likes)
    @JoinColumn({ name: 'user_id'})
    user: User;

    // Noted that at least one of post or comment must be null (migration in Database)
    @ManyToOne(() => Post, post => post.likes, {nullable: true})
    @JoinColumn({ name: 'post_id'})
    post: Post;

    @ManyToOne(() => Comment, comment => comment.likes, {nullable: true})
    @JoinColumn({ name: 'comment_id'})
    comment: Comment;
} 