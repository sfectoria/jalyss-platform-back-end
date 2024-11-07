import { ProviderService } from './provider.service';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
export declare class ProviderController {
    private readonly providerService;
    constructor(providerService: ProviderService);
    create(createProviderDto: CreateProviderDto): Promise<{
        id: number;
        nameProvider: string;
        phoneNumber: string;
        email: string;
        adresse: string;
        registrationNumber: string;
    }>;
    findAll(): Promise<{
        id: number;
        nameProvider: string;
        phoneNumber: string;
        email: string;
        adresse: string;
        registrationNumber: string;
    }[]>;
    findOne(data: {
        id: number;
    }): Promise<{
        id: number;
        nameProvider: string;
        phoneNumber: string;
        email: string;
        adresse: string;
        registrationNumber: string;
    }>;
    update(data: {
        id: number;
        updateProviderDto: UpdateProviderDto;
    }): Promise<{
        id: number;
        nameProvider: string;
        phoneNumber: string;
        email: string;
        adresse: string;
        registrationNumber: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        nameProvider: string;
        phoneNumber: string;
        email: string;
        adresse: string;
        registrationNumber: string;
    }>;
}
