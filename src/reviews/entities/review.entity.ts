import { Audit } from "src/audit/auditEntity";
import { Movie } from "src/movies/entities/movie.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('review')
export class Review extends Audit{
    @PrimaryGeneratedColumn('increment')
    id: string;
    
    @Column('text')
    title: string

    @Column('text')
    description: string

    @Column('int')
    rate: number

    //coments_from_users

    //user
    @ManyToOne(() => User, (user) => user.review)
    user: User

    @ManyToOne(() => Movie, (movie) => movie.review)
    movie: Movie
    //movie

}
