import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientsController {
    private readonly clientsService;
    constructor(clientsService: ClientsService);
    create(message: CreateClientDto): Promise<any>;
    findAll(): Promise<{
        id: number;
        fullName: string | null;
        phone_number: string | null;
        address: string | null;
        email: string | null;
        registration_date: Date | null;
        id_categorie_client: number | null;
    }[]>;
    findOne(data: {
        id: number;
    }): Promise<{
        id: number;
        fullName: string | null;
        phone_number: string | null;
        address: string | null;
        email: string | null;
        registration_date: Date | null;
        id_categorie_client: number | null;
    }>;
    update(data: {
        id: number;
        updateClientDto: UpdateClientDto;
    }): Promise<{
        id: number;
        fullName: string | null;
        phone_number: string | null;
        address: string | null;
        email: string | null;
        registration_date: Date | null;
        id_categorie_client: number | null;
    }>;
    remove(data: {
        id: number;
    }): Promise<{
        id: number;
        fullName: string | null;
        phone_number: string | null;
        address: string | null;
        email: string | null;
        registration_date: Date | null;
        id_categorie_client: number | null;
    }>;
}
