import { IsNumber, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  title: string;
  @IsNumber()
  price: number;
  @IsNumber()
  quantity: number;
}
export class Createpublishing_housesDto {
  @IsString()
  name: string;
  @IsString()
  address: string;
  @IsString()
  phone_number: string;
  @IsString()
  email: string;
}
export class CreateCategorieArticleDto {
  @IsString()
  name: string;
}
