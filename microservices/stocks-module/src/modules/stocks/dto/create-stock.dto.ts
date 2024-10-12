import { ApiProperty } from "@nestjs/swagger";

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
