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
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';
@ApiTags('users')
@ApiSecurity('apiKey')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  register(@Payload() createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Payload() id: number) {
    return this.usersService.findOne(+id);
  }
  
  @Patch(':id')
  update(@Payload() data : {id: number, updateUserDto: UpdateUserDto}) {
    return this.usersService.update(data.id, data.updateUserDto);
  }

  @Delete(':id')
  remove(@Payload() id: number) {
    return this.usersService.remove(+id);
  }
}
