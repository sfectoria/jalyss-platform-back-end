import { IsString, IsOptional, IsEmail, IsDate, IsInt } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiPropertyOptional({ description: 'Full name of the client' })
  @IsString()

  fullName: string;

  @ApiPropertyOptional({ description: 'Phone number of the client' })
  @IsString()
  phone_number: string;

  @ApiPropertyOptional({ description: 'Address of the client' })
  @IsString()

  address: string;

  @ApiPropertyOptional({ description: 'Email address of the client' })
  @IsEmail()

  email: string;

  @ApiPropertyOptional({ description: 'Registration date of the client' })
  @IsDate()

  registration_date: Date;

  @ApiPropertyOptional({ description: 'ID of the client category' })
  @IsInt()

  id_categorie_client: number;
}
