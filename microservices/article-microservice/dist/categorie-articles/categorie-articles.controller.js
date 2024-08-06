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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorieArticlesController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const create_categorie_article_dto_1 = require("./dto/create-categorie-article.dto");
const categorie_articles_service_1 = require("./categorie-articles.service");
let CategorieArticlesController = class CategorieArticlesController {
    constructor(categorieArticleService) {
        this.categorieArticleService = categorieArticleService;
    }
    async create(createCategorieArticleDto) {
        return this.categorieArticleService.create(createCategorieArticleDto);
    }
    async findAll() {
        return this.categorieArticleService.findAll();
    }
    async findOne(data) {
        return this.categorieArticleService.findOne(data.id);
    }
    async update(data) {
        return this.categorieArticleService.update(data.id, data.updateCategorieArticleDto);
    }
    async remove(data) {
        return this.categorieArticleService.remove(data.id);
    }
};
exports.CategorieArticlesController = CategorieArticlesController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_categorie_article' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_categorie_article_dto_1.CreateCategorieArticleDto]),
    __metadata("design:returntype", Promise)
], CategorieArticlesController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'all_categorie_article' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategorieArticlesController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getOne_categorie_article' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategorieArticlesController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_categorie_article' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategorieArticlesController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_categorie_article' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategorieArticlesController.prototype, "remove", null);
exports.CategorieArticlesController = CategorieArticlesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [categorie_articles_service_1.CategorieArticlesService])
], CategorieArticlesController);
//# sourceMappingURL=categorie-articles.controller.js.map