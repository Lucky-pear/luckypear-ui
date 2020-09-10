import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Text, { TextProps } from '../components/Text';

export default {
  title: 'components/Text',
  component: Text,
} as Meta;

const defaultMessage = 'We write codes to write less codes'

const Template: Story<TextProps> = (args) => <Text {...args}>{args.children || defaultMessage}</Text>;

export const Default = Template.bind({});

export const Title = Template.bind({});
Title.args = {
  type: 'title'
}

export const Subtitle = Template.bind({});
Subtitle.args = {
  type: 'subtitle'
}

export const Sizing: Story<TextProps> = (args) => {
  const text = args.children || defaultMessage;
  return (
    <Text>
      <Text size="huge">{text} (huge)</Text>
      <Text size="large">{text} (large)</Text>
      <Text size="big">{text} (big)</Text>
      <Text size="medium">{text} (medium)</Text>
      <Text size="small">{text} (small)</Text>
      <Text size="tiny">{text} (tiny)</Text>
    </Text>
  )
};

export const Coloring: Story<TextProps> = (args) => {
  const text = args.children || defaultMessage;
  return (
    <Text>
      <Text color="primary">{text} (primary)</Text>
      <Text color="secondary">{text} (secondary)</Text>
      <Text>{text} (default)</Text>
    </Text>
  )
};