import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService, ) {}
    @MessagePattern({ cmd: 'register_user' })
    async registerUser(@Payload() message: any): Promise<any> {
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(message.password, salt);
    // const bodyData: any = {
    //   name: message.name,
    //   email: message.email,
    //   password: hashedPassword,
    //   phone: message.phone
    // };
    return await this.userService.create(message);
  }
  @MessagePattern({ cmd: 'get_users' })
  async getUsers() {
    return await this.userService.findAll();
  }
}

