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
        phone_number: string;
        address: string;
        email: string;
        registration_date: Date;
        id_categorie_client: number;
        mediaId: string | null;
    }[]>;
    findOne(data: {
        id: number;
    }): Promise<{
        id: number;
        fullName: string;
        phone_number: string;
        address: string;
        email: string;
        registration_date: Date;
        id_categorie_client: number;
        mediaId: string | null;
    }>;
    update(data: {
        id: number;
        updateClientDto: UpdateClientDto;
    }): Promise<{
        id: number;
        fullName: string;
        phone_number: string;
        address: string;
        email: string;
        registration_date: Date;
        id_categorie_client: number;
        mediaId: string | null;
    }>;
    remove(data: {
        id: number;
    }): Promise<{
        id: number;
        fullName: string;
        phone_number: string;
        address: string;
        email: string;
        registration_date: Date;
        id_categorie_client: number;
        mediaId: string | null;
    }>;
}
