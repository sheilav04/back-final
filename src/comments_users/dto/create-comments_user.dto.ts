import { IsString } from "class-validator";
import { Review } from "src/reviews/entities/review.entity";
import { User } from "src/users/entities/user.entity";

export class CreateCommentsUserDto {
    
    @IsString()
    comment: string

    user: User
    
    review: Review

}
