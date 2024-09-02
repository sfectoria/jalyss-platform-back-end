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
exports.PublishingHousesService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let PublishingHousesService = class PublishingHousesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createPublishingHouseDto) {
        return await this.prisma.publishingHouse.create({
            data: createPublishingHouseDto,
        });
    }
    async findAll() {
        return await this.prisma.publishingHouse.findMany();
    }
    async findOne(id) {
        const publishingHouse = await this.prisma.publishingHouse.findUnique({ where: { id } });
        if (!publishingHouse) {
            throw new common_1.NotFoundException(`Publishing house with ID ${id} not found`);
        }
        return publishingHouse;
    }
    async update(id, updatePublishingHouseDto) {
        const publishingHouse = await this.prisma.publishingHouse.findUnique({ where: { id } });
        if (!publishingHouse) {
            throw new common_1.NotFoundException(`Publishing house with ID ${id} not found`);
        }
        return await this.prisma.publishingHouse.update({
            where: { id },
            data: updatePublishingHouseDto,
        });
    }
    async remove(id) {
        const publishingHouse = await this.prisma.publishingHouse.findUnique({ where: { id } });
        if (!publishingHouse) {
            throw new common_1.NotFoundException(`Publishing house with ID ${id} not found`);
        }
        return await this.prisma.publishingHouse.delete({ where: { id } });
    }
};
exports.PublishingHousesService = PublishingHousesService;
exports.PublishingHousesService = PublishingHousesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], PublishingHousesService);
//# sourceMappingURL=publishing_houses.service.js.map