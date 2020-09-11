import { withTheme } from '../hoc/withTheme'

import { default as TextComponent } from './Text'
import { default as ButtonComponent } from './Button'

export const Text = withTheme(TextComponent);
export const Button = withTheme(ButtonComponent);
