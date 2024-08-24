import { CreateCategorieClientDto } from './dto/create-categorie_client.dto';
import { CategorieClientsService } from './categorie_client.service';
import { UpdateCategorieClientDto } from './dto/update-categorie_client.dto';
export declare class CategorieClientsController {
    private readonly categorieClientsService;
    constructor(categorieClientsService: CategorieClientsService);
    create(message: CreateCategorieClientDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(data: {
        id: number;
    }): Promise<any>;
    update(data: {
        id: number;
        updateCategorieClientDto: UpdateCategorieClientDto;
    }): Promise<any>;
    remove(data: {
        id: number;
    }): Promise<any>;
}
