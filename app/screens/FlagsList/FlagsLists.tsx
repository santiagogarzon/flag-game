import React, { useEffect } from "react";
import { View } from "@tamagui/core";
import { FlatList } from "react-native-gesture-handler";
import { screenWidth } from "../Groups/GroupTab.styled";
import { capitalize, chunk, kebabCase, map, toLower } from "lodash";
import { useRoute } from "@react-navigation/native";
import { Flag, useGameManager } from "app/hooks/useGameManager";
import { Text } from "app/ds/sub-atomic";
import { useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { importSvgr } from "flags-svgr/import-svg";

const flagsPageWidth = screenWidth;
const flagsPageHeight = 440;
const flagItemWidth = flagsPageWidth / 2;
const flagItemHeight = flagsPageHeight / 3;

const FlagItem = ({ flag, index }) => {
  const [FlagLinesComponent, setFlagLinesComponent] = useState();
  const [FlagComponent, setFlagComponent] = useState();

  const countryFileName = `${kebabCase(toLower(flag.country))}`;

  const loadFlagComponent = async () => {
    try {
      const Flag = await React.lazy(() => importSvgr(countryFileName));
      setFlagComponent(() => Flag);

      const FlagLines = await React.lazy(() =>
        importSvgr(countryFileName + "-lines")
      );
      setFlagLinesComponent(() => FlagLines);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadFlagComponent();
  }, [flag.country]);
  return (
    <View
      position="absolute"
      width={flagItemWidth}
      height={flagItemHeight}
      justifyContent="center"
      alignItems="center"
      transform={[
        { translateX: (index % 2) * flagItemWidth },
        { translateY: (index % 3) * flagItemHeight },
      ]}
    >
      {!!FlagComponent && <FlagComponent width={120} height={120} />}
      {/* {importSvgr(`${kebabCase(toLower(flag.country))}-lines`)} */}
      <Text>{flag.country}</Text>
    </View>
  );
};

export const FlagsPage = ({ flags = [] }: { flags: Flag[] }) => {
  return (
    <View
      justifyContent="center"
      flex={1}
      alignItems="center"
      width={flagsPageWidth}
    >
      <View width={flagsPageWidth} height={flagsPageHeight}>
        {map(flags, (flag, index) => (
          <FlagItem {...{ flag, index }} />
        ))}
      </View>
    </View>
  );
};

export const FlagsLists = () => {
  const route = useRoute();
  const { group, pack } = route.params || {};
  const { getFlags } = useGameManager();
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const flags = getFlags(pack, group.id);
  const pagedFlags = chunk(flags, 6);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / screenWidth);
    setCurrentPageIndex(newIndex);
  };

  return (
    <View flex={1}>
      <Text type="h1" alignSelf="center" textAlign="center">
        {capitalize(group.id)}
      </Text>
      <FlatList
        style={{ flex: 1 }}
        data={pagedFlags}
        renderItem={({ item: flags }) => <FlagsPage flags={flags} />}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={onScroll}
      />
      <View
        backgroundColor="$surface"
        alignSelf="center"
        borderRadius="$xl"
        padding={16}
        gap={12}
        flexDirection="row"
        marginBottom={16}
      >
        {map(pagedFlags, (_, index) => (
          <View
            width={12}
            height={12}
            borderRadius={8}
            animation="lazy"
            animateOnly={["backgroundColor"]}
            backgroundColor={
              index === currentPageIndex ? "$onSurface" : "$onSurface50"
            }
          />
        ))}
      </View>
    </View>
  );
};
