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
      <G id="flag / africa / djibouti / b">
        <G id="djibouti b">
          <G id="blue" onPress={() => props.onPress("blue")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M325 125H198.205L25 25H325V125Z"
              fill={props.colors["blue"]}
              fillOpacity={1}
              onPress={() => props.onPress("blue")}
            />
            <Path
              d="M198.205 125L197.705 125.866L197.937 126H198.205V125ZM325 125V126H326V125H325ZM25 25V24H21.268L24.5 25.866L25 25ZM325 25H326V24H325V25ZM198.205 126H325V124H198.205V126ZM198.705 124.134L25.5 24.134L24.5 25.866L197.705 125.866L198.705 124.134ZM325 24H25V26H325V24ZM326 125V25H324V125H326Z"
              fill="white"
              onPress={() => props.onPress("blue")}
            />
          </G>
          <G id="green" onPress={() => props.onPress("green")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M198.205 125H325V225H25L198.205 125Z"
              fill={props.colors["green"]}
              fillOpacity={1}
              onPress={() => props.onPress("green")}
            />
            <Path
              d="M325 125H326V124H325V125ZM198.205 125V124H197.937L197.705 124.134L198.205 125ZM325 225V226H326V225H325ZM25 225L24.5 224.134L21.268 226H25V225ZM325 124H198.205V126H325V124ZM326 225V125H324V225H326ZM25 226H325V224H25V226ZM25.5 225.866L198.705 125.866L197.705 124.134L24.5 224.134L25.5 225.866Z"
              fill="white"
              onPress={() => props.onPress("green")}
            />
          </G>
          <G id="white" onPress={() => props.onPress("white")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M198.205 125L25 225V25L198.205 125ZM97.492 119.098L91.287 100L85.081 119.098H65L81.246 130.901L75.041 150L91.287 138.196L107.532 150L101.327 130.901L117.573 119.098H97.492Z"
              fill={props.colors["white"]}
              fillOpacity={1}
              onPress={() => props.onPress("white")}
            />
            <Path
              d="M25 225H24V226.732L25.5 225.866L25 225ZM198.205 125L198.705 125.866L200.205 125L198.705 124.134L198.205 125ZM25 25L25.5 24.134L24 23.2679V25H25ZM91.287 100L92.2381 99.691L91.2871 96.764L90.336 99.6909L91.287 100ZM97.492 119.098L96.5409 119.407L96.7654 120.098H97.492V119.098ZM85.081 119.098V120.098H85.8075L86.032 119.407L85.081 119.098ZM65 119.098V118.098H61.9222L64.4122 119.907L65 119.098ZM81.246 130.901L82.1971 131.21L82.4216 130.519L81.8338 130.092L81.246 130.901ZM75.041 150L74.0899 149.691L73.139 152.618L75.6288 150.809L75.041 150ZM91.287 138.196L91.8748 137.387L91.287 136.96L90.6992 137.387L91.287 138.196ZM107.532 150L106.944 150.809L109.434 152.618L108.483 149.691L107.532 150ZM101.327 130.901L100.739 130.092L100.151 130.519L100.376 131.21L101.327 130.901ZM117.573 119.098L118.161 119.907L120.651 118.098H117.573V119.098ZM25.5 225.866L198.705 125.866L197.705 124.134L24.5 224.134L25.5 225.866ZM24 25V225H26V25H24ZM198.705 124.134L25.5 24.134L24.5 25.866L197.705 125.866L198.705 124.134ZM90.3359 100.309L96.5409 119.407L98.4431 118.789L92.2381 99.691L90.3359 100.309ZM86.032 119.407L92.2381 100.309L90.336 99.6909L84.13 118.789L86.032 119.407ZM65 120.098H85.081V118.098H65V120.098ZM81.8338 130.092L65.5878 118.289L64.4122 119.907L80.6582 131.71L81.8338 130.092ZM75.9921 150.309L82.1971 131.21L80.2949 130.592L74.0899 149.691L75.9921 150.309ZM90.6992 137.387L74.4532 149.191L75.6288 150.809L91.8748 139.005L90.6992 137.387ZM108.12 149.191L91.8748 137.387L90.6992 139.005L106.944 150.809L108.12 149.191ZM100.376 131.21L106.581 150.309L108.483 149.691L102.278 130.592L100.376 131.21ZM116.985 118.289L100.739 130.092L101.915 131.71L118.161 119.907L116.985 118.289ZM97.492 120.098H117.573V118.098H97.492V120.098Z"
              fill="white"
              onPress={() => props.onPress("white")}
            />
          </G>
          <G id="red" onPress={() => props.onPress("red")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M91.287 100L97.492 119.098H117.573L101.327 130.901L107.532 150L91.287 138.196L75.041 150L81.246 130.901L65 119.098H85.081L91.287 100Z"
              fill={props.colors["red"]}
              fillOpacity={1}
              onPress={() => props.onPress("red")}
            />
            <Path
              d="M91.287 100L97.492 119.098H117.573L101.327 130.901L107.532 150L91.287 138.196L75.041 150L81.246 130.901L65 119.098H85.081L91.287 100"
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
