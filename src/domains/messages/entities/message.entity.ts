import { Conversation } from "src/domains/conversations/entities/conversation.entity";
import { Media } from "src/domains/medias/entities/media.entity";
import { User } from "src/domains/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    content: string;
    
    @Column()
    isReadByRecipient: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, user => user.messages)
    user: User;

    @ManyToOne(() => Conversation, conversation => conversation.messages)
    conversation: Conversation;

    @OneToOne(() => Media, media => media.messages, {nullable: true, cascade: true})
    @JoinColumn({ name: 'media_id'})
    media: Media;
    
}
