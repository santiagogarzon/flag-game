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
      <G id="flag / africa / sudan / b">
        <G id="sudan b">
          <G id="red" onPress={() => props.onPress("red")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 100H91.6667L25 50H325V100Z"
              fill={props.colors["red"]}
              fillOpacity={1}
              onPress={() => props.onPress("red")}
            />
            <Path
              d="M91.6667 100L91.0667 100.8L91.3333 101H91.6667V100ZM325 100V101H326V100H325ZM25 50V49H22L24.4 50.8L25 50ZM325 50H326V49H325V50ZM91.6667 101H325V99H91.6667V101ZM24.4 50.8L91.0667 100.8L92.2667 99.2L25.6 49.2L24.4 50.8ZM325 49H25V51H325V49ZM326 100V50H324V100H326Z"
              fill="white"
              onPress={() => props.onPress("red")}
            />
          </G>
          <G id="white">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M91.667 150H324.667V100H91.667L125 125L91.667 150Z"
              fill="white"
              fillOpacity={0.5}
            />
            <Path
              d="M91.667 150L91.067 149.2L88.667 151H91.667V150ZM324.667 150V151H325.667V150H324.667ZM324.667 100H325.667V99H324.667V100ZM91.667 100V99H88.667L91.067 100.8L91.667 100ZM125 125L125.6 125.8L126.667 125L125.6 124.2L125 125ZM91.667 151H324.667V149H91.667V151ZM325.667 150V100H323.667V150H325.667ZM324.667 99H91.667V101H324.667V99ZM91.067 100.8L124.4 125.8L125.6 124.2L92.267 99.2L91.067 100.8ZM124.4 124.2L91.067 149.2L92.267 150.8L125.6 125.8L124.4 124.2Z"
              fill="white"
            />
          </G>
          <G id="black">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 200H325V150H91.6667L25 200Z"
              fill="white"
              fillOpacity={0.5}
            />
            <Path
              d="M25 200L24.4 199.2L22 201H25V200ZM325 200V201H326V200H325ZM325 150H326V149H325V150ZM91.6667 150V149H91.3333L91.0667 149.2L91.6667 150ZM25 201H325V199H25V201ZM326 200V150H324V200H326ZM325 149H91.6667V151H325V149ZM91.0667 149.2L24.4 199.2L25.6 200.8L92.2667 150.8L91.0667 149.2Z"
              fill="white"
            />
          </G>
          <G id="green" onPress={() => props.onPress("green")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 50L125 125L25 200V50Z"
              fill={props.colors["green"]}
              fillOpacity={1}
              onPress={() => props.onPress("green")}
            />
            <Path
              d="M25 50L125 125L25 200V50"
              stroke="white"
              strokeWidth={2}
              onPress={() => props.onPress("green")}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
