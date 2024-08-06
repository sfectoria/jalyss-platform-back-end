"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSalesInvoiceDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sales_invoice_dto_1 = require("./create-sales-invoice.dto");
class UpdateSalesInvoiceDto extends (0, mapped_types_1.PartialType)(create_sales_invoice_dto_1.CreateSalesInvoiceDto) {
}
exports.UpdateSalesInvoiceDto = UpdateSalesInvoiceDto;
//# sourceMappingURL=update-sales-invoice.dto.js.map