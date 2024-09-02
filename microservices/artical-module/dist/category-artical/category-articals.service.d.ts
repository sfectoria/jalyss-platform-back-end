import { PrismaService } from 'nestjs-prisma';
import { CreateCategoryArticalDto } from './dto/create-category-artical.dto';
import { UpdateCategoryArticalDto } from './dto/update-category-artical.dto';
export declare class CategoryArticalsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCategoryArticalDto: CreateCategoryArticalDto): Promise<{
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
    update(id: number, updateCategoryArticalDto: UpdateCategoryArticalDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
