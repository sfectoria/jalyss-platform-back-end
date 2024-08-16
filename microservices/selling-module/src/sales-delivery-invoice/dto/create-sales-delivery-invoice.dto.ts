import { ApiProperty } from "@nestjs/swagger";
class SalesDeliveryInvoiceLine {
  @ApiProperty()
  articalId: number;
  @ApiProperty()
  quantity: number;
}

//vente bon de livraison facture
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
  deliveryDate: string;
  @ApiProperty({ type: [SalesDeliveryInvoiceLine] })
  salesDeliveryInvoicelines: SalesDeliveryInvoiceLine[];
}
