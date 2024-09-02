import { useNavigation } from "@react-navigation/native";
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

const indicatorWidth = 56;
const indicatorMargin = 32;

type HomePage = {
  icon: CustomIcon;
  title: string;
  description: string;
  action: () => void;
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
      description: `${completedFlagsAmount}/${size(worldFlags)}`,
      action: () => navigate("Groups", { pack: "world" }),
    },
    {
      icon: "gift",
      title: "Bonus Rounds",
      description: "More special flags to discover",
      action: noop,
    },
    {
      icon: "diamond",
      title: "Premium Flags",
      description: "Only for the true flag masters",
      action: noop,
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

  return (
    <View flex={1}>
      <Animated.ScrollView
        ref={scrollRef}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <Page>
          <Icon size={180} name="logo" />
        </Page>
        {map(pages, ({ action, description, icon, title }, index) => (
          <Page>
            <View justifyContent="center" alignItems="center">
              <Icon name={icon} size={82} />
              <View
                height={2}
                backgroundColor="$surface"
                width={128}
                position="absolute"
                transform={[{ translateX: screenWidth / 2 }]}
              />
            </View>

            <Text type="h2">{title}</Text>
            <Text type={index === 0 ? "h3" : "body2"}>{description}</Text>
            <Button text="Go" icon="arrow-right" onPress={action} />
          </Page>
        ))}
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
