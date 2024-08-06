"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBonTransferDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bon_transfer_dto_1 = require("./create-bon-transfer.dto");
class UpdateBonTransferDto extends (0, mapped_types_1.PartialType)(create_bon_transfer_dto_1.CreateBonTransferDto) {
}
exports.UpdateBonTransferDto = UpdateBonTransferDto;
//# sourceMappingURL=update-bon-transfer.dto.js.map