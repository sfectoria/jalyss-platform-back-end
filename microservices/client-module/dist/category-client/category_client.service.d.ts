import { PrismaService } from 'nestjs-prisma';
import { CreateCategoryClientDto } from './dto/create-category_client.dto';
import { UpdateCategoryClientDto } from './dto/update-category_client.dto';
export declare class CategoryClientsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCategoryClientDto: CreateCategoryClientDto): Promise<{
        id: number;
        name: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
    }>;
    update(id: number, updateCategoryClientDto: UpdateCategoryClientDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
