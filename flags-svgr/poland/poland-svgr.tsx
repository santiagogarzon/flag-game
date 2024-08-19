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
      <G id="flag / europe / poland / a">
        <G id="poland a">
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 31.5V125.25H25V31.5H325Z"
            fill="#FFFFFE"
          />
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 219H325V125.25H25V219Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
