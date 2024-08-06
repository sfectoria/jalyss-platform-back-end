import { CreateBonReceptionDto } from './dto/create-bon-reception.dto';
import { UpdateBonReceptionDto } from './dto/update-bon-reception.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class BonReceptionsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createBonReceptionDto: CreateBonReceptionDto): Promise<{
        id: number;
        id_fournisseur: number | null;
        id_stock: number | null;
        id_bon_retour: number | null;
        type_reception: string;
        reception_date: Date | null;
    }>;
    findAll(): Promise<{
        id: number;
        id_fournisseur: number | null;
        id_stock: number | null;
        id_bon_retour: number | null;
        type_reception: string;
        reception_date: Date | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        id_fournisseur: number | null;
        id_stock: number | null;
        id_bon_retour: number | null;
        type_reception: string;
        reception_date: Date | null;
    }>;
    update(id: number, updateBonReceptionDto: UpdateBonReceptionDto): Promise<{
        id: number;
        id_fournisseur: number | null;
        id_stock: number | null;
        id_bon_retour: number | null;
        type_reception: string;
        reception_date: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        id_fournisseur: number | null;
        id_stock: number | null;
        id_bon_retour: number | null;
        type_reception: string;
        reception_date: Date | null;
    }>;
}
