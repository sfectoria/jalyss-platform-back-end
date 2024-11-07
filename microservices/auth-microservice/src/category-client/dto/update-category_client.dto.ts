import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryClientDto } from './create-category_client.dto';

export class UpdateCategoryClientDto extends PartialType(
  CreateCategoryClientDto,
) {}
