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
      <G id="flag / south america / guyana / a">
        <G id="guyana a">
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 214.94H25.2L325 125V214.94ZM25 35H325V125L25 35Z"
            fill={props.colors["green"]}
            onPress={() => props.onPress("green")}
          />
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 125L25 35L51.1286 50.6772L298.6 125L51.1287 199.323L25 215L325 125Z"
            fill="#FFFFFE"
          />
          <Path
            id="#000000"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M175 125L25 35V45.5L157.51 125L25 204.5V215L175 125Z"
            fill="#0A0B09"
          />
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.1284 199.323L298.6 125L51.1284 50.6772L175 125L51.1284 199.323Z"
            fill={props.colors["yellow"]}
            onPress={() => props.onPress("yellow")}
          />
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 45.5L157.51 125L25 204.5V45.5Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
