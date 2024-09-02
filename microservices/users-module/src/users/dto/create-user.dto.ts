import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail, IsDate, IsInt } from 'class-validator';
export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

  // name: string;
}
