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
      <G id="flag / europe / latvia / b">
        <G id="latvia b">
          <G
            id="Combined Shape"
            onPress={() => props.onPress("Combined Shape")}
          >
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 110H25V50H325V110ZM325 200H25V140H325V200Z"
              fill={props.colors["Combined Shape"]}
              fillOpacity={1}
              onPress={() => props.onPress("Combined Shape")}
            />
            <Path
              d="M25 110H24V111H25V110ZM325 110V111H326V110H325ZM25 50V49H24V50H25ZM325 50H326V49H325V50ZM25 200H24V201H25V200ZM325 200V201H326V200H325ZM25 140V139H24V140H25ZM325 140H326V139H325V140ZM25 111H325V109H25V111ZM24 50V110H26V50H24ZM325 49H25V51H325V49ZM326 110V50H324V110H326ZM25 201H325V199H25V201ZM24 140V200H26V140H24ZM325 139H25V141H325V139ZM326 200V140H324V200H326Z"
              fill="white"
              onPress={() => props.onPress("Combined Shape")}
            />
          </G>
          <Path
            id="Fill 4 Copy"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 140H325V110H25V140Z"
            fill={props.colors["Fill 4 Copy"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("Fill 4 Copy")}
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
