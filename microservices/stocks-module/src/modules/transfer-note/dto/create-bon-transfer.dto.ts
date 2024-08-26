import { ApiProperty } from "@nestjs/swagger";

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
      date: string
      @ApiProperty()
      idReceiptNote: number
      @ApiProperty()
      idExitNote: number
      @ApiProperty({ type: [TransferNoteLine] })
      lines: TransferNoteLine[]
  }
  
