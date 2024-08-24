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
exports.PublishingHousesController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const publishing_houses_service_1 = require("./publishing_houses.service");
const create_publishing_house_dto_1 = require("./dto/create-publishing_house.dto");
let PublishingHousesController = class PublishingHousesController {
    constructor(publishingHousesService) {
        this.publishingHousesService = publishingHousesService;
    }
    async create(createPublishingHouseDto) {
        return this.publishingHousesService.create(createPublishingHouseDto);
    }
    async findAll() {
        return this.publishingHousesService.findAll();
    }
    async findOne(data) {
        return this.publishingHousesService.findOne(data.id);
    }
    async update(data) {
        return this.publishingHousesService.update(data.id, data.updatePublishingHouseDto);
    }
    async remove(data) {
        return this.publishingHousesService.remove(data.id);
    }
};
exports.PublishingHousesController = PublishingHousesController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_publishing_house' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_publishing_house_dto_1.CreatePublishingHouseDto]),
    __metadata("design:returntype", Promise)
], PublishingHousesController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'all_publishing_house' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PublishingHousesController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getOne_publishing_house' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PublishingHousesController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_publishing_house' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PublishingHousesController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_publishing_house' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PublishingHousesController.prototype, "remove", null);
exports.PublishingHousesController = PublishingHousesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [publishing_houses_service_1.PublishingHousesService])
], PublishingHousesController);
//# sourceMappingURL=publishing_houses.controller.js.map