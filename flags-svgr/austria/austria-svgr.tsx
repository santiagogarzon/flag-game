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
      <G id="flag / europe / austria / a">
        <G id="austria a">
          <Path
            id="Combined Shape"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 91.6667H25V25H325V91.6667ZM325 225H25V158.333H325V225Z"
            fill={props.colors["Combined Shape"]}
            onPress={() => props.onPress("Combined Shape")}
          />
          <Path
            id="Fill 4 Copy"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 158.333H325V91.6665H25V158.333Z"
            fill="#FFFFFF"
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
