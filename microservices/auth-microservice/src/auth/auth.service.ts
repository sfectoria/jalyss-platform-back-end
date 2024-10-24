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
    console.log("token", Urest)
    console.log(     this.jwtService.decode(token));
    return token;
  }
  

  async findMe(token: string) {
    console.log("token", token)
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

  async verifyPassword(id: number, dto: UpdateAuthDto): Promise<string> {
    console.log("hhhhhhhhhhh")
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
  
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  console.log("user",user)
  const { password, ...rest } = dto;

  console.log(typeof(password))
  console.log(password)
    if (typeof password !== 'string' || typeof user.password !== 'string') {
      throw new HttpException('Invalid password or user data', HttpStatus.BAD_REQUEST);
    }
  console.log("password", password);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return 'invalid password';
    }
  
    return 'valid password';
  }
  
}
