import { THEME_LIST } from '../../constant'

export type Theme = keyof typeof THEME_LIST

export type RealTheme = Exclude<Theme, 'system'>
