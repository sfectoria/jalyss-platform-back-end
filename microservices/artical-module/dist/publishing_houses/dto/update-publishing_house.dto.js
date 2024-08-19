"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePublishingHouseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_publishing_house_dto_1 = require("./create-publishing_house.dto");
class UpdatePublishingHouseDto extends (0, mapped_types_1.PartialType)(create_publishing_house_dto_1.CreatePublishingHouseDto) {
}
exports.UpdatePublishingHouseDto = UpdatePublishingHouseDto;
//# sourceMappingURL=update-publishing_house.dto.js.map