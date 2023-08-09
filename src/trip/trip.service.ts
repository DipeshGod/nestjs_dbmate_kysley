import { Injectable } from '@nestjs/common';
import { DB } from 'db/interface/db';
import { Trip } from 'db/interface/types';
import { InjectKysely } from 'nestjs-kysely';

@Injectable()
export class TripService {
  constructor(@InjectKysely() private readonly db: DB) {}

  async getTrips(): Promise<Trip[]> {
    const result = await this.db.selectFrom('trip').selectAll().execute();

    return result;
  }
}
