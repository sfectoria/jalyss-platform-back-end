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
exports.SalesInvoicesController = void 0;
const common_1 = require("@nestjs/common");
const sales_invoices_service_1 = require("./sales-invoices.service");
const create_sales_invoice_dto_1 = require("./dto/create-sales-invoice.dto");
const microservices_1 = require("@nestjs/microservices");
let SalesInvoicesController = class SalesInvoicesController {
    constructor(salesInvoicesService) {
        this.salesInvoicesService = salesInvoicesService;
    }
    async create(createSalesInvoiceDto) {
        return await this.salesInvoicesService.create(createSalesInvoiceDto);
    }
    async findAll() {
        return await this.salesInvoicesService.findAll();
    }
    async findOne(data) {
        return await this.salesInvoicesService.findOne(data.id);
    }
    async update(data) {
        return await this.salesInvoicesService.update(data.id, data.updateSalesInvoiceDto);
    }
    async remove(data) {
        return await this.salesInvoicesService.remove(data.id);
    }
};
exports.SalesInvoicesController = SalesInvoicesController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create salesInvioce' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sales_invoice_dto_1.CreateSalesInvoiceDto]),
    __metadata("design:returntype", Promise)
], SalesInvoicesController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'all_salesInvoice' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesInvoicesController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getOne_salesInvoice' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalesInvoicesController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_salesInvoice' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalesInvoicesController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_salesInvoice' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalesInvoicesController.prototype, "remove", null);
exports.SalesInvoicesController = SalesInvoicesController = __decorate([
    (0, common_1.Controller)('sales-invoices'),
    __metadata("design:paramtypes", [sales_invoices_service_1.SalesInvoicesService])
], SalesInvoicesController);
//# sourceMappingURL=sales-invoices.controller.js.map