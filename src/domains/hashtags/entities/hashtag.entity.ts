import { PostHashtag } from "src/domains/post_hashtags/entities/post_hashtag.entity";
import { TABLE_NAME } from "src/constants/table_name";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity(TABLE_NAME.HASHTAG)
export class Hashtag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    count: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => PostHashtag, postHashtag => postHashtag.hashtag)
    postHashtags: PostHashtag[]
}
