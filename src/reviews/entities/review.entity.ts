import { Audit } from "src/audit/auditEntity";
import { CommentsUser } from "src/comments_users/entities/comments_user.entity";
import { Movie } from "src/movies/entities/movie.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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

    //user
    @ManyToOne(() => User, (user) => user.review)
    user: User

    //movie
    @ManyToOne(() => Movie, (movie) => movie.review, {onDelete: 'CASCADE'})
    movie: Movie
    
    //comments_user
    @ManyToOne(() => CommentsUser, (comments_user) => comments_user.user, {onDelete: 'CASCADE'})
    comments_user: CommentsUser

}
