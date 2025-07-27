import { Post } from "src/domains/posts/entities/post.entity";
import { User } from "src/domains/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class PostView {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    viewedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()     
    updatedAt: Date;

    @ManyToOne(() => User, user => user.postViews)
    @JoinColumn({ name: 'user_id'})
    user: User

    @ManyToOne(() => Post, post => post.postViews)
    @JoinColumn({ name: 'post_id'})
    post: Post
}
