/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled, { FontType, ColorType, SizeType } from "../styles/theme";

type TextType = 'default' | 'title' | 'subtitle'

export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
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
  color: ${({ theme, color = 'darkGrey' }) => theme.color[color]};
  font-family: ${({ theme, font = 'roboto' }) => theme.font[font]};
  font-size: ${({ theme, size = 'small' }) => theme.size[size]};
`;

const Title = styled(Container)`
  font-family: ${({ theme, font = 'axis' }) => theme.font[font]};
  font-size: ${({ theme, size = 'huge' }) => theme.size[size]};
`;

const SubTitle = styled(Container)`
  font-family: ${({ theme, font = 'quicksand' }) => theme.font[font]};
  font-size: ${({ theme, size = 'big' }) => theme.size[size]};
`;

type ContainersType = typeof Container | typeof Title | typeof SubTitle
const baseComponent: Record<TextType, ContainersType> = {
  default: Container,
  title: Title,
  subtitle: SubTitle,
}

/** `Text` component to display texts. It automatically renders your child property */
const Text: React.FC<TextProps> = ({
  children,
  type = 'default',
  ...props
}) => {
  const Base = baseComponent[type];

  return (
    <Base
      {...props}
    >
      {children}
    </Base>
  );
};

export default Text;
