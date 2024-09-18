import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsEmail, IsDate, IsInt } from 'class-validator';

export class CreateAuthDto {
    @ApiProperty()
    @IsEmail()
    email: string;
    @ApiProperty()
    @IsString()
    password: string;

}
