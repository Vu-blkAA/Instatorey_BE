import { User } from "src/domains/users/entities/user.entity";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Conversation {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    // @ManyToOne(() => User, user => user.conversations)
    // @JoinColumn({ name: 'user_1_id'})
    // startedBy: User

    // @ManyToOne(() => User, user => user.conversations)
    // @JoinColumn({ name: 'user_2_id'})
    // receivedBy: User
}
