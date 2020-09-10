import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Text, { TextProps } from '../components/Text/Text';

export default {
  title: 'components/Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});

export const Title = Template.bind({});
Title.args = {
  type: 'title'
}

export const Subtitle = Template.bind({});
Subtitle.args = {
  type: 'subtitle'
}