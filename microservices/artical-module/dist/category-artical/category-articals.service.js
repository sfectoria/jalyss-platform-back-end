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
exports.CategoryArticalsService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let CategoryArticalsService = class CategoryArticalsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCategoryArticalDto) {
        return await this.prisma.categoryArtical.create({
            data: createCategoryArticalDto,
        });
    }
    async findAll() {
        return await this.prisma.categoryArtical.findMany();
    }
    async findOne(id) {
        const categoryArtical = await this.prisma.categoryArtical.findUnique({
            where: { id },
        });
        if (!categoryArtical) {
            throw new common_1.NotFoundException(`Categorie Article with ID ${id} not found`);
        }
        return categoryArtical;
    }
    async update(id, updateCategoryArticalDto) {
        const categoryArtical = await this.prisma.categoryArtical.findUnique({
            where: { id },
        });
        if (!categoryArtical) {
            throw new common_1.NotFoundException(`Categorie Article with ID ${id} not found`);
        }
        return await this.prisma.categoryArtical.update({
            where: { id },
            data: updateCategoryArticalDto,
        });
    }
    async remove(id) {
        const categoryArtical = await this.prisma.categoryArtical.findUnique({
            where: { id },
        });
        if (!categoryArtical) {
            throw new common_1.NotFoundException(`Categorie Article with ID ${id} not found`);
        }
        return await this.prisma.categoryArtical.delete({ where: { id } });
    }
};
exports.CategoryArticalsService = CategoryArticalsService;
exports.CategoryArticalsService = CategoryArticalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], CategoryArticalsService);
//# sourceMappingURL=category-articals.service.js.map