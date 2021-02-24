/** @format */

import React from 'react';
import { Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
  title: 'Form/Button',
  component: Button
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Text'
};

export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  variant: 'primary'
};

export const PrimaryLong = Template.bind({});
PrimaryLong.args = {
  variant: 'primary',
  children: 'This is a very long button, with much more text than necessary!'
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  variant: 'secondary'
};
