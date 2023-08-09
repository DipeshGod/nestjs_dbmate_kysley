import { Generated, Insertable, Selectable, Updateable } from 'kysely';

export interface Database {
  trip: TripTable;
}

export interface TripTable {
  trip_id: Generated<number>;
  pickup_address: string;
  destination_address: string;
}

export type Trip = Selectable<TripTable>;
export type NewTrip = Insertable<TripTable>;
export type TripUpdate = Updateable<TripTable>;
