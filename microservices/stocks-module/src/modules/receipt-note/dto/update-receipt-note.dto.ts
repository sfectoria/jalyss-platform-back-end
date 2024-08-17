import { PartialType } from '@nestjs/mapped-types';
import { CreateReceiptNoteDto } from './create-receipt-note.dto';

export class UpdateReceiptNoteDto extends PartialType(CreateReceiptNoteDto) {}
