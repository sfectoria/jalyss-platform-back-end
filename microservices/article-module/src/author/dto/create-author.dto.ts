import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty()
  nameAr: string;
  @ApiProperty()
  nameEn?: string;
  @ApiProperty()
  biographyAr?: string;
  @ApiProperty()
  biographyEn?: string;
  @ApiProperty()
  mediaId:string

}
