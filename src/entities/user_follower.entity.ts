import { Follow_Status_Enum } from "src/enums/user.enum";
import { TABLE_NAME } from "src/constants/table_name";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";

@Entity(TABLE_NAME.USER_FOLLOWER)
export class UserFollower extends BaseEntity {
    @Column({
        type: 'enum',
        enum: Follow_Status_Enum,
        default: Follow_Status_Enum.PENDING
    })
    status: Follow_Status_Enum

    // This user follows another user
    @ManyToOne(() => User, user => user.following)
    @JoinColumn({ name: 'follower_user_id'})
    follower: User

    // This user is followed by another user 
    @ManyToOne(() => User, user => user.followers)
    @JoinColumn({ name: 'followed_user_id'})
    followed: User
} 