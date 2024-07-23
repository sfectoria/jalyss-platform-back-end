import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from 'nestjs-prisma';

import { ClientsModule, Transport } from '@nestjs/microservices';
// import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',  // Adjust the relative path to the .env file
    }),
    ClientsModule.register({
      clients: [
        {
          name: 'USER_MICROSERVICE',
          transport: Transport.TCP,
          options: { port: 3001 },
        },
      ],
      isGlobal: true,
    }),

    AuthModule,
    PrismaModule.forRoot({ isGlobal: true }),
    // UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
