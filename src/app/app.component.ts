import { Component } from '@angular/core';
import { AssignmentAccordionComponent } from './assignment-accordion/assignment-accordion.component';
import { PasswordFormComponent } from './password-form/password-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PasswordFormComponent, AssignmentAccordionComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Hello, Usense Team!';
  expanded = false;

  toggle() {
    this.expanded = !this.expanded;
  }
}
