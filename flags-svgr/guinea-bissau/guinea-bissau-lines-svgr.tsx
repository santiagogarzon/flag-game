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
      <G id="flag / africa / guinea-bissau / b">
        <G id="guinea bissau b">
          <G id="red" onPress={() => props.onPress("red")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M125 50V199.94H25V50H125ZM65.918 127.951L51.224 117.275H69.387L75 100L80.613 117.275H98.776L84.082 127.951L89.695 145.226L75 134.549L60.305 145.226L65.918 127.951Z"
              fill={props.colors["red"]}
              fillOpacity={1}
              onPress={() => props.onPress("red")}
            />
            <Path
              d="M125 199.94V200.94H126V199.94H125ZM125 50H126V49H125V50ZM25 199.94H24V200.94H25V199.94ZM25 50V49H24V50H25ZM51.224 117.275V116.275H48.1464L50.6362 118.084L51.224 117.275ZM65.918 127.951L66.8691 128.26L67.0936 127.569L66.5058 127.142L65.918 127.951ZM69.387 117.275V118.275H70.1135L70.3381 117.584L69.387 117.275ZM75 100L75.9511 99.691L75 96.7639L74.0489 99.691L75 100ZM80.613 117.275L79.6619 117.584L79.8865 118.275H80.613V117.275ZM98.776 117.275L99.3638 118.084L101.854 116.275H98.776V117.275ZM84.082 127.951L83.4942 127.142L82.9064 127.569L83.1309 128.26L84.082 127.951ZM89.695 145.226L89.1072 146.035L91.5971 147.844L90.6461 144.917L89.695 145.226ZM75 134.549L75.5878 133.74L75 133.313L74.4122 133.74L75 134.549ZM60.305 145.226L59.3539 144.917L58.4029 147.844L60.8928 146.035L60.305 145.226ZM126 199.94V50H124V199.94H126ZM25 200.94H125V198.94H25V200.94ZM24 50V199.94H26V50H24ZM125 49H25V51H125V49ZM50.6362 118.084L65.3302 128.76L66.5058 127.142L51.8118 116.466L50.6362 118.084ZM69.387 116.275H51.224V118.275H69.387V116.275ZM74.0489 99.691L68.4359 116.966L70.3381 117.584L75.9511 100.309L74.0489 99.691ZM81.5641 116.966L75.9511 99.691L74.0489 100.309L79.6619 117.584L81.5641 116.966ZM98.776 116.275H80.613V118.275H98.776V116.275ZM84.6698 128.76L99.3638 118.084L98.1882 116.466L83.4942 127.142L84.6698 128.76ZM90.6461 144.917L85.0331 127.642L83.1309 128.26L88.7439 145.535L90.6461 144.917ZM74.4122 135.358L89.1072 146.035L90.2828 144.417L75.5878 133.74L74.4122 135.358ZM60.8928 146.035L75.5878 135.358L74.4122 133.74L59.7172 144.417L60.8928 146.035ZM64.9669 127.642L59.3539 144.917L61.2561 145.535L66.8691 128.26L64.9669 127.642Z"
              fill="white"
              onPress={() => props.onPress("red")}
            />
          </G>
          <Path
            id="yellow"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M125 125H325V50H125V125Z"
            fill={props.colors["yellow"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("yellow")}
          />
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M125 199.94H325V125H125V199.94Z"
            fill={props.colors["green"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("green")}
          />
          <G id="black" onPress={() => props.onPress("black")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M51.2236 117.275L65.9176 127.951L60.3046 145.226L74.9996 134.549L89.6946 145.226L84.0816 127.951L98.7756 117.275H80.6126L74.9996 100L69.3866 117.275H51.2236Z"
              fill={props.colors["black"]}
              fillOpacity={1}
              onPress={() => props.onPress("black")}
            />
            <Path
              d="M51.2236 117.275L65.9176 127.951L60.3046 145.226L74.9996 134.549L89.6946 145.226L84.0816 127.951L98.7756 117.275H80.6126L74.9996 100L69.3866 117.275H51.2236"
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
