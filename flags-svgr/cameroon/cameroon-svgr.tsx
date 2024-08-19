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
      <G id="flag / africa / cameroon / a">
        <G id="cameroon a">
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 225H125V25H25V225Z"
            fill={props.colors["green"]}
            onPress={() => props.onPress("green")}
          />
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M225 25V225H125V25H225ZM165.313 128.147L149.638 116.759H169.101L175 98.333L180.899 116.759H200.361L184.687 128.147L190.674 146.574L175 135.186L159.326 146.574L165.313 128.147Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 225H225V25H325V225ZM165.313 128.147L149.638 116.759H169.101L175 98.333L180.899 116.759H200.361L184.687 128.147L190.674 146.574L175 135.186L159.326 146.574L165.313 128.147Z"
            fill={props.colors["yellow"]}
            onPress={() => props.onPress("yellow")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
