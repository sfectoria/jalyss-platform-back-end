import { ApiProperty } from '@nestjs/swagger';

class SalesInvoiceLine {
  @ApiProperty()
  articalId: number;
}

export class CreateSalesInvoiceDto {
  @ApiProperty()
  idPurchaseOrder?: number;
  @ApiProperty()
  exitNoteId: number;
  @ApiProperty()
  idClient: number;
  @ApiProperty()
  saleChannelId: number;
  @ApiProperty()
  date: string;
  @ApiProperty({ type: [SalesInvoiceLine] })
  salesInvoicelines: SalesInvoiceLine[];
}
