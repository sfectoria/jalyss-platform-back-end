import { ApiProperty } from "@nestjs/swagger";

export class CreateStockDto {
    @ApiProperty()
    location: string;
    @ApiProperty()
    capacity: number; 
}
