import { StocksService } from './stocks.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
export declare class StocksController {
    private readonly stocksService;
    constructor(stocksService: StocksService);
    create(message: CreateStockDto): Promise<any>;
    findAll(): Promise<{
        id: number;
        location: string | null;
        capacity: number | null;
    }[]>;
    findOne(data: {
        id: number;
    }): Promise<{
        id: number;
        location: string | null;
        capacity: number | null;
    }>;
    update(data: {
        id: number;
        updateStockDto: UpdateStockDto;
    }): Promise<{
        id: number;
        location: string | null;
        capacity: number | null;
    }>;
    remove(data: {
        id: number;
    }): Promise<{
        id: number;
        location: string | null;
        capacity: number | null;
    }>;
}
