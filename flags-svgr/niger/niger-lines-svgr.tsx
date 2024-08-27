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
      <G id="flag / africa / niger / b">
        <G id="niger b">
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M50 233H300V161H50V233Z"
            fill={props.colors["green"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("green")}
          />
          <G id="white" onPress={() => props.onPress("white")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M300 161H50V90H300V161ZM206 125.499C206 108.655 192.345 95 175.5 95C158.655 95 145 108.655 145 125.499C145 142.344 158.655 155.999 175.5 155.999C192.345 155.999 206 142.344 206 125.499Z"
              fill={props.colors["white"]}
              fillOpacity={1}
              onPress={() => props.onPress("white")}
            />
            <Path
              d="M50 161H49V162H50V161ZM300 161V162H301V161H300ZM50 90V89H49V90H50ZM300 90H301V89H300V90ZM50 162H300V160H50V162ZM49 90V161H51V90H49ZM300 89H50V91H300V89ZM301 161V90H299V161H301ZM175.5 96C191.792 96 205 109.207 205 125.499H207C207 108.102 192.897 94 175.5 94V96ZM146 125.499C146 109.207 159.208 96 175.5 96V94C158.103 94 144 108.102 144 125.499H146ZM175.5 154.999C159.208 154.999 146 141.791 146 125.499H144C144 142.896 158.103 156.999 175.5 156.999V154.999ZM205 125.499C205 141.791 191.792 154.999 175.5 154.999V156.999C192.897 156.999 207 142.896 207 125.499H205Z"
              fill="white"
              onPress={() => props.onPress("white")}
            />
          </G>
          <G id="orange" onPress={() => props.onPress("orange")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M300 90H50V18H300V90ZM206 125.499C206 108.655 192.345 95 175.5 95C158.655 95 145 108.655 145 125.499C145 142.344 158.655 155.999 175.5 155.999C192.345 155.999 206 142.344 206 125.499Z"
              fill={props.colors["orange"]}
              fillOpacity={1}
              onPress={() => props.onPress("orange")}
            />
            <Path
              d="M50 90H49V91H50V90ZM300 90V91H301V90H300ZM50 18V17H49V18H50ZM300 18H301V17H300V18ZM50 91H300V89H50V91ZM49 18V90H51V18H49ZM300 17H50V19H300V17ZM301 90V18H299V90H301ZM175.5 96C191.792 96 205 109.207 205 125.499H207C207 108.102 192.897 94 175.5 94V96ZM146 125.499C146 109.207 159.208 96 175.5 96V94C158.103 94 144 108.102 144 125.499H146ZM175.5 154.999C159.208 154.999 146 141.791 146 125.499H144C144 142.896 158.103 156.999 175.5 156.999V154.999ZM205 125.499C205 141.791 191.792 154.999 175.5 154.999V156.999C192.897 156.999 207 142.896 207 125.499H205Z"
              fill="white"
              onPress={() => props.onPress("orange")}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
