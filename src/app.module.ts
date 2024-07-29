import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MoviesModule } from './movies/movies.module';
import { ReviewsModule } from './reviews/reviews.module';
import { RolesModule } from './roles/roles.module';
import { LoginModule } from './login/login.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeConfig } from './config/TypeConfig';

@Module({
  imports: [TypeOrmModule.forRoot(typeConfig()),UsersModule, MoviesModule, ReviewsModule, RolesModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
