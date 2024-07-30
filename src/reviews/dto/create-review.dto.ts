import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsOptional, IsString, Length, Min, MinLength } from "class-validator"
import { Movie } from "src/movies/entities/movie.entity"
import { User } from "src/users/entities/user.entity"

export class CreateReviewDto {
    
    @ApiProperty()
    @IsString()
    //@Length(600)
    title: string

    @ApiProperty()
    @IsString()
    //@Length(600)
    description: string

    //estrellita en valor numerico
    @ApiProperty()
    @IsNumber()
    rate: number

    //movie
    @IsOptional()
    movie?: Movie

    @IsOptional()
    user?: User


    //coments_from_users
}
