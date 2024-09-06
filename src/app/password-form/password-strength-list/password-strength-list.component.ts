import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GetLevelClass, PasswordStrengthLevel } from '../types';

@Component({
  selector: 'app-password-strength-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-strength-list.component.html',
})
export class PasswordStrengthListComponent {
  @Input() password!: FormControl;
  @Input() passwordStrengthLevels: PasswordStrengthLevel[] = [];

  getLevelClass({ level, password }: GetLevelClass) {
    if (password.valid) {
      return 'text-green-700 bg-green-100';
    } else if (
      level.isActive &&
      !password.hasError('minlength') &&
      password.dirty
    ) {
      return 'text-orange-500 !bg-yellow-100';
    }
    return '';
  }

  getStrengthLevelId(
    index: number,
    strengthLevel: PasswordStrengthLevel,
  ): number {
    return strengthLevel.id;
  }
}
