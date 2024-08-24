import { PrismaService } from 'nestjs-prisma';
import { CreatePublishingHouseDto } from './dto/create-publishing_house.dto';
import { UpdatePublishingHouseDto } from './dto/update-publishing_house.dto';
export declare class PublishingHousesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createPublishingHouseDto: CreatePublishingHouseDto): Promise<{
        id: number;
        nameAr: string;
        nameEn: string | null;
        address: string | null;
        logoId: string | null;
        createdAt: Date;
        updatedAt: Date | null;
    }>;
    findAll(): Promise<{
        id: number;
        nameAr: string;
        nameEn: string | null;
        address: string | null;
        logoId: string | null;
        createdAt: Date;
        updatedAt: Date | null;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        nameAr: string;
        nameEn: string | null;
        address: string | null;
        logoId: string | null;
        createdAt: Date;
        updatedAt: Date | null;
    }>;
    update(id: number, updatePublishingHouseDto: UpdatePublishingHouseDto): Promise<{
        id: number;
        nameAr: string;
        nameEn: string | null;
        address: string | null;
        logoId: string | null;
        createdAt: Date;
        updatedAt: Date | null;
    }>;
    remove(id: number): Promise<{
        id: number;
        nameAr: string;
        nameEn: string | null;
        address: string | null;
        logoId: string | null;
        createdAt: Date;
        updatedAt: Date | null;
    }>;
}
