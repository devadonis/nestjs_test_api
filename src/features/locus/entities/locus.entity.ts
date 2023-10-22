import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { LocusMembers } from './locus_members.entity';

@Entity({
  name: 'rnc_locus',
  schema: 'rnacen',
  synchronize: false,
})
export class Locus {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'assembly_id' })
  assemblyId: string;

  @Column({ name: 'locus_name' })
  locusName: string;

  @Column({ name: 'public_locus_name' })
  publicLocusName: string;

  @Column()
  chromosome: string;

  @Column()
  strand: string;

  @Column({ name: 'locus_start' })
  locusStart: number;

  @Column({ name: 'locus_stop' })
  locusStop: number;

  @Column({ name: 'member_count' })
  memberCount: number;

  @OneToMany((type) => LocusMembers, (locusMember) => locusMember.locus)
  locusMembers?: LocusMembers[];
}