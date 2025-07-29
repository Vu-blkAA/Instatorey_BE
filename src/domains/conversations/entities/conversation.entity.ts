import { Message } from "src/domains/messages/entities/message.entity";
import { User } from "src/domains/users/entities/user.entity";
import { TABLE_NAME } from "src/constants/table_name";
import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity(TABLE_NAME.CONVERSATION)
export class Conversation {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Message, message => message.conversation)
    messages: Message[]

    @ManyToOne(() => User, user => user.startedConversations)
    @JoinColumn({ name: 'start_user_id'})
    startedBy: User

    @ManyToOne(() => User, user => user.receivedConversations)
    @JoinColumn({ name: 'received_user_id'})
    receivedBy: User
}
