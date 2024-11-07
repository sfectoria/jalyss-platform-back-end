import { InventoryService } from './inventory.service';
import { CreateInventoryDto, InventoryLineDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto, UpdateInventoryLineDto } from './dto/update-inventory.dto';
import { InventoryFilters } from './entities/inventory.entity';
export declare class InventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    create(createInventoryDto: CreateInventoryDto): Promise<{
        id: string;
        name: string;
        date: Date;
        createurId: number | null;
        stockId: number | null;
        status: import(".prisma/client").$Enums.StatusInventory;
    }>;
    createLine(createInventoryLineDto: InventoryLineDto): Promise<{
        id: number;
        articleId: number;
        quantity: number;
        reelQuantity: number;
        inventoryId: string;
    }>;
    findAll(filters: InventoryFilters): Promise<{
        data: {
            id: string;
            name: string;
            date: Date;
            createurId: number | null;
            stockId: number | null;
            status: import(".prisma/client").$Enums.StatusInventory;
        }[];
        count: number;
    }>;
    findOne(data: {
        id: string;
        filters: InventoryFilters;
    }): Promise<{
        data: {
            inventoryLine: ({
                article: {
                    articleByPublishingHouse: ({
                        publishingHouse: {
                            id: number;
                            nameAr: string;
                            nameEn: string | null;
                            address: string | null;
                            logoId: string | null;
                            createdAt: Date;
                            updatedAt: Date | null;
                        };
                    } & {
                        publishingHouseId: number;
                        articleId: number;
                    })[];
                    articleByAuthor: ({
                        author: {
                            id: string;
                            nameAr: string;
                            nameEn: string | null;
                            biographyAr: string | null;
                            biographyEn: string | null;
                            mediaId: string | null;
                        };
                    } & {
                        articleId: number;
                        authorId: string;
                    })[];
                    priceByChannel: ({
                        salesChannel: {
                            id: number;
                            name: string;
                            type: string;
                            region: string;
                            idStock: number;
                        };
                    } & {
                        id: number;
                        price: number;
                        idArticle: number;
                        idSalesChannel: number;
                    })[];
                    stockArticle: {
                        id: number;
                        stockId: number;
                        articleId: number;
                        quantity: number;
                    }[];
                    cover: {
                        id: string;
                        path: string;
                        type: string;
                        alt: string | null;
                        extension: string | null;
                        description: string | null;
                    };
                } & {
                    id: number;
                    title: string;
                    code: string;
                    pageNumber: number | null;
                    weight: number | null;
                    coverId: string | null;
                    shortDescriptionEn: string | null;
                    longDescriptionEn: string | null;
                    shortDescriptionAr: string | null;
                    longDescriptionAr: string | null;
                    createdAt: Date;
                    updatedAt: Date;
                };
            } & {
                id: number;
                articleId: number;
                quantity: number;
                reelQuantity: number;
                inventoryId: string;
            })[];
            createur: {
                id: number;
                firstName: string;
                lastName: string;
                email: string;
                phoneNumber: string;
                address: string;
                position: string;
                mediaId: string | null;
            };
            stock: {
                id: number;
                name: string;
                location: string;
                capacity: number;
                idEmployee: number;
                archived: boolean | null;
            };
        } & {
            id: string;
            name: string;
            date: Date;
            createurId: number | null;
            stockId: number | null;
            status: import(".prisma/client").$Enums.StatusInventory;
        };
        count: number;
    }>;
    update(data: {
        id: string;
        updateInventoryDto: UpdateInventoryDto;
    }): Promise<{
        id: string;
        name: string;
        date: Date;
        createurId: number | null;
        stockId: number | null;
        status: import(".prisma/client").$Enums.StatusInventory;
    }>;
    updateLine(data: {
        id: number;
        updateInventoryLineDto: UpdateInventoryLineDto;
    }): Promise<{
        id: number;
        articleId: number;
        quantity: number;
        reelQuantity: number;
        inventoryId: string;
    }>;
    remove(data: {
        id: string;
    }): Promise<{
        id: string;
        name: string;
        date: Date;
        createurId: number | null;
        stockId: number | null;
        status: import(".prisma/client").$Enums.StatusInventory;
    }>;
}
