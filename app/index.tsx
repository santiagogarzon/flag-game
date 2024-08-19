import {
  Dimensions,
  ImageBackground,
  Text,
  View,
  Image,
  useColorScheme,
  TouchableHighlight,
} from "react-native";
import Logo from "../assets/images/logo.svg";
import DarkLogo from "../assets/images/dark-logo.svg";
import TabNavAnimated from "../components/TabNavAnimated";
import { useState } from "react";
import WorldIcon from "../assets/images/worlds-main-icon-light.svg";
import { router } from "expo-router";

export default function Index() {
  const [tab, setTab] = useState("Logo");
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        flex: 1,
        alignContent: "space-between",
      }}
    >
      {tab === "Logo" ? (
        <View
          style={{
            alignContent: "flex-start",
            justifyContent: "flex-start",
            flex: 1,
            paddingTop: "35%",
          }}
        >
          {colorScheme === "dark" ? (
            <DarkLogo style={{ alignContent: "center", alignSelf: "center" }} />
          ) : (
            <Logo style={{ alignContent: "center", alignSelf: "center" }} />
          )}
        </View>
      ) : (
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <WorldIcon style={{ alignSelf: "center" }} />
          <Text
            style={{
              alignSelf: "center",
              fontSize: 24,
              marginTop: 40,
              fontFamily: "MontserratBold",
            }}
          >
            Flags of the World
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "MontserratBold",
              marginTop: 20,
              alignSelf: "center",
            }}
          >
            21/195
          </Text>
          <TouchableHighlight
            style={{
              alignSelf: "center",
              height: 56,
              width: 200,
              backgroundColor: "white",
              borderRadius: 60,
              marginTop: 50,
            }}
            underlayColor={"#f0f0f0"}
            onPress={() => router.navigate("/continents")}
          >
            <View
              style={{
                flex: 1,
                alignContent: "center",
                justifyContent: "center",
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "MontserratBold",
                }}
              >
                Go →
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      )}
      <View style={{}}>
        <TabNavAnimated onPress={(item: string) => setTab(item)} />
      </View>
      {/* </ImageBackground> */}
    </View>
  );
}
