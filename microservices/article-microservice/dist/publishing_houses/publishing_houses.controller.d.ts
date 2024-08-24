import { PublishingHousesService } from './publishing_houses.service';
import { CreatePublishingHouseDto } from './dto/create-publishing_house.dto';
import { UpdatePublishingHouseDto } from './dto/update-publishing_house.dto';
export declare class PublishingHousesController {
    private readonly publishingHousesService;
    constructor(publishingHousesService: PublishingHousesService);
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
    findOne(data: {
        id: number;
    }): Promise<{
        id: number;
        nameAr: string;
        nameEn: string | null;
        address: string | null;
        logoId: string | null;
        createdAt: Date;
        updatedAt: Date | null;
    }>;
    update(data: {
        id: number;
        updatePublishingHouseDto: UpdatePublishingHouseDto;
    }): Promise<{
        id: number;
        nameAr: string;
        nameEn: string | null;
        address: string | null;
        logoId: string | null;
        createdAt: Date;
        updatedAt: Date | null;
    }>;
    remove(data: {
        id: number;
    }): Promise<{
        id: number;
        nameAr: string;
        nameEn: string | null;
        address: string | null;
        logoId: string | null;
        createdAt: Date;
        updatedAt: Date | null;
    }>;
}
