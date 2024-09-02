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
  findMe(@Payload() user: any) {
    return user;  // Retourner l'utilisateur tel quel ou effectuer des traitements supplémentaires
  }
}
