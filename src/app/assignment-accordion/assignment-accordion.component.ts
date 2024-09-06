import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-accordion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignment-accordion.component.html',
})
export class AssignmentAccordionComponent {
  expanded = false;

  toggle() {
    this.expanded = !this.expanded;
  }
}
