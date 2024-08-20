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

class PurchaseDeliveryNoteLine {
    @ApiProperty()
    idArtical: number;
    @ApiProperty()
    quantity: number;
}

export class CreatePurchaseDeliveryNoteDto {
    @ApiProperty()
    deliveryDate: Date;
    @ApiProperty()
    idReceipNote : number 
    @ApiProperty({ type: [PurchaseDeliveryNoteLine] })
    purchaseDeliveryNoteLine: PurchaseDeliveryNoteLine[]
}

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
