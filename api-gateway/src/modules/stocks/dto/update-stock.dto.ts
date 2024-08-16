import { PartialType } from '@nestjs/mapped-types';
import { CreateReceiptNoteDto, CreateExitNoteDto, CreateStockDto, CreateTransferNoteDto, CreateReturnNoteDto } from './create-stock.dto';

export class UpdateStockDto extends PartialType(CreateStockDto) {}

export class UpdateReceiptNoteDto extends PartialType(CreateReceiptNoteDto) {}

export class UpdateExitNoteDto extends PartialType(CreateExitNoteDto) {}

export class UpdateTransferNoteDto extends PartialType(CreateTransferNoteDto) {}

export class UpdateReturnNoteDto extends PartialType(CreateReturnNoteDto) {}