import { Like } from "src/domains/likes/entities/like.entity";
import { Post } from "src/domains/posts/entities/post.entity";
import { User } from "src/domains/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

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
