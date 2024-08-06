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
exports.BonTransfersController = void 0;
const common_1 = require("@nestjs/common");
const bon_transfers_service_1 = require("./bon-transfers.service");
const create_bon_transfer_dto_1 = require("./dto/create-bon-transfer.dto");
const update_bon_transfer_dto_1 = require("./dto/update-bon-transfer.dto");
const microservices_1 = require("@nestjs/microservices");
let BonTransfersController = class BonTransfersController {
    constructor(bonTransfersService) {
        this.bonTransfersService = bonTransfersService;
    }
    async create(createBonTransferDto) {
        return await this.bonTransfersService.create(createBonTransferDto);
    }
    async findAll() {
        return await this.bonTransfersService.findAll();
    }
    async findOne(id) {
        return await this.bonTransfersService.findOne(+id);
    }
    async update(id, updateBonTransferDto) {
        return await this.bonTransfersService.update(+id, updateBonTransferDto);
    }
    async remove(id) {
        return await this.bonTransfersService.remove(+id);
    }
};
exports.BonTransfersController = BonTransfersController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_bonTransfer' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bon_transfer_dto_1.CreateBonTransferDto]),
    __metadata("design:returntype", Promise)
], BonTransfersController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'all_bonTransfers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BonTransfersController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'one_bonTransfer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BonTransfersController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_bonTransfer' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bon_transfer_dto_1.UpdateBonTransferDto]),
    __metadata("design:returntype", Promise)
], BonTransfersController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'remove_bonTransfer' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BonTransfersController.prototype, "remove", null);
exports.BonTransfersController = BonTransfersController = __decorate([
    (0, common_1.Controller)('bon-transfers'),
    __metadata("design:paramtypes", [bon_transfers_service_1.BonTransfersService])
], BonTransfersController);
//# sourceMappingURL=bon-transfers.controller.js.map