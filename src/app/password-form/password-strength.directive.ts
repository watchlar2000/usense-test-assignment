import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

export const passwordStrengthValidator = (): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value;

    const hasLettersRegEx = /[a-zA-Z]/;
    const hasNumbersRegEx = /\d/;
    const hasSymbolsRegEx = /[!@#$%^&*(),.?":{}|<>]/;

    const test = (value: string) => (regEx: RegExp) => regEx.test(value);

    const testPassword = test(password);

    const strengthLevelId = [hasLettersRegEx, hasNumbersRegEx, hasSymbolsRegEx]
      .map((regEx) => testPassword(regEx))
      .filter(Boolean).length;

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
