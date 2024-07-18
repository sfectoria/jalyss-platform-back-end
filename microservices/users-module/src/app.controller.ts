import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserEntity } from './entities/entities';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @MessagePattern({ cmd: 'register_user' })
  resiterUser(@Payload() data:UserEntity) {
    return this.appService.regiterUser(data);
  }
  @MessagePattern({ cmd: 'get_user' })
 // @Get('get_user')
  getUser(@Payload() data:any={}) {
    return this.appService.getUsers();
  }
}
