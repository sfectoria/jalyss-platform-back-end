import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseOrderDto, CreateSalesDeliveryInvoiceDto, CreateSalesDeliveryNoteDto, CreateSalesInvoiceDto, CreateSellingDto } from './create-selling.dto';

export class UpdateSellingDto extends PartialType(CreateSellingDto) {}

export class UpdatePurchaseOrderDto extends PartialType(CreatePurchaseOrderDto) {}

export class UpdateSalesDeliveryNoteDto extends PartialType(CreateSalesDeliveryNoteDto) {}

export class UpdateSalesInvoiceDto extends PartialType(CreateSalesInvoiceDto) {}

export class UpdateSalesDeliveryInvoiceDto extends PartialType(CreateSalesDeliveryInvoiceDto) {}

