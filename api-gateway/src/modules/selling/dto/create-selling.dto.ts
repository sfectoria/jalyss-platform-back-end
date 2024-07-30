import { ApiProperty } from "@nestjs/swagger";

export class CreateSellingDto {
    @ApiProperty()
    nom : string;
    @ApiProperty()
    type : string;
    @ApiProperty()
    region : string;
}

export class CreateBonComndDto {
    @ApiProperty()
    orderDate: Date;
    @ApiProperty()
    date: Date;
}

export class CreateSalesblDto {
    @ApiProperty()
    deliveryDate: Date;
}

export class CreateSalesInvioceDto {
    @ApiProperty()
    date: Date;
}

export class CreateSalesblfDto {
    @ApiProperty()
    deliveryDate: Date;
}
