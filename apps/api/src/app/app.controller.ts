import { Controller, Get } from '@nestjs/common';

import { Message } from '@nx-dep-boundaries-example/api-interfaces';
import { BookingService } from '@nx-dep-boundaries-example/booking/data-access';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private bookingService: BookingService
  ) {}

  @Get('')
  getData(): Message {
    return this.appService.getData();
  }

  @Get('bookings')
  getBookings() {
    return this.bookingService.getBookings();
  }
}
