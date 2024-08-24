import { CreateCategorieArticleDto } from './dto/create-categorie-article.dto';
import { UpdateCategorieArticleDto } from './dto/update-categorie-article.dto';
import { CategorieArticlesService } from './categorie-articles.service';
export declare class CategorieArticlesController {
    private readonly categorieArticleService;
    constructor(categorieArticleService: CategorieArticlesService);
    create(createCategorieArticleDto: CreateCategorieArticleDto): Promise<{
        id: number;
        name: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOne(data: {
        id: number;
    }): Promise<{
        id: number;
        name: string;
    }>;
    update(data: {
        id: number;
        updateCategorieArticleDto: UpdateCategorieArticleDto;
    }): Promise<{
        id: number;
        name: string;
    }>;
    remove(data: {
        id: number;
    }): Promise<{
        id: number;
        name: string;
    }>;
}
