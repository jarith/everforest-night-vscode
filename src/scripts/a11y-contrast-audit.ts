#!/usr/bin/env node

'use strict'

import { getPalette } from '../palette'
import { getWorkbench } from '../workbench'
import { getSyntax } from '../syntax'
import { getSemantic } from '../semantic'
import type { Configuration, Palette as ThemePalette } from '../interface'

type ThemeColors = Readonly<Record<string, unknown>>
type Palette = ThemePalette

type Contrast = 'hard' | 'medium' | 'soft'
type Workbench = 'material' | 'flat' | 'high-contrast'
type Selection = 'grey' | 'red' | 'orange' | 'yellow' | 'green' | 'aqua' | 'blue' | 'purple'
type Cursor = 'white' | 'red' | 'orange' | 'yellow' | 'green' | 'aqua' | 'blue' | 'purple'
type DiagnosticTextBackgroundOpacity = '0%' | '12.5%' | '25%' | '37.5%' | '50%'

interface AuditConfig {
  readonly contrast: Contrast
  readonly workbench: Workbench
  readonly selection: Selection
  readonly cursor: Cursor
  readonly diagnosticTextBackgroundOpacity: DiagnosticTextBackgroundOpacity
  readonly italicKeywords: false
  readonly italicComments: true
  readonly highContrast: boolean
}

interface PairCheck {
  readonly fg: string
  readonly bg: string
  readonly base: string
  readonly threshold: number
}

interface SyntaxToken {
  readonly name?: string
  readonly settings?: {
    readonly foreground?: string
  }
}

interface RGBA {
  readonly r: number
  readonly g: number
  readonly b: number
  readonly a: number
}

type FailureKind = 'workbench' | 'diagnostic' | 'syntax' | 'semantic'

interface AuditFailure {
  readonly kind: FailureKind
  readonly name: string
  readonly ratio: number
  readonly threshold: number
  readonly config: AuditConfig
}

interface AuditResult {
  readonly checks: number
  readonly failures: readonly AuditFailure[]
  readonly skipped: readonly string[]
}

interface ThemeModules {
  readonly getPalette: (configuration: Configuration) => Palette
  readonly getWorkbench: (palette: Palette, configuration: Configuration) => ThemeColors
  readonly getSyntax: (palette: Palette, configuration: Configuration) => readonly SyntaxToken[]
  readonly getSemantic: (palette: Palette) => Readonly<Record<string, unknown>>
}

const TEXT_THRESHOLD = 4.5
const UI_THRESHOLD = 3

const pairChecks: readonly PairCheck[] = [
  {
    fg: 'foreground',
    bg: 'editor.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'descriptionForeground',
    bg: 'editor.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'editor.foreground',
    bg: 'editor.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'editorCodeLens.foreground',
    bg: 'editor.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'editorInlayHint.foreground',
    bg: 'editorInlayHint.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'editorGhostText.foreground',
    bg: 'editorGhostText.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'editorLineNumber.foreground',
    bg: 'editor.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'editorLineNumber.activeForeground',
    bg: 'editor.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'editorGutter.commentRangeForeground',
    bg: 'editor.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'sideBar.foreground',
    bg: 'sideBar.background',
    base: 'sideBar.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'sideBarTitle.foreground',
    bg: 'sideBar.background',
    base: 'sideBar.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'sideBarSectionHeader.foreground',
    bg: 'sideBarSectionHeader.background',
    base: 'sideBar.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'activityBar.foreground',
    bg: 'activityBar.background',
    base: 'activityBar.background',
    threshold: UI_THRESHOLD,
  },
  {
    fg: 'activityBar.inactiveForeground',
    bg: 'activityBar.background',
    base: 'activityBar.background',
    threshold: UI_THRESHOLD,
  },
  {
    fg: 'tab.activeForeground',
    bg: 'tab.activeBackground',
    base: 'tab.activeBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'tab.inactiveForeground',
    bg: 'tab.inactiveBackground',
    base: 'tab.inactiveBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'tab.unfocusedActiveForeground',
    bg: 'tab.activeBackground',
    base: 'tab.activeBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'tab.unfocusedInactiveForeground',
    bg: 'tab.inactiveBackground',
    base: 'tab.inactiveBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'statusBar.foreground',
    bg: 'statusBar.background',
    base: 'statusBar.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'statusBar.debuggingForeground',
    bg: 'statusBar.debuggingBackground',
    base: 'statusBar.debuggingBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'statusBar.noFolderForeground',
    bg: 'statusBar.noFolderBackground',
    base: 'statusBar.noFolderBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'statusBarItem.prominentForeground',
    bg: 'statusBarItem.prominentBackground',
    base: 'statusBarItem.prominentBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'statusBarItem.remoteForeground',
    bg: 'statusBarItem.remoteBackground',
    base: 'statusBarItem.remoteBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'statusBarItem.errorForeground',
    bg: 'statusBarItem.errorBackground',
    base: 'statusBarItem.errorBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'statusBarItem.warningForeground',
    bg: 'statusBarItem.warningBackground',
    base: 'statusBarItem.warningBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'titleBar.activeForeground',
    bg: 'titleBar.activeBackground',
    base: 'titleBar.activeBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'titleBar.inactiveForeground',
    bg: 'titleBar.inactiveBackground',
    base: 'titleBar.inactiveBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'menu.foreground',
    bg: 'menu.background',
    base: 'menu.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'menu.selectionForeground',
    bg: 'menu.selectionBackground',
    base: 'menu.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'dropdown.foreground',
    bg: 'dropdown.background',
    base: 'dropdown.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'input.foreground',
    bg: 'input.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'input.placeholderForeground',
    bg: 'input.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'inputValidation.errorForeground',
    bg: 'inputValidation.errorBackground',
    base: 'inputValidation.errorBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'inputValidation.infoForeground',
    bg: 'inputValidation.infoBackground',
    base: 'inputValidation.infoBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'inputValidation.warningForeground',
    bg: 'inputValidation.warningBackground',
    base: 'inputValidation.warningBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'button.foreground',
    bg: 'button.background',
    base: 'button.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'button.secondaryForeground',
    bg: 'button.secondaryBackground',
    base: 'button.secondaryBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'list.activeSelectionForeground',
    bg: 'list.activeSelectionBackground',
    base: 'sideBar.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'list.inactiveSelectionForeground',
    bg: 'list.inactiveSelectionBackground',
    base: 'sideBar.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'list.focusForeground',
    bg: 'list.focusBackground',
    base: 'sideBar.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'list.errorForeground',
    bg: 'sideBar.background',
    base: 'sideBar.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'list.warningForeground',
    bg: 'sideBar.background',
    base: 'sideBar.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'notificationCenterHeader.foreground',
    bg: 'notificationCenterHeader.background',
    base: 'notificationCenterHeader.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'notifications.foreground',
    bg: 'notifications.background',
    base: 'notifications.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'peekViewResult.fileForeground',
    bg: 'peekViewResult.background',
    base: 'peekViewResult.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'peekViewResult.lineForeground',
    bg: 'peekViewResult.background',
    base: 'peekViewResult.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'peekViewResult.selectionForeground',
    bg: 'peekViewResult.selectionBackground',
    base: 'peekViewResult.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'peekViewTitleDescription.foreground',
    bg: 'peekViewTitle.background',
    base: 'peekViewTitle.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'peekViewTitleLabel.foreground',
    bg: 'peekViewTitle.background',
    base: 'peekViewTitle.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'editorSuggestWidget.foreground',
    bg: 'editorSuggestWidget.background',
    base: 'editorSuggestWidget.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'editorSuggestWidget.highlightForeground',
    bg: 'editorSuggestWidget.background',
    base: 'editorSuggestWidget.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'editorWidget.foreground',
    bg: 'editorWidget.background',
    base: 'editorWidget.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'terminal.foreground',
    bg: 'editor.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'textLink.foreground',
    bg: 'editor.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'textLink.activeForeground',
    bg: 'editor.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'textPreformat.foreground',
    bg: 'textCodeBlock.background',
    base: 'textCodeBlock.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'settings.headerForeground',
    bg: 'editor.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'settings.numberInputForeground',
    bg: 'settings.numberInputBackground',
    base: 'settings.numberInputBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'settings.textInputForeground',
    bg: 'settings.textInputBackground',
    base: 'settings.textInputBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'settings.checkboxForeground',
    bg: 'settings.checkboxBackground',
    base: 'settings.checkboxBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'settings.dropdownForeground',
    bg: 'settings.dropdownBackground',
    base: 'settings.dropdownBackground',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'pickerGroup.foreground',
    bg: 'editorWidget.background',
    base: 'editorWidget.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'panelTitle.activeForeground',
    bg: 'panel.background',
    base: 'panel.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'panelTitle.inactiveForeground',
    bg: 'panel.background',
    base: 'panel.background',
    threshold: TEXT_THRESHOLD,
  },
]

const diagnosticsChecks: readonly PairCheck[] = [
  {
    fg: 'editor.foreground',
    bg: 'editorError.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'editor.foreground',
    bg: 'editorWarning.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
  {
    fg: 'editor.foreground',
    bg: 'editorInfo.background',
    base: 'editor.background',
    threshold: TEXT_THRESHOLD,
  },
]

const contrasts = ['hard', 'medium', 'soft'] as const
const workbenches = ['material', 'flat', 'high-contrast'] as const
const selections = ['grey', 'red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'purple'] as const
const cursors = ['white', 'red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'purple'] as const
const diagnosticOpacities = ['0%', '12.5%', '25%', '37.5%', '50%'] as const
const highContrastFlags = [false, true] as const

const hexRegex = /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i

const EMPTY_AUDIT_RESULT: AuditResult = {
  checks: 0,
  failures: [],
  skipped: [],
}

const isDefined = <T>(value: T | undefined): value is T => value !== undefined

const parseHex = (raw: unknown): RGBA | null => {
  if (typeof raw !== 'string' || !hexRegex.test(raw)) {
    return null
  }

  let hex = raw.slice(1)

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => `${char}${char}`)
      .join('')
      .concat('ff')
  }

  if (hex.length === 6) {
    hex = `${hex}ff`
  }

  return {
    r: Number.parseInt(hex.slice(0, 2), 16),
    g: Number.parseInt(hex.slice(2, 4), 16),
    b: Number.parseInt(hex.slice(4, 6), 16),
    a: Number.parseInt(hex.slice(6, 8), 16) / 255,
  }
}

const blend = (fg: RGBA, bg: RGBA): RGBA => {
  const alpha = fg.a + bg.a * (1 - fg.a)

  if (alpha === 0) {
    return { r: 0, g: 0, b: 0, a: 0 }
  }

  return {
    r: (fg.r * fg.a + bg.r * bg.a * (1 - fg.a)) / alpha,
    g: (fg.g * fg.a + bg.g * bg.a * (1 - fg.a)) / alpha,
    b: (fg.b * fg.a + bg.b * bg.a * (1 - fg.a)) / alpha,
    a: alpha,
  }
}

const toLinear = (component: number): number => {
  const normalized = component / 255

  if (normalized <= 0.03928) {
    return normalized / 12.92
  }

  return ((normalized + 0.055) / 1.055) ** 2.4
}

const luminance = (color: RGBA): number =>
  0.2126 * toLinear(color.r) + 0.7152 * toLinear(color.g) + 0.0722 * toLinear(color.b)

const contrastRatio = (a: RGBA, b: RGBA): number => {
  const l1 = luminance(a)
  const l2 = luminance(b)
  const lighter = Math.max(l1, l2)
  const darker = Math.min(l1, l2)

  return (lighter + 0.05) / (darker + 0.05)
}

const effectiveColor = (raw: unknown, base: RGBA): RGBA | null => {
  const parsed = parseHex(raw)

  if (parsed === null) {
    return null
  }

  return parsed.a < 1 ? blend(parsed, base) : parsed
}

const mergeResults = (left: AuditResult, right: AuditResult): AuditResult => ({
  checks: left.checks + right.checks,
  failures: [...left.failures, ...right.failures],
  skipped: [...left.skipped, ...right.skipped],
})

const withSkip = (message: string): AuditResult => ({
  checks: 0,
  failures: [],
  skipped: [message],
})

const withCheck = (
  kind: FailureKind,
  name: string,
  ratio: number,
  threshold: number,
  config: AuditConfig,
): AuditResult => ({
  checks: 1,
  failures:
    ratio >= threshold
      ? []
      : [
          {
            kind,
            name,
            ratio,
            threshold,
            config,
          },
        ],
  skipped: [],
})

const reduceResults = (results: readonly AuditResult[]): AuditResult =>
  results.reduce(mergeResults, EMPTY_AUDIT_RESULT)

const getEditorBackground = (colors: ThemeColors): RGBA | null => {
  const editorBackgroundRaw = colors['editor.background']

  if (editorBackgroundRaw === undefined) {
    return null
  }

  return parseHex(editorBackgroundRaw)
}

const evaluateWorkbenchPair = (
  pair: PairCheck,
  colors: ThemeColors,
  config: AuditConfig,
): AuditResult => {
  const fgRaw = colors[pair.fg]
  const bgRaw = colors[pair.bg]
  const baseRaw = colors[pair.base] ?? colors['editor.background']

  if (!isDefined(fgRaw) || !isDefined(bgRaw) || !isDefined(baseRaw)) {
    return withSkip(`Missing color key for ${pair.fg} on ${pair.bg}`)
  }

  const baseColor = parseHex(baseRaw)

  if (baseColor === null) {
    return withSkip(`Invalid base color ${pair.base}=${String(baseRaw)}`)
  }

  const bgColor = effectiveColor(bgRaw, baseColor)

  if (bgColor === null) {
    return withSkip(`Invalid background color ${pair.bg}=${String(bgRaw)}`)
  }

  const fgColor = effectiveColor(fgRaw, bgColor)

  if (fgColor === null) {
    return withSkip(`Invalid foreground color ${pair.fg}=${String(fgRaw)}`)
  }

  const ratio = contrastRatio(fgColor, bgColor)

  return withCheck('workbench', `${pair.fg} on ${pair.bg}`, ratio, pair.threshold, config)
}

const evaluateDiagnosticPair = (
  pair: PairCheck,
  colors: ThemeColors,
  config: AuditConfig,
): AuditResult => {
  const fgRaw = colors[pair.fg]
  const bgRaw = colors[pair.bg]
  const baseRaw = colors[pair.base]

  if (!isDefined(fgRaw) || !isDefined(bgRaw) || !isDefined(baseRaw)) {
    return withSkip(`Missing diagnostic key for ${pair.fg} on ${pair.bg}`)
  }

  const baseColor = parseHex(baseRaw)

  if (baseColor === null) {
    return withSkip(`Invalid diagnostic base color ${pair.base}=${String(baseRaw)}`)
  }

  const bgColor = effectiveColor(bgRaw, baseColor)
  const fgColor = bgColor === null ? null : effectiveColor(fgRaw, bgColor)

  if (bgColor === null || fgColor === null) {
    return withSkip(`Invalid diagnostic color ${pair.fg} on ${pair.bg}`)
  }

  const ratio = contrastRatio(fgColor, bgColor)

  return withCheck('diagnostic', `${pair.fg} on ${pair.bg}`, ratio, pair.threshold, config)
}

const evaluateSyntaxToken = (
  token: SyntaxToken,
  editorBackground: RGBA,
  config: AuditConfig,
): AuditResult => {
  const tokenForeground = token.settings?.foreground

  if (tokenForeground === undefined) {
    return EMPTY_AUDIT_RESULT
  }

  const fgColor = effectiveColor(tokenForeground, editorBackground)

  if (fgColor === null) {
    return withSkip(`Invalid syntax color for token ${String(token.name)}`)
  }

  const ratio = contrastRatio(fgColor, editorBackground)

  return withCheck(
    'syntax',
    `tokenColors:${String(token.name ?? '<unknown>')}`,
    ratio,
    TEXT_THRESHOLD,
    config,
  )
}

const evaluateSemanticToken = (
  tokenName: string,
  tokenValue: unknown,
  editorBackground: RGBA,
  config: AuditConfig,
): AuditResult => {
  if (typeof tokenValue !== 'string') {
    return EMPTY_AUDIT_RESULT
  }

  const fgColor = effectiveColor(tokenValue, editorBackground)

  if (fgColor === null) {
    return withSkip(`Invalid semantic color for token ${tokenName}`)
  }

  const ratio = contrastRatio(fgColor, editorBackground)

  return withCheck('semantic', `semantic:${tokenName}`, ratio, TEXT_THRESHOLD, config)
}

const runWorkbenchChecks = (colors: ThemeColors, config: AuditConfig): AuditResult =>
  reduceResults(pairChecks.map((pair) => evaluateWorkbenchPair(pair, colors, config)))

const runDiagnosticChecks = (colors: ThemeColors, config: AuditConfig): AuditResult =>
  reduceResults(diagnosticsChecks.map((pair) => evaluateDiagnosticPair(pair, colors, config)))

const runTokenChecks = (
  modules: ThemeModules,
  palette: Palette,
  colors: ThemeColors,
  config: AuditConfig,
): AuditResult => {
  const editorBackground = getEditorBackground(colors)

  if (editorBackground === null) {
    const raw = colors['editor.background']

    return withSkip(
      raw === undefined
        ? 'Missing editor.background for syntax/semantic checks'
        : `Invalid editor.background=${String(raw)}`,
    )
  }

  const syntaxResults = modules
    .getSyntax(palette, config)
    .map((token) => evaluateSyntaxToken(token, editorBackground, config))

  const semanticResults = Object.entries(modules.getSemantic(palette)).map(
    ([tokenName, tokenValue]) =>
      evaluateSemanticToken(tokenName, tokenValue, editorBackground, config),
  )

  return reduceResults([...syntaxResults, ...semanticResults])
}

const formatConfig = (config: AuditConfig): string =>
  `contrast=${config.contrast} workbench=${config.workbench} selection=${config.selection} cursor=${config.cursor} diag=${config.diagnosticTextBackgroundOpacity} highContrast=${config.highContrast}`

const buildConfigs = (): readonly AuditConfig[] =>
  contrasts.flatMap((contrast) =>
    workbenches.flatMap((workbench) =>
      selections.flatMap((selection) =>
        cursors.flatMap((cursor) =>
          diagnosticOpacities.flatMap((diagnosticTextBackgroundOpacity) =>
            highContrastFlags.map((highContrast) => ({
              contrast,
              workbench,
              selection,
              cursor,
              diagnosticTextBackgroundOpacity,
              highContrast,
              italicKeywords: false,
              italicComments: true,
            })),
          ),
        ),
      ),
    ),
  )

const auditConfig = (modules: ThemeModules, config: AuditConfig): AuditResult => {
  const palette = modules.getPalette(config)
  const colors = modules.getWorkbench(palette, config)

  return reduceResults([
    runWorkbenchChecks(colors, config),
    runDiagnosticChecks(colors, config),
    runTokenChecks(modules, palette, colors, config),
  ])
}

const runAudit = (modules: ThemeModules): AuditResult =>
  reduceResults(buildConfigs().map((config) => auditConfig(modules, config)))

const printSkipped = (skipped: readonly string[]): number => {
  if (skipped.length === 0) {
    return 0
  }

  const uniqueSkipped = [...new Set(skipped)]
  console.error(`Skipped ${skipped.length} checks due to missing/invalid colors:`)
  for (const line of uniqueSkipped) {
    console.error(`- ${line}`)
  }

  return 1
}

const printFailures = (result: AuditResult): number => {
  if (result.failures.length === 0) {
    console.log(
      `A11y contrast audit passed: ${result.checks} checks across all generated variants.`,
    )
    return 0
  }

  const failures = [...result.failures].sort((a, b) => a.ratio - b.ratio)
  console.error(
    `A11y contrast audit failed: ${failures.length} violations across ${result.checks} checks.`,
  )

  const maxPrinted = 200
  for (const failure of failures.slice(0, maxPrinted)) {
    console.error(
      `${failure.ratio.toFixed(2)} < ${failure.threshold.toFixed(1)} | ${failure.kind} | ${failure.name} | ${formatConfig(failure.config)}`,
    )
  }

  if (failures.length > maxPrinted) {
    console.error(`... ${failures.length - maxPrinted} additional violations not shown`)
  }

  return 1
}

const loadThemeModules = (): ThemeModules => {
  return {
    getPalette,
    getWorkbench,
    getSyntax,
    getSemantic,
  }
}

const main = (): number => {
  try {
    const modules = loadThemeModules()
    const result = runAudit(modules)

    if (result.skipped.length > 0) {
      return printSkipped(result.skipped)
    }

    return printFailures(result)
  } catch (error) {
    console.error('Unable to run the a11y contrast audit from source modules.')
    console.error(error instanceof Error ? error.message : String(error))
    return 1
  }
}

process.exit(main())
