import { Mask } from "src/mask/maskEntity";
import { Column, Entity } from "typeorm";

@Entity()
export class Movie extends Mask{
    @Column('text')
    title: string

    @Column('text')
    genre: string

    @Column('int')
    release_date: number

    //review

    //imagen
}
