import { initContract } from '@ts-rest/core';
import { z } from 'zod';
import { Trip } from 'db/interface/types';

const c = initContract();

const TripSchema = z.object({
  pickup_address: z.string(),
  destination_address: z.string(),
});

export const contract = c.router({
  getTrips: {
    method: 'GET',
    path: '/api/trips',
    responses: {
      200: c.type<Trip[]>(),
    },
    summary: 'Get all the trips',
    description:
      'GET array of trips which can be paginated, searched and filtered',
  },
});
