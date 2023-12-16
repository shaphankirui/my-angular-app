import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarService } from '../contact/services/car.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent {
  cars:any[]=[];
  // categories: Category[] = [];

  constructor(private carServise:CarService,
    // private dialog: MatDialog,
    private router:Router
    ){}

  ngOnInit(): void {
    this.getAllCars()
    // this.loadCategoriesAndSetFirstCategory()
  }

  getAllCars() {
    this.carServise.getcars().subscribe((data: any[]) => {
      this.cars = data.map(car => {
        // Assuming 'car.picture' contains only the image file name
        car.picture = `http://localhost:8000/images/${car.picture}`; // Modify this line
        return car;
      });
      console.log('Cars list', this.cars);
    });
  }

  hireNow(carId: number) {
    this.router.navigate(['/reservations', carId]);
    console.log('sent the car of id', carId)
  }

}
