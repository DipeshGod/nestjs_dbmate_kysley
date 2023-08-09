import { Database } from 'db/interface/types';
import { Kysely, MysqlDialect } from 'kysely';
import { createPool } from 'mysql2';

const dialect = new MysqlDialect({
  pool: createPool({
    host: '127.0.0.1',
    port: 3307,
    user: 'admin',
    password: 'admin',
    database: 'thor',
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
