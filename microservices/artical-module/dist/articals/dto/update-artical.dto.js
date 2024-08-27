"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateArticalDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_artical_dto_1 = require("./create-artical.dto");
class UpdateArticalDto extends (0, mapped_types_1.PartialType)(create_artical_dto_1.CreateArticalDto) {
}
exports.UpdateArticalDto = UpdateArticalDto;
//# sourceMappingURL=update-artical.dto.js.map