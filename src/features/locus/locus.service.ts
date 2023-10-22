import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Locus } from './entities';
import { Role } from '../auth/enums/role.enum';
import { FilterOptionsDto } from './dtos';

import { Id, RegoinId, SideLoading, Sort } from './enums';

@Injectable()
export class LocusService {
  constructor(
    @InjectRepository(Locus)
    private readonly locusRepository: Repository<Locus>,
  ) { }

  async getByRole(req: any, filterOptions: FilterOptionsDto ): Promise<Locus[]> {
    console.log(filterOptions);


    const { role } = req.user;
    const select: any = {
      select: { 
        locusMembers: {
          locusMemberId: true ,
          regionId: true,
          locusId: true,
          membershipStatus: true,
        }
      }
    }
    const orderAndPagenation: any = {
      order: {
        id: Sort[filterOptions.idOrder],
        assemblyId: Sort[filterOptions.aIdOrder],
      },
      skip: filterOptions.skip,
      take: filterOptions.take,
    }

    const sideload: any = {
      relations: ['locusMembers'],
    }

    const where: any = {
      assemblyId: filterOptions.assemblyId,
      LocusMembers: {
        membershipStatus: filterOptions.membershipStatus,
      }
    }

    const whereForLimited = {
      assemblyId: filterOptions.assemblyId,
      LocusMembers: [
        {
          membershipStatus: filterOptions.membershipStatus,
          regionId:  86118093,
        },
        {
          membershipStatus: filterOptions.membershipStatus,
          regionId:  86696489,
        },
        {
          membershipStatus: filterOptions.membershipStatus,
          regionId:  88186467,
        },
      ]
    }
    // Admin with sideloading
    if ( filterOptions.sideLoading == SideLoading.ON && role == Role.ADMIN ) {
      return this.locusRepository.find({ ...select, ...sideload, ...where, ...orderAndPagenation });
    }
    if ( role == Role.LIMITED ) {
      if ( filterOptions.sideLoading == SideLoading.ON)
        return this.locusRepository.find({ ...select, ...whereForLimited, ...orderAndPagenation });
      else
        return this.locusRepository.find({ ...select, ...sideload, ...whereForLimited, ...orderAndPagenation });        
      }
    // Admin without sideloading, Noraml case
    return this.locusRepository.find({ ...select, ...where, ...orderAndPagenation });        
  }
}
