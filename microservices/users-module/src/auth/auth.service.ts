import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { PrismaService } from 'nestjs-prisma';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/entities/entities';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  regiter(data: UserEntity) {
    return { message: 'done', data };
  }

  async login(data: UserEntity) {
    console.log(data,'this is data')
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      // throw new HttpException('invalid email', HttpStatus.BAD_REQUEST);
      return "invalid email"
    }
    const VPass = await bcrypt.compare(data.password, user.password);
    if (!VPass) {
      return "invalid passwod"
      // throw new HttpException('invalid passwod', HttpStatus.BAD_GATEWAY);
    }
    const { password, ...Urest } = user;
    const token = await this.jwtService.signAsync(Urest);
    return token;
  }

  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
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
