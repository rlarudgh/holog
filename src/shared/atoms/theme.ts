import { atom } from 'recoil';

export type Theme = 'light' | 'dark';

export const themeAtom = atom<Theme>({
  key: 'theme',
  default: 'light',
});
