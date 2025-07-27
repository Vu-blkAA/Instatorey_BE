import { PostHashtag } from "src/domains/post_hashtags/entities/post_hashtag.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
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
