import { ApiProperty } from "@nestjs/swagger";

export class CreateSalesChannelDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  region: string;
  @ApiProperty()
  idStock: number;
  @ApiProperty()
  employeeId : number;
}
