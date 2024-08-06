import { BonSortiesService } from './bon-sorties.service';
import { CreateBonSortyDto } from './dto/create-bon-sorty.dto';
import { UpdateBonSortyDto } from './dto/update-bon-sorty.dto';
export declare class BonSortiesController {
    private readonly bonSortiesService;
    constructor(bonSortiesService: BonSortiesService);
    create(createBonSortyDto: CreateBonSortyDto): Promise<{
        id: number;
        id_bon_commande: number | null;
        id_client: number | null;
        id_vente_facture: number | null;
        id_devis: number | null;
        type_reception: string;
        sortie_date: Date | null;
    }>;
    findAll(): Promise<{
        id: number;
        id_bon_commande: number | null;
        id_client: number | null;
        id_vente_facture: number | null;
        id_devis: number | null;
        type_reception: string;
        sortie_date: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        id_bon_commande: number | null;
        id_client: number | null;
        id_vente_facture: number | null;
        id_devis: number | null;
        type_reception: string;
        sortie_date: Date | null;
    }>;
    update(id: string, updateBonSortyDto: UpdateBonSortyDto): Promise<{
        id: number;
        id_bon_commande: number | null;
        id_client: number | null;
        id_vente_facture: number | null;
        id_devis: number | null;
        type_reception: string;
        sortie_date: Date | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        id_bon_commande: number | null;
        id_client: number | null;
        id_vente_facture: number | null;
        id_devis: number | null;
        type_reception: string;
        sortie_date: Date | null;
    }>;
}
