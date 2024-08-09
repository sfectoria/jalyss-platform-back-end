import { ApiProperty } from "@nestjs/swagger";

class VenteBLFacture_Line {
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
  deliveryDate: string;
  @ApiProperty({ type: [VenteBLFacture_Line] })
  venteBLFacture_lines: VenteBLFacture_Line[];
}
