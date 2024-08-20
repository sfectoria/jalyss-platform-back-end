import { PartialType } from '@nestjs/mapped-types';
import { CreatePurchaseDeliveryInvoiceDto } from './create-purchase-delivery-invoice.dto';

export class UpdatePurchaseDeliveryInvoiceDto extends PartialType(CreatePurchaseDeliveryInvoiceDto) {}
