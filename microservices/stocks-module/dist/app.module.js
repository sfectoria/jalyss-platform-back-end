"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const nestjs_prisma_1 = require("nestjs-prisma");
const stocks_module_1 = require("./modules/stocks/stocks.module");
const bon_receptions_module_1 = require("./modules/bon-receptions/bon-receptions.module");
const bon_sorties_module_1 = require("./modules/bon-sorties/bon-sorties.module");
const bon_transfers_module_1 = require("./modules/bon-transfers/bon-transfers.module");
const bon_retours_module_1 = require("./modules/bon-retours/bon-retours.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            nestjs_prisma_1.PrismaModule.forRoot({ isGlobal: true }), stocks_module_1.StocksModule, bon_receptions_module_1.BonReceptionsModule, bon_sorties_module_1.BonSortiesModule, bon_transfers_module_1.BonTransfersModule, bon_retours_module_1.BonRetoursModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map