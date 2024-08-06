import { ApiProperty } from "@nestjs/swagger";

class BonSortie_line {
    @ApiProperty()
    articleId: number;
}

export class CreateBonSortyDto {
    @ApiProperty()
    sortie_date: Date;
    @ApiProperty()
    num_bonSortie : number 
    @ApiProperty()
    stockId : number
    @ApiProperty({ type: [BonSortie_line] })
    bonSortieLines: BonSortie_line[]
}

