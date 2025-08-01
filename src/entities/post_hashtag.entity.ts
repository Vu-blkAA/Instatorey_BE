import { TABLE_NAME } from "src/constants/table_name";
import { Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Post } from "./post.entity";
import { Hashtag } from "./hashtag.entity";

@Entity(TABLE_NAME.POST_HASHTAG)
export class PostHashtag extends BaseEntity {
    @ManyToOne(() => Post, post => post.postHashtags)
    post: Post

    @ManyToOne(() => Hashtag, hashtag => hashtag.postHashtags)
    hashtag: Hashtag
} 