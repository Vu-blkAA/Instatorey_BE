import { Post } from "src/domains/posts/entities/post.entity";
import { User } from "src/domains/users/entities/user.entity";
import { TABLE_NAME } from "src/constants/table_name";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity(TABLE_NAME.POST_SHARE)
export class PostShare {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    sharedAt: Date;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, user => user.postShares)
    @JoinColumn({ name: 'user_id'})
    user: User

    @ManyToOne(() => Post, post => post.postShares)
    @JoinColumn({ name: 'post_id'})
    post: Post
}
