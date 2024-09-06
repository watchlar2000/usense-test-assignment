import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../shared/button/button';
import { passwordStrengthValidator } from './password-strength.directive';

const MIN_PASSWORD_LENGTH = 8 as const;
const passwordStrengthLevelList = ['Easy', 'Medium', 'Strong'] as const;
type StrengthLevel = (typeof passwordStrengthLevelList)[number];
interface PasswordStrengthLevel {
  id: number;
  name: StrengthLevel;
  isActive: boolean;
}

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './password-form.component.html',
})
export class PasswordFormComponent implements OnInit {
  passwordStrengthLevels: PasswordStrengthLevel[] =
    passwordStrengthLevelList.map((item, index) => ({
      id: index + 1,
      name: item,
      isActive: false,
    }));

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(MIN_PASSWORD_LENGTH),
    passwordStrengthValidator(),
  ]);

  ngOnInit(): void {
    this.password.valueChanges.subscribe((value) => {
      const password = value ?? '';
      this.passwordStrengthLevels =
        this.calculatePasswordStrengthLevels(password);
    });
  }

  calculatePasswordStrengthLevels(password: string): PasswordStrengthLevel[] {
    const strengthId = this.passwordStrengthLevels.reduce(
      (currentMaxId, element) => {
        const key = element.name.toLowerCase();
        return this.password.hasError(key) ? element.id : currentMaxId;
      },
      0
    );

    return this.passwordStrengthLevels.map((level) => ({
      ...level,
      isActive: level.id <= strengthId,
    }));
  }

  save() {
    alert('Password saved');
    this.reset();
  }

  reset() {
    this.password.reset();
  }
}
