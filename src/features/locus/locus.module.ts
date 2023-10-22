import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocusController } from './locus.controller';
import { LocusService } from './locus.service';
import { Locus, LocusMembers } from './entities';

@Module({
  imports: [TypeOrmModule.forFeature([Locus, LocusMembers])],
  controllers: [LocusController],
  providers: [LocusService]
})
export class LocusModule { }
