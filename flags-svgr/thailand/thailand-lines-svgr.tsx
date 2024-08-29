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
      <G id="flag / asia / thailand / b">
        <G id="thailand b">
          <G id="red" onPress={() => props.onPress("red")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 225H25V191.667H325V225ZM325 58.333H25V25H325V58.333Z"
              fill="#D8262C"
              fillOpacity={1}
              onPress={() => props.onPress("red")}
            />
            <Path
              d="M25 225H24V226H25V225ZM325 225V226H326V225H325ZM25 191.667V190.667H24V191.667H25ZM325 191.667H326V190.667H325V191.667ZM325 58.333V59.333H326V58.333H325ZM25 58.333H24V59.333H25V58.333ZM25 25V24H24V25H25ZM325 25H326V24H325V25ZM25 226H325V224H25V226ZM24 191.667V225H26V191.667H24ZM25 192.667H325V190.667H25V192.667ZM326 225V191.667H324V225H326ZM325 57.333H25V59.333H325V57.333ZM24 25V58.333H26V25H24ZM325 24H25V26H325V24ZM326 58.333V25H324V58.333H326Z"
              fill="white"
              onPress={() => props.onPress("red")}
            />
          </G>
          <G id="white" onPress={() => props.onPress("white")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 191.667H25V158.333H325V191.667ZM325 91.667H25V58.333H325V91.667Z"
              fill="#FFFFFE"
              fillOpacity={1}
              onPress={() => props.onPress("white")}
            />
            <Path
              d="M25 191.667H24V192.667H25V191.667ZM325 191.667V192.667H326V191.667H325ZM25 158.333V157.333H24V158.333H25ZM325 158.333H326V157.333H325V158.333ZM325 91.667V92.667H326V91.667H325ZM25 91.667H24V92.667H25V91.667ZM25 58.333V57.333H24V58.333H25ZM325 58.333H326V57.333H325V58.333ZM25 192.667H325V190.667H25V192.667ZM24 158.333V191.667H26V158.333H24ZM25 159.333H325V157.333H25V159.333ZM326 191.667V158.333H324V191.667H326ZM325 90.667H25V92.667H325V90.667ZM24 58.333V91.667H26V58.333H24ZM325 57.333H25V59.333H325V57.333ZM326 91.667V58.333H324V91.667H326Z"
              fill="white"
              onPress={() => props.onPress("white")}
            />
          </G>
          <Path
            id="blue"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 158.333H325V91.667H25V158.333Z"
            fill="#1B1736"
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("blue")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
