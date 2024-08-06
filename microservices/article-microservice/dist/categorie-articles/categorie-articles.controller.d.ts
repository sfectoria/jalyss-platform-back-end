import { CreateCategorieArticleDto } from './dto/create-categorie-article.dto';
import { UpdateCategorieArticleDto } from './dto/update-categorie-article.dto';
import { CategorieArticlesService } from './categorie-articles.service';
export declare class CategorieArticlesController {
    private readonly categorieArticleService;
    constructor(categorieArticleService: CategorieArticlesService);
    create(createCategorieArticleDto: CreateCategorieArticleDto): Promise<{
        id: number;
        name: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        name: string | null;
    }[]>;
    findOne(data: {
        id: number;
    }): Promise<{
        id: number;
        name: string | null;
    }>;
    update(data: {
        id: number;
        updateCategorieArticleDto: UpdateCategorieArticleDto;
    }): Promise<{
        id: number;
        name: string | null;
    }>;
    remove(data: {
        id: number;
    }): Promise<{
        id: number;
        name: string | null;
    }>;
}
