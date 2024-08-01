import { ApiProperty } from '@nestjs/swagger';

class BRLine {
  @ApiProperty()
  id_article: number;
  @ApiProperty()
  qunatity: number;
}
export class CreateBonReceptionDto {
  @ApiProperty()
  typeReception: string;
  @ApiProperty()
  dateReception: Date;
  @ApiProperty()
  id_stock: number;
  @ApiProperty({ type: [BRLine] })
  lines: BRLine[];
}