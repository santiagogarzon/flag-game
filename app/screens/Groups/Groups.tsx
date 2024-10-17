import { styled, View } from "@tamagui/core";
import { map, size } from "lodash";
import { Image, ImageSourcePropType } from "react-native";

import Animated, {
  interpolate,
  SharedValue,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { PackId, useGameManager } from "app/hooks/useGameManager";
import {
  indicatorMargin,
  indicatorWidth,
  screenWidth,
} from "./GroupTab.styled";
import { GroupTab } from "./GroupTab";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { RouteProp } from "../screens";
import { useState } from "react";

export const useScrollIndicatorStyle = ({
  scrollOffset,
  pagesAmount = 0,
  indicatorWidth = 0,
}: {
  scrollOffset: SharedValue<number>;
  pagesAmount: number;
  indicatorWidth: number;
}) => {
  const indicatorPositionStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX:
          screenWidth / 2 -
          indicatorWidth / 2 -
          interpolate(
            scrollOffset.value,
            [0, screenWidth * pagesAmount],
            [0, (indicatorWidth + indicatorMargin) * pagesAmount]
          ),
      },
    ],
  }));

  return indicatorPositionStyle;
};

export type GroupsParams = {
  pack: PackId;
};

export const Groups = () => {
  const { getGroups } = useGameManager();
  const route = useRoute<RouteProp<"Groups">>();
  const pack = route?.params.pack;

  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const groups = getGroups(pack);

  const indicatorContainerStyle = useScrollIndicatorStyle({
    scrollOffset,
    indicatorWidth,
    pagesAmount: size(groups),
  });

  const navigateToPage = (index: number) => {
    scrollRef.current?.scrollTo({ x: index * screenWidth, animated: true });
  };
  const [hiddenState, setHiddenState] = useState(false);
  useFocusEffect(() => {
    setHiddenState(false);
    return () => setHiddenState(true);
  });
  return (
    <View flex={1} style={{ display: hiddenState ? "none" : "flex" }}>
      <Animated.ScrollView
        ref={scrollRef}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {map(groups, (group, index) => (
          <View flex={1} justifyContent="center">
            <GroupTab group={group} pack={pack} />
          </View>
        ))}
      </Animated.ScrollView>
      <Animated.View
        style={[
          {
            marginBottom: indicatorWidth / 2,
            flexDirection: "row",
          },
          indicatorContainerStyle,
        ]}
      >
        {map(groups, ({ image }, index) => (
          <View
            width={indicatorWidth}
            height={48}
            pressStyle={{ scale: 1.1 }}
            onPress={() => navigateToPage(index)}
            animation="bouncy"
          >
            <Image
              source={image as ImageSourcePropType}
              style={{ width: indicatorWidth, height: 48 }}
              resizeMode="contain"
            />
          </View>
        ))}
      </Animated.View>
    </View>
  );
};
