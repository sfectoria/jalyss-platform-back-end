import { PartialType } from '@nestjs/swagger';
import {
  CreateArticleDto,
  CreateCategoryArticleDto,
  CreatePublishingHouseDto,
} from './create-article.dto';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {}
export class UpdatePublishingHouses extends PartialType(
  CreatePublishingHouseDto,
) {}
export class UpdateCategoryArticleDto extends PartialType(
  CreateCategoryArticleDto,
) {}
