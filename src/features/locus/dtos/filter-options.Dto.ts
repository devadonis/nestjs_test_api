import { IsString, IsNotEmpty, IsEnum, IsNumber } from 'class-validator';
import { Id, RegoinId, SideLoading, Sort } from '../enums';
import { Transform } from 'class-transformer';

export class FilterOptionsDto {
  @IsEnum(Id)
  @Transform (({ value }) => parseInt(value))
  readonly id?: Id;

  @IsString()
  readonly assemblyId?: string;

  @IsEnum(RegoinId)
  @Transform (({ value }) => parseInt(value))
  readonly regionId?: RegoinId;

  @IsString()
  readonly membershipStatus?: string;

  @IsNotEmpty()
  @IsNumber()
  @Transform (({ value }) => parseInt(value))
  readonly skip: number;

  @IsNotEmpty()
  @IsNumber()
  @Transform (({ value }) => parseInt(value))
  readonly take: number;

  @IsEnum(Sort)
  @Transform (({ value }) => parseInt(value))
  readonly idOrder?: Sort;
  
  @IsEnum(Sort)
  @Transform (({ value }) => parseInt(value))
  readonly aIdOrder?: Sort;

  @IsEnum(SideLoading)
  @Transform (({ value }) => parseInt(value))
  readonly sideLoading: SideLoading;
}