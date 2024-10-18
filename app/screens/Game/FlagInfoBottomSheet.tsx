import { useEffect, useRef, useState } from "react";
import { capitalize } from "lodash";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import React from "react";
import { Flag } from "app/hooks/useGameManager";
import { useTheme, View } from "@tamagui/core";
import { Text } from "app/ds/sub-atomic";
import { Button } from "app/ds/atoms/Button/Button";
import flagDescriptions from "assets/flags-descriptions.json";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Dimensions } from "react-native";

export const FlagInfoBottomSheet = ({
  flag,
  visible,
  onPressNextFlag,
  onPressResetGame,
}: {
  flag: Flag;
  visible: boolean;
  onPressNextFlag: () => void;
  onPressResetGame: () => void;
}) => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const sheetRef = useRef<BottomSheet>(null);

  const [firstRender, setFirstRender] = useState(false);
  const description =
    flagDescriptions[flag.country as keyof typeof flagDescriptions];

  useEffect(() => {
    if (visible) {
      sheetRef.current?.snapToIndex(0);
    } else {
      if (!firstRender) {
        setFirstRender(true);
      } else {
        sheetRef.current?.close();
      }
    }
  }, [visible]);

  return (
    <BottomSheet
      ref={sheetRef}
      index={-1}
      snapPoints={[240, "100%"]}
      backgroundStyle={{
        backgroundColor: theme.surface.val,
      }}
    >
      <BottomSheetScrollView
        style={{ marginBottom: 78 + insets.bottom }} // TODO: revisar con insets...
        contentContainerStyle={{
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        <Text color="$onSurface" type="h2" marginTop={16}>
          {capitalize(flag.country)}
        </Text>
        {/* <Text color="$onSurface">La Estrella Solitaria</Text> */}
        <Text
          color="$onSurface"
          type="body2"
          marginTop={32}
          textAlign="center"
          flex={1}
        >
          {description}
        </Text>
      </BottomSheetScrollView>
      <View
        flexDirection="row"
        bottom={insets.bottom}
        margin={16}
        width={Dimensions.get("screen").width - 32}
      >
        <Button type="secondary" icon="reset" onPress={onPressResetGame} fab />
        <Button
          text="Next flag"
          type="secondary"
          icon="arrow-right"
          onPress={onPressNextFlag}
          flex={1}
          marginLeft={8}
        />
      </View>
    </BottomSheet>
  );
};
