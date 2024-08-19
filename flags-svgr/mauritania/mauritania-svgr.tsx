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
      <G id="flag / africa / mauritania / a">
        <G id="mauritania a">
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 25H25V65H325V25ZM325 185H25V225H325V185Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 65H25V185H325V65ZM170.2 99.4H154.9L167.5 108.6L162.4 123.2L175 114.2L187.6 123.2L182.5 108.6L195.1 99.4H179.8L175 85L170.2 99.4ZM125.811 129.677C112.074 120.043 102.927 106.69 100 92C100 111.361 107.902 129.929 121.967 143.619C136.032 157.309 155.109 165 175 165C194.891 165 213.968 157.309 228.033 143.619C242.098 129.929 250 111.361 250 92C247.073 106.69 237.926 120.043 224.189 129.677C210.452 139.311 193.019 144.6 175 144.6C156.981 144.6 139.548 139.311 125.811 129.677Z"
            fill={props.colors["green"]}
            onPress={() => props.onPress("green")}
          />
          <Path
            id="yellow"
            d="M154.9 99.4H170.2L175 85L179.8 99.4H195.1L182.5 108.6L187.6 123.2L175 114.2L162.4 123.2L167.5 108.6L154.9 99.4ZM100 92C102.927 106.69 112.074 120.043 125.811 129.677C139.548 139.311 156.981 144.6 175 144.6C193.019 144.6 210.452 139.311 224.189 129.677C237.926 120.043 247.073 106.69 250 92C250 111.361 242.098 129.929 228.033 143.619C213.968 157.309 194.891 165 175 165C155.109 165 136.032 157.309 121.967 143.619C107.902 129.929 100 111.361 100 92Z"
            fill={props.colors["yellow"]}
            onPress={() => props.onPress("yellow")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
