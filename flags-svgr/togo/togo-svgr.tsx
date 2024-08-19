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
      <G id="flag / africa / togo / a">
        <G id="togo a">
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 217.94H325V180.9H25V217.94ZM136.248 143.8H325V106.7H136.248V143.8ZM325 69.6H136.248V32.5H325V69.6Z"
            fill={props.colors["green"]}
            onPress={() => props.onPress("green")}
          />
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 106.7H136.248V69.6001H325V106.7ZM325 180.9H25V143.8H325V180.9Z"
            fill={props.colors["yellow"]}
            onPress={() => props.onPress("yellow")}
          />
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M136.248 32.5V143.8H25V32.5H136.248ZM67.826 92.31L47.12 77.259H72.715L80.624 52.905L88.533 77.259H114.129L93.422 92.31L101.331 116.664L80.624 101.613L59.917 116.664L67.826 92.31Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M47.1201 77.2588L67.8261 92.3098L59.9171 116.664L80.6241 101.613L101.331 116.664L93.4221 92.3098L114.129 77.2588H88.5331L80.6241 52.9048L72.7151 77.2588H47.1201Z"
            fill="#FFFFFE"
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
