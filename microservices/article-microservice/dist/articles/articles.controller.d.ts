import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(message: CreateArticleDto): Promise<any>;
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
    findOne(data: {
        id: number;
    }): Promise<{
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
    update(data: {
        id: number;
        updateArticleDto: UpdateArticleDto;
    }): Promise<{
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
    remove(data: {
        id: number;
    }): Promise<{
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
