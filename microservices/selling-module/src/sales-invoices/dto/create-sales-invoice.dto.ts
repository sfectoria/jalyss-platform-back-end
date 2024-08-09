import { ApiProperty } from '@nestjs/swagger';

class venteFacture_line {
  @ApiProperty()
  articleId: number;
}

export class CreateSalesInvoiceDto {
  @ApiProperty()
  id_bon_commande?: number;
  @ApiProperty()
  bonSortieId: number;
  @ApiProperty()
  id_client: number;
  @ApiProperty()
  saleChannelId: number;
  @ApiProperty()
  date: string;
  @ApiProperty({ type: [venteFacture_line] })
  venteFacture_lines: venteFacture_line[];
}
