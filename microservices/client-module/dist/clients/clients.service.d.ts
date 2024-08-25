import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class ClientsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createClientDto: CreateClientDto): Promise<{
        id: number;
        fullName: string;
        phoneNumber: string;
        address: string;
        email: string;
        registrationDate: Date | null;
        idCategoryClient: number;
        mediaId: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        fullName: string;
        phoneNumber: string;
        address: string;
        email: string;
        registrationDate: Date | null;
        idCategoryClient: number;
        mediaId: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        fullName: string;
        phoneNumber: string;
        address: string;
        email: string;
        registrationDate: Date | null;
        idCategoryClient: number;
        mediaId: string | null;
    }>;
    update(id: number, updateClientDto: UpdateClientDto): Promise<{
        id: number;
        fullName: string;
        phoneNumber: string;
        address: string;
        email: string;
        registrationDate: Date | null;
        idCategoryClient: number;
        mediaId: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        fullName: string;
        phoneNumber: string;
        address: string;
        email: string;
        registrationDate: Date | null;
        idCategoryClient: number;
        mediaId: string | null;
    }>;
}
