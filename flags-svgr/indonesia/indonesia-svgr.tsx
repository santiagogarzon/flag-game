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
      <G id="flag / asia / indonesia / a">
        <G id="indonesia b">
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 125H325V25H25V125Z"
            fill="#FFFFFF"
            fillOpacity={0.5}
            stroke="#FFFFFF"
            strokeWidth={2}
          />
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 225H325V125H25V225Z"
            fill="#FFFFFF"
            fillOpacity={0.5}
            stroke="#FFFFFF"
            strokeWidth={2}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
