import { IsInt, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class PaginationDto {
  @ApiProperty({
    required: false,
    default: 1
  })
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  readonly pageNum: number = 1;

  @ApiProperty({
    required: false,
    default: 1000
  })
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  readonly displayCount: number = 1000;
}
