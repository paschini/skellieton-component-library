/** @format */

import React, { ReactElement, ReactNode } from 'react';
import style9 from 'style9';

const ButtonStyles = style9.create({
  base: {
    color: 'white',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 0,
    fontSize: 16,
    padding: '15px',
    textAlign: 'center',
    display: 'inline-block',
    cursor: 'pointer'
  },
  primary: {
    backgroundColor: 'hotpink'
  },
  secondary: {
    backgroundColor: 'rebeccapurple'
  },
  default: {
    color: 'black',
    backgroundColor: 'lightGrey'
  }
});

export type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children?: ReactNode;
};

function Button(props: ButtonProps): ReactElement {
  const { children, variant } = props;

  const isPrimary = variant === 'primary';
  const isSecondary = variant === 'secondary';
  const isDefault = !variant;

  const buttonClass = ButtonStyles(
    'base',
    isPrimary && 'primary',
    isSecondary && 'secondary',
    isDefault && 'default'
  );

  return <button className={buttonClass}>{children}</button>;
}

export default Button;
