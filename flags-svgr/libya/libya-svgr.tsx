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
      <G id="flag / africa / libya / a">
        <G id="libya a">
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 200H325V162.5H25V200Z"
            fill={props.colors["green"]}
            onPress={() => props.onPress("green")}
          />
          <Path
            id="#000000"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 162.5H325V87.5H25V162.5ZM184.715 124.812L194.091 127.858L194.091 137.718L199.887 129.741L209.264 132.788L203.469 124.812L209.264 116.835L199.887 119.882L194.091 111.905V121.765L184.715 124.812ZM165.537 115.538C170.763 108.214 180.936 106.514 188.26 111.74C180.938 104.42 169.069 104.42 161.747 111.74C154.424 119.061 154.422 130.933 161.743 138.257C169.065 145.58 180.936 145.581 188.26 138.26C182.598 142.3 174.996 142.3 169.335 138.26C162.012 133.034 160.311 122.861 165.537 115.538Z"
            fill="#0A0B09"
          />
          <Path
            id="red"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M25 87.5H325V50H25V87.5Z"
            fill={props.colors["red"]}
            onPress={() => props.onPress("red")}
          />
          <Path
            id="#FFFFFF"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M184.715 124.812L194.092 127.858L194.092 137.718L199.887 129.741L209.265 132.788L203.469 124.812L209.264 116.835L199.887 119.882L194.092 111.905L194.092 121.765L184.715 124.812ZM188.26 111.74C180.936 106.514 170.763 108.214 165.537 115.538C160.311 122.861 162.012 133.034 169.335 138.26C174.996 142.3 182.598 142.3 188.26 138.26C180.936 145.581 169.065 145.58 161.743 138.257C154.422 130.933 154.424 119.061 161.747 111.74C169.069 104.42 180.938 104.42 188.26 111.74Z"
            fill="#FFFFFE"
          />
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
