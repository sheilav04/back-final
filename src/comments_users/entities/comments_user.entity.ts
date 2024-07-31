import { Audit } from "src/audit/auditEntity";
import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('comment-user')
export class CommentsUser extends Audit{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column('text')
    comment: string    

    //id_user
    @OneToMany(() => User, (user) => user.comments_user)
    user: User;

    //id_review
    @OneToMany(() => Review, (review) => review.comments_user)
    review: Review;
}

//review_user