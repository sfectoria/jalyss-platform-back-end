import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  // @IsString()
  // @IsNotEmpty()
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  // @ApiProperty()
  // name: string;
}
