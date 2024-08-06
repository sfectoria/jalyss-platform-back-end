import { PartialType } from '@nestjs/swagger';
import {
  CreateArticleDto,
  CreateCategorieArticleDto,
  Createpublishing_housesDto,
} from './create-article.dto';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {}
export class updatepublishing_houses extends PartialType(
  Createpublishing_housesDto,
) {}
export class UpdateCategorieArticleDto extends PartialType(
  CreateCategorieArticleDto,
) {}
