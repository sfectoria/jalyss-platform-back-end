import {
  IsString,
  IsOptional,
  IsEmail,
  IsDate,
  IsInt,
  IsNumber,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class CreateReceiptNoteDto {
  @ApiProperty()
  @IsDate()
  receiptDate: Date;

  @ApiProperty()
  @IsInt()
  numReceiptNote: number;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  subTotalAmount?: number;

  @ApiPropertyOptional()
  @IsNumber()
  @IsOptional()
  totalAmount?: number;
}

export class CreateProviderDto {
  @ApiProperty()
  @IsString()
  nameProvider: string;

  @ApiProperty()
  @IsString()
  phoneNumber: string;

  @ApiProperty()
  @IsString()
  adresse: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  registrationNumber: string;
  @ApiProperty()
  mediaId :string;

  @ApiPropertyOptional({ type: [CreateReceiptNoteDto] })
  receiptNotes: CreateReceiptNoteDto[];
}
