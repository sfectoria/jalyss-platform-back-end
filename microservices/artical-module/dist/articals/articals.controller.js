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
exports.ArticalsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const articals_service_1 = require("./articals.service");
const create_artical_dto_1 = require("./dto/create-artical.dto");
let ArticalsController = class ArticalsController {
    constructor(articalsService) {
        this.articalsService = articalsService;
    }
    async create(message) {
        console.log('create payload:', message);
        return await this.articalsService.create(message);
    }
    async findAll() {
        console.log('findAll called');
        return await this.articalsService.findAll();
    }
    async findOne(id) {
        return await this.articalsService.findOne(id);
    }
    async update(data) {
        console.log('update payload:', data);
        return await this.articalsService.update(data.id, data.updateArticalDto);
    }
    async remove(data) {
        console.log('remove payload:', data);
        return await this.articalsService.remove(data.id);
    }
};
exports.ArticalsController = ArticalsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_artical' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_artical_dto_1.CreateArticalDto]),
    __metadata("design:returntype", Promise)
], ArticalsController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'all_articals' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticalsController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getOne_artical' }),
    __param(0, (0, microservices_1.Payload)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticalsController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_artical' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticalsController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_artical' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ArticalsController.prototype, "remove", null);
exports.ArticalsController = ArticalsController = __decorate([
    (0, common_1.Controller)('articals'),
    __metadata("design:paramtypes", [articals_service_1.ArticalsService])
], ArticalsController);
//# sourceMappingURL=articals.controller.js.map