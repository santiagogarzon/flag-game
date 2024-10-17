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

export const Screens = () => (
  <NavigationContainer ref={navigationRef} theme={navigatorTheme}>
    <AppStack.Navigator
      screenOptions={{
        header: Header,
        animation: "slide_from_bottom",
      }}
    >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Groups" component={Groups} />
      <AppStack.Screen name="FlagsList" component={FlagsLists} />
      <AppStack.Screen name="Game" component={Game} />
      <AppStack.Screen name="Options" component={Options} />
    </AppStack.Navigator>
  </NavigationContainer>
);
