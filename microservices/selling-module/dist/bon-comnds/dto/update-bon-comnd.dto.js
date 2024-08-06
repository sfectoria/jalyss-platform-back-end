"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBonComndDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bon_comnd_dto_1 = require("./create-bon-comnd.dto");
class UpdateBonComndDto extends (0, mapped_types_1.PartialType)(create_bon_comnd_dto_1.CreateBonComndDto) {
}
exports.UpdateBonComndDto = UpdateBonComndDto;
//# sourceMappingURL=update-bon-comnd.dto.js.map