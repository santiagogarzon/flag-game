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
      <G id="flag / africa / gambia / b">
        <G id="gambia b">
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 91.667H325V25H25V91.667Z"
            fill={props.colors["red"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("red")}
          />
          <G id="white" onPress={() => props.onPress("white")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 158.333H25V147.222H325V158.333ZM325 102.778H25V91.667H325V102.778Z"
              fill={props.colors["white"]}
              fillOpacity={1}
              onPress={() => props.onPress("white")}
            />
            <Path
              d="M25 158.333H24V159.333H25V158.333ZM325 158.333V159.333H326V158.333H325ZM25 147.222V146.222H24V147.222H25ZM325 147.222H326V146.222H325V147.222ZM325 102.778V103.778H326V102.778H325ZM25 102.778H24V103.778H25V102.778ZM25 91.667V90.667H24V91.667H25ZM325 91.667H326V90.667H325V91.667ZM25 159.333H325V157.333H25V159.333ZM24 147.222V158.333H26V147.222H24ZM25 148.222H325V146.222H25V148.222ZM326 158.333V147.222H324V158.333H326ZM325 101.778H25V103.778H325V101.778ZM24 91.667V102.778H26V91.667H24ZM325 90.667H25V92.667H325V90.667ZM326 102.778V91.667H324V102.778H326Z"
              fill="white"
              onPress={() => props.onPress("white")}
            />
          </G>
          <Path
            id="blue"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 147.222H325V102.778H25V147.222Z"
            fill={props.colors["blue"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("blue")}
          />
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 225H325V158.333H25V225Z"
            fill={props.colors["green"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("green")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
