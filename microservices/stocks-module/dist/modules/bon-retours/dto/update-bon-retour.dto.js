"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBonRetourDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bon_retour_dto_1 = require("./create-bon-retour.dto");
class UpdateBonRetourDto extends (0, mapped_types_1.PartialType)(create_bon_retour_dto_1.CreateBonRetourDto) {
}
exports.UpdateBonRetourDto = UpdateBonRetourDto;
//# sourceMappingURL=update-bon-retour.dto.js.map