import { styled, Text as TamaguiText } from "@tamagui/core";
import { Platform } from "react-native";

const fontWeight700 = Platform.OS === "android" ? undefined : 700;

export const Text = styled(TamaguiText, {
  fontFamily: "MontserratBold",
  color: "$onSurface",
  variants: {
    type: {
      h1: {
        fontSize: 28,
        fontWeight: fontWeight700,
        lineHeight: 34,
      },
      h2: {
        fontSize: 24,
        fontWeight: fontWeight700,
        lineHeight: 29,
      },
      h3: {
        fontSize: 20,
        fontWeight: fontWeight700,
        lineHeight: 24,
      },
      h4: {
        fontSize: 16,
        fontWeight: fontWeight700,
        lineHeight: 19,
      },
      h5: {
        fontSize: 14,
        fontWeight: fontWeight700,
        lineHeight: 17,
      },
      body1: {
        fontSize: 20,
        fontWeight: 400,
        lineHeight: 24,
        fontFamily: "Montserrat",
      },
      body2: {
        fontFamily: "Montserrat",
        fontSize: 16,
        lineHeight: 19,
      },
      button: {
        fontSize: 20,
        fontWeight: fontWeight700,
        lineHeight: 24,
      },
    } as const,
  },
});
