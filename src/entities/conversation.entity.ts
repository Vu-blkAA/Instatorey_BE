import { TABLE_NAME } from "src/constants/table_name";
import { Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Message } from "./message.entity";
import { User } from "./user.entity";

@Entity(TABLE_NAME.CONVERSATION)
export class Conversation extends BaseEntity {
    @OneToMany(() => Message, message => message.conversation)
    messages: Message[]

    @ManyToOne(() => User, user => user.startedConversations)
    @JoinColumn({ name: 'start_user_id'})
    startedBy: User

    @ManyToOne(() => User, user => user.receivedConversations)
    @JoinColumn({ name: 'received_user_id'})
    receivedBy: User
} 