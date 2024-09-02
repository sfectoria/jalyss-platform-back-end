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
import { AuthGuard } from '@nestjs/passport';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './auth.guard';
import { UpdateAuthDto } from './dto/update-auth.dto';
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('login')
  async login(@Body() CreateUserDto: CreateAuthDto) {
    console.log(`User ${CreateUserDto.email} successfully logged in.`);
    return this.authService.login(CreateUserDto);
  }
  
  @ApiSecurity('apiKey')
  @UseGuards(JwtAuthGuard)
  @Get('me')
  findMe(@Request() req: any) {    
  
    return this.authService.findMe(req.user);
  }
  


  @ApiSecurity('apiKey')
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateAuthDto) {
    return this.authService.update(+id, dto);
  }

  @ApiSecurity('apiKey')
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.authService.remove(+id);
  }

}
