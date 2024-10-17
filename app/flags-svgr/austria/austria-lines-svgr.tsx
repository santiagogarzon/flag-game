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
      <G id="flag / europe / austria / b">
        <G id="austria b">
          <G
            id="Combined Shape"
            onPress={() => props.onPress("Combined Shape")}
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 91.6667H25V25H325V91.6667ZM325 225H25V158.333H325V225Z"
              fill={props.colors["Combined Shape"]}
              fillOpacity={1}
              onPress={() => props.onPress("Combined Shape")}
            />
            <Path
              d="M25 91.6667H24V92.6667H25V91.6667ZM325 91.6667V92.6667H326V91.6667H325ZM25 25V24H24V25H25ZM325 25H326V24H325V25ZM25 225H24V226H25V225ZM325 225V226H326V225H325ZM25 158.333V157.333H24V158.333H25ZM325 158.333H326V157.333H325V158.333ZM25 92.6667H325V90.6667H25V92.6667ZM24 25V91.6667H26V25H24ZM325 24H25V26H325V24ZM326 91.6667V25H324V91.6667H326ZM25 226H325V224H25V226ZM24 158.333V225H26V158.333H24ZM325 157.333H25V159.333H325V157.333ZM326 225V158.333H324V225H326Z"
              fill="white"
              onPress={() => props.onPress("Combined Shape")}
            />
          </G>
          <Path
            id="Fill 4 Copy"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 158.333H325V91.6665H25V158.333Z"
            fill={props.colors["Fill 4 Copy"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("Fill 4 Copy")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
