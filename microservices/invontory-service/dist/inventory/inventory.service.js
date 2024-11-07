"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let InventoryService = class InventoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createInventoryDto) {
        let { inventoryLine, ...rest } = createInventoryDto;
        return await this.prisma.inventory.create({
            data: {
                ...rest,
                inventoryLine: {
                    createMany: { data: inventoryLine },
                },
            },
        });
    }
    async createLine(createInventoryLineDto) {
        return await this.prisma.inventoryLine.create({
            data: createInventoryLineDto,
        });
    }
    async findAll(filters) {
        let { take, skip, stocksIds, createursIds } = filters;
        console.log('THIS', take, skip);
        take = !take ? 10 : +take;
        skip = !skip ? 0 : +skip;
        let where = {};
        if (stocksIds) {
            where['stockId'] = { in: stocksIds.map((e) => +e) };
        }
        if (createursIds) {
            where['createurId'] = { in: createursIds.map((e) => +e) };
        }
        const data = await this.prisma.inventory.findMany({
            orderBy: {
                date: 'desc',
            },
            where,
            include: { inventoryLine: true, createur: { include: { Employee: true } }, stock: true },
            take,
            skip,
        });
        const count = await this.prisma.inventory.count({ where });
        return { data, count };
    }
    async findOne(id, filters) {
        let { take, skip, articlesIds } = filters;
        console.log('THIS', take, skip);
        take = !take ? 10 : +take;
        skip = !skip ? 0 : +skip;
        let whereinvLine = {};
        let whereCount = { inventoryId: id };
        if (articlesIds) {
            whereinvLine['articleId'] = { in: articlesIds.map((e) => +e) };
            whereCount['articleId'] = { in: articlesIds.map((e) => +e) };
        }
        let data = await this.prisma.inventory.findUnique({
            where: { id },
            include: {
                inventoryLine: {
                    where: whereinvLine,
                    include: {
                        article: {
                            include: {
                                articleByAuthor: { include: { author: true } },
                                articleByPublishingHouse: {
                                    include: { publishingHouse: true },
                                },
                                priceByChannel: { include: { salesChannel: true } },
                                cover: true,
                                stockArticle: true,
                            },
                        },
                    },
                    take,
                    skip,
                },
                createur: true,
                stock: true,
            },
        });
        let count = await this.prisma.inventoryLine.count({ where: whereCount });
        return { data, count };
    }
    async update(id, updateInventoryDto) {
        return await this.prisma.$transaction(async (prisma) => {
            let { inventoryLine, status, ...rest } = updateInventoryDto;
            let lines = [];
            if (status === 'confirmed') {
                console.log('confirmed', updateInventoryDto, status, { ...rest }, inventoryLine);
                let stockInfo = await this.prisma.inventory.findUnique({ where: { id } });
                let responseStockArticle = await this.prisma.stockArticle.findMany({ where: { stockId: stockInfo.stockId } });
                let articleInventory = await this.prisma.inventoryLine.findMany({ where: { inventoryId: id } });
                let updates = responseStockArticle.map((e) => {
                    let verifyArticle = articleInventory?.find(q => q.articleId === e.articleId);
                    if (!verifyArticle) {
                        lines.push({
                            articleId: e.articleId,
                            quantity: 0,
                            reelQuantity: e.quantity
                        });
                    }
                });
            }
            return await prisma.inventory.update({
                where: { id },
                data: {
                    status,
                    ...rest,
                    inventoryLine: {
                        createMany: { data: lines }
                    },
                },
            });
        });
    }
    async updateLine(id, updateInventoryLine) {
        return await this.prisma.inventoryLine.update({
            where: { id },
            data: {
                quantity: updateInventoryLine.quantity,
            },
        });
    }
    async remove(id) {
        return await this.prisma.inventory.delete({ where: { id } });
    }
};
exports.InventoryService = InventoryService;
exports.InventoryService = InventoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], InventoryService);
//# sourceMappingURL=inventory.service.js.map