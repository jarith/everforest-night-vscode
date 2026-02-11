import type { Palette, Configuration } from '../interface'
import { getDefaultSyntax } from './default'
import { getItalicSyntax } from './italic'

export const getSyntax = (palette: Palette, configuration: Configuration) => {
  if (configuration.italicKeywords) {
    return getItalicSyntax(palette, configuration)
  }

  return getDefaultSyntax(palette, configuration)
}
