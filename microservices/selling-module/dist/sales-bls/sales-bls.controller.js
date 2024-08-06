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
exports.SalesBlsController = void 0;
const common_1 = require("@nestjs/common");
const sales_bls_service_1 = require("./sales-bls.service");
const create_sales_bl_dto_1 = require("./dto/create-sales-bl.dto");
const microservices_1 = require("@nestjs/microservices");
let SalesBlsController = class SalesBlsController {
    constructor(salesBlsService) {
        this.salesBlsService = salesBlsService;
    }
    async create(createSalesBlDto) {
        return await this.salesBlsService.create(createSalesBlDto);
    }
    async findAll() {
        return await this.salesBlsService.findAll();
    }
    async findOne(id) {
        return await this.salesBlsService.findOne(+id);
    }
    async update(data) {
        return await this.salesBlsService.update(data.id, data.updateSalesBlDto);
    }
    async remove(id) {
        return await this.salesBlsService.remove(+id);
    }
};
exports.SalesBlsController = SalesBlsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_salesbl' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sales_bl_dto_1.CreateSalesBlDto]),
    __metadata("design:returntype", Promise)
], SalesBlsController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'all_salesbls' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesBlsController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'gteOne_salesbl' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SalesBlsController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_salesbl' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalesBlsController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_salesbl' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SalesBlsController.prototype, "remove", null);
exports.SalesBlsController = SalesBlsController = __decorate([
    (0, common_1.Controller)('sales-bls'),
    __metadata("design:paramtypes", [sales_bls_service_1.SalesBlsService])
], SalesBlsController);
//# sourceMappingURL=sales-bls.controller.js.map