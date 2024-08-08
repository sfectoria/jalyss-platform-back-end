import { ApiProperty } from '@nestjs/swagger';

export class CreateStockDto {
  @ApiProperty()
  location: string;
  @ApiProperty()
  capacity: number;
}

class BonReception_Line {
    @ApiProperty()
    id_article: number;
    @ApiProperty()
    id_bon_reception: number;
    @ApiProperty()
    quantity: number;
  }
  export class CreateBonReceptionDto {
    @ApiProperty()
    type_reception: string;
    @ApiProperty()
    reception_date: Date;
    @ApiProperty()
    id_stock : number;
    @ApiProperty({ type: [BonReception_Line] })
    lines: BonReception_Line[];
  }


export class CreateBonSortieDto {
    @ApiProperty()
    typeSortie: string
    @ApiProperty()
    dateSortie: Date;
}

class BonTransfer_Line {
  @ApiProperty()
  id_article : number
  @ApiProperty()
  bonTransferId : number
}

export class CreateBonTransferDto {
    @ApiProperty()
    from: number
    @ApiProperty()
    to: number
    @ApiProperty()
    date: Date
    @ApiProperty()
    id__bon_reception: number
    @ApiProperty()
    id_bondesorti: number
    @ApiProperty({ type: [BonTransfer_Line] })
    lines: BonTransfer_Line[]
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
