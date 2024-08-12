import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesChannelsModule } from './sales-channels/sales-channels.module';
import { PrismaModule } from 'nestjs-prisma';
import { ConfigModule } from '@nestjs/config';
import { SalesInvoicesModule } from './sales-invoices/sales-invoices.module';
import { SalesBlsModule } from './sales-bls/sales-bls.module';
import { SalesBlfsModule } from './sales-blfs/sales-blfs.module';
import { BonComndsModule } from './bon-comnds/bon-comnds.module';
import { BonSortie } from './helpers/bonSortie';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../.env',
    }),
    PrismaModule.forRoot({ isGlobal: true }),SalesChannelsModule, SalesInvoicesModule, SalesBlsModule, SalesBlfsModule, BonComndsModule],
  controllers: [AppController],
  providers: [AppService,BonSortie],
})
export class AppModule {}
