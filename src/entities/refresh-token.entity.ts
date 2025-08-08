import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { User } from "./user.entity";
import { TABLE_NAME } from "src/constants/table_name";


@Entity(TABLE_NAME.REFRESH_TOKEN)
export class RefreshToken extends BaseEntity {
    @Column({ type: 'varchar', length: 255 })
    refreshToken: string;

    @ManyToOne(() => User, user => user.refreshTokens) 
    @JoinColumn({ name: 'user_id'})
    user: User
    
    @Column({ type: 'boolean', default: false})
    revoked: boolean;
    
    @Column({ type: 'boolean', default: false})
    isExpired: boolean;

    @Column({ type: 'timestamptz'})
    expiresAt: Date;
}