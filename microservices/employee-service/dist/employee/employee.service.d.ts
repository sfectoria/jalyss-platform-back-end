import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class EmployeeService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        address: string;
        position: string;
        mediaId: string | null;
    }>;
    update(id: number, updateEmployeeDto: UpdateEmployeeDto): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        phoneNumber: string;
        address: string;
        position: string;
        mediaId: string | null;
    }>;
    remove(id: number): Promise<{
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
