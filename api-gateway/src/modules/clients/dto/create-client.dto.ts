import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, IsDate, IsInt } from 'class-validator';
// import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateClientDto {
  // @ApiPropertyOptional({ description: 'Full name of the client' })
  @IsString()
  @ApiProperty()
  fullName: string;

  // @ApiPropertyOptional({ description: 'Phone number of the client' })
  @IsString()
  @ApiProperty()

  phone_number: string;

  // @ApiPropertyOptional({ description: 'Address of the client' })
  @ApiProperty()
  @IsString()
  address: string;

  // @ApiPropertyOptional({ description: 'Email address of the client' })
  @ApiProperty()
  @IsEmail()
  email: string;

  // @ApiPropertyOptional({ description: 'Registration date of the client' })
  @ApiProperty()
  @IsDate()
  registration_date: Date;

  // @ApiPropertyOptional({ description: 'ID of the client category' })
  @ApiProperty()
  @IsInt()
  id_categorie_client: number;
}
export class CreateCategorieClientDto
{
  // @ApiPropertyOptional({ description: 'name of categorie' })
  @ApiProperty()
  @IsString()
  name: string;

}