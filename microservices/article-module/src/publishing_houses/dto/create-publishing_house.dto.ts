import { ApiProperty } from '@nestjs/swagger';


export class CreatePublishingHouseDto {
  @ApiProperty()
  nameAr: string;
  @ApiProperty()
  nameEn: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  phone_number: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  logoId: string;
}
