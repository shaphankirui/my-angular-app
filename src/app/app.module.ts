import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ServiessComponent } from './serviess/serviess.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayBookingComponent } from './display-booking/display-booking.component';
import { BookingPageComponent } from './booking-page/booking-page.component';
import { AddCarFormComponent } from './add-car-form/add-car-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatePipe } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ServiceComponent,
    PortfolioComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SlideshowComponent,
    ServiessComponent,
    DisplayBookingComponent,
    BookingPageComponent,
    AddCarFormComponent,
    DashboardComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
