import { User } from "src/domains/users/entities/user.entity";
import { Follow_Status_Enum } from "src/enums/user.enum";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class UserFollower {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, user => user.following)
    @JoinColumn({ name: 'following_user_id'})
    following: User

    @ManyToOne(() => User, user => user.followed)
    @JoinColumn({ name: 'followed_user_id'})
    followed: User

    @Column({
        type: 'enum',
        enum: Follow_Status_Enum,
        default: Follow_Status_Enum.PENDING
    })
    status: Follow_Status_Enum

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
