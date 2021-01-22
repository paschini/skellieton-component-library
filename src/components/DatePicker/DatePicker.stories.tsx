/** @format */

import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import DatePicker, { DatePickerProps } from './DatePicker';

export default {
  title: 'Form/DatePicker',
  component: DatePicker
};
const Template: Story<DatePickerProps> = (args) => <DatePicker {...args} />;

export const DefaultDatePicker = Template.bind({});
DefaultDatePicker.args = {
  initialDate: new Date(Date.now())
};
