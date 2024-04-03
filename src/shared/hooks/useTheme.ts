import { useRecoilState } from 'recoil';
import type { Theme } from '..';
import { themeAtom } from '..';

export const useTheme = () => {
  const [theme, setTheme] = useRecoilState<Theme>(themeAtom);

  const handleToggleTheme = () => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  };

  return { theme, handleToggleTheme };
};
