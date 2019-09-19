import { Injectable } from '@nestjs/common';
import { Booking } from '@nx-dep-boundaries-example/api-interfaces';

const bookings: Booking[] = [{ id: 1, createdAt: new Date(), item: 'Cat' }];

@Injectable()
export class BookingService {
  getBookings() {
    return bookings;
  }

  addBooking(booking: Booking) {
    bookings.push(booking);
  }
}
