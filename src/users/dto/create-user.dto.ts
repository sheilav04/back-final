import { IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, MinLength } from "class-validator"
import { CommentsUser } from "src/comments_users/entities/comments_user.entity";
import { Review } from "src/reviews/entities/review.entity";
import { Role } from "src/roles/entities/role.entity";

export class CreateUserDto {
    @IsString()
    username: string

    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @MinLength(6)
    password: string

    @IsNumber()
    role: Role;

    @IsNumber()
    comments_user: CommentsUser
}
