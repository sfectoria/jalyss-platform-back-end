import { SalesBlfsService } from './sales-blfs.service';
import { CreateSalesBlfDto } from './dto/create-sales-blf.dto';
import { UpdateSalesBlfDto } from './dto/update-sales-blf.dto';
export declare class SalesBlfsController {
    private readonly salesBlfsService;
    constructor(salesBlfsService: SalesBlfsService);
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
    findOne(data: {
        id: number;
    }): Promise<{
        id: number;
        delivery_date: Date | null;
        canauxDeVentId: number | null;
        bonSortieId: number | null;
        clientId: number | null;
    }>;
    update(data: {
        id: number;
        updateSalesBlfDto: UpdateSalesBlfDto;
    }): Promise<{
        id: number;
        delivery_date: Date | null;
        canauxDeVentId: number | null;
        bonSortieId: number | null;
        clientId: number | null;
    }>;
    remove(data: {
        id: number;
    }): Promise<{
        id: number;
        delivery_date: Date | null;
        canauxDeVentId: number | null;
        bonSortieId: number | null;
        clientId: number | null;
    }>;
}
