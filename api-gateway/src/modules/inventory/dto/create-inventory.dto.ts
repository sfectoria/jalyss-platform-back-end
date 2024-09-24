import { ApiProperty } from '@nestjs/swagger';
import { StatusInventory } from '@prisma/client';

class InventoryLine {
  @ApiProperty()
  articleId: number;
  @ApiProperty()
  quantity: number;
  @ApiProperty()
  reelQuantity: number;
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

export class InventoryLineDto {
  @ApiProperty()
  articleId: number;
  @ApiProperty()
  inventoryId: string;
  @ApiProperty()
  quantity: number;
  @ApiProperty()
  reelQuantity: number;
}
