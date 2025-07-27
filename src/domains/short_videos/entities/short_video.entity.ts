import { Media } from "src/domains/medias/entities/media.entity";
import { ShortVideoView } from "src/domains/short_video_views/entities/short_video_view.entity";
import { User } from "src/domains/users/entities/user.entity";
import { Short_Video_Enum } from "src/enums/short_video.enum";
import { CreateDateColumn, Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn, JoinColumn, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class ShortVideo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    videoUrl: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn() 
    updatedAt: Date;

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
