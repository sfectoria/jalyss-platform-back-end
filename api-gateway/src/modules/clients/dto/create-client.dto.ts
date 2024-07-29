import { IsString, IsOptional, IsEmail, IsDate, IsInt } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiPropertyOptional({ description: 'Full name of the client' })
  @IsString()
  @IsOptional()
  fullName?: string;

  @ApiPropertyOptional({ description: 'Phone number of the client' })
  @IsString()
  @IsOptional()
  phone_number?: string;

  @ApiPropertyOptional({ description: 'Address of the client' })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiPropertyOptional({ description: 'Email address of the client' })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({ description: 'Registration date of the client' })
  @IsDate()
  @IsOptional()
  registration_date?: Date;

  @ApiPropertyOptional({ description: 'ID of the client category' })
  @IsInt()
  @IsOptional()
  id_categorie_client?: number;
}
export class CreateCategorieClientDto
{
  @ApiPropertyOptional({ description: 'name of categorie' })
  @IsString()
  @IsOptional()
  name?: string;

}