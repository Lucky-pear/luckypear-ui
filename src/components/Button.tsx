/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming'
import styled, { ColorType, ThemeType } from "../styles/theme";
import Text from './Text';
import { BaseProps } from './Base';
import { getContrastColor } from '../utils/Utils';

type StateType = 'idle' | 'disabled' | 'loading'
type ButtonType = 'default' | 'naked'

export interface ButtonProps extends BaseProps {
  /** `type` is a button style that represents the design */
  type?: ButtonType
  /** 
   *  `color` is a button's key color<br/>
   * - default: color sets button's background color. text color will be adjusted by it's color contrast<br/>
   * - naked: color sets button's text color
  */
  color?: ColorType
  /** `state` is a state for your button's current state in action */
  state?: StateType
  /** `href` is a hyperlink reference that component will route. Use this for third-party routing */
  href?: string
  /** `onClick` is a function called when user click's on the button */
  onClick?: React.MouseEventHandler<Element>
}

const Container = styled.div<ButtonProps>`
  width: fit-content;
  cursor: ${({ state }) => state === 'idle' ? 'pointer' : 'not-allowed'};
`;
const ColoredContainer = styled(Container)`
  background-color: ${({ theme, color = 'primary' }) => theme.color[color]};
  color: ${({ theme }) => theme.color.white};
  padding: 1rem 2rem;
  width: fit-content;
`;

type ContainersType = typeof Container | typeof ColoredContainer
const baseComponent: Record<ButtonType, ContainersType> = {
  default: ColoredContainer,
  naked: Container
}

/** `Button` component to react with user's click event */
const Button: React.FC<ButtonProps> = ({
  href,
  state = 'idle',
  type = 'default',
  color = 'primary',
  onClick,
  ...props
}) => {
  const theme = useTheme<ThemeType>();

  const Base = baseComponent[type];

  const _onClick = (e: React.MouseEvent) => {
    if (state === 'loading' || state === 'disabled')
      return;

    if (onClick) {
      e.preventDefault();
      e.stopPropagation();
      onClick(e);
    } else if (href) {
      window.open(href);
    }
  }

  const textColor: ColorType = type === 'naked' ? color : getContrastColor(theme.color[color])

  return (
    <Base
      state={state}
      onClick={_onClick}
      color={color}
    >
      <Text color={textColor} {...props} />
    </Base>
  );
};

export default Button;
