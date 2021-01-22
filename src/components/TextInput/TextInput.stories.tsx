/** @format */

import React, { ReactElement } from 'react';
import TextInput from './TextInput';

export default {
  title: 'Form/Text Input',
  component: TextInput
};

export const Default = (): ReactElement => (
  <TextInput placeholder={'type here ...'} />
);
Default.storyName = 'Default Text Input';

export const Small = (): ReactElement => (
  <TextInput size={'small'} placeholder={'type here ...'} />
);
Small.storyName = 'Small Text Input';

export const Large = (): ReactElement => (
  <TextInput size={'large'} placeholder={'type here ...'} />
);
Large.storyName = 'Large Text Input';
