import { Inject, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(
    // private readonly prisma: PrismaService,
    @Inject('AUTH_MICROSERVICE') private readonly authClient: ClientProxy,
  ) {}
  
  login(data: CreateAuthDto) {
    return this.authClient.send(
      { cmd: 'login' }, 
      data);
  }

  findMe(token: any) {
    return this.authClient.send({ cmd: 'me' }, token);
  }



  // regiter(data: CreateAuthDto) {
  //   return this.authClient.send({ cmd: 'register' }, data);
  // }
  // create(createAuthDto: CreateAuthDto) {
  //   return this.prisma.user.create({
  //     data: {
  //       name: 'khalil',
  //       email: 'khalil.kraiem@sfectoria.com',
  //       password: '123',
  //     },
  //   });
  // }

  // findAll() {
  //   return `This action returns all auth`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} auth`;
  // }

  // update(id: number, updateAuthDto: UpdateAuthDto) {
  //   return `This action updates a #${id} auth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} auth`;
  // }
}
