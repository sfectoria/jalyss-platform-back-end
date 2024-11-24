import { IsString, IsOptional, IsEmail, IsDate, IsInt } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

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
  @ApiProperty()
  @IsString()
  mediaId: string;
}
