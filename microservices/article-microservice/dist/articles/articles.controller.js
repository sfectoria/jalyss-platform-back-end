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
exports.ArticlesController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const articles_service_1 = require("./articles.service");
const create_article_dto_1 = require("./dto/create-article.dto");
let ArticlesController = class ArticlesController {
    constructor(articlesService) {
        this.articlesService = articlesService;
    }
    async create(message) {
        console.log('create payload:', message);
        return await this.articlesService.create(message);
    }
    async findAll() {
        console.log('findAll called');
        return await this.articlesService.findAll();
    }
    async findOne(data) {
        console.log('findOne payload:', data);
        return await this.articlesService.findOne(data.id);
    }
    async update(data) {
        console.log('update payload:', data);
        return await this.articlesService.update(data.id, data.updateArticleDto);
    }
    async remove(data) {
        console.log('remove payload:', data);
        return await this.articlesService.remove(data.id);
    }
};
exports.ArticlesController = ArticlesController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_article' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_article_dto_1.CreateArticleDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'all_articles' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getOne_article' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_article' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_article' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "remove", null);
exports.ArticlesController = ArticlesController = __decorate([
    (0, common_1.Controller)('articles'),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesController);
//# sourceMappingURL=articles.controller.js.map