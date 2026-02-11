# 🌲 Everforest Night

[![VS Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/jarith.everforest-night-vscode?label=VS%20Marketplace&logo=visualstudiocode)](https://marketplace.visualstudio.com/items?itemName=jarith.everforest-night-vscode)
[![VS Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/jarith.everforest-night-vscode?label=Installs&logo=visualstudiocode)](https://marketplace.visualstudio.com/items?itemName=jarith.everforest-night-vscode)
[![VS Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/jarith.everforest-night-vscode?label=Rating&logo=visualstudiocode)](https://marketplace.visualstudio.com/items?itemName=jarith.everforest-night-vscode&ssr=false#review-details)
[![Open VSX Version](https://img.shields.io/open-vsx/v/jarith/everforest-night-vscode?label=Open%20VSX&logo=eclipseide)](https://open-vsx.org/extension/jarith/everforest-night-vscode)
[![CI](https://img.shields.io/github/actions/workflow/status/jarith/everforest-night-vscode/ci.yml?branch=master&label=CI)](https://github.com/jarith/everforest-night-vscode/actions/workflows/ci.yml?query=branch%3Amaster)

A green-based theme for Visual Studio Code, designed to stay warm and readable during long coding sessions

### Everforest Night Hard

![Everforest Night Hard](screenshots/everforest-night-hard.jpeg)

### Everforest Night Medium

![Everforest Night Medium](screenshots/everforest-night-medium.jpeg)

### Everforest Night Soft

![Everforest Night Soft](screenshots/everforest-night-soft.jpeg)

Supports both VS Code Desktop and VS Code for the Web.

## Installation

1. Open the Extensions sidebar (`Cmd+Shift+X` / `Ctrl+Shift+X`)
2. Search for **Everforest Night**
3. Click **Install**
4. Open **Preferences: Color Theme**
5. Select one of the built-in variants:
   `Everforest Night Medium`, `Everforest Night Hard` or `Everforest Night Soft`

## Theme Variants

| Variant                       | Main Background (`editor.background`) | Description                        |
| ----------------------------- | ------------------------------------- | ---------------------------------- |
| Everforest Night Hard             | `#2a3339`                             | Highest contrast in the dark range |
| Everforest Night Medium (default) | `#323d43`                             | Balanced default contrast          |
| Everforest Night Soft             | `#3c474d`                             | Softest dark background            |

## Color Palette

### Main Colors

| Color      | Hex       | Preview                                                       |
| ---------- | --------- | ------------------------------------------------------------- |
| Background | `#323d43` | ![](https://img.shields.io/badge/-_-323d43?style=flat-square) |
| Foreground | `#d8caac` | ![](https://img.shields.io/badge/-_-d8caac?style=flat-square) |
| Red        | `#eda0a1` | ![](https://img.shields.io/badge/-_-eda0a1?style=flat-square) |
| Orange     | `#e9a485` | ![](https://img.shields.io/badge/-_-e9a485?style=flat-square) |
| Yellow     | `#dbbc7f` | ![](https://img.shields.io/badge/-_-dbbc7f?style=flat-square) |
| Green      | `#a7c080` | ![](https://img.shields.io/badge/-_-a7c080?style=flat-square) |
| Aqua       | `#83c092` | ![](https://img.shields.io/badge/-_-83c092?style=flat-square) |
| Blue       | `#86bfb7` | ![](https://img.shields.io/badge/-_-86bfb7?style=flat-square) |
| Purple     | `#dba5bf` | ![](https://img.shields.io/badge/-_-dba5bf?style=flat-square) |

### Background Contrast Variants

| Variant          | Hex       | Preview                                                       |
| ---------------- | --------- | ------------------------------------------------------------- |
| Hard             | `#2a3339` | ![](https://img.shields.io/badge/-_-2a3339?style=flat-square) |
| Medium (default) | `#323d43` | ![](https://img.shields.io/badge/-_-323d43?style=flat-square) |
| Soft             | `#3c474d` | ![](https://img.shields.io/badge/-_-3c474d?style=flat-square) |

## Customization

Everforest Night supports real `everforestNight.*` settings.
These settings are applied automatically for all three Everforest Night variants in both VS Code Desktop and VS Code for the Web.

| Setting                                     | Values                                                     | Default    |
| ------------------------------------------- | ---------------------------------------------------------- | ---------- |
| `everforestNight.contrast`                      | `theme`, `hard`, `medium`, `soft`                          | `theme`    |
| `everforestNight.workbench`                     | `material`, `flat`, `high-contrast`                        | `material` |
| `everforestNight.selection`                     | `grey`, `red`, `orange`, `yellow`, `green`, `aqua`, `blue`, `purple` | `grey`     |
| `everforestNight.cursor`                        | `white`, `red`, `orange`, `yellow`, `green`, `aqua`, `blue`, `purple` | `white`    |
| `everforestNight.diagnosticTextBackgroundOpacity` | `0%`, `12.5%`, `25%`, `37.5%`, `50%`                       | `0%`       |
| `everforestNight.italicKeywords`                | `true`, `false`                                            | `false`    |
| `everforestNight.italicComments`                | `true`, `false`                                            | `true`     |
| `everforestNight.highContrast`                  | `true`, `false`                                            | `false`    |

`everforestNight.contrast = "theme"` keeps each selected variant's native contrast (`Hard`, `Medium`, `Soft`).

### Extension settings example

```jsonc
{
  "workbench.colorTheme": "Everforest Night Medium",
  "everforestNight.contrast": "theme",
  "everforestNight.workbench": "material",
  "everforestNight.selection": "aqua",
  "everforestNight.cursor": "green",
  "everforestNight.diagnosticTextBackgroundOpacity": "25%",
  "everforestNight.italicKeywords": true,
  "everforestNight.italicComments": true,
  "everforestNight.highContrast": false
}
```

### Optional manual overrides

You can still add extra VS Code overrides in `settings.json` using the theme name keys.
Prefer using `everforestNight.*` for managed palette behavior and use manual overrides for additional tweaks.

```jsonc
{
  "workbench.colorTheme": "Everforest Night Medium",
  "workbench.colorCustomizations": {
    "[Everforest Night Medium]": {
      "editorGutter.background": "#323d43",
    },
    "[Everforest Night Hard]": {
      "editorGutter.background": "#2a3339",
    },
    "[Everforest Night Soft]": {
      "editorGutter.background": "#3c474d",
    },
  },
  "editor.tokenColorCustomizations": {
    "[Everforest Night Medium]": {
      "comments": "#aeb6b0",
    },
  },
}
```

## Acknowledgments

Inspired by [Forest Night](https://github.com/jef/forest-night-jetbrains) by [@jef](https://github.com/jef) and [Everforest](https://github.com/sainnhe/everforest-vscode) by [@sainnhe](https://github.com/sainnhe)

## License

[MIT](LICENSE)
