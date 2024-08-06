import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticlesController {
    private readonly articlesService;
    constructor(articlesService: ArticlesService);
    create(message: CreateArticleDto): Promise<any>;
    findAll(): Promise<{
        id: number;
        title: string | null;
        price: number | null;
        quantity: number | null;
        id_categorie_article: number | null;
        id_publishing_houses: number | null;
    }[]>;
    findOne(data: {
        id: number;
    }): Promise<{
        id: number;
        title: string | null;
        price: number | null;
        quantity: number | null;
        id_categorie_article: number | null;
        id_publishing_houses: number | null;
    }>;
    update(data: {
        id: number;
        updateArticleDto: UpdateArticleDto;
    }): Promise<{
        id: number;
        title: string | null;
        price: number | null;
        quantity: number | null;
        id_categorie_article: number | null;
        id_publishing_houses: number | null;
    }>;
    remove(data: {
        id: number;
    }): Promise<{
        id: number;
        title: string | null;
        price: number | null;
        quantity: number | null;
        id_categorie_article: number | null;
        id_publishing_houses: number | null;
    }>;
}
