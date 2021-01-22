/** @format */

import React, { ReactElement } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Form/Button',
  component: Button
};

export const Default = (): ReactElement => <Button>Default</Button>;

export const Primary = (): ReactElement => (
  <Button variant={'primary'}>Primary</Button>
);

export const Secondary = (): ReactElement => (
  <Button variant={'secondary'}>Secondary</Button>
);
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.args = {
  variant: 'primary',
  children: 'Primary Args'
};

export const PrimaryLong = Template.bind({});
PrimaryLong.args = {
  ...PrimaryA.args,
  children: 'This is a very long button, with much more text than necessary!'
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: 'secondary',
  children: 'Secondary Args'
};
