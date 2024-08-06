import { CreateSalesInvoiceDto } from './dto/create-sales-invoice.dto';
import { UpdateSalesInvoiceDto } from './dto/update-sales-invoice.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class SalesInvoicesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        id: number;
        id_client: number | null;
        id_bon_commande: number | null;
        bonSortieId: number | null;
        date: Date | null;
    }>;
    update(id: number, updateSalesInvoiceDto: UpdateSalesInvoiceDto): Promise<{
        id: number;
        id_client: number | null;
        id_bon_commande: number | null;
        bonSortieId: number | null;
        date: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        id_client: number | null;
        id_bon_commande: number | null;
        bonSortieId: number | null;
        date: Date | null;
    }>;
}
