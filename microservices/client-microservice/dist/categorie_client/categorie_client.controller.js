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
exports.CategorieClientsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const create_categorie_client_dto_1 = require("./dto/create-categorie_client.dto");
const categorie_client_service_1 = require("./categorie_client.service");
let CategorieClientsController = class CategorieClientsController {
    constructor(categorieClientsService) {
        this.categorieClientsService = categorieClientsService;
    }
    async create(message) {
        console.log('create payload:', message);
        return await this.categorieClientsService.create(message);
    }
    async findAll() {
        console.log('findAll called');
        return await this.categorieClientsService.findAll();
    }
    async findOne(data) {
        console.log('findOne payload:', data);
        return await this.categorieClientsService.findOne(data.id);
    }
    async update(data) {
        console.log('update payload:', data);
        return await this.categorieClientsService.update(data.id, data.updateCategorieClientDto);
    }
    async remove(data) {
        console.log('remove payload:', data);
        return await this.categorieClientsService.remove(data.id);
    }
};
exports.CategorieClientsController = CategorieClientsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_categorie_client' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_categorie_client_dto_1.CreateCategorieClientDto]),
    __metadata("design:returntype", Promise)
], CategorieClientsController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'all_categorie_clients' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategorieClientsController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getOne_categorie_client' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategorieClientsController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_categorie_client' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategorieClientsController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_categorie_client' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategorieClientsController.prototype, "remove", null);
exports.CategorieClientsController = CategorieClientsController = __decorate([
    (0, common_1.Controller)('categorie-clients'),
    __metadata("design:paramtypes", [categorie_client_service_1.CategorieClientsService])
], CategorieClientsController);
//# sourceMappingURL=categorie_client.controller.js.map