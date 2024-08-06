"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBonReceptionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bon_reception_dto_1 = require("./create-bon-reception.dto");
class UpdateBonReceptionDto extends (0, mapped_types_1.PartialType)(create_bon_reception_dto_1.CreateBonReceptionDto) {
}
exports.UpdateBonReceptionDto = UpdateBonReceptionDto;
//# sourceMappingURL=update-bon-reception.dto.js.map