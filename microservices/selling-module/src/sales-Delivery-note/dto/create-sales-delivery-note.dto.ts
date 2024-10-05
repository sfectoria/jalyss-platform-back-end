import { ApiProperty } from '@nestjs/swagger';
import { PaymentStatus, PaymentType } from '@prisma/client';

class SalesDeliveryNoteLine {
  @ApiProperty()
  articleId: number;
  @ApiProperty()
  quantity: number;
}

export class CreateSalesDeliveryNoteDto {
  @ApiProperty()
  idPurchaseOrder?: number;
  @ApiProperty()
  exitNoteId: number;
  @ApiProperty()
  idClient: number;
  @ApiProperty()
  saleChannelId: number;
  @ApiProperty()
  deliveryDate: string;
  @ApiProperty({type : [SalesDeliveryNoteLine]})
  salesDeliveryNoteLine: SalesDeliveryNoteLine[]
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
