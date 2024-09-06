import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PasswordFormComponent } from './password-form/password-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PasswordFormComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
