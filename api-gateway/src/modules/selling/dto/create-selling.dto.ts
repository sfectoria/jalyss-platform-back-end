import { ApiProperty } from "@nestjs/swagger";

export class CreateSellingDto {
    @ApiProperty()
    nom : string;
    @ApiProperty()
    type : string;
    @ApiProperty()
    region : string;
}

export class CreateBonComndDto {
    @ApiProperty()
    orderDate: Date;
    @ApiProperty()
    date: Date;
}

export class CreateSalesblDto {
    @ApiProperty()
    deliveryDate: Date;
}

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

export class CreateSalesblfDto {
    @ApiProperty()
    deliveryDate: Date;
}
