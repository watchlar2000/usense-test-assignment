import { CommonModule } from '@angular/common';
import { Component, forwardRef, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../shared/button/button';
import { InputComponent } from '../shared/input/input.component';
import { passwordStrengthValidator } from './password-strength.directive';
import { PasswordService } from './password.service';
import {
  MIN_PASSWORD_LENGTH,
  PasswordStrengthLevel,
  passwordStrengthLevelList,
} from './types';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule, InputComponent],
  templateUrl: './password-form.component.html',
  providers: [PasswordService],
})
export class PasswordFormComponent implements OnInit {
  passwordService = inject(PasswordService);

  passwordStrengthLevels: PasswordStrengthLevel[] =
    this.passwordService.mapPasswordStrengthLevels(passwordStrengthLevelList);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(MIN_PASSWORD_LENGTH),
    passwordStrengthValidator(),
  ]);

  ngOnInit(): void {
    this.password.valueChanges.subscribe((value) => {
      this.passwordStrengthLevels =
        this.passwordService.calculatePasswordStrengthLevels({
          password: this.password,
          levelList: this.passwordStrengthLevels,
        });
    });
  }

  save() {
    alert('Password saved');
    this.reset();
  }
  reset() {
    this.password.reset();
  }
}
