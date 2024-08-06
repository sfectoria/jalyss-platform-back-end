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
exports.StocksController = void 0;
const common_1 = require("@nestjs/common");
const stocks_service_1 = require("./stocks.service");
const create_stock_dto_1 = require("./dto/create-stock.dto");
const microservices_1 = require("@nestjs/microservices");
let StocksController = class StocksController {
    constructor(stocksService) {
        this.stocksService = stocksService;
    }
    async create(message) {
        return await this.stocksService.create(message);
    }
    async findAll() {
        return await this.stocksService.findAll();
    }
    async findOne(data) {
        console.log('findOne payload:', data);
        return await this.stocksService.findOne(data.id);
    }
    async update(data) {
        return await this.stocksService.update(data.id, data.updateStockDto);
    }
    async remove(data) {
        console.log('remove payload:', data);
        return await this.stocksService.remove(data.id);
    }
};
exports.StocksController = StocksController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_stock' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_stock_dto_1.CreateStockDto]),
    __metadata("design:returntype", Promise)
], StocksController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'all_stocks' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StocksController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getOne_stock' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StocksController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_stock' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StocksController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_stock' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StocksController.prototype, "remove", null);
exports.StocksController = StocksController = __decorate([
    (0, common_1.Controller)('stocks'),
    __metadata("design:paramtypes", [stocks_service_1.StocksService])
], StocksController);
//# sourceMappingURL=stocks.controller.js.map