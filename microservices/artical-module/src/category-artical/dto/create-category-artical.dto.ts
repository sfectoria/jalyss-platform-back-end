import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCategoryArticalDto {
  @ApiProperty()
  @IsString()
  name: string;
}