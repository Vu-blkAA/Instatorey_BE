import { Short_Video_Enum } from "src/enums/short_video.enum";
import { TABLE_NAME } from "src/constants/table_name";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";
import { ShortVideoView } from "./short_video_view.entity";
import { Media } from "./media.entity";

@Entity(TABLE_NAME.SHORT_VIDEO)
export class ShortVideo extends BaseEntity {
    @Column()
    videoUrl: string;

    @Column()
    expiredAt: Date;

    @Column()
    type: Short_Video_Enum

    @ManyToOne(() => User, user => user.shortVideos)
    @JoinColumn({ name: 'user_id'})
    user: User

    @OneToMany(() => ShortVideoView, shortVideoView => shortVideoView.shortVideo)
    shortVideoViews: ShortVideoView[]

    @OneToMany(() => Media, media => media.shortVideo)
    medias: Media[]
} 