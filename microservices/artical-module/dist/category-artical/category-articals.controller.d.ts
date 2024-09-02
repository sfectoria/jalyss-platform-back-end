import { CreateCategoryArticalDto } from './dto/create-category-artical.dto';
import { UpdateCategoryArticalDto } from './dto/update-category-artical.dto';
import { CategoryArticalsService } from './category-articals.service';
export declare class CategoryArticalsController {
    private readonly categoryArticalsService;
    constructor(categoryArticalsService: CategoryArticalsService);
    create(createCategoryArticalDto: CreateCategoryArticalDto): Promise<{
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
        updateCategoryArticalDto: UpdateCategoryArticalDto;
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
