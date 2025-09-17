import { Component } from '@angular/core';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RegisterComponent],   // RegisterComponent-ს აქ ვაფორმატებთ
  template: `<app-register></app-register>`, // RegisterComponent გამოძახება
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
