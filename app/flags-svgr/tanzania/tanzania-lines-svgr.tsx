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
      <G id="flag / africa / tanzania / b">
        <G id="tanzania b">
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 25V182.936L261.902 25H25Z"
            fill={props.colors["green"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("green")}
          />
          <Path
            id="blue"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M88.0977 225H325V67.0649L88.0977 225Z"
            fill={props.colors["blue"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("blue")}
          />
          <Path
            id="black"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M279.93 25L25 194.954V225H70.069L324.999 55.047V25H279.93Z"
            fill={props.colors["black"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("black")}
          />
          <G id="yellow" onPress={() => props.onPress("yellow")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.001 182.936L261.903 25H279.931L25.001 194.954V182.936ZM88.0978 225H70.0698L325 55.0468V67.0648L88.0978 225Z"
              fill={props.colors["yellow"]}
              fillOpacity={1}
              onPress={() => props.onPress("yellow")}
            />
            <Path
              d="M261.903 25V24H261.6L261.348 24.168L261.903 25ZM25.001 182.936L24.4463 182.104L24.001 182.401V182.936H25.001ZM279.931 25L280.486 25.832L283.234 24H279.931V25ZM25.001 194.954H24.001V196.823L25.5557 195.786L25.001 194.954ZM70.0698 225L69.5151 224.168L66.767 226H70.0698V225ZM88.0978 225V226H88.4006L88.6525 225.832L88.0978 225ZM325 55.0468H326V53.1783L324.445 54.2148L325 55.0468ZM325 67.0648L325.554 67.8969L326 67.6V67.0648H325ZM261.348 24.168L24.4463 182.104L25.5557 183.768L262.458 25.832L261.348 24.168ZM279.931 24H261.903V26H279.931V24ZM25.5557 195.786L280.486 25.832L279.376 24.168L24.4463 194.122L25.5557 195.786ZM24.001 182.936V194.954H26.001V182.936H24.001ZM70.0698 226H88.0978V224H70.0698V226ZM324.445 54.2148L69.5151 224.168L70.6245 225.832L325.554 55.8789L324.445 54.2148ZM326 67.0648V55.0468H324V67.0648H326ZM88.6525 225.832L325.554 67.8969L324.445 66.2327L87.5431 224.168L88.6525 225.832Z"
              fill="white"
              onPress={() => props.onPress("yellow")}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
