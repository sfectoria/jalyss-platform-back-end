import { ApiProperty } from '@nestjs/swagger';

class EstimateLine {
    @ApiProperty()
    idArticle:number
    @ApiProperty()
    quantity:number
    @ApiProperty()
    price?:number
    @ApiProperty()
    discount?:number
}

export class CreateEstimateDto {
    @ApiProperty()
    idClient: number;
    @ApiProperty()
    totalAmount?: number;
    @ApiProperty()
    salesChannelId?: number;
    @ApiProperty()
    date: Date;
    @ApiProperty({ type: [EstimateLine] })
    estimateLine: EstimateLine[];
}