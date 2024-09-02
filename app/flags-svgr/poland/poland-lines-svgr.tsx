import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
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
      {...props}
    >
      <G id="flag / europe / poland / b">
        <G id="poland b">
          <G id="blue">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 31V125H25V31H325Z"
              fill="#FFFFFE"
              fillOpacity={1}
            />
            <Path
              d="M325 125V126H326V125H325ZM325 31H326V30H325V31ZM25 125H24V126H25V125ZM25 31V30H24V31H25ZM326 125V31H324V125H326ZM325 124H25V126H325V124ZM24 31V125H26V31H24ZM325 30H25V32H325V30Z"
              fill="white"
            />
          </G>
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 219H325V125H25V219Z"
            fill="#C9233D"
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
