import { Media_Enum } from "src/enums/media.enum";
import { TABLE_NAME } from "src/constants/table_name";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Message } from "./message.entity";
import { Post } from "./post.entity";
import { ShortVideo } from "./short_video.entity";

@Entity(TABLE_NAME.MEDIA)
export class Media extends BaseEntity {
    @Column({nullable: true})
    fileName: string;

    @Column()
    url: string;

    @Column()
    type: Media_Enum

    @Column({nullable: true})
    orderIndex: number

    @OneToOne(() => Message, message => message.media)
    messages: Message

    @ManyToOne(() => Post, post => post.medias, {nullable: true}) // check exist at least post_id or short_video_id
    @JoinColumn({ name: 'post_id'})
    post: Post 

    @ManyToOne(() => ShortVideo, shortVideo => shortVideo.medias, {nullable: true})
    @JoinColumn({ name: 'short_video_id'})
    shortVideo: ShortVideo
} 