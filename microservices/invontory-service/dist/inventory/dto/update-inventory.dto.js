"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInventoryLineDto = exports.UpdateInventoryDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_inventory_dto_1 = require("./create-inventory.dto");
class UpdateInventoryDto extends (0, mapped_types_1.PartialType)(create_inventory_dto_1.CreateInventoryDto) {
}
exports.UpdateInventoryDto = UpdateInventoryDto;
class UpdateInventoryLineDto extends (0, mapped_types_1.PartialType)(create_inventory_dto_1.InventoryLineDto) {
}
exports.UpdateInventoryLineDto = UpdateInventoryLineDto;
//# sourceMappingURL=update-inventory.dto.js.map