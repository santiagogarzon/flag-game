import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
type FlagProps = {
  onPress: (id: string) => void,
  colors: {
    [key: string]: string,
  },
};
const Flag = (props: FlagProps) => {
  return (
    <Svg
      width={350}
      height={250}
      viewBox="0 0 350 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G id="flag / europe / iceland / a">
        <G id="iceland a">
          <Path
            id="blue"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M157 233H325V149H157V233ZM109 233V149H25V233H109ZM157 101H325V17H157V101ZM109 17V101H25V17H109Z"
            fill={props.colors["blue"]}
            onPress={() => props.onPress("blue")}
          />
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M121 17H109V101H25V113H121V17ZM145 17V113H325V101H157V17H145ZM121 137H25V149H109V233H121V137ZM145 233H157V149H325V137H145V233Z"
            fill="#FFFFFF"
          />
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M145 17H121V113H25V137H121V233H145V137H325V113H145V17Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
