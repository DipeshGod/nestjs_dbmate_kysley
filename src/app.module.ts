import { Module } from '@nestjs/common';
import { TripModule } from './trip/trip.module';
import { KyselyModule } from 'nestjs-kysely';
import { MysqlDialect } from 'kysely';
import { createPool } from 'mysql2';

@Module({
  imports: [
    KyselyModule.forRoot({
      dialect: new MysqlDialect({
        pool: createPool({
          host: '127.0.0.1',
          port: 3307,
          user: 'admin',
          password: 'admin',
          database: 'thor',
        }),
      }),
    }),
    TripModule,
  ],
})
export class AppModule {}
