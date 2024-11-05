import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
// import { UserEntity } from 'src/entities/entities';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'login' })
  login(@Payload() data: CreateAuthDto) {
    return this.authService.login(data);
  }
  @MessagePattern({ cmd: 'me' })
  findMe(@Payload() user: string) {
    return user; 
  }

  @MessagePattern({ cmd: 'update_auth' })
  async update(@Payload() data: { id: number, dto: UpdateAuthDto }) {
    console.log('Received data:', data);
    return await this.authService.update(data.id, data.dto);
  }

  @MessagePattern({ cmd: 'delete_auth' })
  async remove(@Payload('id') id: number ) {
    return await this.authService.remove(id);
  }

  @MessagePattern({ cmd: 'verify_password' })
  async verifyPassword(@Payload() data: {id: number, dto: UpdateAuthDto}) {
    return await this.authService.verifyPassword(data.id, data.dto);
  }
}
