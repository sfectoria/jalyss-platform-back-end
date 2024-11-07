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
exports.CategoryClientsService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let CategoryClientsService = class CategoryClientsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCategoryClientDto) {
        return await this.prisma.categoryClient.create({
            data: createCategoryClientDto,
        });
    }
    async findAll() {
        return await this.prisma.categoryClient.findMany();
    }
    async findOne(id) {
        return await this.prisma.categoryClient.findUnique({ where: { id } });
    }
    async update(id, updateCategoryClientDto) {
        return await this.prisma.categoryClient.update({
            where: { id },
            data: updateCategoryClientDto,
        });
    }
    async remove(id) {
        return await this.prisma.categoryClient.delete({ where: { id } });
    }
};
exports.CategoryClientsService = CategoryClientsService;
exports.CategoryClientsService = CategoryClientsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], CategoryClientsService);
//# sourceMappingURL=category_client.service.js.map