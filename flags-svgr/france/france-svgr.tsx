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
      <G id="flag / europe / france / a">
        <G id="france a">
          <Path
            id="Fill 1"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 225H125V25H25V225Z"
            fill={props.colors["Fill 1"]}
            onPress={() => props.onPress("Fill 1")}
          />
          <Path
            id="Fill 1 Copy"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M225 225H325V25H225V225Z"
            fill={props.colors["Fill 1 Copy"]}
            onPress={() => props.onPress("Fill 1 Copy")}
          />
          <Path
            id="Fill 2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M125 225H225V25H125V225Z"
            fill="#FFFFFF"
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
