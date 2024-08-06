import { CreateSalesBlfDto } from './dto/create-sales-blf.dto';
import { UpdateSalesBlfDto } from './dto/update-sales-blf.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class SalesBlfsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSalesBlfDto: CreateSalesBlfDto): Promise<{
        id: number;
        delivery_date: Date | null;
        canauxDeVentId: number | null;
        bonSortieId: number | null;
        clientId: number | null;
    }>;
    findAll(): Promise<{
        id: number;
        delivery_date: Date | null;
        canauxDeVentId: number | null;
        bonSortieId: number | null;
        clientId: number | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        delivery_date: Date | null;
        canauxDeVentId: number | null;
        bonSortieId: number | null;
        clientId: number | null;
    }>;
    update(id: number, updateSalesBlfDto: UpdateSalesBlfDto): Promise<{
        id: number;
        delivery_date: Date | null;
        canauxDeVentId: number | null;
        bonSortieId: number | null;
        clientId: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        delivery_date: Date | null;
        canauxDeVentId: number | null;
        bonSortieId: number | null;
        clientId: number | null;
    }>;
}
