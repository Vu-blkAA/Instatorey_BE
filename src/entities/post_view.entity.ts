import { TABLE_NAME } from "src/constants/table_name";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";
import { Post } from "./post.entity";

@Entity(TABLE_NAME.POST_VIEW)
export class PostView extends BaseEntity {
    @Column()
    viewedAt: Date;

    @ManyToOne(() => User, user => user.postViews)
    @JoinColumn({ name: 'user_id'})
    user: User

    @ManyToOne(() => Post, post => post.postViews)
    @JoinColumn({ name: 'post_id'})
    post: Post
} 