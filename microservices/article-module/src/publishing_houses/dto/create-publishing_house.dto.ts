import { ApiProduces, ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePublishingHouseDto {
  @ApiProperty()
  @IsString()
  nameAr: string;
  @ApiProperty()
  @IsString()
  nameEn: string;
  @ApiProperty()
  @IsString()
  address: string;
  @ApiProperty()
  @IsString()
  phone_number: string;
  @ApiProperty()
  @IsString()
  email: string;
}
