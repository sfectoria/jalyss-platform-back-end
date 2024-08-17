import { ApiProperty } from "@nestjs/swagger";

export class CreateSellingDto {
    @ApiProperty()
    nom : string;
    @ApiProperty()
    type : string;
    @ApiProperty()
    region : string;
    @ApiProperty()
    idStock : number;
}

export class CreatePurchaseOrderDto {
    @ApiProperty()
    orderDate: Date;
    @ApiProperty()
    date: Date;
}

export class CreateSalesDeliveryNoteDto {
    @ApiProperty()
    deliveryDate: Date;
}

class SalesInvoiceLine {
  @ApiProperty()
  articleId: number;
}

export class CreateSalesInvoiceDto {
  @ApiProperty()
  idPurchaseOrder?: number;
  @ApiProperty()
  exitNoteId: number;
  @ApiProperty()
  idClient: number;
  @ApiProperty()
  saleChannelId: number;
  @ApiProperty()
  date: Date;
  @ApiProperty({ type: [SalesInvoiceLine] })
  SalesInvoiceLine: SalesInvoiceLine[];
}

export class CreateSalesDeliveryInvoiceDto {
    @ApiProperty()
    deliveryDate: Date;
}
