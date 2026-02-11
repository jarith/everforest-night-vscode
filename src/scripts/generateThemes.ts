import { writeFile } from 'fs/promises'
import { resolve } from 'path'
import type { Configuration } from '../interface'
import { getWorkbench } from '../workbench'
import { getSyntax } from '../syntax'
import { getSemantic } from '../semantic'
import { getPalette } from '../palette'

type ThemeMode = 'dark' | 'light'
type ThemeContrast = NonNullable<Configuration['contrast']>

interface ThemeVariant {
  name: string
  mode: ThemeMode
  contrast: ThemeContrast
  fileName: string
}

const baseConfiguration: Configuration = {
  contrast: 'medium',
  workbench: 'material',
  selection: 'grey',
  cursor: 'white',
  italicKeywords: false,
  italicComments: true,
  diagnosticTextBackgroundOpacity: '0%',
  highContrast: false,
}

const writeThemeFile = (filePath: string, data: unknown) => {
  return writeFile(filePath, JSON.stringify(data, null, 2))
}

const themeVariants: ThemeVariant[] = [
  {
    name: 'Everforest Night Medium',
    mode: 'dark',
    contrast: 'medium',
    fileName: 'everforest-night-dark-medium.json',
  },
  {
    name: 'Everforest Night Hard',
    mode: 'dark',
    contrast: 'hard',
    fileName: 'everforest-night-dark-hard.json',
  },
  {
    name: 'Everforest Night Soft',
    mode: 'dark',
    contrast: 'soft',
    fileName: 'everforest-night-dark-soft.json',
  },
]

const getThemeData = (variant: ThemeVariant) => {
  const configuration: Configuration = {
    ...baseConfiguration,
    contrast: variant.contrast,
  }
  const palette = getPalette(configuration)

  return {
    name: variant.name,
    type: variant.mode,
    semanticHighlighting: true,
    semanticTokenColors: getSemantic(palette),
    colors: getWorkbench(palette, configuration),
    tokenColors: getSyntax(palette, configuration),
  }
}

const generateThemes = async () => {
  await Promise.all(
    themeVariants.map((variant) => {
      return writeThemeFile(
        resolve(__dirname, `../../themes/${variant.fileName}`),
        getThemeData(variant),
      )
    }),
  )
}

generateThemes().catch((error: unknown) => {
  console.error('Failed to generate theme files.')
  console.error(error)
  process.exit(1)
})
