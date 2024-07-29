import { IsEmail, IsNumber, IsString, IsUUID } from "class-validator"
import { Role } from "src/roles/entities/role.entity";

export class CreateUserDto {
    @IsString()
    username: string

    @IsEmail()
    email: string

    @IsString()
    password: string

    @IsNumber()
    role: Role;

    //reviews:
}
