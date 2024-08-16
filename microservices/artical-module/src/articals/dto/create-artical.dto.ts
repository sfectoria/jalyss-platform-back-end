import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateArticalDto {
  @ApiProperty()
  code :string
  @ApiProperty()
  @IsString()
  title: string;
  @ApiProperty()
  createdAt : string
  @ApiProperty()
  updatedAt : string
}
