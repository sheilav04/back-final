import { Mask } from "src/mask/maskEntity";
import { Role } from "src/roles/entities/role.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User extends Mask{
    @Column('text')
    username: string

    @Column('text')
    email: string

    @Column('text')
    password: string

    //reviews:

    @ManyToOne(() => Role, (role) => role.user)
    role: Role
}
