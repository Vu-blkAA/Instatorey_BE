import { Hashtag } from "src/domains/hashtags/entities/hashtag.entity";
import { Post } from "src/domains/posts/entities/post.entity";
import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class PostHashtag {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    
    @ManyToOne(() => Post, post => post.postHashtags)
    post: Post

    @ManyToOne(() => Hashtag, hashtag => hashtag.postHashtags)
    hashtag: Hashtag
}
