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
      <G id="flag / africa / comoros / a">
        <G id="comoros a">
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 80H100L25 35H325V80Z"
            fill={props.colors["yellow"]}
            onPress={() => props.onPress("yellow")}
          />
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 80L175 125H325V80H100Z"
            fill="#FFFFFE"
          />
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 170H325V125H175L100 170Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="blue"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 170L25 215H325V170H100Z"
            fill={props.colors["blue"]}
            onPress={() => props.onPress("blue")}
          />
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 215L175 125L25 35V215ZM85 85.5035C82.1055 84.8468 79.0933 84.5 76 84.5C53.632 84.5 35.5 102.632 35.5 125C35.5 147.368 53.632 165.5 76 165.5C79.0933 165.5 82.1055 165.153 85 164.496C66.9638 160.404 53.5 144.275 53.5 125C53.5 105.725 66.9638 89.5959 85 85.5035ZM77.867 93.695H83.317L85 88.512L86.683 93.695H92.133L87.725 96.898L89.408 102.08L85 98.877L80.592 102.08L82.275 96.898L77.867 93.695ZM85 107.838L83.317 113.02H77.867L82.275 116.222L80.592 121.405L85 118.202L89.408 121.405L87.725 116.222L92.133 113.02H86.683L85 107.838ZM83.317 132.345L85 127.162L86.683 132.345H92.133L87.725 135.547L89.408 140.73L85 137.527L80.592 140.73L82.275 135.547L77.867 132.345H83.317ZM85 146.488L83.317 151.67H77.867L82.275 154.872L80.592 160.055L85 156.853L89.408 160.055L87.725 154.872L92.133 151.67H86.683L85 146.488Z"
            fill={props.colors["green"]}
            onPress={() => props.onPress("green")}
          />
          <Path
            id="white_2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M85 85.5035C82.1055 84.8468 79.0933 84.5 76 84.5C53.632 84.5 35.5 102.632 35.5 125C35.5 147.368 53.632 165.5 76 165.5C79.0933 165.5 82.1055 165.153 85 164.496C66.9638 160.404 53.5 144.275 53.5 125C53.5 105.725 66.9638 89.5959 85 85.5035ZM77.867 93.695H83.317L85 88.512L86.683 93.695H92.133L87.725 96.898L89.408 102.08L85 98.877L80.592 102.08L82.275 96.898L77.867 93.695ZM85 107.838L83.317 113.02H77.867L82.275 116.222L80.592 121.405L85 118.202L89.408 121.405L87.725 116.222L92.133 113.02H86.683L85 107.838ZM83.317 132.345L85 127.162L86.683 132.345H92.133L87.725 135.547L89.408 140.73L85 137.527L80.592 140.73L82.275 135.547L77.867 132.345H83.317ZM85 146.488L83.317 151.67H77.867L82.275 154.872L80.592 160.055L85 156.853L89.408 160.055L87.725 154.872L92.133 151.67H86.683L85 146.488Z"
            fill="#FFFFFE"
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
