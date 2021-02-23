/** @format */

import React, { ReactChildren, ReactElement } from 'react';
import ThemeProvider from '../ThemeProvider/ThemeProvider';

type PastelThemeProps = {
  children: ReactChildren;
};

function PastelTheme({ children }: PastelThemeProps): ReactElement {
  return <ThemeProvider theme={'pastel'}>{children}</ThemeProvider>;
}

export default PastelTheme;
