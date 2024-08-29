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
      <G id="flag / asia / bangladesh / b">
        <G id="bangladesh b">
          <G id="green" onPress={() => props.onPress("green")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 214.94H25V35H325V214.94ZM220 125C220 91.863 193.137 65 160 65C126.863 65 100 91.863 100 125C100 158.137 126.863 185 160 185C193.137 185 220 158.137 220 125Z"
              fill="#136148"
              fillOpacity={1}
              onPress={() => props.onPress("green")}
            />
            <Path
              d="M25 214.94H24V215.94H25V214.94ZM325 214.94V215.94H326V214.94H325ZM25 35V34H24V35H25ZM325 35H326V34H325V35ZM25 215.94H325V213.94H25V215.94ZM24 35V214.94H26V35H24ZM325 34H25V36H325V34ZM326 214.94V35H324V214.94H326ZM160 66C192.585 66 219 92.4153 219 125H221C221 91.3107 193.689 64 160 64V66ZM101 125C101 92.4153 127.415 66 160 66V64C126.311 64 99 91.3107 99 125H101ZM160 184C127.415 184 101 157.585 101 125H99C99 158.689 126.311 186 160 186V184ZM219 125C219 157.585 192.585 184 160 184V186C193.689 186 221 158.689 221 125H219Z"
              fill="white"
              onPress={() => props.onPress("green")}
            />
          </G>
          <G id="red" onPress={() => props.onPress("red")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M160 65C193.137 65 220 91.863 220 125C220 158.137 193.137 185 160 185C126.863 185 100 158.137 100 125C100 91.863 126.863 65 160 65Z"
              fill="#DA2F41"
              fillOpacity={1}
              onPress={() => props.onPress("red")}
            />
            <Path
              d="M160 65C193.137 65 220 91.863 220 125C220 158.137 193.137 185 160 185C126.863 185 100 158.137 100 125C100 91.863 126.863 65 160 65"
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
