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
      <G id="flag / north america / costa rica / a">
        <G id="costa rica a">
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 155H325V95H25V155Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 185H25V155H325V185ZM325 95H25V65H325V95Z"
            fill="#FFFFFE"
          />
          <Path
            id="blue"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 214.94H25V185H325V214.94ZM325 65H25V35H325V65Z"
            fill={props.colors["blue"]}
            onPress={() => props.onPress("blue")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
