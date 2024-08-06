import { PublishingHousesService } from './publishing_houses.service';
import { CreatePublishingHouseDto } from './dto/create-publishing_house.dto';
import { UpdatePublishingHouseDto } from './dto/update-publishing_house.dto';
export declare class PublishingHousesController {
    private readonly publishingHousesService;
    constructor(publishingHousesService: PublishingHousesService);
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
    findOne(data: {
        id: number;
    }): Promise<{
        id: number;
        name: string | null;
        address: string | null;
        phone_number: string | null;
        email: string | null;
    }>;
    update(data: {
        id: number;
        updatePublishingHouseDto: UpdatePublishingHouseDto;
    }): Promise<{
        id: number;
        name: string | null;
        address: string | null;
        phone_number: string | null;
        email: string | null;
    }>;
    remove(data: {
        id: number;
    }): Promise<{
        id: number;
        name: string | null;
        address: string | null;
        phone_number: string | null;
        email: string | null;
    }>;
}
