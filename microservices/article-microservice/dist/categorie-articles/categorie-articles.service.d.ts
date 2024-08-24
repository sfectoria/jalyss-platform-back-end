import { PrismaService } from 'nestjs-prisma';
import { CreateCategorieArticleDto } from './dto/create-categorie-article.dto';
import { UpdateCategorieArticleDto } from './dto/update-categorie-article.dto';
export declare class CategorieArticlesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCategorieArticleDto: CreateCategorieArticleDto): Promise<{
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
    update(id: number, updateCategorieArticleDto: UpdateCategorieArticleDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
