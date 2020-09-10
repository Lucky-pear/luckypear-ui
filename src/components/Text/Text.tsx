/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled, { FontType, ColorType, SizeType } from "../../styles/theme";

type TextType = 'default' | 'title' | 'subtitle'

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  /** children to render */
  children?: React.ReactNode,
  /** font-family foro your text */
  font?: FontType,
  /** color for your text */
  color?: ColorType,
  /** size for your text */
  size?: SizeType,
  /** type for your text */
  type?: TextType,
}

const Container = styled.div<TextProps>`
  color: ${({ theme, color }) => theme.color[color!]};
  font-family: ${props => props.font};
  font-size: ${({ theme, size }) => theme.size[size!]};
`;
const Title = styled(Container)`
  font-family: ${({ theme }) => theme.font.axis};
  font-size: ${({ theme }) => theme.size.huge};
`;
const Subtitle = styled(Container)`
  font-family: ${({ theme }) => theme.font.quicksand};
  font-size: ${({ theme }) => theme.size.big};
`;

type ContainersType = typeof Container | typeof Title | typeof Subtitle;
const baseCompoent: Record<TextType, ContainersType> = {
  default: Container,
  title: Title,
  subtitle: Subtitle,
}

/** `Text` component to display texts. It automatically renders your child property */
const Text: React.FC<TextProps> = ({
  children = 'We write codes to write less codes',
  type = 'default',
  font = 'roboto',
  color = 'darkGrey',
  size = 'medium',
  ...props
}) => {
  let Base = baseCompoent[type];

  return (
    <Base {...props}>
      {children}
    </Base>
  );
};

export default Text;
