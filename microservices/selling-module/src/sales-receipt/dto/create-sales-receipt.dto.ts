import { ApiProperty } from "@nestjs/swagger";

class SalesReceiptLine {
    idArticle:number
    quantity:number
    price:number
}
export class CreateSalesReceiptDto {
    @ApiProperty()
    deliveryDate:Date
    @ApiProperty()
    totalAmount:number
    @ApiProperty()
    idClient:number
    @ApiProperty()
    salesChannelId:number
    @ApiProperty()
    exitNoteId:number
    @ApiProperty({type:[SalesReceiptLine]})
    salesReceiptLine : SalesReceiptLine[]
}
