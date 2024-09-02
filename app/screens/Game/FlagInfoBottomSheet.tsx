import { useEffect, useRef, useState } from "react";
import { capitalize } from "lodash";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";

import React from "react";
import { Flag } from "app/hooks/useGameManager";
import { useTheme } from "@tamagui/core";
import { Text } from "app/ds/sub-atomic";
import { Button } from "app/ds/atoms/Button/Button";

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
  const sheetRef = useRef<BottomSheet>(null);

  const [firstRender, setFirstRender] = useState(false);

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
        <Text color="$onSurface">La Estrella Solitaria</Text>
        <Text color="$onSurface" type="body2" marginTop={32} textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </Text>
        <Button
          text="Next flag"
          type="secondary"
          icon="arrow-right"
          marginVertical={16}
          alignSelf="stretch"
          onPress={onPressNextFlag}
        />
      </BottomSheetScrollView>
    </BottomSheet>
  );
};
