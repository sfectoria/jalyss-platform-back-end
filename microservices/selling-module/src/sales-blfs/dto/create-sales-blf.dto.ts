import { ApiProperty } from "@nestjs/swagger";

class VenteBLFacture {
  @ApiProperty()
  articleId: number;
}

export class CreateSalesBlfDto {
  @ApiProperty()
  bonCommandeId?: number;
  @ApiProperty()
  bonSortieId: number;
  @ApiProperty()
  clientId: number;
  @ApiProperty()
  sales_channelsId: number;
  @ApiProperty()
  delivery_date: string;
  @ApiProperty({ type: [VenteBLFacture] })
  venteBLFacture_lines: VenteBLFacture[];
}
