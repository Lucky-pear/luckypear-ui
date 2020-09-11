import { ColorType } from "../styles/theme"

export const getContrastColor = (colorHex: string): ColorType => {
  var color = (colorHex.charAt(0) === '#') ? colorHex.substring(1, 7) : colorHex;
  const r = parseInt(color.substr(0, 2), 16);
  const g = parseInt(color.substr(2, 2), 16);
  const b = parseInt(color.substr(4, 2), 16);
  return (r * 0.299 + g * 0.587 + b * 0.114) > 186 ? 'darkGrey' : 'white';
}
