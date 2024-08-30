import { styled, View } from "@tamagui/core";
import { Dimensions } from "react-native";

export const indicatorWidth = 90;
export const indicatorMargin = 0;

export const { width: screenWidth } = Dimensions.get("screen");

export const GroupTabContainer = styled(View, {
  alignItems: "center",
  justifyContent: "center",
  width: screenWidth - 32 * 2,
  backgroundColor: "$surface50",
  shadowColor: "#000000",
  shadowOffset: { height: 4, width: 0 },
  shadowRadius: 16,
  shadowOpacity: 0.08,
  elevationAndroid: 8,
  marginHorizontal: 32,
  padding: 32,
  paddingBottom: 40,
  paddingTop: 0,
  marginTop: 32,
  borderRadius: "$xl",
});
