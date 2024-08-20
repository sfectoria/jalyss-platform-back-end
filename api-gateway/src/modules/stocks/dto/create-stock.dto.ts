import { ApiProperty } from '@nestjs/swagger';


export class CreateStockDto {
  @ApiProperty()
  location: string;
  @ApiProperty()
  capacity: number;
}

class ReceiptNoteLine {
    @ApiProperty()
    idArtical: number;
    // @ApiProperty()
    // idReceiptNote: number;
    @ApiProperty()
    quantity: number;
  }
  export class CreateReceiptNoteDto {
    @ApiProperty()
    typeReceipt: string;
    @ApiProperty()
    receiptDate: Date;
    @ApiProperty()
    idStock : number;
    @ApiProperty({ type: [ReceiptNoteLine] })
    lines: ReceiptNoteLine[];
    @ApiProperty()
    numReceiptNote: number;
  }

class ExitNoteLine {
  @ApiProperty()
  articalId: number;
  @ApiProperty()
  quantity: number;
}

export class CreateExitNoteDto {
  @ApiProperty()
  exitDate: Date;
  @ApiProperty()
  numExitNote : number 
  @ApiProperty()
  stockId : number
  @ApiProperty({ type: [ExitNoteLine] })
  lines: ExitNoteLine[]
}

class TransferNoteLine {
  @ApiProperty()
  idArtical : number
  @ApiProperty()
  transferNoteId : number
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
    idArtical: number;
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
}
