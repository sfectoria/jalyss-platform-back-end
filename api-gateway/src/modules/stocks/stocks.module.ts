import { Module } from '@nestjs/common';
import { StocksService } from './stocks.service';
import { StocksController } from './stocks.controller';
import { ReceiptNoteController } from './receipt-note.controller';
import { ReceiptNoteService } from './receipt-note.service';
import { ExitNoteController } from './exit-note.controller';
import { ExitNoteService } from './exit-note.service';
import { TransferNoteController } from './transfer-note.controller';
import { TransferNoteService } from './transfer-note.service';
import { ReturnNoteController } from './return-note.controller';
import { ReturnNoteService } from './return-note.service';


@Module({
  controllers: [StocksController,ReceiptNoteController,ExitNoteController, TransferNoteController, ReturnNoteController],
  providers: [StocksService,ReceiptNoteService,ExitNoteService, TransferNoteService, ReturnNoteService]
})
export class StocksModule {}
