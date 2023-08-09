import { Injectable } from '@nestjs/common';
import { DB } from 'db/interface/db';
import { InjectKysely } from 'nestjs-kysely';
import { CreateTripDto } from './dto/create-trip.dto';

@Injectable()
export class TripService {
  constructor(@InjectKysely() private readonly db: DB) {}

  async getTrips() {
    return await this.db.selectFrom('trip').selectAll().execute();
  }

  async createTrip(createTripDto: CreateTripDto) {
    return this.db.insertInto('trip').values(createTripDto);
  }
}
