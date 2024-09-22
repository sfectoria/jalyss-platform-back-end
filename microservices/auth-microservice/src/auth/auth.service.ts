import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(data: CreateAuthDto) {
    console.log(data, 'this is data');
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      // throw new HttpException('invalid email', HttpStatus.BAD_REQUEST);
      return 'invalid email';
    }
    const VPass = await bcrypt.compare(data.password, user.password);
    if (!VPass) {
      return 'invalid password';
    }
    const { password, ...Urest } = user;
    const token = await this.jwtService.signAsync(Urest);
    return token;
  }

  async findMe(token: string) {
    return await this.jwtService.decode(token);
  }


  async update(id: number, dto: UpdateAuthDto) {

    if (!dto) {
      throw new Error('DTO is undefined');
    }
    const { password, ...rest } = dto;

    const updateData: any = { ...rest };

    if (password) {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      updateData.password = hashedPassword;
    }

    return this.prisma.user.update({
      where: { id:id },
      data: updateData,
    });
  }


  async remove(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }
}
