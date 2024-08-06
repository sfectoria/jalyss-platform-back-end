"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategorieArticleDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_categorie_article_dto_1 = require("./create-categorie-article.dto");
class UpdateCategorieArticleDto extends (0, mapped_types_1.PartialType)(create_categorie_article_dto_1.CreateCategorieArticleDto) {
}
exports.UpdateCategorieArticleDto = UpdateCategorieArticleDto;
//# sourceMappingURL=update-categorie-article.dto.js.map