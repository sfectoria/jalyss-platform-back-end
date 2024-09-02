import { ApiProperty } from "@nestjs/swagger";

class PurchaseDeliveryInvoiceLine {  
    @ApiProperty()
    idArticle: number;
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    price ?: number
}

export class CreatePurchaseDeliveryInvoiceDto {
    @ApiProperty()
    deliveryDate: Date;
    @ApiProperty()
    idReceiptNote : number 
    @ApiProperty()
    idStock : number 
    @ApiProperty({ type: [PurchaseDeliveryInvoiceLine] })
    lines: PurchaseDeliveryInvoiceLine[]
    @ApiProperty()
    totalAmount ?: number
}

