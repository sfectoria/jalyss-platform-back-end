import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'nestjs-prisma';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { ClientsController } from './clients.controller';
import { CategoryClientsController } from './category_client.controller';
import { ClientsService } from './clients.service';
import { CategoryClientsService } from './category_client.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'sfectoria',
      signOptions: {
        expiresIn: '999days',
      },
    }),
    UsersModule,
  ],
  controllers: [AuthController,EmployeesController,ClientsController,CategoryClientsController],
  providers: [AuthService, JwtStrategy, UsersService,EmployeesService,ClientsService,CategoryClientsService],
})
export class AuthModule {}
