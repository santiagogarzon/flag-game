import { Text, View, TouchableOpacity } from "react-native";
import { lazy, useEffect, useRef, useState } from "react";
import { find, flatMap, map, mapValues, toLower } from "lodash";

import React from "react";
import { importSvgr } from "@/flags-svgr/import-svg";
import flagInfoJson from "../assets/flags-info.json";

type FlagComponentProps = {
  colors: { [key: string]: string };
  onPress: (id: string) => void;
};

const flagInfo = flatMap(flagInfoJson).map((flag) => ({
  ...flag,
  country: toLower(flag.country),
}));

export default function Flags() {
  const countryName = "san-marino";
  const country = find(flagInfo, (flag) => countryName === flag.country);

  const [FlagLinesComponent, setFlagLinesComponent] = useState();

  const [FlagComponent, setFlagComponent] =
    useState<React.FC<FlagComponentProps>>();
  const [colorOptions, setColorOptions] = useState();
  const [currentColors, setCurrentColors] = useState<{
    [key: string]: string;
  }>({});
  const [selectedColor, setSelectedColor] = useState<string>();

  const onPressPath = (id: string) => {
    if (selectedColor) {
      setCurrentColors((a) => ({ ...a, [id]: selectedColor }));
    }

    setSelectedColor(undefined);
  };

  const loadFlagComponent = async () => {
    try {
      const Flag = await React.lazy(() => importSvgr(countryName));
      setFlagComponent(() => Flag);

      const FlagLines = await React.lazy(() =>
        importSvgr(countryName + "-lines")
      );
      setFlagLinesComponent(() => FlagLines);
    } catch (error) {
      console.error(error);
    }
  };

  const loadColors = async () => {
    try {
      const colors = await import(
        `../flags-svgr/${countryName}/${countryName}-colors.json`
      ).then((r) => r.default);
      setColorOptions(colors);
      setCurrentColors({});
    } catch (e) {
      console.error(e);
      console.error("nopee");
    }
  };

  useEffect(() => {
    loadFlagComponent();
    loadColors();
  }, []);

  if (!FlagComponent || !FlagLinesComponent || !colorOptions) return null;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          marginHorizontal: 8,
          marginTop: 200,
        }}
      >
        <View style={{ position: "absolute" }}>
          <FlagLinesComponent />
        </View>
        <View style={{ position: "absolute" }}>
          <FlagComponent onPress={onPressPath} colors={currentColors} />
        </View>
      </View>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 24,
          marginTop: 40,
          fontFamily: "MontserratBold",
        }}
      >
        {country?.country}
      </Text>
      <View
        style={{
          backgroundColor: "#FFFFFF80",
          alignSelf: "center",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-around",
          height: "25%",
          width: "100%",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        {/* mapear colores */}
        {map(colorOptions, (color: string) => (
          <TouchableOpacity onPress={() => setSelectedColor(color)}>
            <View
              style={{
                backgroundColor: "white",
                width: 60,
                height: 60,
                borderRadius: 30,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: "#000",
                shadowRadius: 5,
                shadowOffset: { width: 0, height: 2 },
              }}
            >
              <View
                style={{
                  height: 50,
                  width: 50,
                  backgroundColor: color,
                  borderRadius: 25,
                }}
              ></View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
