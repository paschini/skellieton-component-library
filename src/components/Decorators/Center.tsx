/** @format */

import React, { ReactElement, ReactNode } from 'react';
import style9 from 'style9';

const Styles = style9.create({
  center: {
    display: 'flex',
    justifyContent: 'center'
  }
});

type CenterProps = {
  children: ReactNode;
};

function Center(props: CenterProps): ReactElement {
  return <div className={Styles('center')}>{props.children}</div>;
}

export default Center;
