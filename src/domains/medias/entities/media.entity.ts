import { Post } from "src/domains/posts/entities/post.entity";
import { ShortVideo } from "src/domains/short_videos/entities/short_video.entity";
import { Media_Enum } from "src/enums/media.enum";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Media {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column()
    type: Media_Enum

    @Column({nullable: true})
    orderIndex: number

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => Post, post => post.medias) // check exist at least post_id or short_video_id
    @JoinColumn({ name: 'post_id'})
    post: Post 

    @ManyToOne(() => ShortVideo, shortVideo => shortVideo.medias)
    @JoinColumn({ name: 'short_video_id'})
    shortVideo: ShortVideo
}
