/** @jsx jsx */
import { useMemo } from 'react';
import { jsx } from '@emotion/core';
import styled, { ColorType } from "../styles/theme";
import Text from './Text';
import { BaseProps } from './Base';
import { isBright } from '../utils/Utils';
import Spinner from './Spinner';

type StateType = 'idle' | 'disabled' | 'loading'
type ButtonType = 'colored' | 'naked'

export interface ButtonProps extends BaseProps {
  /** `type` is a button style that represents the design */
  type?: ButtonType
  /** 
   *  `color` is a button's key color<br/>
   * - colored: color sets button's background color. text color will be adjusted by it's color contrast<br/>
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

const cursor: Record<StateType, string> = {
  idle: 'pointer',
  disabled: 'not-allowed',
  loading: 'wait'
} 

const Container = styled.div<ButtonProps>`
  width: fit-content;
  cursor: ${({ state = 'idle' }) => cursor[state]};
  opacity: ${({ state }) => state === 'disabled' ? 0.5 : 1};

  transition: .2s filter, box-shadow ease-in-out;

  :hover {
    text-shadow: ${({ theme, state }) => state === 'idle' && theme.shadow.hover};
    filter: ${({ state }) => state === 'idle' && `brightness(0.9)`};
  }
`;
const ColoredContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, color = 'primary' }) => theme.color[color]};
  color: ${({ theme }) => theme.color.white};
  padding: 1rem 2rem;
  border-radius: 3px;

  :hover {
    box-shadow: ${({ theme, state }) => state === 'idle' && theme.shadow.box};
  }
`;

type ContainersType = typeof Container | typeof ColoredContainer
const baseComponent: Record<ButtonType, ContainersType> = {
  colored: ColoredContainer,
  naked: Container
}

/** `Button` component to react with user's click event. 
 * - It automatically renders your child property inside a `Text` component(width will fit children)
 **/
const Button: React.FC<ButtonProps> = ({
  children,
  href,
  state = 'idle',
  type = 'colored',
  color = 'primary',
  onClick,
  ...props
}) => {
  const isColorBright = useMemo<boolean>(() => isBright(color), [color])
  const textColor: ColorType = type === 'naked' ? color : isColorBright ? 'darkGrey' : 'white';

  const Base = baseComponent[type];

  const _onClick = (e: React.MouseEvent) => {
    if (state === 'loading' || state === 'disabled')
      return;

    e.preventDefault();
    e.stopPropagation();
    onClick && onClick(e);

    if (href) {
      window.open(href);
    }
  }

  return (
    <Base
      state={state}
      onClick={_onClick}
      color={color}
    >
      {state === 'loading' ?
        <Spinner />
        :
        <Text color={textColor} {...props} >
          {children}
        </Text>
      }
    </Base>
  );
};

export default Button;
