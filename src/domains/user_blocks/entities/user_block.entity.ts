import { User } from "src/domains/users/entities/user.entity";
import { Block_Status_Enum } from "src/enums/user.enum";
import { TABLE_NAME } from "src/constants/table_name";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity(TABLE_NAME.USER_BLOCK)
export class UserBlock {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'enum',
        enum: Block_Status_Enum,
        default: Block_Status_Enum.BLOCKED
    })
    status: Block_Status_Enum
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    
    @ManyToOne(() => User, user => user.blockBy)
    @JoinColumn({ name: 'blocker_user_id'})
    blockBy: User

    @ManyToOne(() => User, user => user.blocked)
    @JoinColumn({ name: 'blocked_user_id'})
    blocked: User
}
