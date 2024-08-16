import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'nestjs-prisma';
import { StocksModule } from './modules/stocks/stocks.module';
import {  ReceiptNoteModule } from './modules/receipt-note/receipt-note.module';
import { ExitNoteModule } from './modules/exit-note/exit-note.module';
import { TransferNoteModule } from './modules/transfer-note/transfer-note.module';
import {  ReturnNoteModule } from './modules/return-note/return-note.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../../.env',
    }),
    PrismaModule.forRoot({ isGlobal: true }),StocksModule, ReceiptNoteModule,ExitNoteModule, TransferNoteModule, ReturnNoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
