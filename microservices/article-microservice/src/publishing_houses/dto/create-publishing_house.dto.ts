import { ApiProduces } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePublishingHouseDto {
  @IsString()
  nameAr: string;
  @IsString()
  nameEn: string;
  @IsString()
  address: string;
  @IsString()
  phone_number: string;
  @IsString()
  email: string;
}
