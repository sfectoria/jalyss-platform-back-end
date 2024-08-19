import { CreateCategoryClientDto } from './dto/create-category_client.dto';
import { CategoryClientsService } from './category_client.service';
import { UpdateCategoryClientDto } from './dto/update-category_client.dto';
export declare class CategoryClientsController {
    private readonly categoryClientsService;
    constructor(categoryClientsService: CategoryClientsService);
    create(message: CreateCategoryClientDto): Promise<any>;
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
        updateCategorieClientDto: UpdateCategoryClientDto;
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
