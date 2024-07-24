import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesChannelsModule } from './sales-channels/sales-channels.module';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule.forRoot({ isGlobal: true }),SalesChannelsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
