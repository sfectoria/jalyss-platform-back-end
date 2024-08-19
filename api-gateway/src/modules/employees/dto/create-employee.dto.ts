import {ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateEmployeeDto   {
    @ApiProperty()
    @IsString()
    firstName: string;
    @ApiProperty()
    @IsString()
    lastName: string;
    @ApiProperty()
    @IsString()
    email: string;
    @ApiProperty()
    @IsString()
    phoneNumber: string;
    @ApiProperty()
    @IsString()
    address: string;
    @ApiProperty()
    @IsString()  
    position: string;
}
