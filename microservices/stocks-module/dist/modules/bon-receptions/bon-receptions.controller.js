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
exports.BonReceptionsController = void 0;
const common_1 = require("@nestjs/common");
const bon_receptions_service_1 = require("./bon-receptions.service");
const create_bon_reception_dto_1 = require("./dto/create-bon-reception.dto");
const update_bon_reception_dto_1 = require("./dto/update-bon-reception.dto");
const microservices_1 = require("@nestjs/microservices");
let BonReceptionsController = class BonReceptionsController {
    constructor(bonReceptionsService) {
        this.bonReceptionsService = bonReceptionsService;
    }
    async create(createBonReceptionDto) {
        return await this.bonReceptionsService.create(createBonReceptionDto);
    }
    async findAll() {
        return await this.bonReceptionsService.findAll();
    }
    async findOne(id) {
        return await this.bonReceptionsService.findOne(+id);
    }
    async update(id, updateBonReceptionDto) {
        return await this.bonReceptionsService.update(+id, updateBonReceptionDto);
    }
    async remove(id) {
        return await this.bonReceptionsService.remove(+id);
    }
};
exports.BonReceptionsController = BonReceptionsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_bonReception' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bon_reception_dto_1.CreateBonReceptionDto]),
    __metadata("design:returntype", Promise)
], BonReceptionsController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'all_bonReceptions' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BonReceptionsController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getOne_bonReception' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BonReceptionsController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_bonReception' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bon_reception_dto_1.UpdateBonReceptionDto]),
    __metadata("design:returntype", Promise)
], BonReceptionsController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_bonReception' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BonReceptionsController.prototype, "remove", null);
exports.BonReceptionsController = BonReceptionsController = __decorate([
    (0, common_1.Controller)('bon-receptions'),
    __metadata("design:paramtypes", [bon_receptions_service_1.BonReceptionsService])
], BonReceptionsController);
//# sourceMappingURL=bon-receptions.controller.js.map