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
exports.InventoryController = void 0;
const common_1 = require("@nestjs/common");
const inventory_service_1 = require("./inventory.service");
const create_inventory_dto_1 = require("./dto/create-inventory.dto");
const microservices_1 = require("@nestjs/microservices");
const inventory_entity_1 = require("./entities/inventory.entity");
let InventoryController = class InventoryController {
    constructor(inventoryService) {
        this.inventoryService = inventoryService;
    }
    async create(createInventoryDto) {
        return this.inventoryService.create(createInventoryDto);
    }
    async createLine(createInventoryLineDto) {
        return this.inventoryService.createLine(createInventoryLineDto);
    }
    async findAll(filters) {
        return this.inventoryService.findAll(filters);
    }
    async findOne(data) {
        return this.inventoryService.findOne(data.id, data.filters);
    }
    async update(data) {
        return this.inventoryService.update(data.id, data.updateInventoryDto);
    }
    async updateLine(data) {
        return this.inventoryService.updateLine(+data.id, data.updateInventoryLineDto);
    }
    async remove(data) {
        return this.inventoryService.remove(data.id);
    }
};
exports.InventoryController = InventoryController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_inventory' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inventory_dto_1.CreateInventoryDto]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_inventoryLine' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inventory_dto_1.InventoryLineDto]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "createLine", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'all_inventories' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [inventory_entity_1.InventoryFilters]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getOne_inventory' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_inventory' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_inventoryLine' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "updateLine", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_inventory' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InventoryController.prototype, "remove", null);
exports.InventoryController = InventoryController = __decorate([
    (0, common_1.Controller)('inventory'),
    __metadata("design:paramtypes", [inventory_service_1.InventoryService])
], InventoryController);
//# sourceMappingURL=inventory.controller.js.map