import { PartialType } from '@nestjs/mapped-types';
import { CreatePriceByChannelDto, CreatePurchaseOrderDto, CreateSalesDeliveryInvoiceDto, CreateSalesDeliveryNoteDto, CreateSalesInvoiceDto, CreateSellingDto } from './create-selling.dto';

export class UpdateSellingDto extends PartialType(CreateSellingDto) {}

export class UpdatePurchaseOrderDto extends PartialType(CreatePurchaseOrderDto) {}

export class UpdateSalesDeliveryNoteDto extends PartialType(CreateSalesDeliveryNoteDto) {}

export class UpdateSalesInvioceDto extends PartialType(CreateSalesInvoiceDto) {}

export class UpdateSalesDeliveryInvoiceDto extends PartialType(CreateSalesDeliveryInvoiceDto) {}

export class UpdatePriceByChannelDto extends PartialType(CreatePriceByChannelDto) {}

