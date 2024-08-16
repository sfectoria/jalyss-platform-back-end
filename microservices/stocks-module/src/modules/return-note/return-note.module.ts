import { Module } from '@nestjs/common';
import { ReturnNoteService } from './return-note.service';
import { ReturnNoteController } from './return-note.controller';

@Module({
  controllers: [ReturnNoteController],
  providers: [ReturnNoteService],
})
export class ReturnNoteModule {}
