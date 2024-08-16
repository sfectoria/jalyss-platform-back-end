import { ApiProperty } from '@nestjs/swagger';


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
