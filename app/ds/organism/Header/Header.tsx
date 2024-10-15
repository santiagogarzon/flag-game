import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { GetRef, styled, View, ViewProps } from "@tamagui/core";
import { Button } from "app/ds/atoms/Button/Button";
import { Icon, Text } from "app/ds/sub-atomic";
import { useGameManager } from "app/hooks/useGameManager";
import { atom, useAtom } from "jotai";
import { size } from "lodash";
import { useEffect, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MeasureOnSuccessCallback, View as RNView } from "react-native";
import Animated from "react-native-reanimated";

const Container = styled(Animated.View, {
  flexDirection: "row",
  paddingHorizontal: 16,
  paddingVertical: 8,
  justifyContent: "space-between",
});

const StatContainer = styled(RNView, {
  flexDirection: "row",
  gap: 8,
  paddingVertical: 12,
  paddingHorizontal: 8,
  alignItems: "center",
});

export const heartPositionAtom = atom({
  width: 0,
  height: 0,
  px: 0,
  py: 0,
});

export const Header = ({
  navigation,
  options,
  back,
}: NativeStackHeaderProps) => {
  const { canGoBack, goBack } = navigation;

  const insets = useSafeAreaInsets();
  const { completedFlagsAmount, lives: lifes } = useGameManager();
  const [_, saveHeartPosition] = useAtom(heartPositionAtom);

  const previusIsHomeScreen = false;
  const backIcon = canGoBack()
    ? previusIsHomeScreen
      ? "home"
      : "arrow-left"
    : undefined;

  const heartContainerRef = useRef<GetRef<typeof StatContainer>>(null);

  const calculateHeart = () => {
    heartContainerRef.current?.measure((x, y, width, height, px, py) => {
      if (width) {
        saveHeartPosition({ width, height, px, py });
      }
    });
  };

  useEffect(() => {
    setTimeout(() => {
      calculateHeart();
    }, 1000);
  }, []);

  const onPressBack = () => {
    if (canGoBack()) {
      goBack();
    } else {
      navigation.navigate("Options");
    }
  };

  return (
    <Container paddingTop={insets.top + 8}>
      {backIcon ? (
        <Button fab icon={backIcon} onPress={onPressBack} />
      ) : (
        <View />
      )}
      <View
        flexDirection="row"
        gap={8}
        alignSelf="flex-start"
        alignItems="flex-start"
      >
        <StatContainer ref={heartContainerRef} collapsable={false}>
          <Text type="h3">{lifes}</Text>
          <Icon size={24} color={"$error"} name="heart" />
        </StatContainer>
        <StatContainer>
          <Text type="h3">{completedFlagsAmount}</Text>
          <Icon size={24} name="flag" />
        </StatContainer>
      </View>
    </Container>
  );
};
