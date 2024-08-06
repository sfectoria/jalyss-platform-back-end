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
exports.SalesChannelsController = void 0;
const common_1 = require("@nestjs/common");
const sales_channels_service_1 = require("./sales-channels.service");
const create_sales_channel_dto_1 = require("./dto/create-sales-channel.dto");
const microservices_1 = require("@nestjs/microservices");
let SalesChannelsController = class SalesChannelsController {
    constructor(salesChannelsService) {
        this.salesChannelsService = salesChannelsService;
    }
    async create(createSalesChannelDto) {
        return await this.salesChannelsService.create(createSalesChannelDto);
    }
    async findAll() {
        return await this.salesChannelsService.findAll();
    }
    async findOne(id) {
        return await this.salesChannelsService.findOne(+id);
    }
    async update(data) {
        return await this.salesChannelsService.update(data.id, data.updateSalesChannelDto);
    }
    async remove(id) {
        return await this.salesChannelsService.remove(+id);
    }
};
exports.SalesChannelsController = SalesChannelsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_selling' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sales_channel_dto_1.CreateSalesChannelDto]),
    __metadata("design:returntype", Promise)
], SalesChannelsController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'all_selling' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SalesChannelsController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getOne_selling' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SalesChannelsController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_selling' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], SalesChannelsController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_selling' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SalesChannelsController.prototype, "remove", null);
exports.SalesChannelsController = SalesChannelsController = __decorate([
    (0, common_1.Controller)('sales-channels'),
    __metadata("design:paramtypes", [sales_channels_service_1.SalesChannelsService])
], SalesChannelsController);
//# sourceMappingURL=sales-channels.controller.js.map