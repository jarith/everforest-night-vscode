import type { Configuration, Palette } from '../interface'
import { foreground } from './dark/foreground'
import { backgroundHard } from './dark/background/hard'
import { backgroundMedium } from './dark/background/medium'
import { backgroundSoft } from './dark/background/soft'

const contrastMap = {
  hard: backgroundHard,
  medium: backgroundMedium,
  soft: backgroundSoft,
} as const

export const getPalette = (configuration: Configuration): Palette => {
  const paletteBackground = contrastMap[configuration.contrast ?? 'medium'] ?? backgroundMedium

  return {
    ...paletteBackground,
    ...foreground,
  }
}
