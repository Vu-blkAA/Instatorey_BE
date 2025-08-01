import { TABLE_NAME } from "src/constants/table_name";
import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { PostHashtag } from "./post_hashtag.entity";

@Entity(TABLE_NAME.HASHTAG)
export class Hashtag extends BaseEntity {
    @Column()
    name: string;

    @Column()
    count: number;

    @OneToMany(() => PostHashtag, postHashtag => postHashtag.hashtag)
    postHashtags: PostHashtag[]
} 