import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from '../components/Button';

export default {
  title: 'components/Button',
  component: Button,
} as Meta;

const defaultMessage = 'Click me!'

const Template: Story<ButtonProps> = (args) => <Button {...args}>{defaultMessage}</Button>;

export const Default = Template.bind({});

export const Naked = Template.bind({});
Naked.args = {
  type: 'naked'
}

export const Loading = Template.bind({});
Loading.args = {
  state: 'loading'
}

export const Disabled = Template.bind({});
Disabled.args = {
  state: 'disabled'
}