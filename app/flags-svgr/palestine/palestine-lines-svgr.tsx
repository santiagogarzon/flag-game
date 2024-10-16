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
      <G id="flag / asia / palestine / b">
        <G id="palestine b">
          <G id="black" onPress={() => props.onPress("black")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 100H91.6667L25 50H325V100Z"
              fill={props.colors["black"]}
              fillOpacity={1}
              onPress={() => props.onPress("black")}
            />
            <Path
              d="M91.6667 100L91.0667 100.8L91.3333 101H91.6667V100ZM325 100V101H326V100H325ZM25 50V49H22L24.4 50.8L25 50ZM325 50H326V49H325V50ZM91.6667 101H325V99H91.6667V101ZM92.2667 99.2L25.6 49.2L24.4 50.8L91.0667 100.8L92.2667 99.2ZM325 49H25V51H325V49ZM326 100V50H324V100H326Z"
              fill="white"
              onPress={() => props.onPress("black")}
            />
          </G>
          <G id="green" onPress={() => props.onPress("green")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M91.6667 150H325V200H25L91.6667 150Z"
              fill={props.colors["green"]}
              fillOpacity={1}
              onPress={() => props.onPress("green")}
            />
            <Path
              d="M325 150H326V149H325V150ZM91.6667 150V149H91.3333L91.0667 149.2L91.6667 150ZM325 200V201H326V200H325ZM25 200L24.4 199.2L22 201H25V200ZM325 149H91.6667V151H325V149ZM326 200V150H324V200H326ZM25 201H325V199H25V201ZM25.6 200.8L92.2667 150.8L91.0667 149.2L24.4 199.2L25.6 200.8Z"
              fill="white"
              onPress={() => props.onPress("green")}
            />
          </G>
          <G id="white" onPress={() => props.onPress("white")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M91.7158 150L125.049 125L91.7158 100H324.666V150H91.7158Z"
              fill={props.colors["white"]}
              fillOpacity={1}
              onPress={() => props.onPress("white")}
            />
            <Path
              d="M91.7158 150L91.1158 149.2L88.7158 151H91.7158V150ZM125.049 125L125.649 125.8L126.716 125L125.649 124.2L125.049 125ZM91.7158 100V99H88.7158L91.1158 100.8L91.7158 100ZM324.666 100H325.666V99H324.666V100ZM324.666 150V151H325.666V150H324.666ZM92.3158 150.8L125.649 125.8L124.449 124.2L91.1158 149.2L92.3158 150.8ZM125.649 124.2L92.3158 99.2L91.1158 100.8L124.449 125.8L125.649 124.2ZM324.666 99H91.7158V101H324.666V99ZM325.666 150V100H323.666V150H325.666ZM91.7158 151H324.666V149H91.7158V151Z"
              fill="white"
              onPress={() => props.onPress("white")}
            />
          </G>
          <G id="red" onPress={() => props.onPress("red")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 50V200L125 125L25 50Z"
              fill={props.colors["red"]}
              fillOpacity={1}
              onPress={() => props.onPress("red")}
            />
            <Path
              d="M25 50V200L125 125L25 50"
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
