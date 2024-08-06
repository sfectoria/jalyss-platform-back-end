import { BonReceptionsService } from './bon-receptions.service';
import { CreateBonReceptionDto } from './dto/create-bon-reception.dto';
import { UpdateBonReceptionDto } from './dto/update-bon-reception.dto';
export declare class BonReceptionsController {
    private readonly bonReceptionsService;
    constructor(bonReceptionsService: BonReceptionsService);
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
    findOne(id: string): Promise<{
        id: number;
        id_fournisseur: number | null;
        id_stock: number | null;
        id_bon_retour: number | null;
        type_reception: string;
        reception_date: Date | null;
    }>;
    update(id: string, updateBonReceptionDto: UpdateBonReceptionDto): Promise<{
        id: number;
        id_fournisseur: number | null;
        id_stock: number | null;
        id_bon_retour: number | null;
        type_reception: string;
        reception_date: Date | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        id_fournisseur: number | null;
        id_stock: number | null;
        id_bon_retour: number | null;
        type_reception: string;
        reception_date: Date | null;
    }>;
}
