import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
    }),
    ClientsModule.register({
      clients : [
      {
        name: 'USER_MICROSERVICE',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
      {
        name: 'AUTH_MICROSERVICE',
        transport: Transport.TCP,
        options: { port: 3003 },
      },
    ], 
    isGlobal: true,
  }),  
    AuthModule,
    UsersModule,
    PrismaModule.forRoot({isGlobal:true})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
