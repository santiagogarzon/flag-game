import useColorPicker from "@/hooks/useColorPicker";
import * as React from "react";
import { useState } from "react";
import Svg, { Path } from "react-native-svg";

function ChileColor({ pressColor }) {
  const [color3, setColor3] = useState("transparent");
  const [opacity, setOpacity] = useState(0);

  const [color1, setColor1] = useState("transparent");
  const [opacity1, setOpacity1] = useState(0);

  const [color2, setColor2] = useState("transparent");
  const [opacity2, setOpacity2] = useState(0);

  return (
    <Svg
      width={322}
      height={230}
      viewBox="0 0 322 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 207h276V23H23v184z"
        fill={color3}
        fillOpacity={opacity}
        onPress={(colorSelected) => {
          setColor3(pressColor);
          setOpacity(1);
        }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 115h92V23H23v92z"
        fill={color1}
        fillOpacity={opacity1}
        onPress={(colorSelected) => {
          setColor1(pressColor);
          setOpacity1(1);
        }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M299 23v92H115V23h184zM60.644 71.715l-13.519-9.822h16.71L69 46l5.164 15.893h16.71l-13.519 9.822 5.163 15.892L69 77.785l-13.52 9.822 5.164-15.892z"
        fill={color2}
        fillOpacity={opacity2}
        onPress={(colorSelected) => {
          setColor2(pressColor);
          setOpacity2(1);
        }}
      />
    </Svg>
  );
}

export default ChileColor;
