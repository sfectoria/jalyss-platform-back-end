import { Module } from '@nestjs/common';
import { ReceiptNoteService } from './receipt-note.service';
import {  ReceiptNoteController } from './receipt-note.controller';
import { ReceiptNote } from './entities/receipt-note.entity';

@Module({
  controllers: [ReceiptNoteController],
  providers: [ReceiptNoteService],
})
export class ReceiptNoteModule {}
