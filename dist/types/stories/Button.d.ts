import React from 'react';
import './button.css';
export interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
    /** children element inside your button */
    children?: React.ReactNode;
}
/** `Button` component to trigger anything */
declare const Button: React.FC<ButtonProps>;
export default Button;
