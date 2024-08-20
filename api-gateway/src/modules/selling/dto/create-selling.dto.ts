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
  idArtical: number;
  @ApiProperty()
  quantity: number;
}

export class CreatePurchaseOrderDto {
  @ApiProperty()
  idClient: number;
  @ApiProperty()
  salesChannelsId: number;
  @ApiProperty()
  exitNoteId: number;
  @ApiProperty()
  orderDate: Date;
  @ApiProperty()
  date: Date;
  @ApiProperty({type:[PurchaseOrderLine]})
  purchaseOrderLine: PurchaseOrderLine[];
}


class SalesDeliveryNoteLine {
  @ApiProperty()
  articalId: number;
  @ApiProperty()
  quantity: number;
}

export class CreateSalesDeliveryNoteDto {
    @ApiProperty()
    deliveryDate: Date;
}

class SalesInvoiceLine {
  @ApiProperty()
  articalId: number;
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

export class CreateSalesDeliveryInvoiceDto {
    @ApiProperty()
    deliveryDate: Date;
}
