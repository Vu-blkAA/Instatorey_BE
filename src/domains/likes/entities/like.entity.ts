import { Post } from "src/domains/posts/entities/post.entity";
import { User } from "src/domains/users/entities/user.entity";
import { Comment } from "src/domains/comments/entities/comment.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Like {
    @PrimaryGeneratedColumn()
    id: number;

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
    
    @Column({default: false})
    isLiked: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
