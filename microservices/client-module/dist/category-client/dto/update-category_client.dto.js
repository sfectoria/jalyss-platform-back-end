"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCategoryClientDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_category_client_dto_1 = require("./create-category_client.dto");
class UpdateCategoryClientDto extends (0, mapped_types_1.PartialType)(create_category_client_dto_1.CreateCategoryClientDto) {
}
exports.UpdateCategoryClientDto = UpdateCategoryClientDto;
//# sourceMappingURL=update-category_client.dto.js.map