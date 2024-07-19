import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MICROSERVICE') private readonly user_client: ClientProxy
  ) {}
  create(createUserDto: CreateUserDto) {
    const { name, email, password, phone } = createUserDto;
    return this.user_client.send(
      { cmd: 'register_user' },
      { name, email, password, phone },
    );
  }

  findAll() {
    return this.user_client.send(
      { cmd: 'get_users' },
       {}
      );
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
