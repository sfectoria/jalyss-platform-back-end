import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class CreateEmployeeDto   {
    @IsString()
    firstName: string;
    @IsString()
    lastName: string;
    @IsString()
    email: string;
    @IsString()
    phoneNumber: string;
    @IsString()
    address: string;
    @IsString()  
    position: string;
}
