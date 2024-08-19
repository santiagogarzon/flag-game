import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SvgComponent = () => (
  <Svg
    width={350}
    height={250}
    viewBox="0 0 350 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G id="flag / asia / laos / b">
      <G id="laos b">
        <G id="red">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 225H25V175H325V225ZM325 75H25V25H325V75Z"
            fill="white"
            fillOpacity={0.5}
          />
          <Path
            d="M25 225H24V226H25V225ZM325 225V226H326V225H325ZM25 175V174H24V175H25ZM325 175H326V174H325V175ZM325 75V76H326V75H325ZM25 75H24V76H25V75ZM25 25V24H24V25H25ZM325 25H326V24H325V25ZM25 226H325V224H25V226ZM24 175V225H26V175H24ZM25 176H325V174H25V176ZM326 225V175H324V225H326ZM325 74H25V76H325V74ZM24 25V75H26V25H24ZM325 24H25V26H325V24ZM326 75V25H324V75H326Z"
            fill="white"
          />
        </G>
        <G id="blue">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 75V175H25V75H325ZM215 125C215 102.909 197.091 85 175 85C152.909 85 135 102.909 135 125C135 147.091 152.909 165 175 165C197.091 165 215 147.091 215 125Z"
            fill="white"
            fillOpacity={0.5}
          />
          <Path
            d="M325 175V176H326V175H325ZM325 75H326V74H325V75ZM25 175H24V176H25V175ZM25 75V74H24V75H25ZM326 175V75H324V175H326ZM25 176H325V174H25V176ZM24 75V175H26V75H24ZM325 74H25V76H325V74ZM175 86C196.539 86 214 103.461 214 125H216C216 102.357 197.643 84 175 84V86ZM136 125C136 103.461 153.461 86 175 86V84C152.357 84 134 102.357 134 125H136ZM175 164C153.461 164 136 146.539 136 125H134C134 147.643 152.357 166 175 166V164ZM214 125C214 146.539 196.539 164 175 164V166C197.643 166 216 147.643 216 125H214Z"
            fill="white"
          />
        </G>
        <G id="white">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M175 85C197.091 85 215 102.909 215 125C215 147.091 197.091 165 175 165C152.909 165 135 147.091 135 125C135 102.909 152.909 85 175 85Z"
            fill="white"
            fillOpacity={0.5}
          />
          <Path
            d="M175 85C197.091 85 215 102.909 215 125C215 147.091 197.091 165 175 165C152.909 165 135 147.091 135 125C135 102.909 152.909 85 175 85"
            stroke="white"
            strokeWidth={2}
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
