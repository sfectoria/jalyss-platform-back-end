import { PartialType } from '@nestjs/swagger';
import { CreateCategorieClientDto, CreateClientDto } from './create-client.dto';

export class UpdateClientDto extends PartialType(CreateClientDto) {}
export class UpdateCategorieClientDto extends PartialType(
  CreateCategorieClientDto,
) {}
