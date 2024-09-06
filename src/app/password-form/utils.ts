import { MatchesRegex } from './types';

const EASY_REGEX = /^[a-zA-Z]+$|^\d+$|^[!@#$%^&*(),.?":{}|<>]+$/;
const MEDIUM_REGEX =
  /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":{}|<>])|(?=.*[a-zA-Z])(?=.*\d)|(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[\w!@#$%^&*(),.?":{}|<>]+$/;
const STRONG_REGEX =
  /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]+/;

const matchesRegex = ({ value, regEx }: MatchesRegex): boolean =>
  regEx.test(value);

export const determineStrengthLevel = (password: string): number => {
  const regexList = [EASY_REGEX, MEDIUM_REGEX, STRONG_REGEX];
  const levelId = regexList
    .map((regEx, index) => ({
      id: index + 1,
      success: matchesRegex({ value: password, regEx }),
    }))
    .reduce((maxId, { id, success }) => (success ? id : maxId), 0);

  return levelId;
};
