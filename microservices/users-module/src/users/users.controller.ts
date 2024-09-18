import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserEntity } from 'src/entities/entities';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern({ cmd: 'register' })
  register(@Payload() data: CreateUserDto) {
    return this.usersService.register(data);
  }

  @MessagePattern({ cmd: 'all_user' })
  async findAll() {
    return await this.usersService.findAll();
  }

  @MessagePattern({ cmd: 'getOne_user' })
  async findOne(@Payload('id') id: number) {
    return await this.usersService.findOne(id);
  }

  @MessagePattern({ cmd: 'update_user' })
  async update(@Payload() data:{id: number,  updateUserDto: UpdateUserDto }) {
    return await this.usersService.update(data.id, data.updateUserDto);
  }

  @MessagePattern({ cmd: 'delete_user' })
  async remove(@Payload('id') id: number) {
    return await this.usersService.remove(id);
  }
}
