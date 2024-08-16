import { ApiProperty } from "@nestjs/swagger";

export class CreateAuthDto {
    @ApiProperty()
    // @IsEmail()
    email: string;
    @ApiProperty()
    // @IsString()
    password: string;

}
