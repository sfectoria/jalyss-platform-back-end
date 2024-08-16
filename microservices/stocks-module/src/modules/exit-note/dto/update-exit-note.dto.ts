import { PartialType } from '@nestjs/mapped-types';
import { CreateExitNoteDto } from './create-exit-note.dto';

export class UpdateExitNoteDto extends PartialType(CreateExitNoteDto) {}
