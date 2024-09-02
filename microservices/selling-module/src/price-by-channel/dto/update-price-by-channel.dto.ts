import { ApiProperty } from "@nestjs/swagger";

// src/price-by-channel/dto/update-price-by-channel.dto.ts
export class UpdatePriceByChannelDto {
    @ApiProperty()
    price?: number;
    @ApiProperty()
    idArticle?: number;
    @ApiProperty()
    idSalesChannel?: number;
  }
  