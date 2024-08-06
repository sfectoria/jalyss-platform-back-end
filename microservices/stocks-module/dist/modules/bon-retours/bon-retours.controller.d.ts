import { BonRetoursService } from './bon-retours.service';
import { CreateBonRetourDto } from './dto/create-bon-retour.dto';
import { UpdateBonRetourDto } from './dto/update-bon-retour.dto';
export declare class BonRetoursController {
    private readonly bonRetoursService;
    constructor(bonRetoursService: BonRetoursService);
    create(createBonRetourDto: CreateBonRetourDto): Promise<{
        id: number;
        id_client: number | null;
        return_date: Date | null;
    }>;
    findAll(): Promise<{
        id: number;
        id_client: number | null;
        return_date: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        id_client: number | null;
        return_date: Date | null;
    }>;
    update(id: string, updateBonRetourDto: UpdateBonRetourDto): Promise<{
        id: number;
        id_client: number | null;
        return_date: Date | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        id_client: number | null;
        return_date: Date | null;
    }>;
}
