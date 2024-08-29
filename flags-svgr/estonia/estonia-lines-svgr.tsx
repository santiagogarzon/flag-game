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
      <G id="flag / europe / estonia / b">
        <G id="estonia b">
          <Path
            id="Fill 4"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 220H325V156.667H25V220Z"
            fill="#FFFFFE"
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("Fill 4")}
          />
          <Path
            id="Fill 4 Copy"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 156.667H325V93.3333H25V156.667Z"
            fill="#0A0B09"
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("Fill 4 Copy")}
          />
          <Path
            id="Fill 4 Copy 2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 93.3333H325V30H25V93.3333Z"
            fill="#4E85B9"
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("Fill 4 Copy 2")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
