import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locus } from './entities';
import { Role } from '../auth/enums/role.enum';
import { FilterOptionsDto, SortingDto, PaginationDto } from './dtos';
import { IUser } from '../auth/interfaces';

import { SideLoading } from './enums';

@Injectable()
export class LocusService {
  constructor(
    @InjectRepository(Locus)
    private readonly locusRepository: Repository<Locus>,
  ) { }

  async getByRole(
    user: IUser,
    filterOptions: FilterOptionsDto,
    sorting: SortingDto,
    pagination: PaginationDto
  ): Promise<Locus[]> {
    const { role } = user;
    const { pageNum, displayCount } = pagination;
    const skipCount = (pageNum - 1) * displayCount;

    const select: any = {
      select: {
        locusMembers: {
          locusMemberId: true,
          regionId: true,
          locusId: true,
          membershipStatus: true,
        }
      }
    }

    const orderAndPagenation: any = {
       order: {
        id: sorting.orderId,
        assemblyId: sorting.orderAId
       },
      skip: skipCount,
      take: displayCount,
    }

    const sideload: any = {
      relations: ['locusMembers'],
    }

    const where: any = {
      id: filterOptions.id,
      assemblyId: filterOptions.assemblyId,
      LocusMembers: {
        regionId: filterOptions.regionId,
        membershipStatus: filterOptions.membershipStatus,
      }
    }

    const whereForLimited = {     
      id: filterOptions.id,
      assemblyId: filterOptions.assemblyId,
      LocusMembers: [
        {
          membershipStatus: filterOptions.membershipStatus,
          regionId: 86118093,
        },
        {
          membershipStatus: filterOptions.membershipStatus,
          regionId: 86696489,
        },
        {
          membershipStatus: filterOptions.membershipStatus,
          regionId: 88186467,
        },
      ]
    }
    // Admin with sideloading
    if (filterOptions.sideLoading == SideLoading.TRUE && role == Role.ADMIN) {
      return this.locusRepository.find({ ...select, ...sideload, ...where, ...orderAndPagenation });
    }
    // Limited
    if (role == Role.LIMITED) {
      if (filterOptions.sideLoading == SideLoading.TRUE)
        return this.locusRepository.find({ ...select, ...sideload, ...whereForLimited, ...orderAndPagenation });
      else
        return this.locusRepository.find({ ...select, ...whereForLimited, ...orderAndPagenation });
    }
    // Admin without sideloading and Noraml case
    return this.locusRepository.find({ ...select, ...where, ...orderAndPagenation });
  }
}
