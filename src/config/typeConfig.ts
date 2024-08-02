import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeConfig = (): TypeOrmModuleOptions => {
 return{
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Bootcamp052024',
    database: 'db_final',
    entities: ['dist/**/*.entity.{ts,js}'],
    synchronize: true,
 }
}