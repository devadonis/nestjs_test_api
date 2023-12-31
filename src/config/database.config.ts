import { registerAs } from '@nestjs/config';
import { Locus, LocusMembers } from '../features/locus/entities';

export const databaseConfig = registerAs('database', () => ({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [Locus, LocusMembers],
  synchronize: true // Shouldn't be used in production otherwise you can lose production data
}));
