import { CreateArticalDto } from './dto/create-artical.dto';
import { UpdateArticalDto } from './dto/update-artical.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class ArticalsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createArticalDto: CreateArticalDto): Promise<{
        id: number;
        title: string;
        code: string;
        pageNumber: number | null;
        weight: number | null;
        coverId: string | null;
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
        code: string;
        pageNumber: number | null;
        weight: number | null;
        coverId: string | null;
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
        code: string;
        pageNumber: number | null;
        weight: number | null;
        coverId: string | null;
        shortDescriptionEn: string | null;
        longDescriptionEn: string | null;
        shortDescriptionAr: string | null;
        longDescriptionAr: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: number, updateArticalDto: UpdateArticalDto): Promise<{
        id: number;
        title: string;
        code: string;
        pageNumber: number | null;
        weight: number | null;
        coverId: string | null;
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
        code: string;
        pageNumber: number | null;
        weight: number | null;
        coverId: string | null;
        shortDescriptionEn: string | null;
        longDescriptionEn: string | null;
        shortDescriptionAr: string | null;
        longDescriptionAr: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
