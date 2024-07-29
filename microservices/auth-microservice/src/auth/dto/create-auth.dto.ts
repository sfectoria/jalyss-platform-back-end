import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto {
    @ApiProperty()
    // @IsString()
    password: string;
    @ApiProperty()
    // @IsEmail()
    email: string;

}
