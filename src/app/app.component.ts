import { Component } from '@angular/core';
import { PasswordFormComponent } from './password-form/password-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PasswordFormComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Hello, Usense Team!';
}
