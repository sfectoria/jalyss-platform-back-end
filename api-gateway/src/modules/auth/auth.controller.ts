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
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  
  @Post('login')
  async login(@Body() CreateUserDto: CreateAuthDto) {
    console.log(`User ${CreateUserDto.email} successfully logged in.`);
    return this.authService.login(CreateUserDto);
  }
  
  @ApiSecurity('apiKey') //logo cadna
  @UseGuards(JwtAuthGuard)
  @Get('me')
  findMe(@Request() req: any) {    
    return this.authService.findMe(req.user);

  }



  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
  //   return this.authService.update(+id, updateAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.authService.remove(+id);
  // }
}
