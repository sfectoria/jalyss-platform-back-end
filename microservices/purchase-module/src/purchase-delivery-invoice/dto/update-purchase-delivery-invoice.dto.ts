import { PartialType } from '@nestjs/swagger';
import { CreatePurchaseDeliveryInvoiceDto } from './create-purchase-delivery-invoice.dto';

export class UpdatePurchaseDeliveryInvoiceDto extends PartialType(CreatePurchaseDeliveryInvoiceDto) {}
