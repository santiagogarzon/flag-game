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
      <G id="flag / europe / lithuania / a">
        <G id="lithuania a">
          <Path
            id="Fill 4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 215H325V155H25V215Z"
            fill={props.colors["Fill 4"]}
            onPress={() => props.onPress("Fill 4")}
          />
          <Path
            id="Fill 4 Copy"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 155H325V95H25V155Z"
            fill={props.colors["Fill 4 Copy"]}
            onPress={() => props.onPress("Fill 4 Copy")}
          />
          <Path
            id="Fill 4 Copy 2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 95H325V35H25V95Z"
            fill={props.colors["Fill 4 Copy 2"]}
            onPress={() => props.onPress("Fill 4 Copy 2")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
