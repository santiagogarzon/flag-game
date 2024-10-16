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
      <G id="flag / europe / poland / b">
        <G id="poland b">
          <G id="white" onPress={() => props.onPress("white")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 31V125H25V31H325Z"
              fill={props.colors["white"]}
              fillOpacity={1}
              onPress={() => props.onPress("white")}
            />
            <Path
              d="M325 125V126H326V125H325ZM325 31H326V30H325V31ZM25 125H24V126H25V125ZM25 31V30H24V31H25ZM326 125V31H324V125H326ZM325 124H25V126H325V124ZM24 31V125H26V31H24ZM325 30H25V32H325V30Z"
              fill="white"
              onPress={() => props.onPress("white")}
            />
          </G>
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 219H325V125H25V219Z"
            fill={props.colors["red"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("red")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
