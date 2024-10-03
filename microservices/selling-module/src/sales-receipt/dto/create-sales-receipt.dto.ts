import { ApiProperty } from '@nestjs/swagger';
import { PaymentStatus, PaymentType } from '@prisma/client';

class SalesReceiptLine {
  @ApiProperty()
  articleId: number;
  @ApiProperty()
  quantity: number;
  @ApiProperty()
  price: number;
}
export class CreateSalesReceiptDto {
  @ApiProperty()
  deliveryDate: Date;
  @ApiProperty()
  totalAmount: number;
  @ApiProperty()
  idClient: number;
  @ApiProperty()
  salesChannelId: number;
  @ApiProperty()
  exitNoteId: number;
  @ApiProperty({ type: [SalesReceiptLine] })
  salesReceiptLine: SalesReceiptLine[];
  paymentType?: PaymentType;
  paymentStatus?: PaymentStatus;
  discount?: number;
  tax?: number;
  payedAmount?: number;
  restedAmount?: number;
  subTotalAmount?: number;
  modified?:boolean
}
