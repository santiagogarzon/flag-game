import { useEffect, useState } from "react";
import {
  capitalize,
  findIndex,
  isEqual,
  isString,
  kebabCase,
  map,
  size,
  toLower,
  uniq,
  values,
} from "lodash";

import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { importSvgr } from "app/flags-svgr/import-svg";
import flagsColors from "app/flags-svgr/flags-colors.json";
import {
  Flag,
  getFlagId,
  Group,
  PackId,
  useGameManager,
} from "app/hooks/useGameManager";
import { NavigationProp, RouteProp } from "../screens";
import { View } from "@tamagui/core";
import { Icon, Text } from "app/ds/sub-atomic";
import { FlagComponentProps } from "app/flags-svgr/flags.types";
import {
  CheckContainer,
  ColorPicker,
  ColorSelectorContainer,
  CompletedFlagContainer,
  FlagContainer,
} from "./Game.styled";
import { FailAnimation } from "./FailAnimation";
import { FlagInfoBottomSheet } from "./FlagInfoBottomSheet";
import { chunkObject } from "app/utils/objects";
import flagsInfo from "assets/flags-info.json";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type GameScreenParams = {
  flag: Flag;
  group: Group;
  pack: PackId;
};

export const Game = () => {
  const {
    completeFlag,
    loseLife,
    isFlagCompleted,
    lives,
    completedFlagsAmount,
  } = useGameManager();
  const navigation = useNavigation<NavigationProp<"Game">>();
  const { params } = useRoute<RouteProp<"Game">>();
  const { flag, group, pack } = params;
  const countryName = toLower(kebabCase(flag.country));
  const insets = useSafeAreaInsets();

  const [FlagLinesComponent, setFlagLinesComponent] =
    useState<React.FC<FlagComponentProps>>();
  const [FlagComponent, setFlagComponent] =
    useState<React.FC<FlagComponentProps>>();

  const colorOptions = flagsColors[getFlagId(flag)];
  const [selectedColor, setSelectedColor] = useState<string>();
  const [currentColors, setCurrentColors] = useState<{
    [key: string]: string;
  }>({});

  const gameCompleted = isFlagCompleted(flag, group, pack);
  const onPressPath = (id: string) => {
    if (selectedColor && isString(id)) {
      setCurrentColors((a) => ({ ...a, [id]: selectedColor }));
      setSelectedColor(undefined);
    }
  };

  const loadFlagComponent = async () => {
    try {
      const Flag = await React.lazy(() => importSvgr(countryName));
      setFlagComponent(() => Flag);

      const FlagLines = await React.lazy(() =>
        importSvgr(countryName + "-lines")
      );
      setFlagLinesComponent(() => FlagLines);
    } catch (error) {
      console.error(error);
    }
  };

  const canClearColor = size(currentColors) > 0;
  const cleanColors = () => setCurrentColors({});

  const canCheckFlag =
    size(currentColors) >= size(colorOptions) &&
    uniq(values(currentColors)).length === size(currentColors) &&
    lives > 0 &&
    !gameCompleted;

  const checkFlag = () => {
    const validColors = isEqual(currentColors, colorOptions);
    if (validColors) {
      completeFlag(flag, group, pack);
    } else {
      startLostLifeAnimation();
    }
  };

  useEffect(() => {
    if (gameCompleted) {
      setTimeout(() => {
        setShowBottomSheet(true);
      }, 1000);
    }
  }, [gameCompleted]);

  const [showLostAnimation, setShowLostLifeAnimation] = useState(false);
  const [showBottomSheet, setShowBottomSheet] = useState(false);

  const startLostLifeAnimation = () => {
    setShowLostLifeAnimation(true);
    setTimeout(() => {
      loseLife();
    }, 300);
  };

  const resetGame = () => {
    setShowBottomSheet(false);
    setShowLostLifeAnimation(false);
    setCurrentColors({});
  };

  useEffect(() => {
    loadFlagComponent();
    resetGame();
  }, [flag]);

  const goToNextFlag = () => {
    // TODO: actually this only works for world pack
    if (pack !== "world") return;

    const groupFlags = flagsInfo[capitalize(group.id)] as unknown as Flag[];

    const currentFlagIndex = findIndex(
      groupFlags,
      (currentFlag: Flag) => currentFlag.country === flag.country
    );

    const nextFlag: Flag = groupFlags[currentFlagIndex + 1];

    if (nextFlag && nextFlag.unblock < completedFlagsAmount) {
      navigation.navigate("Game", { pack, group, flag: nextFlag });
    } else {
      navigation.goBack();
    }
  };

  if (!FlagComponent || !FlagLinesComponent || !colorOptions) return null;

  return (
    <>
      <View flex={1}>
        <View flex={1} justifyContent="center">
          <View
            flexDirection="row"
            alignSelf="center"
            gap={40}
            opacity={gameCompleted ? 0 : 1}
            animateOnly={["opacity"]}
          >
            <View
              onPress={cleanColors}
              disabled={!canClearColor}
              pressStyle={{ scale: 1.3 }}
              animation="bouncy"
            >
              <Icon
                color="$onSurface"
                name="gota"
                disabled={!canClearColor}
                size={24}
              />
            </View>
            <View
              onPress={checkFlag}
              disabled={!canCheckFlag}
              pressStyle={{ scale: 1.3 }}
              animation="bouncy"
            >
              <Icon
                color="$onSurface"
                name="check"
                size={24}
                disabled={!canCheckFlag}
              />
            </View>
          </View>
          <FlagContainer showBottomSheet={showBottomSheet}>
            <FlagLinesComponent onPress={onPressPath} colors={currentColors} />
            <CompletedFlagContainer show={gameCompleted}>
              <FlagComponent onPress={onPressPath} colors={currentColors} />
            </CompletedFlagContainer>
          </FlagContainer>
          <Text
            type="h2"
            alignSelf="center"
            opacity={gameCompleted ? 0 : 1}
            animateOnly={["opacity"]}
          >
            {flag?.country}
          </Text>
        </View>
        <ColorSelectorContainer
          gameCompleted={gameCompleted}
          paddingBottom={insets.bottom + 32}
        >
          {map(
            chunkObject(colorOptions, size(colorOptions) === 4 ? 2 : 3),
            (colorOptionsChunk) => (
              <View flexDirection="row" gap={40}>
                {map(colorOptionsChunk, (color: string) => (
                  <ColorPicker
                    onPress={() => setSelectedColor(color)}
                    borderWidth={selectedColor === color ? 10 : 5}
                    backgroundColor={color}
                  />
                ))}
              </View>
            )
          )}
        </ColorSelectorContainer>
      </View>
      <CheckContainer show={gameCompleted && !showBottomSheet}>
        <Icon name="check" size={28} color="$onSurface" />
      </CheckContainer>
      <FlagInfoBottomSheet
        visible={showBottomSheet}
        flag={flag}
        onPressNextFlag={goToNextFlag}
      />
      <FailAnimation
        visible={showLostAnimation}
        onAnimationFinish={() => setShowLostLifeAnimation(false)}
      />
    </>
  );
};
