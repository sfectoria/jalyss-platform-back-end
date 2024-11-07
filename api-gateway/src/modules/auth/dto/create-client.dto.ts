import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, IsDate, IsInt } from 'class-validator';
// import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateClientDto {
  @ApiProperty()
  @IsString()
  fullName: string;
  @ApiProperty()
  @IsString()
  phoneNumber: string;
  @ApiProperty()
  @IsString()
  address: string;
  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty()
  registrationDate?: Date;
  @ApiProperty()
  @IsInt()
  idCategoryClient: number;
}
export class CreateCategoryClientDto
{
  // @ApiPropertyOptional({ description: 'name of categorie' })
  @ApiProperty()
  @IsString()
  name: string;

}