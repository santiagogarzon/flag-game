import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
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
      {...props}
    >
      <G id="flag / europe / czech republic / b">
        <G id="czech republic b">
          <G id="red" onPress={() => props.onPress("red")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M175 125L25 225H325V125H175Z"
              fill={props.colors["red"]}
              fillOpacity={1}
              onPress={() => props.onPress("red")}
            />
            <Path
              d="M25 225L24.4453 224.168L21.6972 226H25V225ZM175 125V124H174.697L174.445 124.168L175 125ZM325 225V226H326V225H325ZM325 125H326V124H325V125ZM25.5547 225.832L175.555 125.832L174.445 124.168L24.4453 224.168L25.5547 225.832ZM25 226H325V224H25V226ZM326 225V125H324V225H326ZM325 124H175V126H325V124Z"
              fill="white"
              onPress={() => props.onPress("red")}
            />
          </G>
          <G id="white" onPress={() => props.onPress("white")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 125H175L25 25H325V125Z"
              fill={props.colors["white"]}
              fillOpacity={1}
              onPress={() => props.onPress("white")}
            />
            <Path
              d="M175 125L174.445 125.832L174.697 126H175V125ZM325 125V126H326V125H325ZM25 25V24H21.6972L24.4453 25.8321L25 25ZM325 25H326V24H325V25ZM175 126H325V124H175V126ZM175.555 124.168L25.5547 24.1679L24.4453 25.8321L174.445 125.832L175.555 124.168ZM325 24H25V26H325V24ZM326 125V25H324V125H326Z"
              fill="white"
              onPress={() => props.onPress("white")}
            />
          </G>
          <G id="blue" onPress={() => props.onPress("blue")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M175 125L25 25V225L175 125Z"
              fill={props.colors["blue"]}
              fillOpacity={1}
              onPress={() => props.onPress("blue")}
            />
            <Path
              d="M175 125L25 25V225L175 125"
              stroke="white"
              strokeWidth={2}
              onPress={() => props.onPress("blue")}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
