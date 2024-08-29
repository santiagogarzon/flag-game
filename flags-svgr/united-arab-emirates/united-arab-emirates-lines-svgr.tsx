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
      <G id="flag / asia / united arab emirates / b">
        <G id="united arab emirates b">
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 199.94H100V50H25V199.94Z"
            fill="#BC242C"
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 100H325V50H100V100Z"
            fill="#0B9446"
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("green")}
          />
          <Path
            id="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 150H325V100H100V150Z"
            fill="#FFFFFE"
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("white")}
          />
          <Path
            id="black"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 200H325V150H100V200Z"
            fill="#0A0B09"
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("black")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
