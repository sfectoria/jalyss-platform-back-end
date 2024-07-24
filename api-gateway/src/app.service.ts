import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { PrismaService } from 'nestjs-prisma';
// import { CreateUserDto } from './create-user-dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER_MICROSERVICE') private readonly userClient: ClientProxy,
    private readonly prisma: PrismaService,
  ) {}
  getHello(): string {
    return 'hello Jalyss API-GATEWAY';
  }
  // regiterUser(data:CreateUserDto) {
  //   return this.userClient.send({ cmd: 'register_user' }, data);
  // }
  getUser() {
    return this.userClient.send({ cmd: 'get_user' }, {});
  }
}
