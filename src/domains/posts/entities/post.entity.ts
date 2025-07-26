import { User } from "src/domains/users/entities/user.entity";
import { Post_Enum, Post_Visibility_Enum } from "src/enums/post.enum";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, user => user.posts)
    @JoinColumn({ name: 'user_id'})
    user: User

    @Column()
    type: Post_Enum

    @Column()
    caption: string;

    @Column()
    visibility: Post_Visibility_Enum

    @Column()
    createdAt: Date;

    @Column()
    updatedAt: Date;

    @Column()
    deletedAt: Date;
}
