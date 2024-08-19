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
      <G id="flag / europe / hungary / a">
        <G id="hungary a">
          <Path
            id="Fill 4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 200H325V150H25V200Z"
            fill={props.colors["Fill 4"]}
            onPress={() => props.onPress("Fill 4")}
          />
          <Path
            id="Fill 4 Copy"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 150H325V100H25V150Z"
            fill="#FFFFFF"
          />
          <Path
            id="Fill 4 Copy 2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 100H325V50H25V100Z"
            fill={props.colors["Fill 4 Copy 2"]}
            onPress={() => props.onPress("Fill 4 Copy 2")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
