import { ApiProperty } from "@nestjs/swagger";
import { PaymentStatus, PaymentType } from "@prisma/client";

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
    idProvider?:number;
    paymentType?: PaymentType;
    paymentStatus?: PaymentStatus;
    discount?: number;
    tax?: number;
    payedAmount?: number;
    restedAmount?: number;
    subTotalAmount?: number;
    modified?:boolean
}

