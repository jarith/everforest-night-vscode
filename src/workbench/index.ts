import type { Configuration, Palette } from '../interface'
import { flatWorkbench } from './configs/flat'
import { highContrastWorkbench } from './configs/highContrast'
import { materialWorkbench } from './configs/material'

const workbenchMap = {
  material: materialWorkbench,
  flat: flatWorkbench,
  'high-contrast': highContrastWorkbench,
} as const

export const getWorkbench = (palette: Palette, configuration: Configuration) => {
  const fn = workbenchMap[configuration.workbench ?? 'material'] ?? materialWorkbench

  return fn(palette, configuration)
}
