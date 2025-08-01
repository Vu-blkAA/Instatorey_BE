import { TABLE_NAME } from "src/constants/table_name";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";
import { Conversation } from "./conversation.entity";
import { Media } from "./media.entity";

@Entity(TABLE_NAME.MESSAGE)
export class Message extends BaseEntity {
    @Column()
    content: string;
    
    @Column()
    isReadByRecipient: boolean;

    @ManyToOne(() => User, user => user.messages)
    user: User;

    @ManyToOne(() => Conversation, conversation => conversation.messages)
    conversation: Conversation;

    @OneToOne(() => Media, media => media.messages, {nullable: true, cascade: true})
    @JoinColumn({ name: 'media_id'})
    media: Media;
} 