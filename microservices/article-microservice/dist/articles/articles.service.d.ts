import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class ArticlesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createArticleDto: CreateArticleDto): Promise<{
        id: number;
        title: string;
        coverId: string | null;
        weight: number | null;
        pageNumber: number | null;
        code: string;
        shortDescriptionEn: string | null;
        longDescriptionEn: string | null;
        shortDescriptionAr: string | null;
        longDescriptionAr: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: number;
        title: string;
        coverId: string | null;
        weight: number | null;
        pageNumber: number | null;
        code: string;
        shortDescriptionEn: string | null;
        longDescriptionEn: string | null;
        shortDescriptionAr: string | null;
        longDescriptionAr: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        title: string;
        coverId: string | null;
        weight: number | null;
        pageNumber: number | null;
        code: string;
        shortDescriptionEn: string | null;
        longDescriptionEn: string | null;
        shortDescriptionAr: string | null;
        longDescriptionAr: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateArticleDto: UpdateArticleDto): Promise<{
        id: number;
        title: string;
        coverId: string | null;
        weight: number | null;
        pageNumber: number | null;
        code: string;
        shortDescriptionEn: string | null;
        longDescriptionEn: string | null;
        shortDescriptionAr: string | null;
        longDescriptionAr: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        title: string;
        coverId: string | null;
        weight: number | null;
        pageNumber: number | null;
        code: string;
        shortDescriptionEn: string | null;
        longDescriptionEn: string | null;
        shortDescriptionAr: string | null;
        longDescriptionAr: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
