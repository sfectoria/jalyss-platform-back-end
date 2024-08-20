import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseDeliveryInvoiceDto, CreatePurchaseDeliveryNoteDto, CreatePurchaseDto, CreatePurchaseInvoiceDto } from './create-purchase.dto';

export class UpdatePurchaseDto extends PartialType(CreatePurchaseDto) {}

export class UpdatePurchaseInvoiceDto extends PartialType(CreatePurchaseInvoiceDto) {}

export class UpdatePurchaseDeliveryNoteDto extends PartialType(CreatePurchaseDeliveryNoteDto) {}

export class UpdatePurchaseDeliveryInvoiceDto extends PartialType(CreatePurchaseDeliveryInvoiceDto) {}
