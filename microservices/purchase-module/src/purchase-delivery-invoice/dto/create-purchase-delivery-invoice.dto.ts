import { ApiProperty } from "@nestjs/swagger";

class PurchaseDeliveryInvoiceLine {  
    @ApiProperty()
    idArtical: number;
    @ApiProperty()
    quantity: number;
}

export class CreatePurchaseDeliveryInvoiceDto {
    @ApiProperty()
    deliveryDate: Date;
    @ApiProperty()
    idReceipNote : number 
    @ApiProperty({ type: [PurchaseDeliveryInvoiceLine] })
    purchaseDeliveryInvoiceLine: PurchaseDeliveryInvoiceLine[]
}

