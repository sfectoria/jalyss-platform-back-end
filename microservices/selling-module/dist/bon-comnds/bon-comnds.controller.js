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
exports.BonComndsController = void 0;
const common_1 = require("@nestjs/common");
const bon_comnds_service_1 = require("./bon-comnds.service");
const create_bon_comnd_dto_1 = require("./dto/create-bon-comnd.dto");
const update_bon_comnd_dto_1 = require("./dto/update-bon-comnd.dto");
const microservices_1 = require("@nestjs/microservices");
let BonComndsController = class BonComndsController {
    constructor(bonComndsService) {
        this.bonComndsService = bonComndsService;
    }
    async create(createBonComndDto) {
        return await this.bonComndsService.create(createBonComndDto);
    }
    async findAll() {
        return await this.bonComndsService.findAll();
    }
    async findOne(id) {
        return await this.bonComndsService.findOne(+id);
    }
    async update(id, updateBonComndDto) {
        return await this.bonComndsService.update(+id, updateBonComndDto);
    }
    async remove(id) {
        return await this.bonComndsService.remove(+id);
    }
};
exports.BonComndsController = BonComndsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_bonComnd' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_bon_comnd_dto_1.CreateBonComndDto]),
    __metadata("design:returntype", Promise)
], BonComndsController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'all_bonComnds' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BonComndsController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getOne_bonComnd' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BonComndsController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_bonComnd' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_bon_comnd_dto_1.UpdateBonComndDto]),
    __metadata("design:returntype", Promise)
], BonComndsController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_bonComnd' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BonComndsController.prototype, "remove", null);
exports.BonComndsController = BonComndsController = __decorate([
    (0, common_1.Controller)('bon-comnds'),
    __metadata("design:paramtypes", [bon_comnds_service_1.BonComndsService])
], BonComndsController);
//# sourceMappingURL=bon-comnds.controller.js.map