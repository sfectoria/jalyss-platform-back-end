import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
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
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(+id);
  }

  @MessagePattern({ cmd: 'update_user' })
  async update(@Param('id') id: string, @Body() UpdateUserDto: UpdateUserDto) {
    return await this.usersService.update(+id, UpdateUserDto);
  }

  @MessagePattern({ cmd: 'delete_user' })
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(+id);
  }
}
