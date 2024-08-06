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
exports.BonRetoursController = void 0;
const common_1 = require("@nestjs/common");
const bon_retours_service_1 = require("./bon-retours.service");
const create_bon_retour_dto_1 = require("./dto/create-bon-retour.dto");
const update_bon_retour_dto_1 = require("./dto/update-bon-retour.dto");
const microservices_1 = require("@nestjs/microservices");
let BonRetoursController = class BonRetoursController {
    constructor(bonRetoursService) {
        this.bonRetoursService = bonRetoursService;
    }
    async create(createBonRetourDto) {
        return await this.bonRetoursService.create(createBonRetourDto);
    }
    async findAll() {
        return await this.bonRetoursService.findAll();
    }
    async findOne(id) {
        return await this.bonRetoursService.findOne(+id);
    }
    async update(id, updateBonRetourDto) {
        return await this.bonRetoursService.update(+id, updateBonRetourDto);
    }
    async remove(id) {
        return await this.bonRetoursService.remove(+id);
    }
};
exports.BonRetoursController = BonRetoursController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_bon_retour' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bon_retour_dto_1.CreateBonRetourDto]),
    __metadata("design:returntype", Promise)
], BonRetoursController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_all_bon_retours' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BonRetoursController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_one_bon_retour' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BonRetoursController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_bon_retour' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bon_retour_dto_1.UpdateBonRetourDto]),
    __metadata("design:returntype", Promise)
], BonRetoursController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_bon_retour' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BonRetoursController.prototype, "remove", null);
exports.BonRetoursController = BonRetoursController = __decorate([
    (0, common_1.Controller)('bon-retours'),
    __metadata("design:paramtypes", [bon_retours_service_1.BonRetoursService])
], BonRetoursController);
//# sourceMappingURL=bon-retours.controller.js.map