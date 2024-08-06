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
const sales_channels_module_1 = require("./sales-channels/sales-channels.module");
const nestjs_prisma_1 = require("nestjs-prisma");
const config_1 = require("@nestjs/config");
const sales_invoices_module_1 = require("./sales-invoices/sales-invoices.module");
const sales_bls_module_1 = require("./sales-bls/sales-bls.module");
const sales_blfs_module_1 = require("./sales-blfs/sales-blfs.module");
const bon_comnds_module_1 = require("./bon-comnds/bon-comnds.module");
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
            nestjs_prisma_1.PrismaModule.forRoot({ isGlobal: true }), sales_channels_module_1.SalesChannelsModule, sales_invoices_module_1.SalesInvoicesModule, sales_bls_module_1.SalesBlsModule, sales_blfs_module_1.SalesBlfsModule, bon_comnds_module_1.BonComndsModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map