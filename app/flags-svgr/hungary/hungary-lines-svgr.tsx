import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { useWindowDimensions } from "react-native";
type FlagProps = {
  onPress: (id: string) => void;
  colors: {
    [key: string]: string;
  };
};
const Flag = (props: FlagProps) => {
  return (
    <Svg
      width={useWindowDimensions().width}
      height={useWindowDimensions().height / 3}
      viewBox="0 0 350 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G id="flag / europe / hungary / b">
        <G id="hungary b">
          <Path
            id="Fill 4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 200H325V150H25V200Z"
            fill={props.colors["Fill 4"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("Fill 4")}
          />
          <Path
            id="Fill 4 Copy"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 150H325V100H25V150Z"
            fill={props.colors["Fill 4 Copy"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("Fill 4 Copy")}
          />
          <Path
            id="Fill 4 Copy 2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 100H325V50H25V100Z"
            fill={props.colors["Fill 4 Copy 2"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("Fill 4 Copy 2")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
