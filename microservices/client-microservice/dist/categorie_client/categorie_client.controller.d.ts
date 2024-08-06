import { CreateCategorieClientDto } from './dto/create-categorie_client.dto';
import { CategorieClientsService } from './categorie_client.service';
import { UpdateCategorieClientDto } from './dto/update-categorie_client.dto';
export declare class CategorieClientsController {
    private readonly categorieClientsService;
    constructor(categorieClientsService: CategorieClientsService);
    create(message: CreateCategorieClientDto): Promise<any>;
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
        updateCategorieClientDto: UpdateCategorieClientDto;
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
