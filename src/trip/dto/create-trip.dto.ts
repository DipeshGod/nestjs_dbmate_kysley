import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTripDto {
  @ApiProperty()
  @IsNotEmpty()
  pickup_address: string;

  @ApiProperty()
  @IsNotEmpty()
  destination_address: string;
}
