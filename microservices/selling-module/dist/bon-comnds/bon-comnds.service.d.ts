import { CreateBonComndDto } from './dto/create-bon-comnd.dto';
import { UpdateBonComndDto } from './dto/update-bon-comnd.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class BonComndsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        id: number;
        id_client: number | null;
        id_canaux_de_vent: number | null;
        bonSortieId: number | null;
        order_date: Date | null;
        date: Date | null;
    }>;
    update(id: number, updateBonComndDto: UpdateBonComndDto): Promise<{
        id: number;
        id_client: number | null;
        id_canaux_de_vent: number | null;
        bonSortieId: number | null;
        order_date: Date | null;
        date: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        id_client: number | null;
        id_canaux_de_vent: number | null;
        bonSortieId: number | null;
        order_date: Date | null;
        date: Date | null;
    }>;
}
