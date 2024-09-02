import glyphMap from "../../../../assets/fonts/customIcons/customIcons-map.json";
import { createIconSet } from "@expo/vector-icons";
import { styled } from "@tamagui/core";

const MIcon = createIconSet(glyphMap, "customIcons", "customIcons.ttf");

export type CustomIcon = keyof typeof glyphMap;

const _Icon = styled(
  MIcon,
  {},
  {
    accept: {
      color: "color",
    },
  }
);

export const Icon = styled(_Icon, {
  color: "$onSurface",
  disabledStyle: { opacity: 0.5 },
});
