import { ApiProperty, ApiTags } from '@nestjs/swagger';

class PurchaseOrderLine {
  @ApiProperty()
  idArtical: number;
  @ApiProperty()
  quantity: number;
}

export class CreatePurchaseOrderDto {
  @ApiProperty()
  idClient: number;
  @ApiProperty()
  salesChannelsId: number;
  @ApiProperty()
  exitNoteId: number;
  @ApiProperty()
  orderDate: string;
  @ApiProperty()
  date: string;
  @ApiProperty({type:[PurchaseOrderLine]})
  purchaseOrderLine: PurchaseOrderLine[];
}
