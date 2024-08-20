import {ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateEmployeeDto  {
    @ApiProperty()
    @IsString()
  
    first_name: string;

    @ApiProperty()
    @IsString()

    last_name: string;

    @ApiProperty()
    @IsString()
    email: string;
    @ApiProperty()
    @IsString()

    phone_number: string;

    @ApiProperty()
    @IsString()
    address: string;
    @ApiProperty()
    @IsString()  
    position: string;
}
