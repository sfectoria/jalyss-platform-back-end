"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublishingHousesModule = void 0;
const common_1 = require("@nestjs/common");
const publishing_houses_service_1 = require("./publishing_houses.service");
const publishing_houses_controller_1 = require("./publishing_houses.controller");
let PublishingHousesModule = class PublishingHousesModule {
};
exports.PublishingHousesModule = PublishingHousesModule;
exports.PublishingHousesModule = PublishingHousesModule = __decorate([
    (0, common_1.Module)({
        controllers: [publishing_houses_controller_1.PublishingHousesController],
        providers: [publishing_houses_service_1.PublishingHousesService],
    })
], PublishingHousesModule);
//# sourceMappingURL=publishing_houses.module.js.map