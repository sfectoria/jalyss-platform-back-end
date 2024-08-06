import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from 'nestjs-prisma';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './modules/users/users.module';
// import { UsersModule } from './modules/users/users.module';
import { ArticlesModule } from './modules/articles/articles.module';
import { ClientModule } from './modules/clients/clients.module';
import { StocksModule } from './modules/stocks/stocks.module';
import { ConfigModule } from '@nestjs/config';
import { SellingModule } from './modules/selling/selling.module';
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
      clients: [
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
        {
          name: 'USER_MICROSERVICE',
          transport: Transport.TCP,
          options: { port: 3001 },
        },
        {
          name: 'AUTH_MICROSERVICE',
          transport: Transport.TCP,
          options: { port: 3004 },
        },
        {
          name: 'ARTICLE_MICROSERVICE',
          transport: Transport.TCP,
          options: { port: 3006 },
        },
        {
          name: 'CLIENT_MICROSERVICE',
          transport: Transport.TCP,
          options: { port: 3009 },
        },
      ],
      isGlobal: true,
    }),
    UsersModule,
    AuthModule,
    ArticlesModule,
    ClientModule,
    StocksModule,
    SellingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
