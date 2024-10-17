import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { useWindowDimensions } from "react-native";
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={useWindowDimensions().width}
    height={useWindowDimensions().height / 3}
    viewBox="0 0 350 250"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="flag / south america / venezuela / a">
      <G id="venezuela-flag">
        <Path
          id="red"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 225H325V158H25V225Z"
          fill="#BD2530"
        />
        <Path
          id="blue"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 158H325V92H25V158Z"
          fill="#282E60"
        />
        <Path
          id="yellow"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25 92H325V25H25V92Z"
          fill="#F8C823"
        />
        <Path
          id="white"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M161.8 107.309L156.354 104.663L162.314 103.602L163.147 97.605L165.998 102.946L171.959 101.885L167.761 106.247L170.612 111.588L165.166 108.943L160.968 113.305L161.8 107.309ZM136.75 114.744L142.77 115.389L144.017 121.314L146.49 115.787L152.511 116.432L148.019 112.372L150.492 106.845L145.243 109.863L140.751 105.803L141.998 111.727L136.75 114.744ZM125.755 126.133L122.559 120.991L128.167 123.272L132.071 118.644L131.633 124.683L137.242 126.965L131.363 128.416L130.926 134.453L127.73 129.312L121.852 130.762L125.755 126.133ZM115.463 145.446L110.657 141.764L116.71 141.917L118.726 136.209L120.451 142.012L126.503 142.166L121.516 145.6L123.24 151.404L118.434 147.721L113.447 151.154L115.463 145.446ZM178.061 101.999L182.267 106.355L179.424 111.701L184.866 109.046L189.072 113.402L188.229 107.406L193.671 104.752L187.709 103.701L186.866 97.705L184.023 103.051L178.061 101.999ZM201.93 112.591L199.467 107.06L204.711 110.087L209.21 106.035L207.951 111.957L213.195 114.985L207.173 115.618L205.915 121.54L203.446 116.009L197.431 116.642L201.93 112.591ZM212.752 127.104L218.635 128.536L219.091 134.573L222.271 129.421L228.154 130.853L224.236 126.236L227.416 121.084L221.815 123.383L217.897 118.767L218.353 124.805L212.752 127.104ZM228.31 145.445L223.35 141.972L229.404 141.866L231.174 136.076L233.145 141.801L239.198 141.695L234.363 145.339L236.334 151.064L231.375 147.591L226.539 151.235L228.31 145.445Z"
          fill="#FFFFFE"
        />
      </G>
    </G>
  </Svg>
);
export default SvgComponent;
