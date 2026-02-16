import type { Configuration, Palette } from '../interface'
import { foreground as darkForeground } from './dark/foreground'
import { backgroundHard as darkBackgroundHard } from './dark/background/hard'
import { backgroundMedium as darkBackgroundMedium } from './dark/background/medium'
import { backgroundSoft as darkBackgroundSoft } from './dark/background/soft'
import { foreground as lightForeground } from './light/foreground'
import { backgroundHard as lightBackgroundHard } from './light/background/hard'
import { backgroundMedium as lightBackgroundMedium } from './light/background/medium'
import { backgroundSoft as lightBackgroundSoft } from './light/background/soft'

const darkContrastMap = {
  hard: darkBackgroundHard,
  medium: darkBackgroundMedium,
  soft: darkBackgroundSoft,
} as const

const lightContrastMap = {
  hard: lightBackgroundHard,
  medium: lightBackgroundMedium,
  soft: lightBackgroundSoft,
} as const

export const getPalette = (configuration: Configuration): Palette => {
  if (configuration.mode === 'light') {
    const paletteBackground =
      lightContrastMap[configuration.contrast ?? 'medium'] ?? lightBackgroundMedium

    return {
      ...paletteBackground,
      ...lightForeground,
    }
  }

  const paletteBackground =
    darkContrastMap[configuration.contrast ?? 'medium'] ?? darkBackgroundMedium

  return {
    ...paletteBackground,
    ...darkForeground,
  }
}
