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
exports.CategorieArticlesService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let CategorieArticlesService = class CategorieArticlesService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCategorieArticleDto) {
        return await this.prisma.categorieArticle.create({
            data: createCategorieArticleDto,
        });
    }
    async findAll() {
        return await this.prisma.categorieArticle.findMany();
    }
    async findOne(id) {
        const categorieArticle = await this.prisma.categorieArticle.findUnique({ where: { id } });
        if (!categorieArticle) {
            throw new common_1.NotFoundException(`Categorie Article with ID ${id} not found`);
        }
        return categorieArticle;
    }
    async update(id, updateCategorieArticleDto) {
        const categorieArticle = await this.prisma.categorieArticle.findUnique({ where: { id } });
        if (!categorieArticle) {
            throw new common_1.NotFoundException(`Categorie Article with ID ${id} not found`);
        }
        return await this.prisma.categorieArticle.update({
            where: { id },
            data: updateCategorieArticleDto,
        });
    }
    async remove(id) {
        const categorieArticle = await this.prisma.categorieArticle.findUnique({ where: { id } });
        if (!categorieArticle) {
            throw new common_1.NotFoundException(`Categorie Article with ID ${id} not found`);
        }
        return await this.prisma.categorieArticle.delete({ where: { id } });
    }
};
exports.CategorieArticlesService = CategorieArticlesService;
exports.CategorieArticlesService = CategorieArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], CategorieArticlesService);
//# sourceMappingURL=categorie-articles.service.js.map