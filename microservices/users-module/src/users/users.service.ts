import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { UserEntity } from 'src/entities/entities';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async register(data: CreateUserDto) {
    const { password, ...rest } = data;
    const salt = await bcrypt.genSalt();
    const Hpass = await bcrypt.hashSync(password, salt);
    return await this.prisma.user.create({
      data: { ...rest, password: Hpass },
    });
  } 
  async findAll() {
    return await this.prisma.user.findMany(); 
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({ where: { id } }); 
  }

  async update(id: number, UpdateUserDto: UpdateUserDto) {
    return await this.prisma.user.update({ 
      where: { id },
      data: UpdateUserDto 
    }); 
  }

  async remove(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
