import { ArticalsService } from './articals.service';
import { CreateArticalDto } from './dto/create-artical.dto';
import { UpdateArticalDto } from './dto/update-artical.dto';
export declare class ArticalsController {
    private readonly articalsService;
    constructor(articalsService: ArticalsService);
    create(message: CreateArticalDto): Promise<any>;
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
    update(data: {
        id: number;
        updateArticalDto: UpdateArticalDto;
    }): Promise<{
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
    remove(data: {
        id: number;
    }): Promise<{
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
