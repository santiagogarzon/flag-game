import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { styled, View } from "@tamagui/core";
import { Button } from "app/ds/atoms/Button/Button";
import { Icon, Text } from "app/ds/sub-atomic";
import { useGameManager } from "app/hooks/useGameManager";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Container = styled(View, {
  flexDirection: "row",
  paddingHorizontal: 16,
  paddingVertical: 8,
  justifyContent: "space-between",
});

const StatContainer = styled(View, {
  flexDirection: "row",
  gap: 8,
  paddingVertical: 12,
  paddingHorizontal: 8,
});

export const Header = ({
  navigation,
  options,
  back,
}: NativeStackHeaderProps) => {
  const { canGoBack, goBack } = navigation;

  const insets = useSafeAreaInsets();
  const { completedFlags, lives: lifes } = useGameManager();

  const _goBack = canGoBack() ? goBack : undefined;

  const previusIsHomeScreen = false;
  const backIcon = canGoBack()
    ? previusIsHomeScreen
      ? "home"
      : "arrow-left"
    : "configuration";

  return (
    <Container paddingTop={insets.top + 8}>
      <Button fab icon={backIcon} onPress={_goBack} />
      <View flexDirection="row" gap={8}>
        <StatContainer>
          <Text type="h3">{lifes}</Text>
          <Icon size={24} color={"$error"} name="heart" />
        </StatContainer>
        <StatContainer>
          <Text type="h3">{completedFlags}</Text>
          <Icon size={24} name="flag" />
        </StatContainer>
      </View>
    </Container>
  );
};
