import { Module } from '@nestjs/common';
import { TransferNoteService } from './transfer-note.service';
import { TransferNoteController } from './transfer-note.controller';

@Module({
  controllers: [TransferNoteController],
  providers: [TransferNoteService],
})
export class TransferNoteModule {}
