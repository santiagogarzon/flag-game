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
      <G id="flag / asia / qatar / a">
        <G id="qatar a">
          <Path
            id="maroon"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 184.94H119.708L143.492 178.443L119.488 171.873L143.492 165.315L119.488 158.758L143.492 152.188L119.488 145.63L143.492 139.073L119.488 132.503L143.492 125.945L119.488 119.388L143.492 112.818L119.488 106.26L143.492 99.7029L119.488 93.1329L143.492 86.5749L119.488 80.0169L143.492 73.4479L119.488 66.8899H325V184.94Z"
            fill={props.colors["maroon"]}
            onPress={() => props.onPress("maroon")}
          />
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 66.8899V185H119.488L143.492 178.443L119.488 171.873L143.492 165.315L119.488 158.758L143.492 152.188L119.488 145.63L143.492 139.073L119.488 132.503L143.492 125.945L119.488 119.388L143.492 112.818L119.488 106.26L143.492 99.7029L119.488 93.1329L143.492 86.5749L119.488 80.0169L143.492 73.4479L119.488 66.8899H25Z"
            fill="#FFFFFF"
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
