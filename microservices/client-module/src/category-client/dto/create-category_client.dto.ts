import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, IsOptional, IsEmail, IsDate, IsInt } from 'class-validator';

export class CreateCategoryClientDto
{
  @ApiPropertyOptional({ description: 'name of categorie' })
  @IsString()
  name: string;

}