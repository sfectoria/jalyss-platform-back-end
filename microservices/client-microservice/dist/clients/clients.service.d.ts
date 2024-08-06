import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class ClientsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createClientDto: CreateClientDto): Promise<{
        id: number;
        fullName: string | null;
        phone_number: string | null;
        address: string | null;
        email: string | null;
        registration_date: Date | null;
        id_categorie_client: number | null;
    }>;
    findAll(): Promise<{
        id: number;
        fullName: string | null;
        phone_number: string | null;
        address: string | null;
        email: string | null;
        registration_date: Date | null;
        id_categorie_client: number | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        fullName: string | null;
        phone_number: string | null;
        address: string | null;
        email: string | null;
        registration_date: Date | null;
        id_categorie_client: number | null;
    }>;
    update(id: number, updateClientDto: UpdateClientDto): Promise<{
        id: number;
        fullName: string | null;
        phone_number: string | null;
        address: string | null;
        email: string | null;
        registration_date: Date | null;
        id_categorie_client: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        fullName: string | null;
        phone_number: string | null;
        address: string | null;
        email: string | null;
        registration_date: Date | null;
        id_categorie_client: number | null;
    }>;
}
