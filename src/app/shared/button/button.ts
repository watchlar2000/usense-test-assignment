import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import clsx from 'clsx';

interface Config {
  title: string;
  disabled?: boolean;
  class?: string;
}

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
})
export class ButtonComponent {
  @Input() config: Config = {
    title: 'Button',
  };

  clsx = clsx;

  @Output() clickEvent = new EventEmitter<void>();

  handleClick() {
    this.clickEvent.emit();
  }
}
