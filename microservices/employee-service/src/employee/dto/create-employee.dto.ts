import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";



export class CreateEmployeeDto   {
    @ApiPropertyOptional({ description: 'Full name of the employee' })
    @IsString()
  
    firstName: string;

    @ApiPropertyOptional({ description: 'Last name of the employee' })
    @IsString()

    lastName: string;

    @ApiPropertyOptional({ description: 'Email of the employee' })
    @IsString()

    email: string;

    @ApiPropertyOptional({ description: 'Phone number of the employee' })
    @IsString()

    phoneNumber: string;

    @ApiPropertyOptional({ description: 'Address the employee' })
    @IsString()
  
    address: string;

    @ApiPropertyOptional({ description: 'Position of the employee' })
    @IsString()
  
    position: string;
    

}
