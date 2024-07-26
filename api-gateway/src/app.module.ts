import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './modules/users/users.module';
// import { UsersModule } from './modules/users/users.module';
import { ArticlesModule } from './modules/articles/articles.module';

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
          name: 'USER_MICROSERVICE',
          transport: Transport.TCP,
          options: { port: 3005 },
        },
        {
          name: 'AUTH_MICROSERVICE',
          transport: Transport.TCP,
          options: { port: 3003 },
        },
        {
          name: 'ARTICLE_MICROSERVICE',
          transport: Transport.TCP,
          options: { port: 3006 },
        },
      ],
      isGlobal: true,
    }),
    AuthModule,
    UsersModule,
    PrismaModule.forRoot({ isGlobal: true }),
    ArticlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
