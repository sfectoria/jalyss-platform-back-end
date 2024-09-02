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

class PurchaseDeliveryNoteLine {
    @ApiProperty()
    idArticle: number;
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    price ?: number
}

export class CreatePurchaseDeliveryNoteDto {
    @ApiProperty()
    deliveryDate: Date;
    @ApiProperty()
    idReceiptNote : number 
    @ApiProperty()
    idStock : number 
    @ApiProperty({ type: [PurchaseDeliveryNoteLine] })
    lines: PurchaseDeliveryNoteLine[]
    @ApiProperty()
    totalAmount ?: number
}

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
