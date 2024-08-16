import { PartialType } from '@nestjs/swagger';
import {
  CreateArticalDto,
  CreateCategoryArticalDto,
  CreatePublishingHouseDto,
} from './create-artical.dto';

export class UpdateArticalDto extends PartialType(CreateArticalDto) {}
export class UpdatePublishingHouses extends PartialType(
  CreatePublishingHouseDto,
) {}
export class UpdateCategoryArticalDto extends PartialType(
  CreateCategoryArticalDto,
) {}
