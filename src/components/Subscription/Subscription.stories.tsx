/** @format */

import React, { ReactElement } from 'react';
import { Primary } from '../Button/Button.stories';
import { Large } from '../TextInput/TextInput.stories';

export default {
  title: 'Form/Subscription'
};

export const PrimarySubscription = (): ReactElement => (
  <>
    <Large />
    <Primary />
  </>
);
