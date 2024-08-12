import { ApiProperty } from "@nestjs/swagger";

export class CreateSalesChannelDto {
  @ApiProperty()
  nom: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  region: string;
  @ApiProperty()
  id_stock: number;
}
