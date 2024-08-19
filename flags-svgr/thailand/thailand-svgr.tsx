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
      <G id="flag / asia / thailand / a">
        <G id="thailand a">
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 225H25V191.667H325V225ZM325 58.333H25V25H325V58.333Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 191.667H25V158.333H325V191.667ZM325 91.667H25V58.333H325V91.667Z"
            fill="#FFFFFE"
          />
          <Path
            id="blue"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 158.333H325V91.667H25V158.333Z"
            fill={props.colors["blue"]}
            onPress={() => props.onPress("blue")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
