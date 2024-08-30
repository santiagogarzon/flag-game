import { View } from "@tamagui/core";
import { Progress } from "app/ds/atoms/Progress/Progress";
import { Icon, Text } from "app/ds/sub-atomic";
import { Image, ImageSourcePropType } from "react-native";
import { GroupTabContainer } from "./GroupTab.styled";
import { capitalize, size } from "lodash";
import { Group, PackId, useGameManager } from "app/hooks/useGameManager";
import { useNavigation } from "@react-navigation/native";

export const GroupTab = ({ pack, group }: { pack: PackId; group: Group }) => {
  const navigation = useNavigation();
  const { getFlags } = useGameManager();
  const { id, image } = group;
  const flags = getFlags(pack, id);
  const completed = 0;
  const total = size(flags);

  const openFlagsScreen = () => {
    navigation.navigate("FlagsList", { pack, group });
  };

  return (
    <GroupTabContainer
      onPress={openFlagsScreen}
      pressStyle={{ scale: 1.05 }}
      animation="bouncy"
    >
      <Image
        width={150}
        height={80}
        style={{
          marginTop: -80 * 0.6,
          marginBottom: 24,
        }}
        source={image as ImageSourcePropType}
      />
      <View minHeight={64} alignItems="center" marginBottom={16}>
        <Text type="h1" textAlign="center">
          {capitalize(id)}
        </Text>
      </View>

      <View
        marginVertical={24}
        flexDirection="row"
        alignItems="center"
        gap={16}
      >
        <Icon size={20} name="flag" />
        <Text type="body1">
          {completed} / {total}
        </Text>
      </View>
      <Progress value={completed} max={total} marginTop={4} />
    </GroupTabContainer>
  );
};
