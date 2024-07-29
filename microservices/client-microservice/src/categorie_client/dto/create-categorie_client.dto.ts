import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, IsOptional, IsEmail, IsDate, IsInt } from 'class-validator';

export class CreateCategorieClientDto
{
  @ApiPropertyOptional({ description: 'name of categorie' })
  @IsString()
  @IsOptional()
  name?: string;

}