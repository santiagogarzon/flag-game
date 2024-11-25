import {
  createNavigationContainerRef,
  DefaultTheme,
  NavigationContainer,
  RouteProp as NavigationRouteProp,
} from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Home } from "./Home/Home";
import { Groups, GroupsParams } from "./Groups/Groups";
import { FlagsLists, FlagsListsParams } from "./FlagsList/FlagsLists";
import { Game, GameScreenParams } from "./Game/Game";
import { Header } from "app/ds/organism/Header/Header";
import { Header as Header2 } from "app/ds/organism/Header2/Header";
import { Options } from "./Options/Options";

type AppScreensParams = {
  Home: undefined;
  Groups: GroupsParams;
  FlagsList: FlagsListsParams;
  Game: GameScreenParams;
  Options: undefined;
};

export type StackNavigationProps = NativeStackNavigationProp<AppScreensParams>;

export type RouteProp<T extends keyof AppScreensParams> = NavigationRouteProp<
  AppScreensParams,
  T
>;
export type NavigationProp<T extends keyof AppScreensParams> =
  NativeStackNavigationProp<AppScreensParams, T>;

export const AppStack = createNativeStackNavigator<AppScreensParams>();
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
export const Screens = () => (
  <NavigationContainer ref={navigationRef} theme={navigatorTheme}>
    <AppStack.Navigator
      screenOptions={{
        animation: "slide_from_bottom",
        presentation: "card",
      }}
    >
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{ header: Header2 }}
      />
      <AppStack.Screen
        name="Groups"
        component={Groups}
        options={{ header: Header }}
        // options={{ cardStyleInterpolator: customCardStyleInterpolator }}
      />
      <AppStack.Screen
        name="FlagsList"
        component={FlagsLists}
        options={{ animation: "fade", header: Header }}
      />
      <AppStack.Screen
        name="Game"
        component={Game}
        options={{ animation: "fade", header: Header }}
      />
      <AppStack.Screen
        name="Options"
        component={Options}
        options={{ header: Header }}
      />
    </AppStack.Navigator>
  </NavigationContainer>
);
