import { ApiProperty } from '@nestjs/swagger';
import { PaymentStatus, PaymentType } from '@prisma/client';

class SalesInvoiceLine {
  @ApiProperty()
  articleId: number;
  @ApiProperty()
  quantity: number;
}

export class CreateSalesInvoiceDto {
  @ApiProperty()
  idPurchaseOrder?: number;
  status : boolean;
  @ApiProperty()
  exitNoteId: number;
  @ApiProperty()
  idClient: number;
  @ApiProperty()
  saleChannelId: number;
  @ApiProperty()
  date: string;
  @ApiProperty({ type: [SalesInvoiceLine] })
  salesInvoiceLine: SalesInvoiceLine[];
  @ApiProperty()
  totalAmount ?: number
  paymentType?: PaymentType;
  paymentStatus?: PaymentStatus;
  discount?: number;
  tax?: number;
  payedAmount?: number;
  restedAmount?: number;
  subTotalAmount?: number;
  modified?:boolean
}
