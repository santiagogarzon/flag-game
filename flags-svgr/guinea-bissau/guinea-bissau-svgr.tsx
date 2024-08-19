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
      <G id="flag / africa / guinea-bissau / a">
        <G id="guinea bissau a">
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M125 50V199.94H25V50H125ZM65.918 127.951L51.224 117.275H69.387L75 100L80.613 117.275H98.776L84.082 127.951L89.695 145.226L75 134.549L60.305 145.226L65.918 127.951Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M125 125H325V50H125V125Z"
            fill={props.colors["yellow"]}
            onPress={() => props.onPress("yellow")}
          />
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M125 199.94H325V125H125V199.94Z"
            fill={props.colors["green"]}
            onPress={() => props.onPress("green")}
          />
          <Path
            id="#000000"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M51.2236 117.275L65.9176 127.951L60.3046 145.226L74.9996 134.549L89.6946 145.226L84.0816 127.951L98.7756 117.275H80.6126L74.9996 100L69.3866 117.275H51.2236Z"
            fill="#0A0B09"
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
