import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class StocksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createStockDto: CreateStockDto): Promise<{
        id: number;
        location: string | null;
        capacity: number | null;
    }>;
    findAll(): Promise<{
        id: number;
        location: string | null;
        capacity: number | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        location: string | null;
        capacity: number | null;
    }>;
    update(id: number, updateStockDto: UpdateStockDto): Promise<{
        id: number;
        location: string | null;
        capacity: number | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        location: string | null;
        capacity: number | null;
    }>;
}
