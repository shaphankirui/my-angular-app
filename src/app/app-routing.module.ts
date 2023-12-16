import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LoginComponent } from './login/login.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ServiessComponent } from './serviess/serviess.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { DisplayBookingComponent } from './display-booking/display-booking.component';
import { AddCarFormComponent } from './add-car-form/add-car-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product', component: ServiceComponent },
  { path: 'portfolio', component: PortfolioComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'slide', component: SlideshowComponent },
  { path: 'service', component: ServiessComponent },
  { path: 'add-car', component: AddCarFormComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'booking', component: DisplayBookingComponent },
  { path: 'reservations/:carId', component: BookingPageComponent },
  { path: 'reservations', component: BookingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },


  
];
@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}