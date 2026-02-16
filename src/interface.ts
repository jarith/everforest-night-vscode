export type Workbench = 'material' | 'flat' | 'high-contrast'
export type ThemeMode = 'dark' | 'light'
export type Contrast = 'hard' | 'medium' | 'soft'
export type Selection = 'grey' | 'red' | 'orange' | 'yellow' | 'green' | 'aqua' | 'blue' | 'purple'
export type Cursor = 'default' | 'red' | 'orange' | 'yellow' | 'green' | 'aqua' | 'blue' | 'purple'
export type DiagnosticTextBackgroundOpacity = '0%' | '12.5%' | '25%' | '37.5%' | '50%'

export interface Configuration {
  mode?: ThemeMode
  contrast?: Contrast
  workbench?: Workbench
  selection?: Selection
  cursor?: Cursor
  diagnosticTextBackgroundOpacity?: DiagnosticTextBackgroundOpacity
  italicKeywords?: boolean
  italicComments?: boolean
  highContrast?: boolean
}

export interface Palette {
  bg0: string
  bg1: string
  bg: string
  bg2: string
  bg3: string
  bg4: string
  bg5: string
  grey0: string
  grey1: string
  grey2: string
  fg: string
  red: string
  orange: string
  yellow: string
  green: string
  aqua: string
  blue: string
  purple: string
  dimRed: string
  dimOrange: string
  dimYellow: string
  dimGreen: string
  dimAqua: string
  dimBlue: string
  dimPurple: string
  shadow: string
  badge: string
}
