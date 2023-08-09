import { Controller, Get } from '@nestjs/common';
import { TripService } from './trip.service';

@Controller('trips')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Get()
  async getAllTrips() {
    const data = await this.tripService.getTrips();

    return {
      data,
    };
  }
}
