import { PrismaService } from 'nestjs-prisma';
import { CreateCategorieClientDto } from './dto/create-categorie_client.dto';
import { UpdateCategorieClientDto } from './dto/update-categorie_client.dto';
export declare class CategorieClientsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCategorieClientDto: CreateCategorieClientDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    update(id: number, updateCategorieClientDto: UpdateCategorieClientDto): Promise<any>;
    remove(id: number): Promise<any>;
}
