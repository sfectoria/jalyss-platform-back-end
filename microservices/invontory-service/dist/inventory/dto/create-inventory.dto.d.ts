import { StatusInventory } from '@prisma/client';
declare class InventoryLine {
    articleId: number;
    quantity: number;
    reelQuantity: number;
}
export declare class CreateInventoryDto {
    name: string;
    date: Date;
    createurId: number;
    status: StatusInventory;
    stockId: number;
    inventoryLine: InventoryLine[];
}
export declare class InventoryLineDto {
    articleId: number;
    inventoryId: string;
    quantity: number;
    reelQuantity: number;
}
export {};
