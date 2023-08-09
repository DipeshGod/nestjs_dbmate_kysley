import { Kysely } from 'kysely';
import { Database } from './types';

export type DB = Kysely<Database>;
