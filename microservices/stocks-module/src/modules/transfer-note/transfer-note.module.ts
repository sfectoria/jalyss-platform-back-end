import { Module } from '@nestjs/common';
import { TransferNoteService } from './transfer-note.service';
import { TransferNoteController } from './transfer-note.controller';
import { ExitNoteHelper, ReceiptNoteHelper } from 'src/helpers/ExitAndReceiptNote';

@Module({
  controllers: [TransferNoteController],
  providers: [TransferNoteService,ReceiptNoteHelper,ExitNoteHelper],
})
export class TransferNoteModule {}
