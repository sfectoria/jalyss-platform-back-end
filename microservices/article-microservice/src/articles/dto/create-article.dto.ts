import { IsNumber, IsString } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  title: string;
  @IsNumber()
  price: number;
  @IsNumber()
  quantity: number;
}
