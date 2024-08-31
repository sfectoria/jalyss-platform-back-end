import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

class PriceByChannelDto {
  @ApiProperty()
  price: number;

  @ApiProperty()
  idSalesChannel: number;
}

class MediaDto {
  @ApiProperty()
  @IsString()
  path: string;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  alt?: string;

  @ApiProperty()
  @IsString()
  extension?: string;

  @ApiProperty()
  @IsString()
  description?: string;
}
export class CreateArticleDto {
  @ApiProperty()
  code: string;
  @ApiProperty()
  @IsString()
  title: string;
  @ApiProperty({ type: [PriceByChannelDto], required: false })
  priceByChannel?: PriceByChannelDto[];
  @ApiProperty({ type: MediaDto, required: false })
  mediaData?: MediaDto;

  // @ApiProperty()
  // createdAt: string;
  // @ApiProperty()
  // updatedAt: string;
}



export class CreatePublishingHouseDto {
  @ApiProperty()
  @IsString()
  nameAr: string;
  @ApiProperty()
  @IsString()
  nameEn: string;
  @ApiProperty()
  @IsString()
  address: string;
  @ApiProperty()
  @IsString()
  phone_number: string;
  @ApiProperty()
  @IsString()
  email: string;
}
export class CreateCategoryArticleDto {
  @ApiProperty()
  @IsString()
  name: string;
}
