"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorieArticlesModule = void 0;
const common_1 = require("@nestjs/common");
const categorie_articles_service_1 = require("./categorie-articles.service");
const categorie_articles_controller_1 = require("./categorie-articles.controller");
let CategorieArticlesModule = class CategorieArticlesModule {
};
exports.CategorieArticlesModule = CategorieArticlesModule;
exports.CategorieArticlesModule = CategorieArticlesModule = __decorate([
    (0, common_1.Module)({
        controllers: [categorie_articles_controller_1.CategorieArticlesController],
        providers: [categorie_articles_service_1.CategorieArticlesService],
    })
], CategorieArticlesModule);
//# sourceMappingURL=categorie-articles.module.js.map