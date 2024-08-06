import { ApiProduces } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreatePublishingHouseDto {
  @IsString()
  name: string;
  @IsString()
  address: string;
  @IsString()
  phone_number: string;
  @IsString()
  email: string;
}
