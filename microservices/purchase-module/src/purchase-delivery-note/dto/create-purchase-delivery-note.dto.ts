import { ApiProperty } from "@nestjs/swagger";

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

