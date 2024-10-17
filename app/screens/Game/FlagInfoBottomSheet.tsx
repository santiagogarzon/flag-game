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

export const FlagInfoBottomSheet = ({
  flag,
  visible,
  onPressNextFlag,
}: {
  flag: Flag;
  visible: boolean;
  onPressNextFlag: () => void;
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
        sheetRef.current?.snapToPosition(-1);
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
        <View height={128} />
      </BottomSheetScrollView>
      <Button
        position="absolute"
        left={16}
        right={16}
        bottom={insets.bottom}
        text="Next flag"
        type="secondary"
        icon="arrow-right"
        marginVertical={16}
        alignSelf="stretch"
        onPress={onPressNextFlag}
      />
    </BottomSheet>
  );
};
