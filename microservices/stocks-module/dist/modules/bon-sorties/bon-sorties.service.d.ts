import { CreateBonSortyDto } from './dto/create-bon-sorty.dto';
import { UpdateBonSortyDto } from './dto/update-bon-sorty.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class BonSortiesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        id: number;
        id_bon_commande: number | null;
        id_client: number | null;
        id_vente_facture: number | null;
        id_devis: number | null;
        type_reception: string;
        sortie_date: Date | null;
    }>;
    update(id: number, updateBonSortyDto: UpdateBonSortyDto): Promise<{
        id: number;
        id_bon_commande: number | null;
        id_client: number | null;
        id_vente_facture: number | null;
        id_devis: number | null;
        type_reception: string;
        sortie_date: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        id_bon_commande: number | null;
        id_client: number | null;
        id_vente_facture: number | null;
        id_devis: number | null;
        type_reception: string;
        sortie_date: Date | null;
    }>;
}
