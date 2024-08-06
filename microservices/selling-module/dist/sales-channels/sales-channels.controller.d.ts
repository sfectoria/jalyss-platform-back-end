import { SalesChannelsService } from './sales-channels.service';
import { CreateSalesChannelDto } from './dto/create-sales-channel.dto';
import { UpdateSalesChannelDto } from './dto/update-sales-channel.dto';
export declare class SalesChannelsController {
    private readonly salesChannelsService;
    constructor(salesChannelsService: SalesChannelsService);
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
    update(data: {
        id: number;
        updateSalesChannelDto: UpdateSalesChannelDto;
    }): Promise<{
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
