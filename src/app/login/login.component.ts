import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        // Handle successful login response
        console.log('Login successful:', response);
        // Redirect or perform actions after successful login
      },
      (error) => {
        // Handle login error
        console.error('Login error:', error);
        // Handle error message to display to the user
      }
    );
  }

}
