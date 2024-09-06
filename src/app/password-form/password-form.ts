import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../shared/button/button';
import { InputComponent } from '../shared/input/input.component';
import { PasswordStrengthListComponent } from './password-strength-list/password-strength-list.component';
import { passwordStrengthValidator } from './password-strength.directive';
import { PasswordService } from './password.service';
import {
  MIN_PASSWORD_LENGTH,
  PasswordProcessStatus,
  PasswordStrengthLevel,
  passwordStrengthLevelList,
} from './types';

@Component({
  selector: 'app-password-form',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    ReactiveFormsModule,
    InputComponent,
    PasswordStrengthListComponent,
  ],
  templateUrl: './password-form.component.html',
  providers: [PasswordService],
})
export class PasswordFormComponent implements OnInit {
  @Input() class: string = '';

  passwordProcessStatus: PasswordProcessStatus = null;
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
      const trimmedValue = (value || '').trim();
      if (this.password.value !== trimmedValue) {
        this.password.setValue(trimmedValue, { emitEvent: false });
      }

      this.passwordStrengthLevels =
        this.passwordService.calculatePasswordStrengthLevels({
          password: this.password,
          levelList: this.passwordStrengthLevels,
        });
    });
  }

  async save() {
    this.passwordProcessStatus = 'SAVING';
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        return resolve();
      }, 2000);
    });
    this.passwordProcessStatus = null;
    alert('Password saved in the database');
    this.reset();
  }
  reset() {
    this.password.reset();
  }
}
