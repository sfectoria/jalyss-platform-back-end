"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategorieClientDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_categorie_client_dto_1 = require("./create-categorie_client.dto");
class UpdateCategorieClientDto extends (0, mapped_types_1.PartialType)(create_categorie_client_dto_1.CreateCategorieClientDto) {
}
exports.UpdateCategorieClientDto = UpdateCategorieClientDto;
//# sourceMappingURL=update-categorie_client.dto.js.map