import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingService } from '@nx-dep-boundaries-example/booking/data-access';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, BookingService]
})
export class AppModule {}
