import type { Theme } from '../model'
import THEME_NAME from './themeName'

const THEME_LIST: Array<[Theme, string]> = [
  ['system', THEME_NAME.system],
  ['light', THEME_NAME.light],
  ['dark', THEME_NAME.dark],
]

export default THEME_LIST
