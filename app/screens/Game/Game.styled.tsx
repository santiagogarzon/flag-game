import { styled, View } from "@tamagui/core";

export const FlagContainer = styled(View, {
  marginVertical: 22,
  alignSelf: "center",
});

export const ColorSelectorContainer = styled(View, {
  backgroundColor: "$surface50",
  alignSelf: "stretch",
  alignItems: "center",
  gap: 16,
  justifyContent: "space-around",
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
  paddingVertical: 32,
  animation: "lazy",
  transform: [{ translateY: 0 }],
  variants: {
    gameCompleted: {
      true: {
        transform: [{ translateY: (32 * 2 + 56) * 2 + 10 }],
      },
    },
  },
});

export const ColorPicker = styled(View, {
  borderColor: "white",
  width: 56,
  height: 56,
  borderRadius: 30,
  justifyContent: "center",
  alignItems: "center",
  shadowColor: "#000",
  shadowRadius: 5,
  shadowOpacity: 0.16,
  shadowOffset: { width: 0, height: 2 },
  elevationAndroid: 5,
  pressStyle: { scale: 1.1 },
  animation: "lazy",
});

export const CheckContainer = styled(View, {
  position: "absolute",
  width: 88,
  height: 88,
  borderRadius: 88,
  backgroundColor: "$surface",
  borderWidth: 5,
  borderColor: "$onSurface",
  alignItems: "center",
  justifyContent: "center",
  alignSelf: "center",
  bottom: "20%",
  animation: "bouncy",
  scale: 0.6,
  transform: [{ translateY: 100 }],
  opacity: 0,
  display: "none",
  variants: {
    show: {
      true: {
        scale: 1,
        transform: [{ translateY: 0 }],
        opacity: 1,
        display: "flex",
      },
    },
  } as const,
});

export const CompletedFlagContainer = styled(View, {
  position: "absolute",
  width: 0,
  animation: "lazy",
  opacity: 0,
  animateOnly: ["opacity"],
  overflow: "hidden",
  left: 0,
  top: 0,
  bottom: 0,
  variants: {
    show: {
      true: {
        opacity: 1,
        width: 600,
      },
    },
  },
});
