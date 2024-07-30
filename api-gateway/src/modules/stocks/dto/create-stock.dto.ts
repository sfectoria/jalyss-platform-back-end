import { ApiProperty } from "@nestjs/swagger";

export class CreateStockDto {
    @ApiProperty()
    location: string;
    @ApiProperty()
    capacity: number;
}

export class CreateBonReceptionDto {
    @ApiProperty()
    typeReception: string
    @ApiProperty()
    dateReception: Date
}

export class CreateBonSortieDto {
    @ApiProperty()
    typeSortie: string
    @ApiProperty()
    dateSortie: Date
}

export class CreateBonTransferDto {
    @ApiProperty()
    from: number
    @ApiProperty()
    to: number
    @ApiProperty()
    date: Date
}

export class CreateBonRetourDto { 
    @ApiProperty()
    returnDate: Date
}

