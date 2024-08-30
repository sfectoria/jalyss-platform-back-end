import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class PriceByChannelDto {
  @ApiProperty()
  price: number;

  @ApiProperty()
  idSalesChannel: number;
}
export class CreateArticleDto {
  @ApiProperty()
  code: string;
  @ApiProperty()
  @IsString()
  title: string;
  @ApiProperty({ type: [PriceByChannelDto], required: false })
  priceByChannel?: PriceByChannelDto[];

  @ApiProperty()
  createdAt: string;
  @ApiProperty()
  updatedAt: string;
}
