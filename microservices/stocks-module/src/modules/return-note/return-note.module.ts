import { Module } from '@nestjs/common';
import { ReturnNoteService } from './return-note.service';
import { ReturnNoteController } from './return-note.controller';
import { ReceiptNoteHelper } from 'src/helpers/ExitAndReceiptNote';

@Module({
  controllers: [ReturnNoteController],
  providers: [ReturnNoteService,ReceiptNoteHelper],
})
export class ReturnNoteModule {}
