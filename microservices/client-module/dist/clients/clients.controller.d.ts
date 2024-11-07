import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(message: CreateClientDto): Promise<any>;
    findAll(): Promise<{
        id: number;
        fullName: string;
        phoneNumber: string;
        address: string;
        email: string;
        registrationDate: Date | null;
        idCategoryClient: number;
        mediaId: string | null;
    }[]>;
    findOne(data: {
        id: number;
    }): Promise<{
        categoryClient: {
            id: number;
            name: string;
        };
    } & {
        id: number;
        fullName: string;
        phoneNumber: string;
        address: string;
        email: string;
        registrationDate: Date | null;
        idCategoryClient: number;
        mediaId: string | null;
    }>;
    update(data: {
        id: number;
        updateClientDto: UpdateClientDto;
    }): Promise<{
        id: number;
        fullName: string;
        phoneNumber: string;
        address: string;
        email: string;
        registrationDate: Date | null;
        idCategoryClient: number;
        mediaId: string | null;
    }>;
    remove(data: {
        id: number;
    }): Promise<{
        id: number;
        fullName: string;
        phoneNumber: string;
        address: string;
        email: string;
        registrationDate: Date | null;
        idCategoryClient: number;
        mediaId: string | null;
    }>;
}
