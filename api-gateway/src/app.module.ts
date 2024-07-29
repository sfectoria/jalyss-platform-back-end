import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from 'nestjs-prisma';

import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './modules/users/users.module';
import { StocksModule } from './modules/stocks/stocks.module';
import { ConfigModule } from '@nestjs/config';
import { SellingModule } from './modules/selling/selling.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
    }),
    ClientsModule.register({
      clients: [
        {
          name: 'USER_MICROSERVICE',
          transport: Transport.TCP,
          options: { port: 3001 },
        },
        {
          name: 'SELLING_MICROSERVICE',
          transport: Transport.TCP,
          options: { port: 3002 },
        },
        {
          name: 'STOCKS_MICROSERVICE',
          transport: Transport.TCP,
          options: { port: 3003 },
        },
      ],
      isGlobal: true,
    }),
    PrismaModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    StocksModule,
    SellingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
