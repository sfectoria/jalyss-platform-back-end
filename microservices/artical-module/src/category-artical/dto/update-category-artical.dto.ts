import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryArticalDto } from './create-category-artical.dto';

export class UpdateCategoryArticalDto extends PartialType(CreateCategoryArticalDto) {}
