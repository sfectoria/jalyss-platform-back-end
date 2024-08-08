import { ApiProperty } from '@nestjs/swagger';

export class CreateSalesBlDto {
  @ApiProperty()
  delivery_date: string;
  @ApiProperty()
  sales_channelsId: number;
  @ApiProperty()
  bonSortieId: number;
  @ApiProperty()
  clientId: number;
}
