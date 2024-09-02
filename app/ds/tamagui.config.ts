import { createAnimations } from "@tamagui/animations-moti";
import { createTokens, createTamagui } from "@tamagui/core";
import { Platform } from "react-native";

export const animations = createAnimations({
  bouncy: {
    damping: 9,
    mass: 0.9,
    stiffness: 150,
  },
  lazy: {
    damping: 12,
    stiffness: 100,
    mass: 0.4,
  },
});

const colors = {
  error: "#FF4C62",
  succes: "#50E3C2",
  blue: "#2E4854",
  white: "#FFFFFF",
};

const light = {
  onSurface: "#2E4854",
  surface: "#FFFFFF",
  onSurface50: Platform.OS === "ios" ? "#2E485480" : "#909496",
  surface50: Platform.OS === "ios" ? "#FFFFFF80" : "#e9eced",
};

export type Theme = typeof light;

const dark: Theme = {
  surface: "#2E4854",
  onSurface: "#FFFFFF",
  surface50: Platform.OS === "ios" ? "#2E485480" : "#909496",
  onSurface50: Platform.OS === "ios" ? "#FFFFFF80" : "#e9eced",
};

export const themes = {
  light,
  dark,
};

export const tokens = createTokens({
  radius: {
    s: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 32,
  },
  size: {
    s: 20,
    sm: 24,
    md: 28,
    lg: 32,
    xl: 36,
    "2xl": 40,
  },
  space: {
    none: 0,
    xxxs: 2,
    xxs: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
    xxxl: 40,
  },
  iconsize: {
    xxs: 8,
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 28,
    xxxl: 32,
  },
  gap: {
    xs: 8,
    md: 16,
  },
  zIndex: {},

  color: colors,
} as const);

const tamaguiConfig = createTamagui({
  tokens,
  themes,
  animations,
} as const);

export type AppConfig = typeof tamaguiConfig;

declare module "@tamagui/core" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default tamaguiConfig;
