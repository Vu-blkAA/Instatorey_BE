import { TABLE_NAME } from "src/constants/table_name";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";
import { ShortVideo } from "./short_video.entity";

@Entity(TABLE_NAME.SHORT_VIDEO_VIEW)
export class ShortVideoView extends BaseEntity {
    @Column()
    isSeen: boolean

    @ManyToOne(() => User, user => user.shortVideoViews)
    @JoinColumn({ name: 'user_id'})
    user: User

    @ManyToOne(() => ShortVideo, shortVideo => shortVideo.shortVideoViews)
    @JoinColumn({ name: 'short_video_id'})
    shortVideo: ShortVideo
} 