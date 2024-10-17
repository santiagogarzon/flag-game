import React from "react";
import { styled, View } from "@tamagui/core";
import { FlatList } from "react-native-gesture-handler";
import { screenWidth } from "../Groups/GroupTab.styled";
import { capitalize, chunk, first, map } from "lodash";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Flag, Group, PackId, useGameManager } from "app/hooks/useGameManager";
import { Text } from "app/ds/sub-atomic";
import { useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { NavigationProp, RouteProp } from "../screens";
import { FlagsPage } from "./FlagsPage";

export const IndicatorContainer = styled(View, {
  backgroundColor: "$surface",
  alignSelf: "center",
  borderRadius: "$xl",
  padding: 16,
  gap: 12,
  flexDirection: "row",
  marginBottom: 16,
});

export const IndicatorDot = styled(View, {
  width: 12,
  height: 12,
  borderRadius: 8,
  animation: "lazy",
  animateOnly: ["backgroundColor"],
  backgroundColor: "$onSurface50",
  variants: {
    selected: {
      true: {
        backgroundColor: "$onSurface",
      },
    },
  } as const,
});

export type FlagsListsParams = {
  group: Group;
  pack: PackId;
};

export const FlagsLists = () => {
  const navigation = useNavigation<NavigationProp<"FlagsList">>();
  const route = useRoute<RouteProp<"FlagsList">>();
  const { group, pack } = route.params;
  const { getFlags } = useGameManager();
  const [hiddenState, setHiddenState] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const flags = getFlags(pack, group.id);
  const pagedFlags = chunk(flags, 6);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / screenWidth);
    setCurrentPageIndex(newIndex);
  };

  const openFlag = (flag: Flag) => {
    navigation.navigate("Game", { flag, group, pack });
  };
  useFocusEffect(() => {
    setHiddenState(false);
    return () => setHiddenState(true);
  });

  return (
    <View flex={1} style={{ display: hiddenState ? "none" : "flex" }}>
      <Text type="h1" alignSelf="center" textAlign="center" marginTop={16}>
        {capitalize(group.id)}
      </Text>
      <FlatList
        data={pagedFlags}
        keyExtractor={(a) => first(a)?.country as string}
        renderItem={({ item: flags }) => (
          <FlagsPage {...{ flags, pack, group }} onPress={openFlag} />
        )}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={onScroll}
      />
      <IndicatorContainer>
        {map(pagedFlags, (_, index) => (
          <IndicatorDot selected={index === currentPageIndex} />
        ))}
      </IndicatorContainer>
    </View>
  );
};
