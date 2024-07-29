import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty()
  @IsString()
  title: string;
  @IsNumber()
  @ApiProperty()
  price: number;
  @IsNumber()
  @ApiProperty()
  quantity: number;
}
export class Createpublishing_housesDto {
  @ApiProperty()
  @IsString()
  name: string;
  @ApiProperty()
  @IsString()
  address: string;
  @IsString()
  @ApiProperty()
  phone_number: string;
  @IsString()
  @ApiProperty()
  email: string;
}
export class CreateCategorieArticleDto {
  @ApiProperty()
  @IsString()
  name: string;
}
