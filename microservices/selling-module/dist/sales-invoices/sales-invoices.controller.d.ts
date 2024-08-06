import { SalesInvoicesService } from './sales-invoices.service';
import { CreateSalesInvoiceDto } from './dto/create-sales-invoice.dto';
import { UpdateSalesInvoiceDto } from './dto/update-sales-invoice.dto';
export declare class SalesInvoicesController {
    private readonly salesInvoicesService;
    constructor(salesInvoicesService: SalesInvoicesService);
    create(createSalesInvoiceDto: CreateSalesInvoiceDto): Promise<{
        id: number;
        id_client: number | null;
        id_bon_commande: number | null;
        bonSortieId: number | null;
        date: Date | null;
    }>;
    findAll(): Promise<{
        id: number;
        id_client: number | null;
        id_bon_commande: number | null;
        bonSortieId: number | null;
        date: Date | null;
    }[]>;
    findOne(data: {
        id: number;
    }): Promise<{
        id: number;
        id_client: number | null;
        id_bon_commande: number | null;
        bonSortieId: number | null;
        date: Date | null;
    }>;
    update(data: {
        id: number;
        updateSalesInvoiceDto: UpdateSalesInvoiceDto;
    }): Promise<{
        id: number;
        id_client: number | null;
        id_bon_commande: number | null;
        bonSortieId: number | null;
        date: Date | null;
    }>;
    remove(data: {
        id: number;
    }): Promise<{
        id: number;
        id_client: number | null;
        id_bon_commande: number | null;
        bonSortieId: number | null;
        date: Date | null;
    }>;
}
