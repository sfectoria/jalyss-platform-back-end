import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class ArticlesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createArticleDto: CreateArticleDto): Promise<{
        id: number;
        title: string | null;
        price: number | null;
        quantity: number | null;
        id_categorie_article: number | null;
        id_publishing_houses: number | null;
    }>;
    findAll(): Promise<{
        id: number;
        title: string | null;
        price: number | null;
        quantity: number | null;
        id_categorie_article: number | null;
        id_publishing_houses: number | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        title: string | null;
        price: number | null;
        quantity: number | null;
        id_categorie_article: number | null;
        id_publishing_houses: number | null;
    }>;
    update(id: number, updateArticleDto: UpdateArticleDto): Promise<{
        id: number;
        title: string | null;
        price: number | null;
        quantity: number | null;
        id_categorie_article: number | null;
        id_publishing_houses: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        title: string | null;
        price: number | null;
        quantity: number | null;
        id_categorie_article: number | null;
        id_publishing_houses: number | null;
    }>;
}
