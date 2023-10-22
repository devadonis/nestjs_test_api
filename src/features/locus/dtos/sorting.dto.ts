import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SortingDto {
  @ApiProperty({
    required: false,
    default: 'ASC'
  })
  @IsOptional()
  @IsString()
  orderId: 'ASC' | 'DESC';

  @ApiProperty({
    required: false,
    default: 'ASC'
  })
  @IsOptional()
  @IsString()
  orderAId: 'ASC' | 'DESC';
}