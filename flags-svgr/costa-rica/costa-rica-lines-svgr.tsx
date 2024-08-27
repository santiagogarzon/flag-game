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
      <G id="flag / north america / costa rica / b">
        <G id="costa rica b">
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 155H325V95H25V155Z"
            fill={props.colors["red"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("red")}
          />
          <G id="white" onPress={() => props.onPress("white")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 185H25V155H325V185ZM325 95H25V65H325V95Z"
              fill={props.colors["white"]}
              fillOpacity={1}
              onPress={() => props.onPress("white")}
            />
            <Path
              d="M25 185H24V186H25V185ZM325 185V186H326V185H325ZM25 155V154H24V155H25ZM325 155H326V154H325V155ZM325 95V96H326V95H325ZM25 95H24V96H25V95ZM25 65V64H24V65H25ZM325 65H326V64H325V65ZM25 186H325V184H25V186ZM24 155V185H26V155H24ZM25 156H325V154H25V156ZM326 185V155H324V185H326ZM325 94H25V96H325V94ZM24 65V95H26V65H24ZM325 64H25V66H325V64ZM326 95V65H324V95H326Z"
              fill="white"
              onPress={() => props.onPress("white")}
            />
          </G>
          <G id="blue" onPress={() => props.onPress("blue")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 214.94H25V185H325V214.94ZM325 65H25V35H325V65Z"
              fill={props.colors["blue"]}
              fillOpacity={1}
              onPress={() => props.onPress("blue")}
            />
            <Path
              d="M25 214.94H24V215.94H25V214.94ZM325 214.94V215.94H326V214.94H325ZM25 185V184H24V185H25ZM325 185H326V184H325V185ZM325 65V66H326V65H325ZM25 65H24V66H25V65ZM25 35V34H24V35H25ZM325 35H326V34H325V35ZM25 215.94H325V213.94H25V215.94ZM24 185V214.94H26V185H24ZM25 186H325V184H25V186ZM326 214.94V185H324V214.94H326ZM325 64H25V66H325V64ZM24 35V65H26V35H24ZM325 34H25V36H325V34ZM326 65V35H324V65H326Z"
              fill="white"
              onPress={() => props.onPress("blue")}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
