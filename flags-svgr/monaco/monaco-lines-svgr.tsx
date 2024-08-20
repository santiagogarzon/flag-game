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
      <G id="flag / europe / monaco / b">
        <G id="monaco b">
          <G id="blue">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 5V125H25V5H325Z"
              fill="white"
              fillOpacity={0.5}
            />
            <Path
              d="M325 125V126H326V125H325ZM325 5H326V4H325V5ZM25 125H24V126H25V125ZM25 5V4H24V5H25ZM326 125V5H324V125H326ZM325 124H25V126H325V124ZM24 5V125H26V5H24ZM325 4H25V6H325V4Z"
              fill="white"
            />
          </G>
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 245H325V125H25V245Z"
            fill="white"
            fillOpacity={0.5}
            stroke="white"
            strokeWidth={2}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
