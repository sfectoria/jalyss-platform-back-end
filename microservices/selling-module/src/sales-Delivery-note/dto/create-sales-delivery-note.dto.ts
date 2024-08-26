import { ApiProperty } from '@nestjs/swagger';

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
}
