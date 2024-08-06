"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BonRetoursModule = void 0;
const common_1 = require("@nestjs/common");
const bon_retours_service_1 = require("./bon-retours.service");
const bon_retours_controller_1 = require("./bon-retours.controller");
let BonRetoursModule = class BonRetoursModule {
};
exports.BonRetoursModule = BonRetoursModule;
exports.BonRetoursModule = BonRetoursModule = __decorate([
    (0, common_1.Module)({
        controllers: [bon_retours_controller_1.BonRetoursController],
        providers: [bon_retours_service_1.BonRetoursService],
    })
], BonRetoursModule);
//# sourceMappingURL=bon-retours.module.js.map