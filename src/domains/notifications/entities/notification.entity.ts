import { User } from "src/domains/users/entities/user.entity";
import { Notification_Enum, Notification_Object_Type_Enum } from "src/enums/notification.enum";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    type: Notification_Enum

    @Column()
    isSeen: boolean

    @Column()
    objectId: number

    @Column()
    objectType: Notification_Object_Type_Enum
    
    @ManyToOne(() => User, user => user.sentNotifications)
    @JoinColumn({ name: 'from_user_id'})
    fromUser: User

    @ManyToOne(() => User, user => user.receivedNotifications)
    @JoinColumn({ name: 'to_user_id'})
    toUser: User
}
