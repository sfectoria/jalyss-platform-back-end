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
    idReceipNote : number 
    @ApiProperty({ type: [PurchaseInvoiceLine] })
    purchaseInvoiceLine: PurchaseInvoiceLine[]
}

