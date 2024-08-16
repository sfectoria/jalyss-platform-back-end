import { ApiProperty } from "@nestjs/swagger";

class ExitNoteLine {
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
    @ApiProperty({ type: [ExitNoteLine] })
    exitNoteLine: ExitNoteLine[]
}

