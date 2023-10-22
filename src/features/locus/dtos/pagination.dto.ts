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
  pageNum: number = 1;

  @ApiProperty({
    required: false,
    default: 1000
  })
  @IsOptional()
  @IsInt()
  @Transform(({ value }) => parseInt(value))
  displayCount: number = 1000;
}
