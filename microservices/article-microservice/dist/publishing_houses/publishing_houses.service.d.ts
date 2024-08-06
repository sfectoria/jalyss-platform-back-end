import { PrismaService } from 'nestjs-prisma';
import { CreatePublishingHouseDto } from './dto/create-publishing_house.dto';
import { UpdatePublishingHouseDto } from './dto/update-publishing_house.dto';
export declare class PublishingHousesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPublishingHouseDto: CreatePublishingHouseDto): Promise<{
        id: number;
        name: string | null;
        address: string | null;
        phone_number: string | null;
        email: string | null;
    }>;
    findAll(): Promise<{
        id: number;
        name: string | null;
        address: string | null;
        phone_number: string | null;
        email: string | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string | null;
        address: string | null;
        phone_number: string | null;
        email: string | null;
    }>;
    update(id: number, updatePublishingHouseDto: UpdatePublishingHouseDto): Promise<{
        id: number;
        name: string | null;
        address: string | null;
        phone_number: string | null;
        email: string | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string | null;
        address: string | null;
        phone_number: string | null;
        email: string | null;
    }>;
}
