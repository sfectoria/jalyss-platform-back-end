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
