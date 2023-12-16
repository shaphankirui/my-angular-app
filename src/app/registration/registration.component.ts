import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private authService: AuthService) {}

  onRegister(): void {
    this.authService.register(this.registerData).subscribe(
      (response) => {
        // Handle successful registration response
        console.log('Registration successful:', response);
        // Redirect or perform actions after successful registration
      },
      (error) => {
        // Handle registration error
        console.error('Registration error:', error);
        // Handle error message to display to the user
      }
    );
  }
}
