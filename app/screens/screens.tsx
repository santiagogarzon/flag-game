import {
  createNavigationContainerRef,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./Home/Home";
import { GamePacks } from "./GamePacks/GamePacks";
import { Groups } from "./Groups/Groups";
import { FlagsLists } from "./FlagsList/FlagsLists";
import { Game } from "./Game/Game";
import { Header } from "app/ds/organism/Header/Header";

type AppScreensParams = {
  Home: undefined;
  GamePacks: undefined;
  Groups: undefined;
  FlagsList: undefined;
  Game: undefined;
};

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
    <AppStack.Navigator screenOptions={{ header: Header }}>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="GamePacks" component={GamePacks} />
      <AppStack.Screen name="Groups" component={Groups} />
      <AppStack.Screen name="FlagsList" component={FlagsLists} />
      <AppStack.Screen name="Game" component={Game} />
    </AppStack.Navigator>
  </NavigationContainer>
);
