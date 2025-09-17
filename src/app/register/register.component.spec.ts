import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { username: '', password: '' };
  message = '';

  constructor(private authService: AuthService) { }

  register() {
    this.authService.register(this.user).subscribe({
      next: (res: any) => {
        console.log('Registered successfully', res);
        this.message = 'Registration successful!';
        this.user = { username: '', password: '' };
      },
      error: (err: any) => {
        console.error('Error', err);
        this.message = 'Registration failed!';
      }
    });
  }
}
