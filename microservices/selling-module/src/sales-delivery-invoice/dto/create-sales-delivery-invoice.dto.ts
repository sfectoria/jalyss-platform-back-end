import { ApiProperty } from "@nestjs/swagger";
import { PaymentStatus, PaymentType } from "@prisma/client";
class SalesDeliveryInvoiceLine {
  @ApiProperty()
  articleId: number;
  @ApiProperty()
  quantity: number;
}

//vente bon de livraison facture
export class CreateSalesDeliveryInvoiceDto {
  @ApiProperty()
  idPurchaseOrder?: number; //bon de commande
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
  @ApiProperty()
  totalAmount ?: number
  paymentType?: PaymentType;
  paymentStatus?: PaymentStatus;
  discount?: number;
  tax?: number;
  payedAmount?: number;
  restedAmount?: number;
  subTotalAmount?: number;
  modified?:boolean
}
