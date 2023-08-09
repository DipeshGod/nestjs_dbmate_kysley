import { Database } from 'db/interface/types';
import { Kysely, MysqlDialect } from 'kysely';
import { createPool } from 'mysql2';
import * as dotenv from 'dotenv';

dotenv.config();

const dialect = new MysqlDialect({
  pool: createPool({
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  }),
});

const db = new Kysely<Database>({
  dialect,
});

const seedTrips = async () => {
  await db.deleteFrom('trip').execute();
  await db
    .insertInto('trip')
    .values([
      {
        trip_id: 1,
        destination_address: 'random destination address',
        pickup_address: 'random pickup address',
      },
    ])
    .execute();
};

const runSeeds = () => {
  seedTrips();
};

try {
  runSeeds();
} catch (err) {
  console.log('error from seeding', err);
} finally {
  console.log('seeding completed...');
  process.exit(0);
}
