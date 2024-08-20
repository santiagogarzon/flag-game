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
      <G id="flag / north america / bahamas / b">
        <G id="bahamas b">
          <G id="sky" onPress={() => props.onPress("sky")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.1 199.94H325V150H108.333L25.1 199.94ZM108.333 100L25 50H325V100H108.333Z"
              fill={props.colors["sky"]}
              fillOpacity={1}
              onPress={() => props.onPress("sky")}
            />
            <Path
              d="M325 199.94V200.94H326V199.94H325ZM25.1 199.94L24.5855 199.083L21.4897 200.94H25.1V199.94ZM325 150H326V149H325V150ZM108.333 150V149H108.056L107.819 149.143L108.333 150ZM108.333 100L107.819 100.857L108.056 101H108.333V100ZM25 50V49H21.3897L24.4855 50.8575L25 50ZM325 50H326V49H325V50ZM325 100V101H326V100H325ZM325 198.94H25.1V200.94H325V198.94ZM324 150V199.94H326V150H324ZM108.333 151H325V149H108.333V151ZM25.6145 200.798L108.848 150.857L107.819 149.143L24.5855 199.083L25.6145 200.798ZM108.848 99.1425L25.5145 49.1425L24.4855 50.8575L107.819 100.857L108.848 99.1425ZM25 51H325V49H25V51ZM324 50V100H326V50H324ZM325 99H108.333V101H325V99Z"
              fill="white"
              onPress={() => props.onPress("sky")}
            />
          </G>
          <G id="yellow" onPress={() => props.onPress("yellow")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M108.333 150L149.809 125L108.333 100H325V150H108.333Z"
              fill={props.colors["yellow"]}
              fillOpacity={1}
              onPress={() => props.onPress("yellow")}
            />
            <Path
              d="M108.333 150L107.817 149.144L104.737 151H108.333V150ZM149.809 125L150.325 125.856L151.746 125L150.325 124.144L149.809 125ZM108.333 100V99H104.737L107.817 100.856L108.333 100ZM325 100H326V99H325V100ZM325 150V151H326V150H325ZM108.85 150.856L150.325 125.856L149.292 124.144L107.817 149.144L108.85 150.856ZM150.325 124.144L108.85 99.1436L107.817 100.856L149.292 125.856L150.325 124.144ZM325 99H108.333V101H325V99ZM326 150V100H324V150H326ZM108.333 151H325V149H108.333V151Z"
              fill="white"
              onPress={() => props.onPress("yellow")}
            />
          </G>
          <G id="black">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 50V200L150 125L25 50Z"
              fill="white"
              fillOpacity={0.5}
            />
            <Path d="M25 50V200L150 125L25 50" stroke="white" strokeWidth={2} />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
