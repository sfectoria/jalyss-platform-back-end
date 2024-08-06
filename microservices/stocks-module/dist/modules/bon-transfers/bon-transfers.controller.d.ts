import { BonTransfersService } from './bon-transfers.service';
import { CreateBonTransferDto } from './dto/create-bon-transfer.dto';
import { UpdateBonTransferDto } from './dto/update-bon-transfer.dto';
export declare class BonTransfersController {
    private readonly bonTransfersService;
    constructor(bonTransfersService: BonTransfersService);
    create(createBonTransferDto: CreateBonTransferDto): Promise<{
        id: number;
        from: number | null;
        to: number | null;
        date: Date | null;
        id_bon_reception: number | null;
        id_bondesorti: number | null;
    }>;
    findAll(): Promise<{
        id: number;
        from: number | null;
        to: number | null;
        date: Date | null;
        id_bon_reception: number | null;
        id_bondesorti: number | null;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        from: number | null;
        to: number | null;
        date: Date | null;
        id_bon_reception: number | null;
        id_bondesorti: number | null;
    }>;
    update(id: string, updateBonTransferDto: UpdateBonTransferDto): Promise<{
        id: number;
        from: number | null;
        to: number | null;
        date: Date | null;
        id_bon_reception: number | null;
        id_bondesorti: number | null;
    }>;
    remove(id: string): Promise<{
        id: number;
        from: number | null;
        to: number | null;
        date: Date | null;
        id_bon_reception: number | null;
        id_bondesorti: number | null;
    }>;
}
