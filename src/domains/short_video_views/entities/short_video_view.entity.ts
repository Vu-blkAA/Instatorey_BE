import { Column, Entity } from "typeorm";

import { User } from "src/domains/users/entities/user.entity";
import { CreateDateColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ShortVideo } from "src/domains/short_videos/entities/short_video.entity";
import { TABLE_NAME } from "src/constants/table_name";

@Entity(TABLE_NAME.SHORT_VIDEO_VIEW)
export class ShortVideoView {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    isSeen: boolean

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    
    @ManyToOne(() => User, user => user.shortVideoViews)
    @JoinColumn({ name: 'user_id'})
    user: User

    @ManyToOne(() => ShortVideo, shortVideo => shortVideo.shortVideoViews)
    @JoinColumn({ name: 'short_video_id'})
    shortVideo: ShortVideo
}
