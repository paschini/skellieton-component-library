/** @format */

import React, {
  createContext,
  ReactChildren,
  ReactElement,
  useContext,
  useMemo
} from 'react';
import { pastel } from './defaultColors';

type ThemeProviderProps = {
  theme: string;
  children: ReactChildren;
};

const ThemeContext = createContext({
  colors: pastel
});

const getTheme = (theme: string) => {
  switch (theme) {
    case 'pastel':
      return { colors: pastel };
    default:
      return { colors: pastel };
  }
};

export function useColors(): Record<string, string> {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useColors() has to be used within a child of the ThemeProvider'
    );
  }

  const { colors } = context;
  return colors;
}

function ThemeProvider({ theme, children }: ThemeProviderProps): ReactElement {
  const value = useMemo(() => getTheme(theme), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export default ThemeProvider;

// https://github.com/mui-org/material-ui/issues/18102 ??
