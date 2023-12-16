import { Component, OnInit } from '@angular/core';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-display-booking',
  templateUrl: './display-booking.component.html',
  styleUrls: ['./display-booking.component.scss']
})
export class DisplayBookingComponent implements OnInit {

  bookings: any[] = [];

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getBookings().subscribe((data: any[]) => {
      this.bookings = data;
    });
  }
}
