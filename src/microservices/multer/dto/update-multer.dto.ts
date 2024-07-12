import { PartialType } from '@nestjs/mapped-types';
import { CreateMulterDto } from './create-multer.dto';

export class UpdateMulterDto extends PartialType(CreateMulterDto) {
  id: number;
}
