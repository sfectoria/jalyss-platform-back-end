import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

class PriceByChannelDto {
  @ApiProperty()
  price: number;

  @ApiProperty()
  idSalesChannel: number;
}

class ArticleByAuthorDto {
  @ApiProperty()
  nameAr: string;
  @ApiProperty()
  nameEn?: string;
  @ApiProperty()
  authorID: string; 
}

class MediaDto {
  @ApiProperty()
  @IsString()
  path: string;

  @ApiProperty()
  @IsString()
  type: string;

  @ApiProperty()
  @IsString()
  alt?: string;

  @ApiProperty()
  @IsString()
  extension?: string;

  @ApiProperty()
  @IsString()
  description?: string;
}
class ArticleByPublishingHouseDto {
  @ApiProperty()
  nameAr: string;
  @ApiProperty()
  nameEn?: string;
}
class ArticleByCategoryDto {
  @ApiProperty()
  name: string;
}
export class CreateArticleDto {
  @ApiProperty()
  code: string;
  @ApiProperty()
  @IsString()
  title: string;
  @ApiProperty({ type: [PriceByChannelDto], required: false })
  priceByChannel?: PriceByChannelDto[];
  @ApiProperty({ type: MediaDto, required: false })
  mediaData?: MediaDto;
  @ApiProperty({ type: [ArticleByAuthorDto], required: false })
  articleByAuthor?: ArticleByAuthorDto[];
  @ApiProperty({ type: [ArticleByPublishingHouseDto], required: false })
  articleByPublishingHouse?: ArticleByPublishingHouseDto[];
  @ApiProperty()
  longDescriptionEn?: string;
  @ApiProperty({ type: [ArticleByCategoryDto], required: false })
  articleByCategory?: ArticleByCategoryDto[];
  @ApiProperty()
  coverId?: string;
}

export class CreatePublishingHouseDto {
  @ApiProperty()
  nameAr: string;
  @ApiProperty()
  nameEn: string;
  @ApiProperty()
  address: string;
  @ApiProperty()
  @IsString()
  phone_number: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  logoId: string;
}
export class CreateCategoryArticleDto {
  @ApiProperty()
  @IsString()
  name: string;
}

export class CreateAuthorDto {
  @ApiProperty()
  nameAr: string;
  @ApiProperty()
  nameEn?: string;
  @ApiProperty()
  biographyAr?: string;
  @ApiProperty()
  biographyEn?: string;
}
