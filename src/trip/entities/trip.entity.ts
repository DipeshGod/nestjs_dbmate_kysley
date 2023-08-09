import { ApiProperty } from '@nestjs/swagger';
import { Trip } from 'db/interface/types';

export class TripEntity implements Trip {
  @ApiProperty()
  trip_id: number;

  @ApiProperty()
  pickup_address: string;

  @ApiProperty()
  destination_address: string;
}
