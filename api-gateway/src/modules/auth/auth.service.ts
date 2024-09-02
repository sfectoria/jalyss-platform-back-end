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

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return this.authClient.send(
      { cmd: 'update_auth' },
      { id, updateAuthDto },
    );
  }

  remove(id: number) {
    console.log('remove id:', id);
    return this.authClient.send({ cmd: 'delete_auth' }, { id });
  }
}
