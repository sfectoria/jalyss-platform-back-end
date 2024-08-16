import { PartialType } from '@nestjs/mapped-types';
import { CreateTransferNoteDto } from './create-bon-transfer.dto';

export class UpdateTransferNoteDto extends PartialType(CreateTransferNoteDto) {}
