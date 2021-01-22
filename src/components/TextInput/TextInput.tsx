/** @format */

import React, { ReactElement } from 'react';
import style9 from 'style9';

const TextInputStyles = style9.create({
  base: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    fontSize: 16,
    padding: '15px',
    textAlign: 'center',
    display: 'inline-block',
    cursor: 'pointer'
  },
  small: {
    width: '100px'
  },
  medium: {
    width: '200px'
  },
  large: {
    width: '400px'
  }
});

type TextInputProps = {
  size?: 'small' | 'large';
  placeholder?: string;
};

function TextInput(props: TextInputProps): ReactElement {
  const { size, placeholder = '' } = props;

  const isSmall = size === 'small';
  const isLarge = size === 'large';
  const isMedium = !size;

  const textInputClass = TextInputStyles(
    'base',
    isSmall && 'small',
    isLarge && 'large',
    isMedium && 'medium'
  );

  return (
    <input type={'text'} className={textInputClass} placeholder={placeholder} />
  );
}

export default TextInput;
