import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeeController {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        address: string;
        position: string;
        mediaId: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        address: string;
        position: string;
        mediaId: string | null;
    }[]>;
    findOne(data: {
        id: number;
    }): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        address: string;
        position: string;
        mediaId: string | null;
    }>;
    update(data: {
        id: number;
        updateEmployeeDto: UpdateEmployeeDto;
    }): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        address: string;
        position: string;
        mediaId: string | null;
    }>;
    remove(data: {
        id: number;
    }): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        address: string;
        position: string;
        mediaId: string | null;
    }>;
}
