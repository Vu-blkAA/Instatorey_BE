import { Media_Enum } from "src/enums/media.enum";
import { TABLE_NAME } from "src/constants/table_name";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Message } from "./message.entity";
import { Post } from "./post.entity";
import { ShortVideo } from "./short_video.entity";
import { User } from "./user.entity";
import { Transform } from "class-transformer";

@Entity(TABLE_NAME.MEDIA)
export class Media extends BaseEntity {
    @Column({nullable: true})
    @Transform(({value}) => value ? `${process.env.AWS_ASSETS_PATH}/${value}` : null, { toPlainOnly: true })
    path: string;

    @Column({type: 'enum', enum: Media_Enum, default: Media_Enum.IMAGE})
    type: Media_Enum

    @Column({nullable: true, default: null})
    orderIndex: number

    @OneToOne(() => Message, message => message.media, {nullable: true})
    messages: Message

    @OneToOne(() => User, user => user.avatar, {nullable: true})
    user: User

    @ManyToOne(() => Post, post => post.medias, {nullable: true}) // check exist at least post_id or short_video_id
    @JoinColumn({ name: 'post_id'})
    post: Post 

    @ManyToOne(() => ShortVideo, shortVideo => shortVideo.medias, {nullable: true})
    @JoinColumn({ name: 'short_video_id'})
    shortVideo: ShortVideo
} 