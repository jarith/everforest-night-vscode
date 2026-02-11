import { ConfigurationTarget, workspace } from 'vscode'
import type {
  Configuration,
  Contrast,
  ContrastSetting,
  Cursor,
  DiagnosticTextBackgroundOpacity,
  Selection,
  Workbench,
} from './interface'
import { getPalette } from './palette'
import { getSemantic } from './semantic'
import { getSyntax } from './syntax'
import { getWorkbench } from './workbench'

type WorkbenchCustomizations = Record<string, string>
type TokenCustomizations = {
  textMateRules: ReturnType<typeof getSyntax>
}
type SemanticCustomizations = {
  enabled: true
  rules: ReturnType<typeof getSemantic>
}

interface ThemeVariant {
  label: string
  contrast: Contrast
}

type EverforestNightSettings = Omit<Required<Configuration>, 'contrast'> & {
  contrast: ContrastSetting
}

const EVERFOREST_SETTINGS_SECTION = 'everforestNight'
const THEME_VARIANTS: ThemeVariant[] = [
  { label: 'Everforest Night Medium', contrast: 'medium' },
  { label: 'Everforest Night Hard', contrast: 'hard' },
  { label: 'Everforest Night Soft', contrast: 'soft' },
]

const defaultSettings: EverforestNightSettings = {
  contrast: 'theme',
  workbench: 'material',
  selection: 'grey',
  cursor: 'white',
  diagnosticTextBackgroundOpacity: '0%',
  italicKeywords: false,
  italicComments: true,
  highContrast: false,
}

const isRecord = (value: unknown): value is Record<string, unknown> => {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

const getSettings = (): EverforestNightSettings => {
  const config = workspace.getConfiguration(EVERFOREST_SETTINGS_SECTION)

  return {
    contrast: config.get<ContrastSetting>('contrast', defaultSettings.contrast),
    workbench: config.get<Workbench>('workbench', defaultSettings.workbench),
    selection: config.get<Selection>('selection', defaultSettings.selection),
    cursor: config.get<Cursor>('cursor', defaultSettings.cursor),
    diagnosticTextBackgroundOpacity: config.get<DiagnosticTextBackgroundOpacity>(
      'diagnosticTextBackgroundOpacity',
      defaultSettings.diagnosticTextBackgroundOpacity,
    ),
    italicKeywords: config.get<boolean>('italicKeywords', defaultSettings.italicKeywords),
    italicComments: config.get<boolean>('italicComments', defaultSettings.italicComments),
    highContrast: config.get<boolean>('highContrast', defaultSettings.highContrast),
  }
}

const getThemeCustomizationKey = (label: string) => {
  return `[${label}]`
}

const getThemeConfiguration = (
  settings: EverforestNightSettings,
  defaultContrast: Contrast,
): Required<Configuration> => {
  const contrast = settings.contrast === 'theme' ? defaultContrast : settings.contrast

  return {
    contrast,
    workbench: settings.workbench,
    selection: settings.selection,
    cursor: settings.cursor,
    diagnosticTextBackgroundOpacity: settings.diagnosticTextBackgroundOpacity,
    italicKeywords: settings.italicKeywords,
    italicComments: settings.italicComments,
    highContrast: settings.highContrast,
  }
}

const getGeneratedCustomizations = (settings: EverforestNightSettings) => {
  const workbenchCustomizations: Record<string, WorkbenchCustomizations> = {}
  const tokenCustomizations: Record<string, TokenCustomizations> = {}
  const semanticCustomizations: Record<string, SemanticCustomizations> = {}

  for (const variant of THEME_VARIANTS) {
    const config = getThemeConfiguration(settings, variant.contrast)
    const palette = getPalette(config)
    const key = getThemeCustomizationKey(variant.label)

    workbenchCustomizations[key] = getWorkbench(palette, config)
    tokenCustomizations[key] = {
      textMateRules: getSyntax(palette, config),
    }
    semanticCustomizations[key] = {
      enabled: true,
      rules: getSemantic(palette),
    }
  }

  return {
    workbenchCustomizations,
    tokenCustomizations,
    semanticCustomizations,
  }
}

const mergeWorkbenchCustomizations = (
  existingValue: unknown,
  generatedValue: Record<string, WorkbenchCustomizations>,
) => {
  const existingRoot = isRecord(existingValue) ? existingValue : {}
  const nextValue: Record<string, unknown> = { ...existingRoot }

  for (const [themeKey, generatedThemeValue] of Object.entries(generatedValue)) {
    const existingThemeValue = isRecord(existingRoot[themeKey]) ? existingRoot[themeKey] : {}
    const preservedEntries = Object.entries(existingThemeValue).filter(([key]) => {
      return !(key in generatedThemeValue)
    })

    nextValue[themeKey] = {
      ...generatedThemeValue,
      ...Object.fromEntries(preservedEntries),
    }
  }

  return nextValue
}

const mergeTokenCustomizations = (
  existingValue: unknown,
  generatedValue: Record<string, TokenCustomizations>,
) => {
  const existingRoot = isRecord(existingValue) ? existingValue : {}
  const nextValue: Record<string, unknown> = { ...existingRoot }

  for (const [themeKey, generatedThemeValue] of Object.entries(generatedValue)) {
    const existingThemeValue = isRecord(existingRoot[themeKey]) ? existingRoot[themeKey] : {}
    const preservedEntries = Object.entries(existingThemeValue).filter(([key]) => {
      return key !== 'textMateRules'
    })

    nextValue[themeKey] = {
      ...Object.fromEntries(preservedEntries),
      textMateRules: generatedThemeValue.textMateRules,
    }
  }

  return nextValue
}

const mergeSemanticCustomizations = (
  existingValue: unknown,
  generatedValue: Record<string, SemanticCustomizations>,
) => {
  const existingRoot = isRecord(existingValue) ? existingValue : {}
  const nextValue: Record<string, unknown> = { ...existingRoot }

  for (const [themeKey, generatedThemeValue] of Object.entries(generatedValue)) {
    const existingThemeValue = isRecord(existingRoot[themeKey]) ? existingRoot[themeKey] : {}
    const existingRules = isRecord(existingThemeValue['rules']) ? existingThemeValue['rules'] : {}
    const preservedRuleEntries = Object.entries(existingRules).filter(([key]) => {
      return !(key in generatedThemeValue.rules)
    })
    const preservedThemeEntries = Object.entries(existingThemeValue).filter(([key]) => {
      return key !== 'enabled' && key !== 'rules'
    })

    nextValue[themeKey] = {
      ...Object.fromEntries(preservedThemeEntries),
      enabled: true,
      rules: {
        ...generatedThemeValue.rules,
        ...Object.fromEntries(preservedRuleEntries),
      },
    }
  }

  return nextValue
}

const hasChanged = (previousValue: unknown, nextValue: unknown) => {
  return JSON.stringify(previousValue ?? {}) !== JSON.stringify(nextValue ?? {})
}

const applyThemeCustomizations = async () => {
  const settings = getSettings()
  const generatedCustomizations = getGeneratedCustomizations(settings)
  const config = workspace.getConfiguration()

  const currentWorkbenchCustomizations = config.get('workbench.colorCustomizations')
  const nextWorkbenchCustomizations = mergeWorkbenchCustomizations(
    currentWorkbenchCustomizations,
    generatedCustomizations.workbenchCustomizations,
  )

  if (hasChanged(currentWorkbenchCustomizations, nextWorkbenchCustomizations)) {
    await config.update(
      'workbench.colorCustomizations',
      nextWorkbenchCustomizations,
      ConfigurationTarget.Global,
    )
  }

  const currentTokenCustomizations = config.get('editor.tokenColorCustomizations')
  const nextTokenCustomizations = mergeTokenCustomizations(
    currentTokenCustomizations,
    generatedCustomizations.tokenCustomizations,
  )

  if (hasChanged(currentTokenCustomizations, nextTokenCustomizations)) {
    await config.update(
      'editor.tokenColorCustomizations',
      nextTokenCustomizations,
      ConfigurationTarget.Global,
    )
  }

  const currentSemanticCustomizations = config.get('editor.semanticTokenColorCustomizations')
  const nextSemanticCustomizations = mergeSemanticCustomizations(
    currentSemanticCustomizations,
    generatedCustomizations.semanticCustomizations,
  )

  if (hasChanged(currentSemanticCustomizations, nextSemanticCustomizations)) {
    await config.update(
      'editor.semanticTokenColorCustomizations',
      nextSemanticCustomizations,
      ConfigurationTarget.Global,
    )
  }
}

export const activate = () => {
  void applyThemeCustomizations()

  workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration(EVERFOREST_SETTINGS_SECTION)) {
      void applyThemeCustomizations()
    }
  })
}

export const deactivate = () => {}
