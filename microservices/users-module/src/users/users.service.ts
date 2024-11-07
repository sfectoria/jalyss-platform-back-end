import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { UserEntity } from 'src/entities/entities';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async register(dto: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email:dto.email },
    });

    if (existingUser) {
      return 'Email already exists';
    }

  
    const { password, ...rest } = dto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hashSync (password, salt);
    
    return await this.prisma.user.create({
     data: { ...rest, password: hashedPassword },
    });   
  } 


  async findAll() {
    return await this.prisma.user.findMany(); 
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({ where: { id } }); 
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { password, ...rest } = updateUserDto;

    const updateData: any = { ...rest };

    if (password) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      updateData.password = hashedPassword;
    }

    return this.prisma.user.update({
      where: { id },
      data: updateData,
    });
  }

  async remove(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
