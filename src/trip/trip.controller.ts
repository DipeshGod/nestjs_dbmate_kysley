import { Controller, Get } from '@nestjs/common';
import { TripService } from './trip.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('trips')
@ApiTags('trips')
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
