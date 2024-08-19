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
import Argentina from "@/assets/images/flag-picker/argentina";
import Bolivia from "@/assets/images/flag-picker/bolivia";
import Peru from "@/assets/images/flag-picker/peru";
import Uruguay from "@/assets/images/flag-picker/uruguay";
import ChileU from "@/assets/images/flag-picker/chile-uncompleted";
import ColombiaU from "@/assets/images/flag-picker/colombia-uncompleted";

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
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <TouchableHighlight
          style={{
            height: "30%",
            width: "50%",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
          underlayColor={"#f0f0f0"}
          onPress={() => router.navigate("/flags")}
        >
          <>
            <Argentina />
            <Text
              style={{
                alignSelf: "center",
                fontSize: 14,
                marginTop: 20,
                fontFamily: "MontserratBold",
              }}
            >
              Argentina
            </Text>
          </>
        </TouchableHighlight>

        <TouchableHighlight
          style={{
            height: "30%",
            width: "50%",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
          underlayColor={"#f0f0f0"}
          onPress={() => router.navigate("/flags")}
        >
          <>
            <Peru />
            <Text
              style={{
                alignSelf: "center",
                fontSize: 14,
                marginTop: 20,
                fontFamily: "MontserratBold",
              }}
            >
              Peru
            </Text>
          </>
        </TouchableHighlight>

        <TouchableHighlight
          style={{
            height: "30%",
            width: "50%",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
          underlayColor={"#f0f0f0"}
          onPress={() => router.navigate("/flags")}
        >
          <>
            <Uruguay />
            <Text
              style={{
                alignSelf: "center",
                fontSize: 14,
                marginTop: 20,
                fontFamily: "MontserratBold",
              }}
            >
              Uruguay
            </Text>
          </>
        </TouchableHighlight>

        <TouchableHighlight
          style={{
            height: "30%",
            width: "50%",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
          underlayColor={"#f0f0f0"}
          onPress={() => router.navigate("/flags")}
        >
          <>
            <Bolivia />
            <Text
              style={{
                alignSelf: "center",
                fontSize: 14,
                marginTop: 20,
                fontFamily: "MontserratBold",
              }}
            >
              Bolivia
            </Text>
          </>
        </TouchableHighlight>

        <TouchableHighlight
          style={{
            height: "30%",
            width: "50%",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
          underlayColor={"#f0f0f0"}
          onPress={() => router.navigate("/flags")}
        >
          <>
            <ChileU />
            <Text
              style={{
                alignSelf: "center",
                fontSize: 14,
                marginTop: 20,
                fontFamily: "MontserratBold",
              }}
            >
              Chile
            </Text>
          </>
        </TouchableHighlight>

        <TouchableHighlight
          style={{
            height: "30%",
            width: "50%",
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
          underlayColor={"#f0f0f0"}
          onPress={() => router.navigate("/flags")}
        >
          <>
            <ColombiaU />
            <Text
              style={{
                alignSelf: "center",
                fontSize: 14,
                marginTop: 20,
                fontFamily: "MontserratBold",
              }}
            >
              Colombia
            </Text>
          </>
        </TouchableHighlight>
      </View>
    </View>
  );
}
