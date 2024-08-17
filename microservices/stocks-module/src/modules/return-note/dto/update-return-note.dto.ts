import { PartialType } from '@nestjs/mapped-types';
import { CreateReturnNoteDto } from './create-return-note.dto';

export class UpdateReturnNoteDto extends PartialType(CreateReturnNoteDto) {}
