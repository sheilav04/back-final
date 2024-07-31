import { IsNumber, IsString } from "class-validator"
import { Genre } from "src/genres/entities/genre.entity"
import { MoviesGenre } from "src/movies_genres/entities/movies_genre.entity"

export class CreateMovieDto {
    @IsString()
    title: string

    //@IsArray()
    genre: Genre

    @IsNumber()
    release_date: number

    @IsString()
    image: string

    moviesGenre: MoviesGenre[]
}