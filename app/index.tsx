import { ImageBackground, useColorScheme } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "jotai";
import { PortalProvider } from "@gorhom/portal";
import { TamaguiProvider } from "@tamagui/core";

import { Screens } from "./screens/screens";
import tamaguiConfig from "./ds/tamagui.config";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export const App = () => {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
    customIcons: require("../assets/fonts/customIcons/customIcons.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider>
        <TamaguiProvider
          config={tamaguiConfig}
          defaultTheme={colorScheme as string}
        >
          <PortalProvider>
            <ImageBackground
              source={
                colorScheme === "dark"
                  ? require("../assets/images/dark_blur.png")
                  : require("../assets/images/light_blur.png")
              }
              style={{ flex: 1 }}
              resizeMode="cover"
            >
              <Screens />
            </ImageBackground>
          </PortalProvider>
        </TamaguiProvider>
      </Provider>
    </GestureHandlerRootView>
  );
};
