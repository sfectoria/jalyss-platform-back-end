import { BonComndsService } from './bon-comnds.service';
import { CreateBonComndDto } from './dto/create-bon-comnd.dto';
import { UpdateBonComndDto } from './dto/update-bon-comnd.dto';
export declare class BonComndsController {
    private readonly bonComndsService;
    constructor(bonComndsService: BonComndsService);
    create(createBonComndDto: CreateBonComndDto): Promise<{
        id: number;
        id_client: number | null;
        id_canaux_de_vent: number | null;
        bonSortieId: number | null;
        order_date: Date | null;
        date: Date | null;
    }>;
    findAll(): Promise<{
        id: number;
        id_client: number | null;
        id_canaux_de_vent: number | null;
        bonSortieId: number | null;
        order_date: Date | null;
        date: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        id_client: number | null;
        id_canaux_de_vent: number | null;
        bonSortieId: number | null;
        order_date: Date | null;
        date: Date | null;
    }>;
    update(id: string, updateBonComndDto: UpdateBonComndDto): Promise<{
        id: number;
        id_client: number | null;
        id_canaux_de_vent: number | null;
        bonSortieId: number | null;
        order_date: Date | null;
        date: Date | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        id_client: number | null;
        id_canaux_de_vent: number | null;
        bonSortieId: number | null;
        order_date: Date | null;
        date: Date | null;
    }>;
}
