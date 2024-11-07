import { PrismaService } from 'nestjs-prisma';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
export declare class ProviderService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProviderDto: CreateProviderDto): Promise<{
        id: number;
        nameProvider: string;
        phoneNumber: string;
        email: string;
        adresse: string;
        registrationNumber: string;
    }>;
    findAll(): Promise<{
        id: number;
        nameProvider: string;
        phoneNumber: string;
        email: string;
        adresse: string;
        registrationNumber: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nameProvider: string;
        phoneNumber: string;
        email: string;
        adresse: string;
        registrationNumber: string;
    }>;
    update(id: number, updateProviderDto: UpdateProviderDto): Promise<{
        id: number;
        nameProvider: string;
        phoneNumber: string;
        email: string;
        adresse: string;
        registrationNumber: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        nameProvider: string;
        phoneNumber: string;
        email: string;
        adresse: string;
        registrationNumber: string;
    }>;
}
