"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSalesChannelDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sales_channel_dto_1 = require("./create-sales-channel.dto");
class UpdateSalesChannelDto extends (0, mapped_types_1.PartialType)(create_sales_channel_dto_1.CreateSalesChannelDto) {
}
exports.UpdateSalesChannelDto = UpdateSalesChannelDto;
//# sourceMappingURL=update-sales-channel.dto.js.map