import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
// import { CreateUserDto } from './create-user-dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  // @Post('register_user')
  // regiterUser(@Body() dto:CreateUserDto) {
  //   return this.appService.regiterUser(dto);
  // }
  @Get('get_user')
  getUser() {
    return this.appService.getUser();
  }
}
