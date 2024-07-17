import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { UserEntity } from './entities/entities';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}
  getHello(): string {
    return 'Hello World!';
  }
  regiterUser(data: UserEntity) {
    return { message: 'done', data };
  }
  getUsers() {
    return { message: 'done' };
  }
}
