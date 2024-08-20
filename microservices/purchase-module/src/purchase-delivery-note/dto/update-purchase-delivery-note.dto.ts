import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseDeliveryNoteDto } from './create-purchase-delivery-note.dto';

export class UpdatePurchaseDeliveryNoteDto extends PartialType(CreatePurchaseDeliveryNoteDto) {}
