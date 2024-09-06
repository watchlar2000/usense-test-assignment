import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  CalculatePasswordStrengthLevels,
  PasswordStrengthLevel,
  PasswordStrengthLevelList,
} from './types';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  calculatePasswordStrengthLevels({
    password,
    levelList,
  }: CalculatePasswordStrengthLevels): PasswordStrengthLevel[] {
    const isPasswordEmpty = !password.value;

    let strengthId: number = 0;

    if (!isPasswordEmpty)
      strengthId = levelList.reduce((currentMaxId, element) => {
        const key = element.name.toLowerCase();
        return password.hasError(key) ? element.id : currentMaxId;
      }, 0);

    return levelList.map((level) => ({
      ...level,
      isActive: level.id <= strengthId,
    }));
  }

  getLevelClass({
    level,
    password,
  }: {
    level: PasswordStrengthLevel;
    password: FormControl<string | null>;
  }) {
    if (password.valid) {
      return 'text-green-700';
    } else if (
      level.isActive &&
      !password.hasError('minlength') &&
      password.dirty
    ) {
      return 'text-yellow-500';
    }
    return '';
  }

  getStrengthLevelId(
    index: number,
    strengthLevel: PasswordStrengthLevel
  ): number {
    return strengthLevel.id;
  }

  mapPasswordStrengthLevels(
    leveList: PasswordStrengthLevelList
  ): PasswordStrengthLevel[] {
    return leveList.map((item, index) => ({
      id: index + 1,
      name: item,
      isActive: false,
    }));
  }
}
