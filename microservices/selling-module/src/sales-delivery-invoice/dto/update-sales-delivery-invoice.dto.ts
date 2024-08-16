import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesDeliveryInvoiceDto } from './create-sales-delivery-invoice.dto';

export class UpdateSalesDeliveryInvoiceDto extends PartialType(CreateSalesDeliveryInvoiceDto) {}
