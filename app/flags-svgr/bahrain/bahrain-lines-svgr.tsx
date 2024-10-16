import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { useWindowDimensions } from "react-native";
type FlagProps = {
  onPress: (id: string) => void;
  colors: {
    [key: string]: string;
  };
};
const Flag = (props: FlagProps) => {
  return (
    <Svg
      width={useWindowDimensions().width}
      height={useWindowDimensions().height / 3}
      viewBox="0 0 350 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G id="flag / asia / bahrain / b">
        <G id="bahrain b">
          <G id="white" onPress={() => props.onPress("white")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M99.1533 214.94H25V35H99L145 53L99 71L145 89L99 107L145 125L99 143L145 161L99 179L145 197L99.1533 214.94Z"
              fill={props.colors["white"]}
              fillOpacity={1}
              onPress={() => props.onPress("white")}
            />
            <Path
              d="M25 214.94H24V215.94H25V214.94ZM99.1533 214.94V215.94H99.342L99.5177 215.871L99.1533 214.94ZM25 35V34H24V35H25ZM99 35L99.3644 34.0688L99.1887 34H99V35ZM145 53L145.364 53.9312L147.744 53L145.364 52.0688L145 53ZM99 71L98.6356 70.0688L96.2558 71L98.6356 71.9312L99 71ZM145 89L145.364 89.9312L147.744 89L145.364 88.0688L145 89ZM99 107L98.6356 106.069L96.2558 107L98.6356 107.931L99 107ZM145 125L145.364 125.931L147.744 125L145.364 124.069L145 125ZM99 143L98.6356 142.069L96.2558 143L98.6356 143.931L99 143ZM145 161L145.364 161.931L147.744 161L145.364 160.069L145 161ZM99 179L98.6356 178.069L96.2558 179L98.6356 179.931L99 179ZM145 197L145.364 197.931L147.744 197L145.364 196.069L145 197ZM25 215.94H99.1533V213.94H25V215.94ZM24 35V214.94H26V35H24ZM99 34H25V36H99V34ZM98.6356 35.9312L144.636 53.9312L145.364 52.0688L99.3644 34.0688L98.6356 35.9312ZM144.636 52.0688L98.6356 70.0688L99.3644 71.9312L145.364 53.9312L144.636 52.0688ZM98.6356 71.9312L144.636 89.9312L145.364 88.0688L99.3644 70.0688L98.6356 71.9312ZM144.636 88.0688L98.6356 106.069L99.3644 107.931L145.364 89.9312L144.636 88.0688ZM98.6356 107.931L144.636 125.931L145.364 124.069L99.3644 106.069L98.6356 107.931ZM144.636 124.069L98.6356 142.069L99.3644 143.931L145.364 125.931L144.636 124.069ZM98.6356 143.931L144.636 161.931L145.364 160.069L99.3644 142.069L98.6356 143.931ZM144.636 160.069L98.6356 178.069L99.3644 179.931L145.364 161.931L144.636 160.069ZM98.6356 179.931L144.636 197.931L145.364 196.069L99.3644 178.069L98.6356 179.931ZM144.636 196.069L98.7889 214.009L99.5177 215.871L145.364 197.931L144.636 196.069Z"
              fill="white"
              onPress={() => props.onPress("white")}
            />
          </G>
          <G id="red" onPress={() => props.onPress("red")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 35H99L145 53L99 71L145 89L99 107L145 125L99 143L145 161L99 179L145 197L99 215H325"
              fill={props.colors["red"]}
              fillOpacity={1}
              onPress={() => props.onPress("red")}
            />
            <Path
              d="M325 35H99L145 53L99 71L145 89L99 107L145 125L99 143L145 161L99 179L145 197L99 215H325"
              stroke="white"
              strokeWidth={2}
              onPress={() => props.onPress("red")}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
