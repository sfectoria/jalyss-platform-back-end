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
exports.CategoryArticalsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const create_category_artical_dto_1 = require("./dto/create-category-artical.dto");
const category_articals_service_1 = require("./category-articals.service");
let CategoryArticalsController = class CategoryArticalsController {
    constructor(categoryArticalsService) {
        this.categoryArticalsService = categoryArticalsService;
    }
    async create(createCategoryArticalDto) {
        return this.categoryArticalsService.create(createCategoryArticalDto);
    }
    async findAll() {
        return this.categoryArticalsService.findAll();
    }
    async findOne(data) {
        return this.categoryArticalsService.findOne(data.id);
    }
    async update(data) {
        return this.categoryArticalsService.update(data.id, data.updateCategoryArticalDto);
    }
    async remove(data) {
        return this.categoryArticalsService.remove(data.id);
    }
};
exports.CategoryArticalsController = CategoryArticalsController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_categoryArtical' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_artical_dto_1.CreateCategoryArticalDto]),
    __metadata("design:returntype", Promise)
], CategoryArticalsController.prototype, "create", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'all_categoryArticals' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryArticalsController.prototype, "findAll", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getOne_categoryArtical' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryArticalsController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'update_categoryArtical' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryArticalsController.prototype, "update", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'delete_categoryArtical' }),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CategoryArticalsController.prototype, "remove", null);
exports.CategoryArticalsController = CategoryArticalsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [category_articals_service_1.CategoryArticalsService])
], CategoryArticalsController);
//# sourceMappingURL=category-articals.controller.js.map