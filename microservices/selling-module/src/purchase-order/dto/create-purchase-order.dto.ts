import { ApiProperty, ApiTags } from '@nestjs/swagger';
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
  status : TypePurchaseOrder;
=======
  exitNoteId: number;
>>>>>>> parent of 3ec5de1 (Merge branch 'main' into rawen)
  @ApiProperty()
  status : TypePurchaseOrder;
  @ApiProperty()
>>>>>>> 0eae873a4c9c391374a59790e5d5dccca4810a74
  orderDate: string;
  @ApiProperty()
  date: string;
  @ApiProperty({type:[PurchaseOrderLine]})
  purchaseOrderLine: PurchaseOrderLine[];
}
