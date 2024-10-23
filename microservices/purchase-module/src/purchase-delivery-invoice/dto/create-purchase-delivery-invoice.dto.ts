import { ApiProperty } from "@nestjs/swagger";
import { PaymentStatus, PaymentType } from "@prisma/client";

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
    idProvider?:number
    paymentType?: PaymentType;
    paymentStatus?: PaymentStatus;
    discount?: number;
    tax?: number;
    payedAmount?: number;
    restedAmount?: number;
    subTotalAmount?: number;
    modified?:boolean
}

