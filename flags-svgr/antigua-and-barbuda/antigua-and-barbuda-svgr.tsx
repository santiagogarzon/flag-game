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
      <G id="flag / north america / antigua and barbuda / a">
        <G id="antigua and barbuda a">
          <Path
            id="#000000"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 25L266.304 103.261H240.217L207.609 96.775L235.253 78.303L202.644 84.79L221.115 57.146L193.471 75.617L199.958 43.008L181.486 70.652L175 38.043L168.514 70.652L150.042 43.008L156.529 75.617L128.884 57.146L147.355 84.79L114.747 78.303L142.391 96.775L109.783 103.261H83.6958L25 25H325Z"
            fill="#0A0B09"
          />
          <Path
            id="blue"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M116.304 146.739L83.6958 103.261H266.304L233.696 146.739H116.304Z"
            fill={props.colors["blue"]}
            onPress={() => props.onPress("blue")}
          />
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 25V225H325V25L175 225L25 25Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M175 225L116.304 146.739H233.696L175 225Z"
            fill="#FFFFFE"
          />
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M207.609 96.775L235.253 78.303L202.644 84.79L221.115 57.146L193.471 75.617L199.958 43.008L181.486 70.652L175 38.043L168.514 70.652L150.042 43.008L156.529 75.617L128.884 57.146L147.355 84.79L114.747 78.303L142.391 96.775L109.783 103.261H240.217L207.609 96.775Z"
            fill={props.colors["yellow"]}
            onPress={() => props.onPress("yellow")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
