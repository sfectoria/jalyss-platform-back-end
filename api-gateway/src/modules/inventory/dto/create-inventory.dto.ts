import { ApiProperty } from '@nestjs/swagger';
import { StatusInventory } from '@prisma/client';

class InventoryLine {
  @ApiProperty()
  articleId: number;
  @ApiProperty()
  quantity: number;
  @ApiProperty()
  reelQuatity: number;
}

export class CreateInventoryDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  date: Date;
  @ApiProperty()
  createurId: number;
  @ApiProperty()
  status: StatusInventory;
  @ApiProperty()
  stockId: number;
  @ApiProperty({ type: [InventoryLine] })
  inventoryLine: InventoryLine[];
}
