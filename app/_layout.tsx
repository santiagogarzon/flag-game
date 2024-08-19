import { SettingButton } from "@/components/SettingButton";
import { BackButton } from "@/components/BackButton";
import { HomeButton } from "@/components/HomeButton";
import { Link, SplashScreen, Stack, router } from "expo-router";
import { ImageBackground, Dimensions, TouchableHighlight } from "react-native";
import { useColorScheme } from "@/hooks/useColorScheme";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontserratBold: require("../assets/fonts/Montserrat-Bold.ttf"),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <ImageBackground
        source={
          colorScheme === "dark"
            ? require("../assets/images/dark_blur.png")
            : require("../assets/images/light_blur.png")
        }
        style={{
          justifyContent: "center",
          flex: 1,
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
          overflow: "visible",
        }}
        resizeMode="cover"
      >
        <Stack
          screenOptions={{
            headerBackground: () => null,
            title: "",
            contentStyle: {
              overflow: "visible",
              backgroundColor: "transparent",
              height: 300,
              zIndex: 99999999,
            },
            headerStyle: {
              backgroundColor: "transparent",
              height: 200,
            },
            headerLeft: () => (
              <SettingButton title={"Settings"}></SettingButton>
            ),
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen
            name="settings"
            options={{
              headerLeft: () => <BackButton title={""} />,
            }}
          />
          <Stack.Screen
            name="continents"
            options={{
              headerLeft: () => <HomeButton title={""} />,
              presentation: "card",
              gestureEnabled: true,
              gestureDirection: "vertical",
            }}
          />
          <Stack.Screen
            name="flags"
            options={{
              headerLeft: () => <BackButton title={""} />,
              presentation: "card",
              gestureEnabled: true,
              gestureDirection: "vertical",
            }}
          />
          <Stack.Screen
            name="flag-picker"
            options={{
              headerLeft: () => <BackButton title={""} />,
              presentation: "card",
              gestureEnabled: true,
              gestureDirection: "vertical",
            }}
          />
        </Stack>
      </ImageBackground>
    </ThemeProvider>
  );
}
