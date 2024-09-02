import { ApiProperty } from "@nestjs/swagger";

class PurchaseInvoiceLine {
    @ApiProperty()
    idArticle: number;
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    price ?: number
}

export class CreatePurchaseInvoiceDto {
    @ApiProperty()
    deliveryDate: Date;
    @ApiProperty()
    idReceiptNote : number 
    @ApiProperty()
    idStock : number 
    @ApiProperty({ type: [PurchaseInvoiceLine] })
    lines: PurchaseInvoiceLine[]
    @ApiProperty()
    totalAmount ?: number
}

