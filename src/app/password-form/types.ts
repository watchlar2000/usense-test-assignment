import { FormControl } from '@angular/forms';

export const MIN_PASSWORD_LENGTH = 8 as const;
export const passwordStrengthLevelList = ['Easy', 'Medium', 'Strong'] as const;

export type PasswordStrengthLevelList = typeof passwordStrengthLevelList;
export type StrengthLevel = PasswordStrengthLevelList[number];

export type PasswordStrengthLevel = {
  id: number;
  name: StrengthLevel;
  isActive: boolean;
};

export type CalculatePasswordStrengthLevels = {
  password: FormControl<string | null>;
  levelList: PasswordStrengthLevel[];
};

export type PasswordProcessStatus = 'SAVING' | null;

export type GetLevelClass = {
  level: PasswordStrengthLevel;
  password: FormControl<string | null>;
};

export type MatchesRegex = {
  value: string;
  regEx: RegExp;
};
