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
    <G id="flag / africa / botswana / b">
      <G id="botswana b">
        <G id="blue">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 225H25V150H325V225ZM325 100H25V25H325V100Z"
            fill="white"
            fillOpacity={0.5}
          />
          <Path
            d="M25 225H24V226H25V225ZM325 225V226H326V225H325ZM25 150V149H24V150H25ZM325 150H326V149H325V150ZM325 100V101H326V100H325ZM25 100H24V101H25V100ZM25 25V24H24V25H25ZM325 25H326V24H325V25ZM25 226H325V224H25V226ZM24 150V225H26V150H24ZM25 151H325V149H25V151ZM326 225V150H324V225H326ZM325 99H25V101H325V99ZM24 25V100H26V25H24ZM325 24H25V26H325V24ZM326 100V25H324V100H326Z"
            fill="white"
          />
        </G>
        <G id="white">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M325 150H25V141.667H325V150ZM325 108.334H25V100H325V108.334Z"
            fill="white"
            fillOpacity={0.5}
          />
          <Path
            d="M25 150H24V151H25V150ZM325 150V151H326V150H325ZM25 141.667V140.667H24V141.667H25ZM325 141.667H326V140.667H325V141.667ZM325 108.334V109.334H326V108.334H325ZM25 108.334H24V109.334H25V108.334ZM25 100V99H24V100H25ZM325 100H326V99H325V100ZM25 151H325V149H25V151ZM24 141.667V150H26V141.667H24ZM25 142.667H325V140.667H25V142.667ZM326 150V141.667H324V150H326ZM325 107.334H25V109.334H325V107.334ZM24 100V108.334H26V100H24ZM325 99H25V101H325V99ZM326 108.334V100H324V108.334H326Z"
            fill="white"
          />
        </G>
        <Path
          id="black"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 141.667H325V108.334H25V141.667Z"
          fill="white"
          fillOpacity={0.5}
          stroke="white"
          strokeWidth={2}
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
