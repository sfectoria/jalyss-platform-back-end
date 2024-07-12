import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  create(createAuthDto: CreateAuthDto) {
    return this.prisma.user.create({
      data: { name: 'khalil', email: 'khalil.kraiem@sfectoria.com' },
    });
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
