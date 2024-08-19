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
      <G id="flag / africa / sao tome and principe / a">
        <G id="sao tome and principe a">
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25.06 199.94H325V157.143H67.857L25.06 199.94ZM67.857 92.857H325V50H25L67.857 92.857Z"
            fill={props.colors["green"]}
            onPress={() => props.onPress("green")}
          />
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M67.8574 157.143L100 125L67.8574 92.8569H325V157.143H67.8574ZM154.62 118.378L167.216 127.529L162.405 142.336L175 133.185L187.595 142.336L182.784 127.529L195.38 118.378H179.811L175 103.571L170.189 118.378H154.62ZM242.216 127.529L229.62 118.378H245.189L250 103.571L254.811 118.378H270.38L257.784 127.529L262.595 142.336L250 133.185L237.405 142.336L242.216 127.529Z"
            fill={props.colors["yellow"]}
            onPress={() => props.onPress("yellow")}
          />
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 50V200L100 125L25 50Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="#000000"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M167.216 127.529L154.62 118.378H170.189L175 103.571L179.811 118.378H195.38L182.784 127.529L187.595 142.336L175 133.185L162.405 142.336L167.216 127.529ZM242.216 127.529L229.62 118.378H245.189L250 103.571L254.811 118.378H270.38L257.784 127.529L262.595 142.336L250 133.185L237.405 142.336L242.216 127.529Z"
            fill="#0A0B09"
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
