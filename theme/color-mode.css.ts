import { createTheme, createThemeContract } from "@vanilla-extract/css";

const colorModeVars = createThemeContract({
  color: {
    primary: null,
    secondary: null,
  },
});

const lightMode = createTheme(colorModeVars, {
  color: {
    primary: "blue",
    secondary: "green",
  },
});

const darkMode = createTheme(colorModeVars, {
  color: {
    primary: "yellow",
    secondary: "orange",
  },
});

export const colorMode = {
  light: lightMode,
  dark: darkMode,
  vars: colorModeVars,
  localStorageKey: "astahmer.dev-color-mode",
};
