import React from 'react';
import './button.css';

export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** children element inside your button */
  children?: React.ReactNode,
}

/** `Button` component to trigger anything */
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

Button.defaultProps = {
}

export default Button;
