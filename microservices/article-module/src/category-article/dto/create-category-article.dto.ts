import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCategoryArticleDto {
  @ApiProperty()
  @IsString()
  name: string;
}
