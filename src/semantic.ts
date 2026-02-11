import type { Palette } from './interface'

export const getSemantic = (palette: Palette) => {
  return {
    operatorOverload: `${palette.orange}`,
    memberOperatorOverload: `${palette.orange}`,
    'variable.defaultLibrary:javascript': `${palette.purple}`,
    'property.defaultLibrary:javascript': `${palette.purple}`,
    'variable.defaultLibrary:javascriptreact': `${palette.purple}`,
    'property.defaultLibrary:javascriptreact': `${palette.purple}`,
    'class:typescript': `${palette.aqua}`,
    'interface:typescript': `${palette.aqua}`,
    'enum:typescript': `${palette.purple}`,
    'enumMember:typescript': `${palette.blue}`,
    'namespace:typescript': `${palette.purple}`,
    'variable.defaultLibrary:typescript': `${palette.purple}`,
    'property.defaultLibrary:typescript': `${palette.purple}`,
    'class:typescriptreact': `${palette.aqua}`,
    'interface:typescriptreact': `${palette.aqua}`,
    'enum:typescriptreact': `${palette.purple}`,
    'enumMember:typescriptreact': `${palette.blue}`,
    'namespace:typescriptreact': `${palette.purple}`,
    'variable.defaultLibrary:typescriptreact': `${palette.purple}`,
    'property.defaultLibrary:typescriptreact': `${palette.purple}`,
    'intrinsic:python': `${palette.purple}`,
    'module:python': `${palette.blue}`,
    'class:python': `${palette.aqua}`,
    'macro:rust': `${palette.aqua}`,
    'namespace:rust': `${palette.purple}`,
    'selfKeyword:rust': `${palette.purple}`,
    '*.mutable:rust': { fontStyle: 'underline' },
  }
}
