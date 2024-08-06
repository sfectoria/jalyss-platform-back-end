import { CreateBonRetourDto } from './dto/create-bon-retour.dto';
import { UpdateBonRetourDto } from './dto/update-bon-retour.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class BonRetoursService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        id: number;
        id_client: number | null;
        return_date: Date | null;
    }>;
    update(id: number, updateBonRetourDto: UpdateBonRetourDto): Promise<{
        id: number;
        id_client: number | null;
        return_date: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        id_client: number | null;
        return_date: Date | null;
    }>;
}
