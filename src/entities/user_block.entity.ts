import { Block_Status_Enum } from "src/enums/user.enum";
import { TABLE_NAME } from "src/constants/table_name";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";

@Entity(TABLE_NAME.USER_BLOCK)
export class UserBlock extends BaseEntity {
    @Column({
        type: 'enum',
        enum: Block_Status_Enum,
        default: Block_Status_Enum.BLOCKED
    })
    status: Block_Status_Enum

    @ManyToOne(() => User, user => user.blockBy)
    @JoinColumn({ name: 'blocker_user_id'})
    blockBy: User

    @ManyToOne(() => User, user => user.blocked)
    @JoinColumn({ name: 'blocked_user_id'})
    blocked: User
} 