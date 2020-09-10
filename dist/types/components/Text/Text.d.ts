/// <reference types="react" />
import { FontType, ColorType, SizeType } from "../../styles/theme";
declare type TextType = 'default' | 'title' | 'subtitle';
export interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
    /** children to render */
    children?: React.ReactNode;
    /** font-family foro your text */
    font?: FontType;
    /** color for your text */
    color?: ColorType;
    /** size for your text */
    size?: SizeType;
    /** type for your text */
    type?: TextType;
}
/** `Text` component to display texts. It automatically renders your child property */
declare const Text: React.FC<TextProps>;
export default Text;
