import { IsString, IsNotEmpty, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SideLoading } from '../enums';
import { Transform } from 'class-transformer';

export class FilterOptionsDto {
  @ApiProperty({
    required: false
  })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  readonly id?: number;

  @ApiProperty({
    required: false
  })
  @IsOptional()
  @IsString()
  readonly assemblyId?: string;

  @ApiProperty({
    required: false
  })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => parseInt(value))
  readonly regionId?: number;

  @ApiProperty({
    required: false
  })
  @IsOptional()
  @IsString()
  readonly membershipStatus?: string;

  @ApiProperty({
    default: 'true'
  })
  @IsOptional()
  @IsEnum(SideLoading)
  readonly sideLoading?: SideLoading;
}