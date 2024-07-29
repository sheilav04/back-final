import { Mask } from "src/mask/maskEntity";
import { Column } from "typeorm";

export class Review extends Mask{
    //movie

    //user

    @Column('text')
    title: string

    @Column('text')
    comment: string

    @Column('number')
    rates: number

    //comments
}
