import { styled, View } from "@tamagui/core";
import { Button } from "app/ds/atoms/Button/Button";
import { Switch } from "app/ds/atoms/Switch/Switch";
import { Icon, Text } from "app/ds/sub-atomic";
import { atom, useAtom } from "jotai";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {} from "expo-store-review";

export const soundActiveAtom = atom<boolean>(false);
export const vibrationActiveAtom = atom<boolean>(false);
export const notificationsActiveAtom = atom<boolean>(false);
export const testerModeActiveAtom = atom<boolean>(false);

const SwitchContainer = styled(View, {
  flexDirection: "row",
  justifyContent: "space-between",
  paddingVertical: 8,
  alignItems: "center",
});

export const Options = () => {
  const insets = useSafeAreaInsets();
  const [sound, setSound] = useAtom(soundActiveAtom);
  const [vibration, setVibration] = useAtom(vibrationActiveAtom);
  const [notifications, setNotifications] = useAtom(notificationsActiveAtom);
  const [tester, setTester] = useAtom(testerModeActiveAtom);

  return (
    <View
      flex={1}
      paddingTop={insets.top}
      padding={16}
      justifyContent="space-between"
    >
      <View>
        <Text type="h1" marginBottom={24}>
          Settings
        </Text>
        <SwitchContainer>
          <Text type="h4">Sounds</Text>
          <Switch active={sound} onPress={() => setSound(!sound)} />
        </SwitchContainer>
        <SwitchContainer>
          <Text type="h4">Vibration</Text>
          <Switch active={vibration} onPress={() => setVibration(!vibration)} />
        </SwitchContainer>
        <SwitchContainer>
          <Text type="h4">Notifications</Text>
          <Switch
            active={notifications}
            onPress={() => setNotifications(!notifications)}
          />
        </SwitchContainer>

        {__DEV__ && (
          <SwitchContainer>
            <Text type="h4">Tester</Text>
            <Switch active={tester} onPress={() => setTester(!tester)} />
          </SwitchContainer>
        )}
      </View>
      <Button
        text="Rate us!"
        icon="star"
        type="secondary"
        alignSelf="center"
        marginBottom={insets.bottom}
      />
    </View>
  );
};
