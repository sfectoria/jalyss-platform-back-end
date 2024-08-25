import { ApiProperty } from "@nestjs/swagger";

class PurchaseDeliveryNoteLine {
    @ApiProperty()
    idArticle: number;
    @ApiProperty()
    quantity: number;
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
}

