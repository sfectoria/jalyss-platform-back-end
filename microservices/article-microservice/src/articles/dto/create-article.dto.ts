import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateArticleDto {
  @ApiProperty()
  code :string
  @ApiProperty()
  @IsString()
  title: string;
 
}
