import { Controller, Request, Body, Query, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { LocusService } from './locus.service';
import { Roles } from '../auth/decorators';
import { Role } from '../auth/enums';
import { FilterOptionsDto, PaginationDto, SortingDto } from './dtos';

@Controller('locus')
@ApiTags('Locus')
export class LocusController {
  constructor(private locusService: LocusService) { }
  
  @Get()
  @Roles(Role.ADMIN, Role.NORMAL, Role.LIMITED)
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  async getLocusByRole(
    @Request() req: any,
    @Query() filterOptions: FilterOptionsDto,
    @Query() pagination: PaginationDto,
    @Query() sorting: SortingDto,
  ) {
    return this.locusService.getByRole(req.user, filterOptions, sorting, pagination);
  }
}
