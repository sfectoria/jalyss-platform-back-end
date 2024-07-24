import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'nestjs-prisma';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  // imports: [
  //   ClientsModule.register([
  //     {
  //       name: 'USER_MICROSERVICE',
  //       transport: Transport.TCP,
  //       options: { port: 3001 },
  //     },
  //   ]),
  //   PrismaModule.forRoot({ isGlobal: true }),
  // ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
