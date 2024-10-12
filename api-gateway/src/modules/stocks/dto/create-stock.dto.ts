import { ApiProperty } from '@nestjs/swagger';


export class CreateStockDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  location: string;
  @ApiProperty()
  capacity: number;
  @ApiProperty()
  idEmployee : number;
  @ApiProperty()
  archived?: boolean; 
}

class ReceiptNoteLine {
    @ApiProperty()
    idArticle: number;
    @ApiProperty()
    quantity: number;
    @ApiProperty()
    price?: number;
  }
  export class CreateReceiptNoteDto {
    @ApiProperty()
    typeReceipt: string;
    @ApiProperty()
    receiptDate: Date;
    @ApiProperty()
    idStock : number;
    @ApiProperty()
    totalAmount ?: number;
    @ApiProperty({ type: [ReceiptNoteLine] })
    lines: ReceiptNoteLine[];
    @ApiProperty()
    numReceiptNote: number;
  }

class ExitNoteLine {
  @ApiProperty()
  articleId: number;
  @ApiProperty()
  quantity: number;
}

export class CreateExitNoteDto {
  @ApiProperty()
  exitDate: Date;
  @ApiProperty()
  numExitNote : number 
  @ApiProperty()
  totalAmount ?: number
  @ApiProperty()
  stockId : number
  @ApiProperty({ type: [ExitNoteLine] })
  lines: ExitNoteLine[]
}

class TransferNoteLine {
  @ApiProperty()
  idArticle : number
  @ApiProperty()
  quantity : number
}

export class CreateTransferNoteDto {
    @ApiProperty()
    from: number
    @ApiProperty()
    to: number
    @ApiProperty()
    date: Date
    @ApiProperty()
    idReceiptNote: number
    @ApiProperty()
    idExitNote: number
    @ApiProperty({ type: [TransferNoteLine] })
    lines: TransferNoteLine[]
}



class ReturnNoteLine {
    @ApiProperty()
    idArticle: number;
    @ApiProperty()
    quantity: number;
  }

export class CreateReturnNoteDto {
    @ApiProperty()
    returnDate: Date
    @ApiProperty({ type: [ReturnNoteLine] })
    lines: ReturnNoteLine[];
    @ApiProperty()
    idClient:number;
    @ApiProperty()
    idStock:number;
    @ApiProperty()
    receiptNoteId:number;
    

}
export class CreateMovementsDto {
    @ApiProperty()
    returnDate: Date
    @ApiProperty({ type: [ReturnNoteLine] })
    lines: ReturnNoteLine[];
    @ApiProperty()
    idClient:number;
    @ApiProperty()
    idStock:number;
    @ApiProperty()
    receiptNoteId:number;
    

}
