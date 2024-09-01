import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'nestjs-prisma';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';

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
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UsersService],
})
export class AuthModule {}
