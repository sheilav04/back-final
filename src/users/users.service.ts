import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { hashPassword } from 'src/common/utils/hashPassword.utils';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>
  ){}

  //async create_user(data_user: CreateUserDto) {
  //  const new_user: CreateUserDto = this.userRepository.create(data_user)
  //  return await this.userRepository.save(new_user)
  //}

  //create for login, with hashed password
  async create(createUser: CreateUserDto){
    const checkEmailExistence = await this.userRepository.findOne({where: {email: createUser.email}})
    if(checkEmailExistence){
      throw new HttpException('The user already exists', HttpStatus.CONFLICT)
    }

    const securePass = await hashPassword(createUser.password)

    const finalUser : CreateUserDto = this.userRepository.create({...createUser, password: securePass})
    return await this.userRepository.save(finalUser)
  }

  async get_users() {
    return await this.userRepository.find({ relations: {role: true}})
  }

  async findOne(input_id: string) {
    return await this.userRepository.findOne({where: {id : input_id}})
  }

  //fun for the login
  async findOneByEmail(email: string){
    return await this.userRepository.findOneBy({email})
  }

  async update(input_id: string, update_data: UpdateUserDto) {
    await this.userRepository.update({id: input_id}, update_data)
    return {
      message: "the update was ok"
    }
  }

  async remove(input_id: string) {
    const to_delete = await this.userRepository.findOne({where: {id: input_id}})
    return await this.userRepository.softRemove(to_delete)
  }
}
