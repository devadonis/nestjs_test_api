import { Controller, UseGuards, Request, Query, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { LocusService } from './locus.service';
import { Roles } from '../auth/decorators';
import { Role } from '../auth/enums';
import { FilterOptionsDto } from './dtos';

@Controller('locus')
export class LocusController {
  constructor(private locusService: LocusService) { }

  @Get()
  @Roles(Role.ADMIN, Role.NORMAL, Role.LIMITED)
  @HttpCode(HttpStatus.OK)
  async getLocusByRole(@Request() req: any, @Query() filterOptions: FilterOptionsDto ) {
    return this.locusService.getByRole(req, filterOptions);
  }
}
