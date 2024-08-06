import { ClientsModule, Transport } from "@nestjs/microservices";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { Module } from "@nestjs/common";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_MICROSERVICE',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UserModule {}