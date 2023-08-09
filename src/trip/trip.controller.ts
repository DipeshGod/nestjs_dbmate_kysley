import { Controller } from '@nestjs/common';
import { TripService } from './trip.service';
import { nestControllerContract, TsRest } from '@ts-rest/nest';
import { contract } from 'contract';

const c = nestControllerContract(contract);

@Controller('trips')
export class TripController {
  constructor(private readonly tripService: TripService) {}

  @TsRest(c.getTrips)
  async getAllTrips() {
    const data = await this.tripService.getTrips();

    return {
      data,
    };
  }
}
