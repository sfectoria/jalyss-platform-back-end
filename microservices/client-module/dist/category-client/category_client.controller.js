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
exports.CategoryClientsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const create_category_client_dto_1 = require("./dto/create-category_client.dto");
const category_client_service_1 = require("./category_client.service");
let CategoryClientsController = class CategoryClientsController {
    constructor(categoryClientsService) {
        this.categoryClientsService = categoryClientsService;
    }
    async create(message) {
        console.log('create payload:', message);
        return await this.categoryClientsService.create(message);
    }
    async findAll() {
        console.log('findAll called');
        return await this.categoryClientsService.findAll();
    }
    async findOne(data) {
        console.log('findOne payload:', data);
        return await this.categoryClientsService.findOne(data.id);
    }
    async update(data) {
        console.log('update payload:', data);
        return await this.categoryClientsService.update(data.id, data.updateCategorieClientDto);
    }
    async remove(data) {
        console.log('remove payload:', data);
        return await this.categoryClientsService.remove(data.id);
    }
};
exports.CategoryClientsController = CategoryClientsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_categoryClient' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_client_dto_1.CreateCategoryClientDto]),
    __metadata("design:returntype", Promise)
], CategoryClientsController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'all_categoryClients' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryClientsController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getOne_categoryClient' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryClientsController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_categoryClient' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryClientsController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_categoryClient' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryClientsController.prototype, "remove", null);
exports.CategoryClientsController = CategoryClientsController = __decorate([
    (0, common_1.Controller)('categorie-clients'),
    __metadata("design:paramtypes", [category_client_service_1.CategoryClientsService])
], CategoryClientsController);
//# sourceMappingURL=category_client.controller.js.map