import { Post } from "src/domains/posts/entities/post.entity";
import { UserFollower } from "src/domains/user_followers/entities/user_follower.entity";
import { Gender_Enum } from "src/enums/user.enum";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    avatarUrl: string;

    @Column()
    dob: Date;

    @Column()
    phoneNumber: string;
    
    @Column()
    email: string;

    @Column()
    gender: Gender_Enum

    @Column()
    bio: string;

    @Column()
    username: string;

    @Column()
    password: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({nullable: true})
    lastActiveAt: Date;

    // User_followers_fields
    @OneToMany(() => UserFollower, userFollower => userFollower.following)
    following: UserFollower[] 

    @OneToMany(() => UserFollower, userFollower => userFollower.followed)
    followed: UserFollower[]

    // User_posts_fields
    @OneToMany(() => Post, post => post.user)
    posts: Post[]
}
