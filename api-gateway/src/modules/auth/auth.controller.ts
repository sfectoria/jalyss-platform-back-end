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
import { AuthGuard } from '@nestjs/passport';
import { lastValueFrom } from 'rxjs';
import { User } from '../users/entities/user.entity';
import { ApiTags } from '@nestjs/swagger';
import { Payload } from '@nestjs/microservices';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('login')
  async login(@Payload() CreateUserDto: CreateAuthDto) {
    console.log(`User ${CreateUserDto.email} successfully logged in.`);
    return this.authService.login(CreateUserDto);
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  myInfo(@Request() req: any) {    
    return this.authService.me(req.user);

  }

  // @Post('register')
  // regiter(@Body() dto: CreateUserDto) {
  //   return this.authService.regiter(dto);
  // }
  

  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }

  // @Get()
  // l(){
  //   return"this "
  // }
  // findAll() {
  //   return this.authService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
