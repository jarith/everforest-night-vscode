import type { Palette, Configuration } from '../interface'

interface WorkbenchContext {
  palette: Palette
  selectionBg: string
  editorSelectionBg: string
  editorSelectionBgHl: string
  cursorFg: string
  diagnosticTextBackgroundOpacity: string
}

type SelectionColors = {
  selectionBg: string
  editorSelectionBg: string
  editorSelectionBgHl: string
}

const dimColorKeys: Record<string, keyof Palette> = {
  red: 'dimRed',
  orange: 'dimOrange',
  yellow: 'dimYellow',
  green: 'dimGreen',
  aqua: 'dimAqua',
  blue: 'dimBlue',
  purple: 'dimPurple',
}

const resolveSelection = (palette: Palette, configuration: Configuration): SelectionColors => {
  const color = configuration.selection ?? 'grey'
  const dimKey = dimColorKeys[color]

  if (dimKey !== undefined) {
    const base = palette[dimKey]

    return {
      selectionBg: `${base}60`,
      editorSelectionBg: `${base}40`,
      editorSelectionBgHl: `${base}20`,
    }
  }

  return {
    selectionBg: `${palette.bg4}e0`,
    editorSelectionBg: `${palette.bg4}c0`,
    editorSelectionBgHl: `${palette.bg4}60`,
  }
}

const cursorColorKeys: Record<string, keyof Palette> = {
  red: 'red',
  orange: 'orange',
  yellow: 'yellow',
  green: 'green',
  aqua: 'aqua',
  blue: 'blue',
  purple: 'purple',
}

const resolveCursor = (palette: Palette, configuration: Configuration): string => {
  const key = cursorColorKeys[configuration.cursor ?? 'white']

  return key === undefined ? palette.fg : palette[key]
}

const diagnosticOpacityMap: Record<string, string> = {
  '0%': '00',
  '12.5%': '20',
  '25%': '40',
  '37.5%': '60',
  '50%': '80',
}

const resolveDiagnosticOpacity = (configuration: Configuration): string => {
  return diagnosticOpacityMap[configuration.diagnosticTextBackgroundOpacity ?? '0%'] ?? '00'
}

export type WorkbenchConfig = Record<string, (ctx: WorkbenchContext) => string>

export const resolveWorkbench = (
  generalConfig: WorkbenchConfig,
  highContrastConfig: WorkbenchConfig,
  palette: Palette,
  configuration: Configuration,
): Record<string, string> => {
  const { selectionBg, editorSelectionBg, editorSelectionBgHl } = resolveSelection(
    palette,
    configuration,
  )
  const cursorFg = resolveCursor(palette, configuration)
  const diagnosticTextBackgroundOpacity = resolveDiagnosticOpacity(configuration)

  const ctx: WorkbenchContext = {
    palette,
    selectionBg,
    editorSelectionBg,
    editorSelectionBgHl,
    cursorFg,
    diagnosticTextBackgroundOpacity,
  }

  const config = configuration.highContrast
    ? { ...generalConfig, ...highContrastConfig }
    : generalConfig

  return Object.entries(config).reduce(
    (acc, [key, getValue]) => {
      acc[key] = getValue(ctx)

      return acc
    },
    {} as Record<string, string>,
  )
}
