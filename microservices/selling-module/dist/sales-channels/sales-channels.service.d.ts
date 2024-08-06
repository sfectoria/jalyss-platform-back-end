import { CreateSalesChannelDto } from './dto/create-sales-channel.dto';
import { UpdateSalesChannelDto } from './dto/update-sales-channel.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class SalesChannelsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createSalesChannelDto: CreateSalesChannelDto): Promise<{
        id: number;
        nom: string | null;
        type: string | null;
        region: string | null;
        id_stock: number | null;
    }>;
    findAll(): Promise<{
        id: number;
        nom: string | null;
        type: string | null;
        region: string | null;
        id_stock: number | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nom: string | null;
        type: string | null;
        region: string | null;
        id_stock: number | null;
    }>;
    update(id: number, updateSalesChannelDto: UpdateSalesChannelDto): Promise<{
        id: number;
        nom: string | null;
        type: string | null;
        region: string | null;
        id_stock: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        nom: string | null;
        type: string | null;
        region: string | null;
        id_stock: number | null;
    }>;
}
