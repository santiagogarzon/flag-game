import React, { useEffect, useMemo } from "react";
import { View } from "@tamagui/core";
import { screenWidth } from "../Groups/GroupTab.styled";
import { mapValues, noop } from "lodash";
import { useNavigation } from "@react-navigation/native";
import {
  Flag,
  getFlagId,
  Group,
  PackId,
  useGameManager,
} from "app/hooks/useGameManager";
import { Text } from "app/ds/sub-atomic";
import { useState } from "react";
import { useColorScheme } from "react-native";
import { importSvgr } from "app/flags-svgr/import-svg";
import { NavigationProp } from "../screens";
import flagsColors from "../../flags-svgr/flags-colors.json";
import LockIllustration from "assets/svg/illustrations/lock.svg";

export const flagsPageWidth = screenWidth;
export const flagsPageHeight = 440;
export const flagItemWidth = flagsPageWidth / 2;
export const flagItemHeight = flagsPageHeight / 3;

type FlagItemProps = {
  flag: Flag;
  pack: PackId;
  group: Group;
  index: number;
  locked: boolean;
  completed: boolean;
  onPress: () => void;
};

export const FlagItem = ({
  flag,
  pack,
  group,
  index,
  onPress,
  locked,
  completed,
}: FlagItemProps) => {
  const [FlagComponent, setFlagComponent] = useState();

  const flagId = getFlagId(flag);
  const flagColors = flagsColors[flagId as keyof typeof flagsColors];
  const theme = useColorScheme();

  const defaultBackground = theme === "dark" ? "#909396" : "#ececed";
  const transparentFlagColors = mapValues(flagColors, () => defaultBackground);

  const loadFlagComponent = async () => {
    try {
      const fileName = completed ? flagId : flagId + "-lines";
      const Flag = await React.lazy(() => importSvgr(fileName));
      setFlagComponent(() => Flag);
    } catch (error) {
      console.error(error);
    }
  };

  const goToGameScreen = () => {
    if (!locked) onPress?.();
  };

  useEffect(() => {
    loadFlagComponent();
  }, [flag.country, completed]);
  return (
    <View
      position="absolute"
      width={flagItemWidth}
      height={flagItemHeight}
      justifyContent="center"
      alignItems="center"
      transform={[
        { translateX: (index % 2) * flagItemWidth },
        { translateY: Math.floor(index / 2) * flagItemHeight },
      ]}
    >
      {!!FlagComponent && (
        <View
          width={140}
          height={100}
          alignItems="center"
          justifyContent="center"
        >
          <FlagComponent
            width={140}
            height={100}
            colors={transparentFlagColors}
            onPress={noop}
          />
          {locked && (
            <View
              position="absolute"
              alignItems="center"
              justifyContent="center"
            >
              <LockIllustration />
              <Text position="absolute" color="white" type="h5">
                {flag.unblock}
              </Text>
            </View>
          )}
        </View>
      )}
      <Text>{flag.country}</Text>
      <View
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor="#FFFFFF01"
        onPress={goToGameScreen}
      />
    </View>
  );
};
