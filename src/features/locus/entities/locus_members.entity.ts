import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Locus } from './locus.entity';

@Entity({
  name: 'rnc_locus_members',
  schema: 'rnacen',
  synchronize: false,
})
export class LocusMembers {
  @PrimaryGeneratedColumn({ name: 'id' })
  locusMemberId: number;

  @Column({ name: 'urs_taxid' })
  ursTaxid: string;

  @Column({ name: 'region_id' })
  regionId: number;

  @Column({ name: 'locus_id' })
  locusId: number;

  @Column({ name: 'membership_status' })
  membershipStatus: string;

  @ManyToOne((type) => Locus, locus => locus.locusMembers)
  @JoinColumn({ name: 'locus_id' })
  locus: Locus;
}