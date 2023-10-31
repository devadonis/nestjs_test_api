import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SortingDto {
  @ApiProperty({
    required: false,
    default: 'ASC'
  })
  @IsOptional()
  @IsString()
  readonly orderId: 'ASC' | 'DESC';

  @ApiProperty({
    required: false,
    default: 'ASC'
  })
  @IsOptional()
  @IsString()
  readonly orderAId: 'ASC' | 'DESC';
}