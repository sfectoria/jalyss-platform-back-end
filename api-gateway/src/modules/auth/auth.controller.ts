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

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('login')
  async login(@Body() CreateUserDto: CreateAuthDto) {
    console.log(CreateUserDto,"this is bodyy")
    const user: User = await lastValueFrom(this.authService.login(CreateUserDto), {
      defaultValue: undefined,
    });
    if (!user) {
      // throw new BadRequestException('Invalid credentials');
    }

    const isMatch = user.password === CreateUserDto.password;
    if (!isMatch) {
      // throw new BadRequestException('Incorrect password');
    }

    console.log(`User ${user.email} successfully logged in.`);

    return user;
  }
  
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  myInfo(@Request() req: any) {    
    return req.user;
  }

  // @Post('register')
  // regiter(@Body() dto: CreateUserDto) {
  //   return this.authService.regiter(dto);
  // }
  

  // @Post()
  // create(@Body() createAuthDto: CreateAuthDto) {
  //   return this.authService.create(createAuthDto);
  // }

  @Get()
  l(){
    return"this "
  }
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
