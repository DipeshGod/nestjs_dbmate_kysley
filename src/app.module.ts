import { Module } from '@nestjs/common';
import { TripModule } from './trip/trip.module';
import { KyselyModule } from 'nestjs-kysely';
import { MysqlDialect } from 'kysely';
import { createPool } from 'mysql2';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    KyselyModule.forRoot({
      dialect: new MysqlDialect({
        pool: createPool({
          host: process.env.DATABASE_HOST,
          port: Number(process.env.DATABASE_PORT),
          user: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME,
        }),
      }),
    }),
    TripModule,
  ],
})
export class AppModule {}
