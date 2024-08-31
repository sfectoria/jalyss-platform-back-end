import { ApiProperty } from "@nestjs/swagger";

// src/price-by-channel/dto/create-price-by-channel.dto.ts
export class CreatePriceByChannelDto {
    @ApiProperty()
    price: number;
    @ApiProperty()
    idArticle: number;
    @ApiProperty()
    idSalesChannel: number;
  }
  