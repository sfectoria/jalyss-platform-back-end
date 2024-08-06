import { PartialType } from '@nestjs/mapped-types';
import { CreateCategorieArticleDto } from './create-categorie-article.dto';

export class UpdateCategorieArticleDto extends PartialType(CreateCategorieArticleDto) {}
