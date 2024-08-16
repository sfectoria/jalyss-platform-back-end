import { Module } from '@nestjs/common';
import { ExitNoteService } from './exit-note.service';
import { ExitNoteController } from './exit-note.controller';

@Module({
  controllers: [ExitNoteController],
  providers: [ExitNoteService],
})
export class ExitNoteModule {}
