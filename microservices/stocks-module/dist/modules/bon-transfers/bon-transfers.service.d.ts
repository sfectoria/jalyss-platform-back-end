import { CreateBonTransferDto } from './dto/create-bon-transfer.dto';
import { UpdateBonTransferDto } from './dto/update-bon-transfer.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class BonTransfersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
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
    findOne(id: number): Promise<{
        id: number;
        from: number | null;
        to: number | null;
        date: Date | null;
        id_bon_reception: number | null;
        id_bondesorti: number | null;
    }>;
    update(id: number, updateBonTransferDto: UpdateBonTransferDto): Promise<{
        id: number;
        from: number | null;
        to: number | null;
        date: Date | null;
        id_bon_reception: number | null;
        id_bondesorti: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        from: number | null;
        to: number | null;
        date: Date | null;
        id_bon_reception: number | null;
        id_bondesorti: number | null;
    }>;
}
