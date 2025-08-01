import { Notification_Enum, Notification_Object_Type_Enum } from "src/enums/notification.enum";
import { TABLE_NAME } from "src/constants/table_name";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";

@Entity(TABLE_NAME.NOTIFICATION)
export class Notification extends BaseEntity {
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