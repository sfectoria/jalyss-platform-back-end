import {ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateEmployeeDto   {
    @ApiProperty()
    @IsString()
  
    first_name: string;

    @ApiPropertyOptional({ description: 'Last name of the employee' })
    @IsString()

    last_name: string;

    @ApiPropertyOptional({ description: 'Email of the employee' })
    @IsString()
    email: string;
    @ApiProperty()
    @IsString()

    phone_number: string;

    @ApiPropertyOptional({ description: 'Adress the employee' })
    @IsString()
    address: string;
    @ApiProperty()
    @IsString()  
    position: string;
}
