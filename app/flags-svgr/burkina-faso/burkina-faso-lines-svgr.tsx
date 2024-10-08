import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
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
      {...props}
    >
      <G id="flag / africa / burkina faso / b">
        <G id="burkina faso b">
          <G id="green" onPress={() => props.onPress("green")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M157.475 125L162.891 128.935L155.407 151.967L175 137.732L194.593 151.967L187.109 128.935L192.525 125H325V225H25V125H157.475Z"
              fill={props.colors["green"]}
              fillOpacity={1}
              onPress={() => props.onPress("green")}
            />
            <Path
              d="M157.475 125L158.063 124.191L157.8 124H157.475V125ZM162.891 128.935L163.842 129.244L164.067 128.553L163.479 128.126L162.891 128.935ZM155.407 151.967L154.456 151.658L153.505 154.585L155.995 152.776L155.407 151.967ZM175 137.732L175.588 136.923L175 136.496L174.412 136.923L175 137.732ZM194.593 151.967L194.005 152.776L196.495 154.585L195.544 151.658L194.593 151.967ZM187.109 128.935L186.521 128.126L185.933 128.553L186.158 129.244L187.109 128.935ZM192.525 125V124H192.2L191.937 124.191L192.525 125ZM325 125H326V124H325V125ZM325 225V226H326V225H325ZM25 225H24V226H25V225ZM25 125V124H24V125H25ZM156.887 125.809L162.303 129.744L163.479 128.126L158.063 124.191L156.887 125.809ZM161.94 128.626L154.456 151.658L156.358 152.276L163.842 129.244L161.94 128.626ZM155.995 152.776L175.588 138.541L174.412 136.923L154.819 151.158L155.995 152.776ZM174.412 138.541L194.005 152.776L195.181 151.158L175.588 136.923L174.412 138.541ZM195.544 151.658L188.06 128.626L186.158 129.244L193.642 152.276L195.544 151.658ZM187.697 129.744L193.113 125.809L191.937 124.191L186.521 128.126L187.697 129.744ZM325 124H192.525V126H325V124ZM326 225V125H324V225H326ZM25 226H325V224H25V226ZM24 125V225H26V125H24ZM157.475 124H25V126H157.475V124Z"
              fill="white"
              onPress={() => props.onPress("green")}
            />
          </G>
          <G id="red" onPress={() => props.onPress("red")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M157.475 125H25V25H325V125H192.525L206.702 114.699H182.484L175 91.667L167.625 114.699H143.298L157.475 125Z"
              fill={props.colors["red"]}
              fillOpacity={1}
              onPress={() => props.onPress("red")}
            />
            <Path
              d="M25 125H24V126H25V125ZM157.475 125V126H160.553L158.063 124.191L157.475 125ZM25 25V24H24V25H25ZM325 25H326V24H325V25ZM325 125V126H326V125H325ZM192.525 125L191.937 124.191L189.447 126H192.525V125ZM206.702 114.699L207.29 115.508L209.78 113.699H206.702V114.699ZM182.484 114.699L181.533 115.008L181.757 115.699H182.484V114.699ZM175 91.667L175.951 91.358L174.993 88.4096L174.048 91.362L175 91.667ZM167.625 114.699V115.699H168.355L168.577 115.004L167.625 114.699ZM143.298 114.699V113.699H140.22L142.71 115.508L143.298 114.699ZM25 126H157.475V124H25V126ZM24 25V125H26V25H24ZM325 24H25V26H325V24ZM326 125V25H324V125H326ZM192.525 126H325V124H192.525V126ZM193.113 125.809L207.29 115.508L206.114 113.89L191.937 124.191L193.113 125.809ZM206.702 113.699H182.484V115.699H206.702V113.699ZM183.435 114.39L175.951 91.358L174.049 91.976L181.533 115.008L183.435 114.39ZM174.048 91.362L166.673 114.394L168.577 115.004L175.952 91.972L174.048 91.362ZM167.625 113.699H143.298V115.699H167.625V113.699ZM142.71 115.508L156.887 125.809L158.063 124.191L143.886 113.89L142.71 115.508Z"
              fill="white"
              onPress={() => props.onPress("red")}
            />
          </G>
          <G id="yellow" onPress={() => props.onPress("yellow")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M143.298 114.699L162.891 128.935L155.407 151.967L175 137.732L194.593 151.967L187.109 128.935L206.702 114.699H182.484L175 91.667L167.625 114.699H143.298Z"
              fill={props.colors["yellow"]}
              fillOpacity={1}
              onPress={() => props.onPress("yellow")}
            />
            <Path
              d="M143.298 114.699L162.891 128.935L155.407 151.967L175 137.732L194.593 151.967L187.109 128.935L206.702 114.699H182.484L175 91.667L167.625 114.699H143.298"
              stroke="white"
              strokeWidth={2}
              onPress={() => props.onPress("yellow")}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
