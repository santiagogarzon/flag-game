import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { useWindowDimensions } from "react-native";
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={useWindowDimensions().width}
    height={useWindowDimensions().height / 3}
    viewBox="0 0 350 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="flag / africa / south sudan / a">
      <G id="south sudan a">
        <Path
          id="green"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.1035 199.94H325V155H102.942L25.1035 199.94Z"
          fill="#168041"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M102.942 155H325V147.5H115.933L102.942 155ZM115.933 102.5H325V95H102.942L115.933 102.5Z"
          fill="#FFFFFE"
        />
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M325 95H102.942L25 50H325V95Z"
          fill="#0A0B09"
        />
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M115.933 147.5H324.933V102.5H115.933L154.904 125L115.933 147.5Z"
          fill="#C6242B"
        />
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M154.904 125L25 50V200L154.904 125ZM60.9984 130.798L43.8866 125.238L60.9985 119.678L60.9985 101.685L71.5749 116.242L88.6867 110.682L78.1112 125.238L88.6875 139.795L71.5745 134.234L60.9983 148.792L60.9984 130.798Z"
          fill="#274489"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.8868 125.238L60.9985 130.798L60.9985 148.792L71.5747 134.234L88.6877 139.795L78.1114 125.238L88.6869 110.682L71.575 116.242L60.9987 101.685L60.9987 119.678L43.8868 125.238Z"
          fill="#F8DA21"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
