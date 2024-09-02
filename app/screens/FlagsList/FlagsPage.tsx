import React from "react";
import { View } from "@tamagui/core";
import { map } from "lodash";
import { Flag, Group, PackId, useGameManager } from "app/hooks/useGameManager";
import { FlagItem, flagsPageHeight, flagsPageWidth } from "./FlagItem";

export type FlagsPageProps = {
  flags: Flag[];
  pack: PackId;
  group: Group;
  onPress: (flag: Flag) => void;
};

export const FlagsPage: React.FC<FlagsPageProps> = ({
  flags = [],
  pack,
  group,
  onPress,
  flagsInfo,
}) => {
  const { isFlagCompleted, completedFlagsAmount } = useGameManager();

  return (
    <View
      flex={1}
      justifyContent="center"
      alignItems="center"
      width={flagsPageWidth}
    >
      <View width={flagsPageWidth} height={flagsPageHeight}>
        {map(flags, (flag, index) => (
          <FlagItem
            {...{
              flag,
              index,
              pack,
              group,
              completed: isFlagCompleted(flag, group, pack),
              locked: flag.unblock > completedFlagsAmount,
            }}
            onPress={() => onPress(flag)}
            key={flag.country}
          />
        ))}
      </View>
    </View>
  );
};
