import { ApiProperty } from "@nestjs/swagger";

class PurchaseInvoiceLine {
    @ApiProperty()
    idArtical: number;
    @ApiProperty()
    quantity: number;
}

export class CreatePurchaseInvoiceDto {
    @ApiProperty()
    deliveryDate: Date;
    @ApiProperty()
    idReceiptNote : number 
    @ApiProperty({ type: [PurchaseInvoiceLine] })
    lines: PurchaseInvoiceLine[]
}

