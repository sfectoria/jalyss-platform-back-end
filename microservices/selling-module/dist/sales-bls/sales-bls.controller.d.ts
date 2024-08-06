import { SalesBlsService } from './sales-bls.service';
import { CreateSalesBlDto } from './dto/create-sales-bl.dto';
import { UpdateSalesBlDto } from './dto/update-sales-bl.dto';
export declare class SalesBlsController {
    private readonly salesBlsService;
    constructor(salesBlsService: SalesBlsService);
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
    update(data: {
        id: number;
        updateSalesBlDto: UpdateSalesBlDto;
    }): Promise<{
        id: number;
        delivery_date: Date | null;
        canauxDeVentId: number | null;
        bonSortieId: number | null;
        clientId: number | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        delivery_date: Date | null;
        canauxDeVentId: number | null;
        bonSortieId: number | null;
        clientId: number | null;
    }>;
}
