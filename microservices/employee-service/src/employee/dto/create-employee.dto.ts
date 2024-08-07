import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";



export class CreateEmployeeDto   {
    @ApiPropertyOptional({ description: 'Full name of the employee' })
    @IsString()
    @IsOptional()
    first_name?: string;

    @ApiPropertyOptional({ description: 'Last name of the employee' })
    @IsString()
    @IsOptional()
    last_name?: string;

    @ApiPropertyOptional({ description: 'Email of the employee' })
    @IsString()
    @IsOptional()
    email?: string;

    @ApiPropertyOptional({ description: 'Phone number of the employee' })
    @IsString()
    @IsOptional()
    phone_number?: string;

    @ApiPropertyOptional({ description: 'Adress the employee' })
    @IsString()
    @IsOptional()
    address?: string;

    @ApiPropertyOptional({ description: 'Position of the employee' })
    @IsString()
    @IsOptional()
    position?: string;
    

}
