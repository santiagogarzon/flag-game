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
      <G id="flag / africa / mauritius / a">
        <G id="mauritius a">
          <Path
            id="Fill 1"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 75H325V25H25V75Z"
            fill={props.colors["Fill 1"]}
            onPress={() => props.onPress("Fill 1")}
          />
          <Path
            id="Fill 2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 125H325V75H25V125Z"
            fill={props.colors["Fill 2"]}
            onPress={() => props.onPress("Fill 2")}
          />
          <Path
            id="Fill 3"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 175H325V125H25V175Z"
            fill={props.colors["Fill 3"]}
            onPress={() => props.onPress("Fill 3")}
          />
          <Path
            id="Fill 4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 225H325V175H25V225Z"
            fill={props.colors["Fill 4"]}
            onPress={() => props.onPress("Fill 4")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
