import {
  Dimensions,
  ImageBackground,
  Text,
  View,
  Image,
  useColorScheme,
  TouchableHighlight,
} from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import Chile from "@/assets/flags/america/chile";
import ChileColor from "@/assets/flags/america/chile-color";
import useColorPicker from "@/hooks/useColorPicker";
import SouthAmerica from "@/assets/images/south-america";
export default function Flags() {
  const [tab, setTab] = useState("Logo");
  const colorScheme = useColorScheme();
  const [color, changeColor] = useColorPicker();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
      }}
    >
      <TouchableHighlight
        style={{
          marginTop: 120,
          height: "45%",
          width: "85%",
          borderRadius: 30,
          backgroundColor: "#FFFFFF80",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
        underlayColor={"#f0f0f0"}
        onPress={() => router.navigate("/flag-picker")}
      >
        <>
          <SouthAmerica
            style={{ position: "absolute", top: -45, left: "40%" }}
          />
          <View style={{}}>
            <Text
              style={{
                alignSelf: "center",
                fontSize: 24,
                marginTop: 40,
                fontFamily: "MontserratBold",
              }}
            >
              South America
            </Text>
          </View>
        </>
      </TouchableHighlight>
    </View>
  );
}
