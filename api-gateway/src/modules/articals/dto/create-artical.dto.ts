import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateArticalDto {
  @ApiProperty()
  code :string
  @ApiProperty()
  @IsString()
  title: string;
  @ApiProperty()
  createdAt : string
  @ApiProperty()
  updatedAt : string
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
export class CreateCategoryArticalDto {
  @ApiProperty()
  @IsString()
  name: string;
}
