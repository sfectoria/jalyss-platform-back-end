import { ApiProperty } from '@nestjs/swagger';

class VenteBonLivraison_Line {
  @ApiProperty()
  articleId: number;
}

export class CreateSalesBlDto {
  @ApiProperty()
  id_bon_commande?: number;
  @ApiProperty()
  bonSortieId: number;
  @ApiProperty()
  id_client: number;
  @ApiProperty()
  saleChannelId: number;
  @ApiProperty()
  delivery_date: string;
  @ApiProperty({type : VenteBonLivraison_Line})
  venteBonLivraison_lines: VenteBonLivraison_Line[]
}
