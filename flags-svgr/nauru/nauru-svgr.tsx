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
      <G id="flag / oceania / nauru / a">
        <G id="nauru a">
          <Path
            id="navy"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 199.94H325V131.25H25V199.94ZM25 118.75H325V50H25V118.75ZM96.765 172.324L100 185.25L103.235 172.324L112.5 181.9L108.839 169.089L121.65 172.75L112.074 163.485L125 160.25L112.074 157.015L121.65 147.75L108.839 151.411L112.5 138.6L103.235 148.176L100 135.25L96.765 148.176L87.5 138.6L91.161 151.411L78.349 147.75L87.926 157.015L75 160.25L87.926 163.485L78.349 172.75L91.161 169.089L87.5 181.9L96.765 172.324Z"
            fill={props.colors["navy"]}
            onPress={() => props.onPress("navy")}
          />
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 131.25H325V118.75H25V131.25Z"
            fill={props.colors["yellow"]}
            onPress={() => props.onPress("yellow")}
          />
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 185.25L96.765 172.324L87.5 181.9L91.161 169.089L78.349 172.75L87.926 163.485L75 160.25L87.926 157.015L78.349 147.75L91.161 151.411L87.5 138.6L96.765 148.176L100 135.25L103.235 148.176L112.5 138.6L108.839 151.411L121.65 147.75L112.074 157.015L125 160.25L112.074 163.485L121.65 172.75L108.839 169.089L112.5 181.9L103.235 172.324L100 185.25Z"
            fill="#FFFFFE"
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
