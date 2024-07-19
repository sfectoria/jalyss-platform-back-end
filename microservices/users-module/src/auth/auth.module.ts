import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule, PrismaService } from 'nestjs-prisma';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule.forRoot({ isGlobal: true }),
    JwtModule.register({
      secret:"sfectoria",
      signOptions:{
        expiresIn:"120days"
      }
    }) 
  ],
  controllers: [AuthController],
  providers: [AuthService,PrismaService],
})
export class AuthModule {}

