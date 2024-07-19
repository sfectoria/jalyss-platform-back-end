import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from 'nestjs-prisma';

import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './modules/users/users.module';
import { StocksModule } from './modules/stocks/stocks.module';

@Module({
  imports: [
    ClientsModule.register({
      clients : [
      {
        name: 'USER_MICROSERVICE',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
      {
        name: 'STOCKS_MICROSERVICE',
        transport: Transport.TCP,
        options: { port: 3003 },
      },
    ], 
    isGlobal: true,
  }),  
    AuthModule,
    PrismaModule.forRoot({ isGlobal: true }),
    UsersModule,
    StocksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
