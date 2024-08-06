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
exports.SalesBlfsController = void 0;
const common_1 = require("@nestjs/common");
const sales_blfs_service_1 = require("./sales-blfs.service");
const create_sales_blf_dto_1 = require("./dto/create-sales-blf.dto");
const microservices_1 = require("@nestjs/microservices");
let SalesBlfsController = class SalesBlfsController {
    constructor(salesBlfsService) {
        this.salesBlfsService = salesBlfsService;
    }
    async create(createSalesBlfDto) {
        return await this.salesBlfsService.create(createSalesBlfDto);
    }
    async findAll() {
        return await this.salesBlfsService.findAll();
    }
    async findOne(data) {
        return await this.salesBlfsService.findOne(data.id);
    }
    async update(data) {
        return await this.salesBlfsService.update(data.id, data.updateSalesBlfDto);
    }
    async remove(data) {
        return await this.salesBlfsService.remove(data.id);
    }
};
exports.SalesBlfsController = SalesBlfsController;
__decorate([
    (0, microservices_1.MessagePattern)('create_salesblf'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sales_blf_dto_1.CreateSalesBlfDto]),
    __metadata("design:returntype", Promise)
], SalesBlfsController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)('all_salesblfs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesBlfsController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)('getOne_salesblf'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalesBlfsController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)('update_salesblf'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalesBlfsController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete_salesblf'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalesBlfsController.prototype, "remove", null);
exports.SalesBlfsController = SalesBlfsController = __decorate([
    (0, common_1.Controller)('sales-blfs'),
    __metadata("design:paramtypes", [sales_blfs_service_1.SalesBlfsService])
], SalesBlfsController);
//# sourceMappingURL=sales-blfs.controller.js.map