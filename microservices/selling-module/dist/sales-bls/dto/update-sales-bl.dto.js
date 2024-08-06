"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSalesBlDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sales_bl_dto_1 = require("./create-sales-bl.dto");
class UpdateSalesBlDto extends (0, mapped_types_1.PartialType)(create_sales_bl_dto_1.CreateSalesBlDto) {
}
exports.UpdateSalesBlDto = UpdateSalesBlDto;
//# sourceMappingURL=update-sales-bl.dto.js.map