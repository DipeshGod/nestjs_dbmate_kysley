import { Body, Controller, Get, Post } from '@nestjs/common';
import { TripService } from './trip.service';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CreateTripDto } from './dto/create-trip.dto';
import { TripEntity } from './entities/trip.entity';

@Controller('trips')
@ApiTags('trips')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @Get()
  @ApiCreatedResponse({ type: TripEntity, isArray: true })
  async getAllTrips() {
    const trips = await this.tripService.getTrips();

    return trips.map((trip) => new TripEntity(trip));
  }

  @Post()
  @ApiCreatedResponse({ type: TripEntity })
  async createTrip(@Body() createTripDto: CreateTripDto) {
    return new TripEntity(await this.tripService.createTrip(createTripDto));
  }
}
