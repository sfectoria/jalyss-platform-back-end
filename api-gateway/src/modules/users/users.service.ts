import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MICROSERVICE') private readonly userClient: ClientProxy,
  ) {}

  register(data:CreateUserDto) {
    return this.userClient.send(
      { cmd: 'register' }, 
      data);
  }

  
  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // } 

  findAll() {
    return this.userClient.send(
      { cmd: 'all_user' },
      {}
    );    }

  findOne(id: number) {
    return this.userClient.send(
      { cmd: 'getOne_user' },
      {id}
    );
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userClient.send(
      { cmd: 'update_user' },
      {id, updateUserDto}
    )
    }

  remove(id: number) {
    return this.userClient.send(
      { cmd: 'delete_user' },
      {id}
    )  }
}
