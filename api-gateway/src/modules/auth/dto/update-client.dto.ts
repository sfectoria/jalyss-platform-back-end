import { PartialType } from '@nestjs/swagger';
import { CreateCategoryClientDto, CreateClientDto } from './create-client.dto';

export class UpdateClientDto extends PartialType(CreateClientDto) {}
export class UpdateCategoryClientDto extends PartialType(
  CreateCategoryClientDto,
) {}
