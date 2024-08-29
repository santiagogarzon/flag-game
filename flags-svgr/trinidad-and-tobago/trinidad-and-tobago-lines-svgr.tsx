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
      <G id="flag / north america / trinidad and tobago / b">
        <G id="trinidad and tobago b">
          <G id="red" onPress={() => props.onPress("red")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M116.753 35H324V214.136L116.753 35ZM25 35H24V215H233.247L25 35Z"
              fill="#BC242C"
              fillOpacity={1}
              onPress={() => props.onPress("red")}
            />
            <Path
              d="M324 35H325V34H324V35ZM116.753 35V34H114.067L116.099 35.7566L116.753 35ZM324 214.136L323.346 214.892L325 216.322V214.136H324ZM24 35V34H23V35H24ZM25 35L25.6539 34.2434L25.3723 34H25V35ZM24 215H23V216H24V215ZM233.247 215V216H235.933L233.901 214.243L233.247 215ZM324 34H116.753V36H324V34ZM325 214.136V35H323V214.136H325ZM116.099 35.7566L323.346 214.892L324.654 213.379L117.407 34.2434L116.099 35.7566ZM24 36H25V34H24V36ZM25 215V35H23V215H25ZM233.247 214H24V216H233.247V214ZM24.3461 35.7566L232.593 215.757L233.901 214.243L25.6539 34.2434L24.3461 35.7566Z"
              fill="white"
              onPress={() => props.onPress("red")}
            />
          </G>
          <G id="white" onPress={() => props.onPress("white")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M233.247 215L25 35H40.292L248.539 215H233.247ZM309.708 215L101.46 35H116.753L325 215H309.708Z"
              fill="#FFFFFE"
              fillOpacity={1}
              onPress={() => props.onPress("white")}
            />
            <Path
              d="M25 35V34H22.3139L24.3461 35.7566L25 35ZM233.247 215L232.593 215.757L232.875 216H233.247V215ZM40.292 35L40.9459 34.2434L40.6643 34H40.292V35ZM248.539 215V216H251.225L249.193 214.243L248.539 215ZM309.708 215L309.054 215.757L309.336 216H309.708V215ZM101.46 35V34H98.7738L100.806 35.7566L101.46 35ZM116.753 35L117.407 34.2434L117.125 34H116.753V35ZM325 215V216H327.686L325.654 214.243L325 215ZM24.3461 35.7566L232.593 215.757L233.901 214.243L25.6539 34.2434L24.3461 35.7566ZM40.292 34H25V36H40.292V34ZM39.6381 35.7566L247.885 215.757L249.193 214.243L40.9459 34.2434L39.6381 35.7566ZM233.247 216H248.539V214H233.247V216ZM310.362 214.243L102.114 34.2434L100.806 35.7566L309.054 215.757L310.362 214.243ZM116.753 34H101.46V36H116.753V34ZM325.654 214.243L117.407 34.2434L116.099 35.7566L324.346 215.757L325.654 214.243ZM309.708 216H325V214H309.708V216Z"
              fill="white"
              onPress={() => props.onPress("white")}
            />
          </G>
          <G id="black" onPress={() => props.onPress("black")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40.292 35L248.539 215H309.708L101.46 35H40.292Z"
              fill="#0A0B09"
              fillOpacity={1}
              onPress={() => props.onPress("black")}
            />
            <Path
              d="M40.292 35L248.539 215H309.708L101.46 35H40.292"
              stroke="white"
              strokeWidth={2}
              onPress={() => props.onPress("black")}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
