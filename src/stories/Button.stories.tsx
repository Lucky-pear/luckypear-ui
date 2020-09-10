import React from 'react';

import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
};

export const button = () => {
  return <Button>Confirm</Button>;
};

button.story = {
  name: 'Default'
};

export const primaryButton = () => {
  return <Button>Primary</Button>;
};
