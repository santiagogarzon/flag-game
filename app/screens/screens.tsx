import {
  createNavigationContainerRef,
  DefaultTheme,
  NavigationContainer,
  RouteProp as NavigationRouteProp,
} from "@react-navigation/native";
import {
  createStackNavigator,
  StackCardStyleInterpolator,
  StackNavigatorProps,
} from "@react-navigation/stack";

import { Home } from "./Home/Home";
import { Groups, GroupsParams } from "./Groups/Groups";
import { FlagsLists, FlagsListsParams } from "./FlagsList/FlagsLists";
import { Game, GameScreenParams } from "./Game/Game";
import { Header } from "app/ds/organism/Header/Header";
import { Header as Header2 } from "app/ds/organism/Header2/Header";
import { Options } from "./Options/Options";
import { Animated } from "react-native";
import { useAnimatedStyle, withTiming } from "react-native-reanimated";

type AppScreensParams = {
  Home: undefined;
  Groups: GroupsParams;
  FlagsList: FlagsListsParams;
  Game: GameScreenParams;
  Options: undefined;
};

export type StackNavigationProps = StackNavigatorProps<AppScreensParams>;

export type RouteProp<T extends keyof AppScreensParams> = NavigationRouteProp<
  AppScreensParams,
  T
>;
export type NavigationProp<T extends keyof AppScreensParams> =
  StackNavigatorProps<AppScreensParams, T>;

export const AppStack = createStackNavigator<AppScreensParams>();
export const navigationRef = createNavigationContainerRef<AppScreensParams>();

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};
const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

function MyCustomAnimation({ current, layouts }) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(current.progress.value * layouts.screen.width),
        },
      ],
    };
  });

  return <Animated.View style={[animatedStyle, { flex: 1 }]} />;
}

const forSlide: StackCardStyleInterpolator = ({
  current,
  next,
  inverted,
  layouts: { screen },
}) => {
  const progress = Animated.add(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp",
    }),
    next
      ? next.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: "clamp",
        })
      : 0
  );

  return {
    cardStyle: {
      transform: [
        {
          translateY: Animated.multiply(
            progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                screen.height, // Focused, but offscreen in the beginning
                0, // Fully focused
                -screen.height, // Fully unfocused
              ],
              extrapolate: "clamp",
            }),
            inverted
          ),
        },
      ],
    },
  };
};

export const Screens = () => (
  <NavigationContainer ref={navigationRef} theme={navigatorTheme}>
    <AppStack.Navigator
      screenOptions={{
        header: (a) => <Header {...a} />,
        headerMode: "float",
        animation: "fade",
        presentation: "card",
        cardOverlayEnabled: false,
        freezeOnBlur: true,
      }}
    >
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          cardStyleInterpolator: forSlide,
        }}
      />
      <AppStack.Screen
        name="Groups"
        component={Groups}
        options={{
          cardStyleInterpolator: forSlide,
        }}
      />
      <AppStack.Screen name="FlagsList" component={FlagsLists} />
      <AppStack.Screen name="Game" component={Game} />
      <AppStack.Screen name="Options" component={Options} />
    </AppStack.Navigator>
  </NavigationContainer>
);
