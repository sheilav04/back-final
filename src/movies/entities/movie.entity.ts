import { Audit } from "src/audit/auditEntity";
import { MoviesGenre } from "src/movies_genres/entities/movies_genre.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Movie extends Audit{
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column('text')
    title: string

    @Column('text')
    description: string

    @Column('int')
    release_date: number

    @OneToMany(() => MoviesGenre, (moviesGenre) => moviesGenre.movie)
    moviesGenre: MoviesGenre[]

    //review

    //imagen
}
