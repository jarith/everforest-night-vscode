import type { Configuration, Palette } from '../interface'

interface SyntaxSettings {
  foreground?: string
  fontStyle?: string
}

interface SyntaxConfigEntry {
  name: string
  scope: string
  getSettings: (palette: Palette, configuration: Configuration) => SyntaxSettings
}

const config: SyntaxConfigEntry[] = [
  {
    name: 'Regular',
    scope: 'storage.type.function.arrow, keyword.other.arrow',
    getSettings: () => ({
      fontStyle: 'regular',
    }),
  },
  {
    name: 'Keyword',
    scope:
      'keyword, storage.type.function, storage.type.class, storage.type.enum, storage.type.interface, storage.type.property, keyword.operator.new, keyword.operator.expression, keyword.operator.new, keyword.operator.delete, storage.type.extends',
    getSettings: (palette) => ({
      foreground: palette.red,
    }),
  },
  {
    name: 'Keyword Italic',
    scope:
      'keyword.control, storage.type.function, storage.type.class, storage.type.enum, storage.type.interface, storage.type.property, keyword.operator.new, keyword.operator.expression, keyword.operator.new, keyword.operator.delete, storage.type.extends',
    getSettings: () => ({
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Debug',
    scope: 'keyword.other.debugger',
    getSettings: (palette) => ({
      foreground: palette.red,
    }),
  },
  {
    name: 'Storage',
    scope:
      'storage, modifier, keyword.var, entity.name.tag, keyword.control.case, keyword.control.switch',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Operator',
    scope: 'keyword.operator',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'String',
    scope:
      'string, punctuation.definition.string.end, punctuation.definition.string.begin, punctuation.definition.string.template.begin, punctuation.definition.string.template.end',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'Attribute',
    scope: 'entity.other.attribute-name',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'String Escape',
    scope:
      'constant.character.escape, punctuation.quasi.element, punctuation.definition.template-expression, punctuation.section.embedded, storage.type.format, constant.other.placeholder, constant.other.placeholder, variable.interpolation',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Function',
    scope:
      'entity.name.function, support.function, meta.function, meta.function-call, meta.definition.method',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Preproc',
    scope:
      'keyword.control.at-rule, keyword.control.import, keyword.control.export, storage.type.namespace, punctuation.decorator, keyword.control.directive, keyword.preprocessor, punctuation.definition.preprocessor, punctuation.definition.directive, keyword.other.import, keyword.other.package, entity.name.type.namespace, entity.name.scope-resolution, keyword.other.using, keyword.package, keyword.import, keyword.map',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Preproc Italic',
    scope:
      'keyword.control.at-rule, keyword.control.import, keyword.control.export, storage.type.namespace, keyword.control.directive, keyword.preprocessor, keyword.other.import, keyword.other.package, entity.name.type.namespace, entity.name.scope-resolution, keyword.other.using, keyword.package, keyword.import, keyword.map',
    getSettings: () => ({
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Annotation',
    scope: 'storage.type.annotation',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Label',
    scope: 'entity.name.label, constant.other.label',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Modules',
    scope:
      'support.module, support.node, support.other.module, support.type.object.module, entity.name.type.module, entity.name.type.class.module, keyword.control.module',
    getSettings: (palette) => ({
      foreground: palette.aqua,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Type',
    scope: 'storage.type, support.type, entity.name.type, keyword.type',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'Class',
    scope:
      'entity.name.type.class, support.class, entity.name.class, entity.other.inherited-class, storage.class',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'Number',
    scope: 'constant.numeric',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'Boolean',
    scope: 'constant.language.boolean',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'Macro',
    scope: 'entity.name.function.preprocessor',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'Special identifier',
    scope:
      'variable.language.this, variable.language.self, variable.language.super, keyword.other.this, variable.language.special, constant.language.null, constant.language.undefined, constant.language.nan',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Constant',
    scope: 'constant.language, support.constant',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'Identifier',
    scope: 'variable, support.variable, meta.definition.variable',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'Property',
    scope:
      'variable.object.property, support.variable.property, variable.other.property, variable.other.object.property, variable.other.enummember, variable.other.member, meta.object-literal.key',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'Delimiter',
    scope: 'punctuation, meta.brace, meta.delimiter, meta.bracket',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'Markdown heading1',
    scope: 'heading.1.markdown, markup.heading.setext.1.markdown',
    getSettings: (palette) => ({
      foreground: palette.red,
      fontStyle: 'bold',
    }),
  },
  {
    name: 'Markdown heading2',
    scope: 'heading.2.markdown, markup.heading.setext.2.markdown',
    getSettings: (palette) => ({
      foreground: palette.orange,
      fontStyle: 'bold',
    }),
  },
  {
    name: 'Markdown heading3',
    scope: 'heading.3.markdown',
    getSettings: (palette) => ({
      foreground: palette.yellow,
      fontStyle: 'bold',
    }),
  },
  {
    name: 'Markdown heading4',
    scope: 'heading.4.markdown',
    getSettings: (palette) => ({
      foreground: palette.green,
      fontStyle: 'bold',
    }),
  },
  {
    name: 'Markdown heading5',
    scope: 'heading.5.markdown',
    getSettings: (palette) => ({
      foreground: palette.blue,
      fontStyle: 'bold',
    }),
  },
  {
    name: 'Markdown heading6',
    scope: 'heading.6.markdown',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'bold',
    }),
  },
  {
    name: 'Markdown heading delimiter',
    scope: 'punctuation.definition.heading.markdown',
    getSettings: (palette) => ({
      foreground: palette.grey1,
      fontStyle: 'regular',
    }),
  },
  {
    name: 'Markdown link',
    scope:
      'string.other.link.title.markdown, constant.other.reference.link.markdown, string.other.link.description.markdown',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'regular',
    }),
  },
  {
    name: 'Markdown link text',
    scope: 'markup.underline.link.image.markdown, markup.underline.link.markdown',
    getSettings: (palette) => ({
      foreground: palette.green,
      fontStyle: 'underline',
    }),
  },
  {
    name: 'Markdown delimiter',
    scope:
      'punctuation.definition.string.begin.markdown, punctuation.definition.string.end.markdown, punctuation.definition.italic.markdown, punctuation.definition.quote.begin.markdown, punctuation.definition.metadata.markdown, punctuation.separator.key-value.markdown, punctuation.definition.constant.markdown',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'Markdown bold delimiter',
    scope: 'punctuation.definition.bold.markdown',
    getSettings: (palette) => ({
      foreground: palette.grey1,
      fontStyle: 'regular',
    }),
  },
  {
    name: 'Markdown separator delimiter',
    scope:
      'meta.separator.markdown, punctuation.definition.constant.begin.markdown, punctuation.definition.constant.end.markdown',
    getSettings: (palette) => ({
      foreground: palette.grey1,
      fontStyle: 'bold',
    }),
  },
  {
    name: 'Markdown italic',
    scope: 'markup.italic',
    getSettings: () => ({
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Markdown bold',
    scope: 'markup.bold',
    getSettings: () => ({
      fontStyle: 'bold',
    }),
  },
  {
    name: 'Markdown bold italic',
    scope: 'markup.bold markup.italic, markup.italic markup.bold',
    getSettings: () => ({
      fontStyle: 'italic bold',
    }),
  },
  {
    name: 'Markdown code delimiter',
    scope: 'punctuation.definition.markdown, punctuation.definition.raw.markdown',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'Markdown code type',
    scope: 'fenced_code.block.language',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'Markdown code block',
    scope: 'markup.fenced_code.block.markdown, markup.inline.raw.string.markdown',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Markdown list mark',
    scope: 'punctuation.definition.list.begin.markdown',
    getSettings: (palette) => ({
      foreground: palette.red,
    }),
  },
  {
    name: 'reStructuredText heading',
    scope: 'punctuation.definition.heading.restructuredtext',
    getSettings: (palette) => ({
      foreground: palette.orange,
      fontStyle: 'bold',
    }),
  },
  {
    name: 'reStructuredText delimiter',
    scope:
      'punctuation.definition.field.restructuredtext, punctuation.separator.key-value.restructuredtext, punctuation.definition.directive.restructuredtext, punctuation.definition.constant.restructuredtext, punctuation.definition.italic.restructuredtext, punctuation.definition.table.restructuredtext',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'reStructuredText delimiter bold',
    scope: 'punctuation.definition.bold.restructuredtext',
    getSettings: (palette) => ({
      foreground: palette.grey1,
      fontStyle: 'regular',
    }),
  },
  {
    name: 'reStructuredText aqua',
    scope:
      'entity.name.tag.restructuredtext, punctuation.definition.link.restructuredtext, punctuation.definition.raw.restructuredtext, punctuation.section.raw.restructuredtext',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'reStructuredText purple',
    scope: 'constant.other.footnote.link.restructuredtext',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'reStructuredText red',
    scope: 'support.directive.restructuredtext',
    getSettings: (palette) => ({
      foreground: palette.red,
    }),
  },
  {
    name: 'reStructuredText green',
    scope:
      'entity.name.directive.restructuredtext, markup.raw.restructuredtext, markup.raw.inner.restructuredtext, string.other.link.title.restructuredtext',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'LaTex delimiter',
    scope:
      'punctuation.definition.function.latex, punctuation.definition.function.tex, punctuation.definition.keyword.latex, constant.character.newline.tex, punctuation.definition.keyword.tex',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'LaTex red',
    scope: 'support.function.be.latex',
    getSettings: (palette) => ({
      foreground: palette.red,
    }),
  },
  {
    name: 'LaTex orange',
    scope:
      'support.function.section.latex, keyword.control.table.cell.latex, keyword.control.table.newline.latex',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'LaTex yellow',
    scope:
      'support.class.latex, variable.parameter.latex, variable.parameter.function.latex, variable.parameter.definition.label.latex, constant.other.reference.label.latex',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'LaTex purple',
    scope: 'keyword.control.preamble.latex',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'Html grey',
    scope: 'punctuation.separator.namespace.xml',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'Html orange',
    scope: 'entity.name.tag.html, entity.name.tag.xml, entity.name.tag.localname.xml',
    getSettings: (palette) => ({
      foreground: palette.orange,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Html yellow',
    scope:
      'entity.other.attribute-name.html, entity.other.attribute-name.xml, entity.other.attribute-name.localname.xml',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'Html green',
    scope:
      'string.quoted.double.html, string.quoted.single.html, punctuation.definition.string.begin.html, punctuation.definition.string.end.html, punctuation.separator.key-value.html, punctuation.definition.string.begin.xml, punctuation.definition.string.end.xml, string.quoted.double.xml, string.quoted.single.xml, punctuation.definition.tag.begin.html, punctuation.definition.tag.end.html, punctuation.definition.tag.xml, meta.tag.xml, meta.tag.preprocessor.xml, meta.tag.other.html, meta.tag.block.any.html, meta.tag.inline.any.html',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Html purple',
    scope: 'variable.language.documentroot.xml, meta.tag.sgml.doctype.xml',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'Proto yellow',
    scope: 'storage.type.proto',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'Proto green',
    scope:
      'string.quoted.double.proto.syntax, string.quoted.single.proto.syntax, string.quoted.double.proto, string.quoted.single.proto',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Proto aqua',
    scope: 'entity.name.class.proto, entity.name.class.message.proto',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'CSS grey',
    scope:
      'punctuation.definition.entity.css, punctuation.separator.key-value.css, punctuation.terminator.rule.css, punctuation.separator.list.comma.css',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'CSS red',
    scope: 'entity.other.attribute-name.class.css',
    getSettings: (palette) => ({
      foreground: palette.red,
    }),
  },
  {
    name: 'CSS orange',
    scope: 'keyword.other.unit',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'CSS yellow',
    scope:
      'entity.other.attribute-name.pseudo-class.css, entity.other.attribute-name.pseudo-element.css',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'CSS green',
    scope:
      'string.quoted.single.css, string.quoted.double.css, support.constant.property-value.css, meta.property-value.css, punctuation.definition.string.begin.css, punctuation.definition.string.end.css, constant.numeric.css, support.constant.font-name.css, variable.parameter.keyframe-list.css',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'CSS aqua',
    scope: 'support.type.property-name.css',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'CSS blue',
    scope: 'support.type.vendored.property-name.css',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'CSS purple',
    scope:
      'entity.name.tag.css, entity.other.keyframe-offset.css, punctuation.definition.keyword.css, keyword.control.at-rule.keyframes.css, meta.selector.css',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'SASS grey',
    scope:
      'punctuation.definition.entity.scss, punctuation.separator.key-value.scss, punctuation.terminator.rule.scss, punctuation.separator.list.comma.scss',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'SASS orange',
    scope: 'keyword.control.at-rule.keyframes.scss',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'SASS yellow',
    scope:
      'punctuation.definition.interpolation.begin.bracket.curly.scss, punctuation.definition.interpolation.end.bracket.curly.scss',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'SASS green',
    scope:
      'punctuation.definition.string.begin.scss, punctuation.definition.string.end.scss, string.quoted.double.scss, string.quoted.single.scss, constant.character.css.sass, meta.property-value.scss',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'SASS purple',
    scope:
      'keyword.control.at-rule.include.scss, keyword.control.at-rule.use.scss, keyword.control.at-rule.mixin.scss, keyword.control.at-rule.extend.scss, keyword.control.at-rule.import.scss',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Stylus white',
    scope: 'meta.function.stylus',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'Stylus yellow',
    scope: 'entity.name.function.stylus',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'JavaScript white',
    scope: 'string.unquoted.js',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'JavaScript grey',
    scope:
      'punctuation.accessor.js, punctuation.separator.key-value.js, punctuation.separator.label.js, keyword.operator.accessor.js',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'JavaScript red',
    scope: 'punctuation.definition.block.tag.jsdoc',
    getSettings: (palette) => ({
      foreground: palette.red,
    }),
  },
  {
    name: 'JavaScript orange',
    scope: 'storage.type.js, storage.type.function.arrow.js',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'JSX white',
    scope: 'JSXNested',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'JSX green',
    scope:
      'punctuation.definition.tag.jsx, entity.other.attribute-name.jsx, punctuation.definition.tag.begin.js.jsx, punctuation.definition.tag.end.js.jsx, entity.other.attribute-name.js.jsx',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'TypeScript white',
    scope: 'entity.name.type.module.ts',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'TypeScript grey',
    scope:
      'keyword.operator.type.annotation.ts, punctuation.accessor.ts, punctuation.separator.key-value.ts',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'TypeScript green',
    scope: 'punctuation.definition.tag.directive.ts, entity.other.attribute-name.directive.ts',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'TypeScript aqua',
    scope:
      'entity.name.type.ts, entity.name.type.interface.ts, entity.other.inherited-class.ts, entity.name.type.alias.ts, entity.name.type.class.ts, entity.name.type.enum.ts',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'TypeScript orange',
    scope: 'storage.type.ts, storage.type.function.arrow.ts, storage.type.type.ts',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'TypeScript blue',
    scope: 'entity.name.type.module.ts',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'TypeScript purple',
    scope: 'keyword.control.import.ts, keyword.control.export.ts, storage.type.namespace.ts',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'TSX white',
    scope: 'entity.name.type.module.tsx',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'TSX grey',
    scope:
      'keyword.operator.type.annotation.tsx, punctuation.accessor.tsx, punctuation.separator.key-value.tsx',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'TSX green',
    scope:
      'punctuation.definition.tag.directive.tsx, entity.other.attribute-name.directive.tsx, punctuation.definition.tag.begin.tsx, punctuation.definition.tag.end.tsx, entity.other.attribute-name.tsx',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'TSX aqua',
    scope:
      'entity.name.type.tsx, entity.name.type.interface.tsx, entity.other.inherited-class.tsx, entity.name.type.alias.tsx, entity.name.type.class.tsx, entity.name.type.enum.tsx',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'TSX blue',
    scope: 'entity.name.type.module.tsx',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'TSX purple',
    scope: 'keyword.control.import.tsx, keyword.control.export.tsx, storage.type.namespace.tsx',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'TSX orange',
    scope:
      'storage.type.tsx, storage.type.function.arrow.tsx, storage.type.type.tsx, support.class.component.tsx',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'CoffeeScript orange',
    scope: 'storage.type.function.coffee',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'PureScript white',
    scope: 'meta.type-signature.purescript',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'PureScript orange',
    scope:
      'keyword.other.double-colon.purescript, keyword.other.arrow.purescript, keyword.other.big-arrow.purescript',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'PureScript yellow',
    scope: 'entity.name.function.purescript',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'PureScript green',
    scope:
      'string.quoted.single.purescript, string.quoted.double.purescript, punctuation.definition.string.begin.purescript, punctuation.definition.string.end.purescript, string.quoted.triple.purescript, entity.name.type.purescript',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'PureScript purple',
    scope: 'support.other.module.purescript',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Dart grey',
    scope: 'punctuation.dot.dart',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'Dart orange',
    scope: 'storage.type.primitive.dart',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Dart yellow',
    scope: 'support.class.dart',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'Dart green',
    scope:
      'entity.name.function.dart, string.interpolated.single.dart, string.interpolated.double.dart',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Dart blue',
    scope: 'variable.language.dart',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'Dart purple',
    scope: 'keyword.other.import.dart, storage.type.annotation.dart',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Pug red',
    scope: 'entity.other.attribute-name.class.pug',
    getSettings: (palette) => ({
      foreground: palette.red,
    }),
  },
  {
    name: 'Pug orange',
    scope: 'storage.type.function.pug',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Pug aqua',
    scope: 'entity.other.attribute-name.tag.pug',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Pug purple',
    scope: 'entity.name.tag.pug, storage.type.import.include.pug',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'C white',
    scope:
      'meta.function-call.c, storage.modifier.array.bracket.square.c, meta.function.definition.parameters.c',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'C grey',
    scope: 'punctuation.separator.dot-access.c, constant.character.escape.line-continuation.c',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'C red',
    scope:
      'keyword.control.directive.include.c, punctuation.definition.directive.c, keyword.control.directive.pragma.c, keyword.control.directive.line.c, keyword.control.directive.define.c, keyword.control.directive.conditional.c, keyword.control.directive.diagnostic.error.c, keyword.control.directive.undef.c, keyword.control.directive.conditional.ifdef.c, keyword.control.directive.endif.c, keyword.control.directive.conditional.ifndef.c, keyword.control.directive.conditional.if.c, keyword.control.directive.else.c',
    getSettings: (palette) => ({
      foreground: palette.red,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'C orange',
    scope: 'punctuation.separator.pointer-access.c',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'C aqua',
    scope: 'variable.other.member.c',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'C++ white',
    scope:
      'meta.function-call.cpp, storage.modifier.array.bracket.square.cpp, meta.function.definition.parameters.cpp, meta.body.function.definition.cpp',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'C++ grey',
    scope: 'punctuation.separator.dot-access.cpp, constant.character.escape.line-continuation.cpp',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'C++ red',
    scope:
      'keyword.control.directive.include.cpp, punctuation.definition.directive.cpp, keyword.control.directive.pragma.cpp, keyword.control.directive.line.cpp, keyword.control.directive.define.cpp, keyword.control.directive.conditional.cpp, keyword.control.directive.diagnostic.error.cpp, keyword.control.directive.undef.cpp, keyword.control.directive.conditional.ifdef.cpp, keyword.control.directive.endif.cpp, keyword.control.directive.conditional.ifndef.cpp, keyword.control.directive.conditional.if.cpp, keyword.control.directive.else.cpp, storage.type.namespace.definition.cpp, keyword.other.using.directive.cpp, storage.type.struct.cpp',
    getSettings: (palette) => ({
      foreground: palette.red,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'C++ orange',
    scope:
      'punctuation.separator.pointer-access.cpp, punctuation.section.angle-brackets.begin.template.call.cpp, punctuation.section.angle-brackets.end.template.call.cpp',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'C++ aqua',
    scope: 'variable.other.member.cpp',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'C# red',
    scope: 'keyword.other.using.cs',
    getSettings: (palette) => ({
      foreground: palette.red,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'C# yellow',
    scope:
      'keyword.type.cs, constant.character.escape.cs, punctuation.definition.interpolation.begin.cs, punctuation.definition.interpolation.end.cs',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'C# green',
    scope:
      'string.quoted.double.cs, string.quoted.single.cs, punctuation.definition.string.begin.cs, punctuation.definition.string.end.cs',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'C# aqua',
    scope: 'variable.other.object.property.cs',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'C# purple',
    scope: 'entity.name.type.namespace.cs',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'F# white',
    scope: 'keyword.symbol.fsharp, constant.language.unit.fsharp',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'F# yellow',
    scope: 'keyword.format.specifier.fsharp, entity.name.type.fsharp',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'F# green',
    scope:
      'string.quoted.double.fsharp, string.quoted.single.fsharp, punctuation.definition.string.begin.fsharp, punctuation.definition.string.end.fsharp',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'F# blue',
    scope: 'entity.name.section.fsharp',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'F# purple',
    scope: 'support.function.attribute.fsharp',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'Java grey',
    scope: 'punctuation.separator.java, punctuation.separator.period.java',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'Java red',
    scope: 'keyword.other.import.java, keyword.other.package.java',
    getSettings: (palette) => ({
      foreground: palette.red,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Java orange',
    scope: 'storage.type.function.arrow.java, keyword.control.ternary.java',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Java aqua',
    scope: 'variable.other.property.java',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Java purple',
    scope:
      'variable.language.wildcard.java, storage.modifier.import.java, storage.type.annotation.java, punctuation.definition.annotation.java, storage.modifier.package.java, entity.name.type.module.java',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Kotlin red',
    scope: 'keyword.other.import.kotlin',
    getSettings: (palette) => ({
      foreground: palette.red,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Kotlin orange',
    scope: 'storage.type.kotlin',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Kotlin aqua',
    scope: 'constant.language.kotlin',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Kotlin purple',
    scope: 'entity.name.package.kotlin, storage.type.annotation.kotlin',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Scala purple',
    scope: 'entity.name.package.scala',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Scala blue',
    scope: 'constant.language.scala',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'Scala aqua',
    scope: 'entity.name.import.scala',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Scala green',
    scope:
      'string.quoted.double.scala, string.quoted.single.scala, punctuation.definition.string.begin.scala, punctuation.definition.string.end.scala, string.quoted.double.interpolated.scala, string.quoted.single.interpolated.scala, string.quoted.triple.scala',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Scala yellow',
    scope: 'entity.name.class, entity.other.inherited-class.scala',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'Scala orange',
    scope: 'keyword.declaration.stable.scala, keyword.other.arrow.scala',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Scala red',
    scope: 'keyword.other.import.scala',
    getSettings: (palette) => ({
      foreground: palette.red,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Groovy white',
    scope:
      'keyword.operator.navigation.groovy, meta.method.body.java, meta.definition.method.groovy, meta.definition.method.signature.java',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'Scala grey',
    scope: 'punctuation.separator.groovy',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'Scala red',
    scope:
      'keyword.other.import.groovy, keyword.other.package.groovy, keyword.other.import.static.groovy',
    getSettings: (palette) => ({
      foreground: palette.red,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Groovy orange',
    scope: 'storage.type.def.groovy',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Groovy green',
    scope: 'variable.other.interpolated.groovy, meta.method.groovy',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Groovy aqua',
    scope: 'storage.modifier.import.groovy, storage.modifier.package.groovy',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Groovy purple',
    scope: 'storage.type.annotation.groovy',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'Go red',
    scope: 'keyword.type.go',
    getSettings: (palette) => ({
      foreground: palette.red,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Go aqua',
    scope: 'entity.name.package.go',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Go purple',
    scope: 'keyword.import.go, keyword.package.go',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Rust white',
    scope: 'entity.name.type.mod.rust',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'Rust grey',
    scope: 'keyword.operator.path.rust, keyword.operator.member-access.rust',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'Rust orange',
    scope: 'storage.type.rust',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Rust aqua',
    scope: 'support.constant.core.rust',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Rust purple',
    scope: 'meta.attribute.rust, variable.language.rust, storage.type.module.rust',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Swift white',
    scope: 'meta.function-call.swift, support.function.any-method.swift',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'Swift aqua',
    scope: 'support.variable.swift',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'PHP white',
    scope: 'keyword.operator.class.php',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'PHP orange',
    scope: 'storage.type.trait.php',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'PHP aqua',
    scope: 'constant.language.php, support.other.namespace.php',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'PHP blue',
    scope:
      'storage.type.modifier.access.control.public.cpp, storage.type.modifier.access.control.private.cpp',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'PHP purple',
    scope: 'keyword.control.import.include.php, storage.type.php',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Python white',
    scope: 'meta.function-call.arguments.python',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'Python grey',
    scope: 'punctuation.definition.decorator.python, punctuation.separator.period.python',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'Python aqua',
    scope: 'constant.language.python',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Python purple',
    scope: 'keyword.control.import.python, keyword.control.import.from.python',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Lua aqua',
    scope: 'constant.language.lua',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Lua blue',
    scope: 'entity.name.class.lua',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'Ruby white',
    scope: 'meta.function.method.with-arguments.ruby',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'Ruby grey',
    scope: 'punctuation.separator.method.ruby',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'Ruby orange',
    scope: 'keyword.control.pseudo-method.ruby, storage.type.variable.ruby',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Ruby green',
    scope: 'keyword.other.special-method.ruby',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Ruby purple italic',
    scope: 'keyword.control.module.ruby',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Ruby purple regular',
    scope: 'punctuation.definition.constant.ruby',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'Ruby yellow',
    scope:
      'string.regexp.character-class.ruby,string.regexp.interpolated.ruby,punctuation.definition.character-class.ruby,string.regexp.group.ruby, punctuation.section.regexp.ruby, punctuation.definition.group.ruby',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'Ruby blue',
    scope: 'variable.other.constant.ruby',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'Haskell orange',
    scope:
      'keyword.other.arrow.haskell, keyword.other.big-arrow.haskell, keyword.other.double-colon.haskell',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Haskell yellow',
    scope: 'storage.type.haskell',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'Haskell green',
    scope:
      'constant.other.haskell, string.quoted.double.haskell, string.quoted.single.haskell, punctuation.definition.string.begin.haskell, punctuation.definition.string.end.haskell',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Haskell blue',
    scope: 'entity.name.function.haskell',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'Haskell aqua',
    scope: 'entity.name.namespace, meta.preprocessor.haskell',
    getSettings: (palette) => ({
      foreground: palette.aqua,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Julia red',
    scope: 'keyword.control.import.julia, keyword.control.export.julia, keyword.other.julia',
    getSettings: (palette) => ({
      foreground: palette.red,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Julia orange',
    scope: 'keyword.storage.modifier.julia',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Julia aqua',
    scope: 'constant.language.julia',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Julia purple',
    scope: 'support.function.macro.julia',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'Elm white',
    scope: 'keyword.other.period.elm',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'Elm yellow',
    scope: 'storage.type.elm',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'R orange',
    scope: 'keyword.other.r',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'R green',
    scope: 'entity.name.function.r, variable.function.r',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'R aqua',
    scope: 'constant.language.r',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'R purple',
    scope: 'entity.namespace.r',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Erlang grey',
    scope:
      'punctuation.separator.module-function.erlang, punctuation.section.directive.begin.erlang',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'Erlang red',
    scope: 'keyword.control.directive.erlang, keyword.control.directive.define.erlang',
    getSettings: (palette) => ({
      foreground: palette.red,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Erlang yellow',
    scope: 'entity.name.type.class.module.erlang',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'Erlang green',
    scope:
      'string.quoted.double.erlang, string.quoted.single.erlang, punctuation.definition.string.begin.erlang, punctuation.definition.string.end.erlang',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Erlang purple',
    scope:
      'keyword.control.directive.export.erlang, keyword.control.directive.module.erlang, keyword.control.directive.import.erlang, keyword.control.directive.behaviour.erlang',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Elixir aqua',
    scope: 'variable.other.readwrite.module.elixir, punctuation.definition.variable.elixir',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Elixir blue',
    scope: 'constant.language.elixir',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'Elixir purple',
    scope: 'keyword.control.module.elixir',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'OCaml white',
    scope: 'entity.name.type.value-signature.ocaml',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'OCaml orange',
    scope: 'keyword.other.ocaml',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'OCaml aqua',
    scope: 'constant.language.variant.ocaml',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Perl red',
    scope: 'storage.type.sub.perl, storage.type.declare.routine.perl',
    getSettings: (palette) => ({
      foreground: palette.red,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Lisp white',
    scope: 'meta.function.lisp',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'Lisp red',
    scope: 'storage.type.function-type.lisp',
    getSettings: (palette) => ({
      foreground: palette.red,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Lisp green',
    scope: 'keyword.constant.lisp',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Lisp aqua',
    scope: 'entity.name.function.lisp',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Clojure green',
    scope: 'constant.keyword.clojure, support.variable.clojure, meta.definition.variable.clojure',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Clojure purple',
    scope: 'entity.global.clojure',
    getSettings: (palette) => ({
      foreground: palette.purple,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Clojure blue',
    scope: 'entity.name.function.clojure',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'Shell white',
    scope: 'meta.scope.if-block.shell, meta.scope.group.shell',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'Shell yellow',
    scope: 'support.function.builtin.shell, entity.name.function.shell',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'Shell green',
    scope:
      'string.quoted.double.shell, string.quoted.single.shell, punctuation.definition.string.begin.shell, punctuation.definition.string.end.shell, string.unquoted.heredoc.shell',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Shell purple',
    scope:
      'keyword.control.heredoc-token.shell, variable.other.normal.shell, punctuation.definition.variable.shell, variable.other.special.shell, variable.other.positional.shell, variable.other.bracket.shell',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'Fish red',
    scope: 'support.function.builtin.fish',
    getSettings: (palette) => ({
      foreground: palette.red,
      fontStyle: 'italic',
    }),
  },
  {
    name: 'Fish orange',
    scope: 'support.function.unix.fish',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Fish blue',
    scope:
      'variable.other.normal.fish, punctuation.definition.variable.fish, variable.other.fixed.fish, variable.other.special.fish',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'Fish green',
    scope:
      'string.quoted.double.fish, punctuation.definition.string.end.fish, punctuation.definition.string.begin.fish, string.quoted.single.fish',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Fish purple',
    scope: 'constant.character.escape.single.fish',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'PowerShell grey',
    scope: 'punctuation.definition.variable.powershell',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'PowerShell yellow',
    scope:
      'entity.name.function.powershell, support.function.attribute.powershell, support.function.powershell',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'PowerShell green',
    scope:
      'string.quoted.single.powershell, string.quoted.double.powershell, punctuation.definition.string.begin.powershell, punctuation.definition.string.end.powershell, string.quoted.double.heredoc.powershell',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'PowerShell aqua',
    scope: 'variable.other.member.powershell',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'GraphQL white',
    scope: 'string.unquoted.alias.graphql',
    getSettings: (palette) => ({
      foreground: palette.fg,
    }),
  },
  {
    name: 'GraphQL red',
    scope: 'keyword.type.graphql',
    getSettings: (palette) => ({
      foreground: palette.red,
    }),
  },
  {
    name: 'GraphQL purple',
    scope: 'entity.name.fragment.graphql',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'Makefile orange',
    scope: 'entity.name.function.target.makefile',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Makefile yellow',
    scope: 'variable.other.makefile',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'Makefile green',
    scope: 'meta.scope.prerequisites.makefile',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'CMake green',
    scope: 'string.source.cmake',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'CMake aqua',
    scope: 'entity.source.cmake',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'CMake purple',
    scope: 'storage.source.cmake',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'VimL grey',
    scope: 'punctuation.definition.map.viml',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'VimL orange',
    scope: 'storage.type.map.viml',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'VimL green',
    scope: 'constant.character.map.viml, constant.character.map.key.viml',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'VimL blue',
    scope: 'constant.character.map.special.viml',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'Tmux green',
    scope: 'constant.language.tmux, constant.numeric.tmux',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Dockerfile orange',
    scope: 'entity.name.function.package-manager.dockerfile',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Dockerfile yellow',
    scope: 'keyword.operator.flag.dockerfile',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'Dockerfile green',
    scope: 'string.quoted.double.dockerfile, string.quoted.single.dockerfile',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Dockerfile aqua',
    scope: 'constant.character.escape.dockerfile',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'Dockerfile purple',
    scope: 'entity.name.type.base-image.dockerfile, entity.name.image.dockerfile',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'Diff grey',
    scope: 'punctuation.definition.separator.diff',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'Diff red',
    scope: 'markup.deleted.diff, punctuation.definition.deleted.diff',
    getSettings: (palette) => ({
      foreground: palette.red,
    }),
  },
  {
    name: 'Diff orange',
    scope: 'meta.diff.range.context, punctuation.definition.range.diff',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Diff yellow',
    scope: 'meta.diff.header.from-file',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'Diff green',
    scope: 'markup.inserted.diff, punctuation.definition.inserted.diff',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Diff blue',
    scope: 'markup.changed.diff, punctuation.definition.changed.diff',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'Diff purple',
    scope: 'punctuation.definition.from-file.diff',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'Git red',
    scope: 'entity.name.section.group-title.ini, punctuation.definition.entity.ini',
    getSettings: (palette) => ({
      foreground: palette.red,
    }),
  },
  {
    name: 'Git orange',
    scope: 'punctuation.separator.key-value.ini',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'Git green',
    scope:
      'string.quoted.double.ini, string.quoted.single.ini, punctuation.definition.string.begin.ini, punctuation.definition.string.end.ini',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'Git aqua',
    scope: 'keyword.other.definition.ini',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'SQL yellow',
    scope: 'support.function.aggregate.sql',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'SQL green',
    scope:
      'string.quoted.single.sql, punctuation.definition.string.end.sql, punctuation.definition.string.begin.sql, string.quoted.double.sql',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'GraphQL yellow',
    scope: 'support.type.graphql',
    getSettings: (palette) => ({
      foreground: palette.yellow,
    }),
  },
  {
    name: 'GraphQL blue',
    scope: 'variable.parameter.graphql',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'GraphQL aqua',
    scope: 'constant.character.enum.graphql',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'JSON grey',
    scope:
      'punctuation.support.type.property-name.begin.json, punctuation.support.type.property-name.end.json, punctuation.separator.dictionary.key-value.json, punctuation.definition.string.begin.json, punctuation.definition.string.end.json, punctuation.separator.dictionary.pair.json, punctuation.separator.array.json',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'JSON orange',
    scope: 'support.type.property-name.json',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'JSON green',
    scope: 'string.quoted.double.json',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'YAML grey',
    scope: 'punctuation.separator.key-value.mapping.yaml',
    getSettings: (palette) => ({
      foreground: palette.grey1,
    }),
  },
  {
    name: 'YAML green',
    scope:
      'string.unquoted.plain.out.yaml, string.quoted.single.yaml, string.quoted.double.yaml, punctuation.definition.string.begin.yaml, punctuation.definition.string.end.yaml, string.unquoted.plain.in.yaml, string.unquoted.block.yaml',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'YAML aqua',
    scope: 'punctuation.definition.anchor.yaml, punctuation.definition.block.sequence.item.yaml',
    getSettings: (palette) => ({
      foreground: palette.aqua,
    }),
  },
  {
    name: 'TOML orange',
    scope: 'keyword.key.toml',
    getSettings: (palette) => ({
      foreground: palette.orange,
    }),
  },
  {
    name: 'TOML green',
    scope:
      'string.quoted.single.basic.line.toml, string.quoted.single.literal.line.toml, punctuation.definition.keyValuePair.toml',
    getSettings: (palette) => ({
      foreground: palette.green,
    }),
  },
  {
    name: 'TOML blue',
    scope: 'constant.other.boolean.toml',
    getSettings: (palette) => ({
      foreground: palette.blue,
    }),
  },
  {
    name: 'TOML purple',
    scope:
      'entity.other.attribute-name.table.toml, punctuation.definition.table.toml, entity.other.attribute-name.table.array.toml, punctuation.definition.table.array.toml',
    getSettings: (palette) => ({
      foreground: palette.purple,
    }),
  },
  {
    name: 'Comment',
    scope: 'comment, string.comment, punctuation.definition.comment',
    getSettings: (palette, configuration) => ({
      foreground: palette.grey1,
      ...(configuration.italicComments ? { fontStyle: 'italic' } : {}),
    }),
  },
]

export const getItalicSyntax = (palette: Palette, configuration: Configuration) =>
  config.map(({ name, scope, getSettings }) => ({
    name,
    scope,
    settings: getSettings(palette, configuration),
  }))
