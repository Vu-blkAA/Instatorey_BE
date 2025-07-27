import { User } from "src/domains/users/entities/user.entity";
import { Block_Status_Enum } from "src/enums/user.enum";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
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
    
    @ManyToOne(() => User, user => user.blocker)
    @JoinColumn({ name: 'blocker_user_id'})
    blocker: User

    @ManyToOne(() => User, user => user.blocked)
    @JoinColumn({ name: 'blocked_user_id'})
    blocked: User
}
