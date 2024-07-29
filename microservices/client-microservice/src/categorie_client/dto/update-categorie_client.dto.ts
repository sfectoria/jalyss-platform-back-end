import { PartialType } from '@nestjs/mapped-types';
import { CreateCategorieClientDto } from './create-categorie_client.dto';

export class UpdateCategorieClientDto extends PartialType(
  CreateCategorieClientDto,
) {}
