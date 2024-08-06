import { ApiProperty } from "@nestjs/swagger";

class BonTransfer_Line {
    @ApiProperty()
    id_article : number
  }
  
  export class CreateBonTransferDto {
      @ApiProperty()
      from: number
      @ApiProperty()
      to: number
      @ApiProperty()
      date: string
      @ApiProperty()
      id_bon_reception: number
      @ApiProperty()
      id_bondesorti: number
      @ApiProperty({ type: [BonTransfer_Line] })
      lines: BonTransfer_Line[]
  }
  
