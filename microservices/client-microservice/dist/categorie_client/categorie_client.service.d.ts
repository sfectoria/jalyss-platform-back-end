import { PrismaService } from 'nestjs-prisma';
import { CreateCategorieClientDto } from './dto/create-categorie_client.dto';
import { UpdateCategorieClientDto } from './dto/update-categorie_client.dto';
export declare class CategorieClientsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCategorieClientDto: CreateCategorieClientDto): Promise<{
        id: number;
        name: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        name: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string | null;
    }>;
    update(id: number, updateCategorieClientDto: UpdateCategorieClientDto): Promise<{
        id: number;
        name: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string | null;
    }>;
}
