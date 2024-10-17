import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { styled, View } from "@tamagui/core";
import { Button } from "app/ds/atoms/Button/Button";
import { CustomIcon, Icon, Text } from "app/ds/sub-atomic";
import { map, noop, size } from "lodash";
import { Dimensions } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { NavigationProp } from "../screens";
import worldFlags from "app/flags-svgr/flags-colors.json";
import { useGameManager } from "app/hooks/useGameManager";
import { useEffect, useState } from "react";
import { Progress } from "app/ds/atoms/Progress/Progress";

const indicatorWidth = 56;
const indicatorMargin = 32;

type HomePage = {
  icon: CustomIcon;
  title: string;
  description?: string;
  action: () => void;
  disabled?: boolean;
  completed?: number;
  total?: number;
};

const { width: screenWidth } = Dimensions.get("screen");

const Page = styled(View, {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  width: screenWidth,
  gap: 32,
});

export const Home = () => {
  const { completedFlagsAmount } = useGameManager();
  const { navigate } = useNavigation<NavigationProp<"Home">>();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const pages: HomePage[] = [
    {
      icon: "world",
      title: "Flags of the World",
      // description: `${completedFlagsAmount}/${size(worldFlags)}`,
      action: () => navigate("Groups", { pack: "world" }),
      completed: completedFlagsAmount,
      total: size(worldFlags),
    },
    {
      icon: "gift",
      title: "Bonus Rounds",
      description: "More special flags to discover",
      action: noop,
      disabled: true,
    },
    {
      icon: "diamond",
      title: "Premium Flags",
      description: "Only for the true flag masters",
      action: noop,
      disabled: true,
    },
  ];

  const indicatorPositionStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX:
          screenWidth / 2 -
          indicatorWidth / 2 -
          interpolate(
            scrollOffset.value,
            [0, screenWidth * (pages.length + 1)],
            [0, (indicatorWidth + indicatorMargin) * (pages.length + 1)]
          ),
      },
    ],
  }));

  const navigateToPage = (index: number) => {
    scrollRef.current?.scrollTo({ x: index * screenWidth, animated: true });
  };

  useEffect(() => {
    const t = setTimeout(() => {
      scrollRef.current?.scrollTo({ x: screenWidth, animated: true });
    }, 1000);

    return () => clearTimeout(t);
  }, []);

  const [hiddenState, setHiddenState] = useState(false);
  useFocusEffect(() => {
    setHiddenState(false);
    return () => setHiddenState(true);
  });

  return (
    <View flex={1} style={{ display: hiddenState ? "none" : "flex" }}>
      <Animated.ScrollView
        ref={scrollRef}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Page>
          <Icon size={180} name="logo" />
        </Page>
        {map(
          pages,
          (
            { action, description, icon, title, disabled, completed, total },
            index
          ) => (
            <Page>
              <View justifyContent="center" alignItems="center">
                <Icon name={icon} size={82} />
                {index !== 0 && (
                  <View
                    height={2}
                    backgroundColor="$surface"
                    width={128}
                    position="absolute"
                    transform={[{ translateX: -screenWidth / 2 }]}
                  />
                )}
              </View>

              <Text type="h2">{title}</Text>
              {description && (
                <Text type={index === 0 ? "h3" : "body2"}>{description}</Text>
              )}

              {completed !== undefined && total !== undefined && (
                <>
                  <View
                    marginTop={24}
                    flexDirection="row"
                    alignItems="center"
                    gap={16}
                  >
                    <Icon size={20} name="flag" />
                    <Text type="h3">
                      {completed} / {total}
                    </Text>
                  </View>
                  <Progress
                    value={completed}
                    max={total}
                    marginTop={4}
                    marginHorizontal={32}
                  />
                </>
              )}

              <Button
                text={disabled ? "Coming Soon" : "Go"}
                icon={disabled ? undefined : "arrow-right"}
                onPress={action}
                disabled={disabled}
              />
            </Page>
          )
        )}
      </Animated.ScrollView>
      <Animated.View
        style={[
          {
            marginVertical: indicatorWidth,
            flexDirection: "row",
            transform: [{ translateX: screenWidth / 2 - indicatorWidth / 2 }],
          },
          indicatorPositionStyle,
        ]}
      >
        <View onPress={() => navigateToPage(0)}>
          <Icon size={56} name="logo-fly" marginRight={indicatorMargin} />
        </View>

        {map(pages, ({ icon }, index) => (
          <Button
            fab
            type="primaryOutlined"
            marginRight={indicatorMargin}
            icon={icon}
            onPress={() => navigateToPage(index + 1)}
          />
        ))}
      </Animated.View>
    </View>
  );
};
