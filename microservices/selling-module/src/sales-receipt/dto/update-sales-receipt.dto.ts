import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesReceiptDto } from './create-sales-receipt.dto';

export class UpdateSalesReceiptDto extends PartialType(CreateSalesReceiptDto) {}
