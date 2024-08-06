"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonTransfersModule = void 0;
const common_1 = require("@nestjs/common");
const bon_transfers_service_1 = require("./bon-transfers.service");
const bon_transfers_controller_1 = require("./bon-transfers.controller");
let BonTransfersModule = class BonTransfersModule {
};
exports.BonTransfersModule = BonTransfersModule;
exports.BonTransfersModule = BonTransfersModule = __decorate([
    (0, common_1.Module)({
        controllers: [bon_transfers_controller_1.BonTransfersController],
        providers: [bon_transfers_service_1.BonTransfersService],
    })
], BonTransfersModule);
//# sourceMappingURL=bon-transfers.module.js.map