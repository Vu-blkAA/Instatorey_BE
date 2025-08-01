import { TABLE_NAME } from "src/constants/table_name";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";
import { Post } from "./post.entity";

@Entity(TABLE_NAME.POST_SHARE)
export class PostShare extends BaseEntity {
    @Column()
    sharedAt: Date;

    @ManyToOne(() => User, user => user.postShares)
    @JoinColumn({ name: 'user_id'})
    user: User

    @ManyToOne(() => Post, post => post.postShares)
    @JoinColumn({ name: 'post_id'})
    post: Post
} 