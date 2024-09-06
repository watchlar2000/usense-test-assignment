import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';
import { determineStrengthLevel } from './utils';

export const passwordStrengthValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;

    const strengthLevelId = determineStrengthLevel(password);

    if (strengthLevelId === 3) {
      return null;
    } else if (strengthLevelId === 2) {
      return { medium: true };
    } else {
      return { easy: true };
    }
  };
};

@Directive({
  selector: '[appPasswordStrength]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthValidatorDirective,
      multi: true,
    },
  ],
})
export class PasswordStrengthValidatorDirective implements Validator {
  @Input('appPasswordStrength') passwordStrength = '';

  validate(control: AbstractControl): ValidationErrors | null {
    return passwordStrengthValidator()(control);
  }
}
