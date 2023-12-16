import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../contact/services/car.service';
import { BookingService } from '../service/booking.service';

@Component({
  selector: 'app-booking-page',
  templateUrl: './booking-page.component.html',
  styleUrls: ['./booking-page.component.scss']
})
export class BookingPageComponent {
  carId: any | undefined;
  selectedCar: any;
  reservationForm: FormGroup; // Define reservationForm as FormGroup


  constructor(private route: ActivatedRoute,private carService:CarService,  
    private datePipe: DatePipe,
    private formBuilder: FormBuilder
  ,private bookingService:BookingService) {
    this.reservationForm = this.formBuilder.group({
      name: ['', Validators.required],
      id_number: ['', Validators.required],
      phone_number: ['', Validators.required],
      pickup_date: ['', Validators.required],
      dropoff_date: ['', Validators.required],
      destination: ['', Validators.required],
      pickup_location: ['', Validators.required],
      dropoff_location: ['', Validators.required],
      // Add other form controls as needed
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.carId = +params['carId'];
      console.log('carid',this.carId)
      // Now, 'this.carId' holds the selected car's ID, use it as needed in this component
    });
    this.  getCarDetails();
  }
  getCarDetails() {
    // Call your service method to fetch car details by ID
    this.carService.getCarById(this.carId).subscribe((car: any) => {
      this.selectedCar = car; // Assign the fetched car details to selectedCar variable
      this.selectedCar.picture = `http://localhost:8000/images/${car.picture}`; // Modify this line
      console.log('Selected Car Details:', this.selectedCar);
      // You can use 'this.selectedCar' in your HTML to display the details
    });
  }

  onSubmitBooking() {
    const formData = { ...this.reservationForm.value };
    formData.car_id = this.carId;
    formData.car_type = this.selectedCar.car_name;

    // Format pickup_date and dropoff_date to 'YYYY-MM-DD' format
    formData.pickup_date = this.datePipe.transform(formData.pickup_date, 'MM/dd/yy');
    formData.dropoff_date = this.datePipe.transform(formData.dropoff_date, 'MM/dd/yy');

    console.log('Data being sent to backend:', formData);

    this.bookingService.bookCarReservation(formData).subscribe(
      (response) => {
        console.log('Booking success:', response);
        // Additional logic after successful booking
      },
      (error) => {
        console.error('Booking error:', error);
        // Handle error scenario
      }
    );
  }
  clearForm(form: FormData): void {
    
  }

}
