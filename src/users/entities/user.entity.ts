
import { Audit } from "src/audit/auditEntity";
import { Review } from "src/reviews/entities/review.entity";
import { Role } from "src/roles/entities/role.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

@Entity('user')
export class User extends Audit{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    username: string

    @Column('text')
    email: string

    @Column('text')
    password: string

    //reviews:

    @ManyToOne(() => Role, (role) => role.user)
    role: Role

    @OneToMany(() => Review, (review) => review.user)
    review: Review;
    
}
