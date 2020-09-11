import { FontType, ColorType, SizeType } from "../styles/theme";

export interface BaseProps extends React.HTMLAttributes<HTMLDivElement> {
  /** font-family foro your component */
  font?: FontType,
  /** color for your component */
  color?: ColorType,
  /** size for your component */
  size?: SizeType,
}