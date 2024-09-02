import { ApiProperty } from '@nestjs/swagger';
import { TypePurchaseOrder } from '@prisma/client';

class PurchaseOrderLine {
  @ApiProperty()
  idArticle: number;
  @ApiProperty()
  quantity: number;
}

export class CreatePurchaseOrderDto {
  @ApiProperty()
  idClient: number;
  @ApiProperty()
  salesChannelsId: number;
  @ApiProperty()
  status : TypePurchaseOrder;
  @ApiProperty()
  orderDate: string;
  @ApiProperty()
  date: string;
  @ApiProperty({type:[PurchaseOrderLine]})
  purchaseOrderLine: PurchaseOrderLine[];
}
