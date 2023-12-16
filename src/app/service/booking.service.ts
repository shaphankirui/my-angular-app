import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private apiUrl = `http://127.0.0.1:8000/api/bookings`;

  constructor(private http: HttpClient) {}

  // Method to post the booking details to the backend
  bookCarReservation(formData: any) {
    return this.http.post(`${this.apiUrl}`, formData);
  }

  getBookings(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
}
