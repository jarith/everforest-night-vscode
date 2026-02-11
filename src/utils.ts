import { writeFile } from 'fs/promises'
import { existsSync } from 'fs'
import { join } from 'path'
import { workspace, window, commands } from 'vscode'
import type { ConfigurationChangeEvent } from 'vscode'
import type {
  Configuration,
  Workbench,
  Contrast,
  Selection,
  Cursor,
  DiagnosticTextBackgroundOpacity,
} from './interface'
import { getPalette } from './palette'
import { getWorkbench } from './workbench'
import { getSyntax } from './syntax'
import { getSemantic } from './semantic'

export const detectConfigChanges = (
  event: ConfigurationChangeEvent,
  onConfigChange: () => void,
): void => {
  if (event.affectsConfiguration('everforestNight')) {
    onConfigChange()
  }
}

export const getConfiguration = (): Configuration => {
  const workspaceConfiguration = workspace.getConfiguration('everforestNight')

  return {
    contrast: workspaceConfiguration.get<Contrast>('contrast', 'medium'),
    workbench: workspaceConfiguration.get<Workbench>('workbench', 'material'),
    selection: workspaceConfiguration.get<Selection>('selection', 'grey'),
    cursor: workspaceConfiguration.get<Cursor>('cursor', 'white'),
    diagnosticTextBackgroundOpacity: workspaceConfiguration.get<DiagnosticTextBackgroundOpacity>(
      'diagnosticTextBackgroundOpacity',
      '0%',
    ),
    italicKeywords: workspaceConfiguration.get<boolean>('italicKeywords', false),
    italicComments: workspaceConfiguration.get<boolean>('italicComments', true),
    highContrast: workspaceConfiguration.get<boolean>('highContrast', false),
  }
}

export const isDefaultConfiguration = (configuration: Configuration): boolean => {
  return (
    configuration.contrast === 'medium' &&
    configuration.workbench === 'material' &&
    configuration.selection === 'grey' &&
    configuration.cursor === 'white' &&
    configuration.italicKeywords === false &&
    configuration.italicComments === true &&
    configuration.diagnosticTextBackgroundOpacity === '0%' &&
    configuration.highContrast === false
  )
}

export const getThemeData = (configuration: Configuration) => {
  const palette = getPalette(configuration)

  return {
    dark: {
      name: 'Everforest Night Medium',
      type: 'dark',
      semanticHighlighting: true,
      semanticTokenColors: getSemantic(palette),
      colors: getWorkbench(palette, configuration),
      tokenColors: getSyntax(palette, configuration),
    },
  }
}

export const isNewlyInstalled = (): boolean => {
  const flagPath = join(__dirname, '..', '..', '.flag')

  if (existsSync(flagPath)) {
    return false
  }

  writeThemeFile(flagPath, '')
  return true
}

const writeThemeFile = (path: string, data: unknown) => {
  return writeFile(path, JSON.stringify(data, null, 2))
}

const promptToReload = () => {
  const action = 'Reload'

  window.showInformationMessage('Reload required.', action).then((selectedAction) => {
    if (selectedAction === action) {
      commands.executeCommand('workbench.action.reloadWindow')
    }
  })
}

export const generate = async (darkPath: string, data: any) => {
  await writeThemeFile(darkPath, data.dark)
  promptToReload()
}
