import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesDeliveryNoteDto } from './create-sales-delivery-note.dto';

export class UpdateSalesDeliveryNoteDto extends PartialType(CreateSalesDeliveryNoteDto) {}
