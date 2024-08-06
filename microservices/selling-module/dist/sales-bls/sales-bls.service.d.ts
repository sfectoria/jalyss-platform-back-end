import { CreateSalesBlDto } from './dto/create-sales-bl.dto';
import { UpdateSalesBlDto } from './dto/update-sales-bl.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class SalesBlsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSalesBlDto: CreateSalesBlDto): Promise<{
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
    update(id: number, updateSalesBlDto: UpdateSalesBlDto): Promise<{
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
