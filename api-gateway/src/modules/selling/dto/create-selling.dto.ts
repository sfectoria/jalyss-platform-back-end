import { ApiProperty } from "@nestjs/swagger";

export class CreateSellingDto {
    @ApiProperty()
    name : string;
    @ApiProperty()
    type : string;
    @ApiProperty()
    region : string;
    @ApiProperty()
    idStock : number;
}

class PurchaseOrderLine {
  @ApiProperty()
  idArticle: number;
  @ApiProperty()
  quantity: number;
}

export class CreatePurchaseOrderDto {
  @ApiProperty()
  idClient: number;
  @ApiProperty()
  salesChannelsId: number;
  @ApiProperty()
  orderDate: string;
  @ApiProperty()
  date: Date;
  @ApiProperty({type:[PurchaseOrderLine]})
  purchaseOrderLine: PurchaseOrderLine[];
}


class SalesDeliveryNoteLine {
  @ApiProperty()
  articleId: number;
  @ApiProperty()
  quantity: number;
}

export class CreateSalesDeliveryNoteDto {
  @ApiProperty()
  idPurchaseOrder?: number;
  @ApiProperty()
  exitNoteId: number;
  @ApiProperty()
  idClient: number;
  @ApiProperty()
  saleChannelId: number;
  @ApiProperty()
  deliveryDate: Date;
  @ApiProperty({type : [SalesDeliveryNoteLine]})
  salesDeliveryNoteLine: SalesDeliveryNoteLine[]
}

class SalesInvoiceLine {
  @ApiProperty()
  articleId: number;
  @ApiProperty()
  quantity: number;
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
  salesInvoiceLine: SalesInvoiceLine[];
}

class SalesDeliveryInvoiceLine {
  @ApiProperty()
  articleId: number;
  @ApiProperty()
  quantity: number;
}

export class CreateSalesDeliveryInvoiceDto {
  @ApiProperty()
  purchaseOrderId?: number; //bon de commande
  @ApiProperty()
  exitNoteId: number;
  @ApiProperty()
  clientId: number;
  @ApiProperty()
  salesChannelsId: number;
  @ApiProperty()
  deliveryDate: Date;
  @ApiProperty({ type: [SalesDeliveryInvoiceLine] })
  salesDeliveryInvoicelines: SalesDeliveryInvoiceLine[];
}
