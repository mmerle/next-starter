'use client';

import { useMemo } from 'react';
import { colord } from 'colord';

const toKebabCase = (str) => {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
};

const colorToRgb = (color) => {
  const { r, g, b } = colord(color).toRgb();
  return `${r} ${g} ${b}`;
};

const generateCSSVariables = (colors, theme, isDefault = false) => {
  const variables = [];

  if (isDefault) {
    Object.entries(colors).forEach(([name, color]) => {
      const kebabCaseName = toKebabCase(name);
      const rgb = colorToRgb(color);
      variables.push(`--${kebabCaseName}-rgb: ${rgb};`);
      variables.push(`--${kebabCaseName}: rgb(var(--${kebabCaseName}-rgb));`);
    });
  }

  Object.entries(theme).forEach(([colorName, colorValue]) => {
    const kebabCaseColorName = toKebabCase(colorName);
    if (typeof colorValue === 'string' && colors[colorValue]) {
      const kebabCaseColorVarName = toKebabCase(colorValue);
      variables.push(
        `--${kebabCaseColorName}: var(--${kebabCaseColorVarName});`,
      );
      variables.push(
        `--${kebabCaseColorName}-rgb: var(--${kebabCaseColorVarName}-rgb);`,
      );
    } else if (typeof colorValue === 'string') {
      const rgb = colorToRgb(colorValue);
      variables.push(`--${kebabCaseColorName}-rgb: ${rgb};`);
      variables.push(
        `--${kebabCaseColorName}: rgb(var(--${kebabCaseColorName}-rgb));`,
      );
    }
  });

  return variables.join('\n');
};

const generateThemeCSS = (colors, themes, defaultTheme) => {
  const cssBlocks = [];

  // generate default theme variables
  const defaultThemeVars = generateCSSVariables(
    colors,
    themes[defaultTheme],
    true,
  );
  cssBlocks.push(`
    :root {
      ${defaultThemeVars}
    }
  `);

  // determine the opposite theme for prefers-color-scheme
  const oppositeTheme = defaultTheme === 'light' ? 'dark' : 'light';
  if (themes[oppositeTheme]) {
    const oppositeThemeVars = generateCSSVariables(
      colors,
      themes[oppositeTheme],
    );
    cssBlocks.push(`
      @media (prefers-color-scheme: ${oppositeTheme}) {
        :root {
          ${oppositeThemeVars}
        }
      }
    `);
  }

  // generate variables for all themes
  Object.entries(themes).forEach(([themeName, theme]) => {
    const themeVars = generateCSSVariables(colors, theme);
    cssBlocks.push(`
      [data-theme="${themeName}"] {
        ${themeVars}
      }
    `);
  });

  return cssBlocks.join('\n');
};

export function StyleVariables({
  colors = {},
  themes = {},
  defaultTheme = 'light',
}) {
  const themeCSS = useMemo(
    () => generateThemeCSS(colors, themes, defaultTheme),
    [colors, themes, defaultTheme],
  );

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: themeCSS,
      }}
    />
  );
}
