import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true, // თუ standalone კომპონენტია
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  // აქ უნდა დაიწეროს შენი კოდი
  user = { firstName: '', lastName: '', email: '', password: '' };
  message = '';

  constructor(private authService: AuthService) { }

  register() {
    this.authService.register(this.user).subscribe({
      next: (res: any) => {
        this.message = 'Registration successful!';
        this.user = { firstName: '', lastName: '', email: '', password: '' };
        console.log(res);
      },
      error: (err: any) => {
        this.message = 'Registration failed!';
        console.error(err);
      }
    });
  }
}
