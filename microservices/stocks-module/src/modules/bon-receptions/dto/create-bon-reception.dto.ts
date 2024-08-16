import { ApiProperty } from '@nestjs/swagger';
import { type_reception } from '@prisma/client';

class ReceiptNoteLine {
  @ApiProperty()
  id_article: number;
  @ApiProperty()
  id_bon_reception: number;
  @ApiProperty()
  quantity: number;
}
export class CreateBonReceptionDto {
  @ApiProperty()
  type_reception: type_reception;
  @ApiProperty()
  reception_date: Date;
  @ApiProperty()
  id_stock : number;
  @ApiProperty({ type: [ReceiptNoteLine] })
  lines: ReceiptNoteLine[];
}
