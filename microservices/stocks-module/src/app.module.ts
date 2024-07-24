import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { StocksModule } from './modules/stocks/stocks.module';
import { BonReceptionsModule } from './modules/bon-receptions/bon-receptions.module';
import { BonSortiesModule } from './modules/bon-sorties/bon-sorties.module';
import { BonTransfersModule } from './modules/bon-transfers/bon-transfers.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    PrismaModule.forRoot({ isGlobal: true }),StocksModule, BonReceptionsModule,BonSortiesModule, BonTransfersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
