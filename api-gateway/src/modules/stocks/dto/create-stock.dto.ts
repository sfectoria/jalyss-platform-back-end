import { ApiProperty } from "@nestjs/swagger";

export class CreateStockDto {
    @ApiProperty()
    location: string;
    @ApiProperty()
    capacity: number;
}

class BRLine {
    @ApiProperty()
    id_article: number;
    @ApiProperty()
    qunatity: number;
  }

export class CreateBonReceptionDto {
    @ApiProperty()
    typeReception: string
    @ApiProperty()
    dateReception: Date
    @ApiProperty()
    id_stock: string;
    @ApiProperty({ type: [BRLine] })
    lines: BRLine[];
}  


export class CreateBonSortieDto {
    @ApiProperty()
    typeSortie: string
    @ApiProperty()
    dateSortie: Date;
}

export class CreateBonTransferDto {
    @ApiProperty()
    from: number
    @ApiProperty()
    to: number
    @ApiProperty()
    date: Date
}

class ArticleRetour {
    @ApiProperty()
    id_article: number;
    @ApiProperty()
    qunatity: number;
  }

export class CreateBonRetourDto { 
    @ApiProperty()
    returnDate: Date
    @ApiProperty({ type: [ArticleRetour] })
    lines: ArticleRetour[];
}

