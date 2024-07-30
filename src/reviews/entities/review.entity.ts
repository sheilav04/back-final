import { Audit } from "src/audit/auditEntity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('review')
export class Review extends Audit{
    @PrimaryGeneratedColumn('uuid')
    id: string;
    //movie

    @Column('text')
    title: string

    @Column('text')
    comment: string

    @Column('int')
    rates: number

    //comments

    @OneToMany(() => User, (user) => user.review)
    user: User
    //user
}
