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
      <G id="flag / asia / oman / b">
        <G id="oman b">
          <G id="red" onPress={() => props.onPress("red")}>
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25 200.06H100V150.04H325V100.02H100V50H25V200.06Z"
              fill={props.colors["red"]}
              fillOpacity={1}
              onPress={() => props.onPress("red")}
            />
            <Path
              d="M100 200.06V201.06H101V200.06H100ZM25 200.06H24V201.06H25V200.06ZM100 150.04V149.04H99V150.04H100ZM325 150.04V151.04H326V150.04H325ZM325 100.02H326V99.02H325V100.02ZM100 100.02H99V101.02H100V100.02ZM100 50H101V49H100V50ZM25 50V49H24V50H25ZM100 199.06H25V201.06H100V199.06ZM99 150.04V200.06H101V150.04H99ZM325 149.04H100V151.04H325V149.04ZM324 100.02V150.04H326V100.02H324ZM100 101.02H325V99.02H100V101.02ZM99 50V100.02H101V50H99ZM25 51H100V49H25V51ZM26 200.06V50H24V200.06H26Z"
              fill="white"
              onPress={() => props.onPress("red")}
            />
          </G>
          <Path
            id="white"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 100H325V50H100V100Z"
            fill={props.colors["white"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("white")}
          />
          <Path
            id="green"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M100 199.94H325V150H100V199.94Z"
            fill={props.colors["green"]}
            fillOpacity={1}
            stroke="white"
            strokeWidth={2}
            onPress={() => props.onPress("green")}
          />
          <G
            id="coa"
            style={{
              mixBlendMode: "luminosity",
            }}
          >
            <Path
              id="Fill 6"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.2669 75.6602H50.3269C50.7699 75.6602 51.1309 75.9982 51.1309 76.4142V80.2102C51.1309 80.6272 50.7699 80.9642 50.3269 80.9642H42.2669C41.8229 80.9642 41.4629 80.6272 41.4629 80.2102V76.4142C41.4629 75.9982 41.8229 75.6602 42.2669 75.6602Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 7"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.2669 75.6602H50.3269C50.7699 75.6602 51.1309 75.9982 51.1309 76.4142V80.2102C51.1309 80.6272 50.7699 80.9642 50.3269 80.9642H42.2669C41.8229 80.9642 41.4629 80.6272 41.4629 80.2102V76.4142C41.4629 75.9982 41.8229 75.6602 42.2669 75.6602Z"
              stroke="#C8242B"
              strokeWidth={0.142}
            />
            <Path
              id="Fill 8"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.4739 75.8801H50.1199C50.5409 75.8801 50.8829 76.1891 50.8829 76.5711V80.0511C50.8829 80.4331 50.5409 80.7421 50.1199 80.7421H42.4739C42.0529 80.7421 41.7109 80.4331 41.7109 80.0511V76.5711C41.7109 76.1891 42.0529 75.8801 42.4739 75.8801Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 9"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.4739 75.8801H50.1199C50.5409 75.8801 50.8829 76.1891 50.8829 76.5711V80.0511C50.8829 80.4331 50.5409 80.7421 50.1199 80.7421H42.4739C42.0529 80.7421 41.7109 80.4331 41.7109 80.0511V76.5711C41.7109 76.1891 42.0529 75.8801 42.4739 75.8801Z"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 10"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.9755 77.207L46.4385 77.222L46.4595 77.432L46.8385 77.625L47.1335 77.385L47.4915 77.577L47.1545 77.788L47.2385 78.077L47.6595 78.062V78.45L47.3235 78.432L47.1545 78.675L47.5335 78.95L47.2385 79.175L46.9225 78.932L46.4595 79.03L46.4805 79.385L45.9755 79.417L45.9125 79.077L45.4915 78.9L45.2595 79.143L44.9015 78.965L45.1125 78.69L44.8595 78.512H44.5015L44.4805 78.012L44.8385 78.045L45.0905 77.755L44.7955 77.53L45.1755 77.27L45.4485 77.48L45.9125 77.417L45.9755 77.207Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 11"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.9755 77.207L46.4385 77.222L46.4595 77.432L46.8385 77.625L47.1335 77.385L47.4915 77.577L47.1545 77.788L47.2385 78.077L47.6595 78.062V78.45L47.3235 78.432L47.1545 78.675L47.5335 78.95L47.2385 79.175L46.9225 78.932L46.4595 79.03L46.4805 79.385L45.9755 79.417L45.9125 79.077L45.4915 78.9L45.2595 79.143L44.9015 78.965L45.1125 78.69L44.8595 78.512H44.5015L44.4805 78.012L44.8385 78.045L45.0905 77.755L44.7955 77.53L45.1755 77.27L45.4485 77.48L45.9125 77.417L45.9755 77.207Z"
              stroke="#C8242B"
              strokeWidth={0.083}
            />
            <Path
              id="Fill 12"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.1154 77.8201C46.3964 77.8201 46.6244 78.0141 46.6244 78.2551C46.6244 78.4961 46.3964 78.6911 46.1154 78.6911C45.8344 78.6911 45.6064 78.4961 45.6064 78.2551C45.6064 78.0141 45.8344 77.8201 46.1154 77.8201Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 13"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.1154 77.8201C46.3964 77.8201 46.6244 78.0141 46.6244 78.2551C46.6244 78.4961 46.3964 78.6911 46.1154 78.6911C45.8344 78.6911 45.6064 78.4961 45.6064 78.2551C45.6064 78.0141 45.8344 77.8201 46.1154 77.8201Z"
              stroke="#C8242B"
              strokeWidth={0.5}
            />
            <Path
              id="Fill 14"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.9501 76.103L42.2061 76.765L42.9501 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 15"
              d="M42.9501 76.103L42.2061 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 16"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.4451 76.103L42.7021 76.765L43.4451 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 17"
              d="M43.4451 76.103L42.7021 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 18"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.9412 76.103L43.1982 76.765L43.9412 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 19"
              d="M43.9412 76.103L43.1982 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 20"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M44.4374 76.103L43.6934 76.765L44.4374 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 21"
              d="M44.4374 76.103L43.6934 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 22"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M44.9335 76.103L44.1895 76.765L44.9335 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 23"
              d="M44.9335 76.103L44.1895 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 24"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.4285 76.103L44.6855 76.765L45.4285 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 25"
              d="M45.4285 76.103L44.6855 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 26"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.9246 76.103L45.1816 76.765L45.9246 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 27"
              d="M45.9246 76.103L45.1816 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 28"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.4208 76.103L45.6768 76.765L46.4208 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 29"
              d="M46.4208 76.103L45.6768 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 30"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.9169 76.103L46.1729 76.765L46.9169 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 31"
              d="M46.9169 76.103L46.1729 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 32"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.4129 76.103L46.6689 76.765L47.4129 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 33"
              d="M47.4129 76.103L46.6689 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 34"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.9071 76.103L47.1641 76.765L47.9071 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 35"
              d="M47.9071 76.103L47.1641 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 36"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.4032 76.103L47.6592 76.765L48.4032 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 37"
              d="M48.4032 76.103L47.6592 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 38"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.4208 76.103L45.6768 76.765L46.4208 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 39"
              d="M46.4208 76.103L45.6768 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 40"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.8993 76.103L48.1553 76.765L48.8993 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 41"
              d="M48.8993 76.103L48.1553 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 42"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.3944 76.103L48.6514 76.765L49.3944 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 43"
              d="M49.3944 76.103L48.6514 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 44"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.8915 76.103L49.1465 76.765L49.8915 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 45"
              d="M49.8915 76.103L49.1465 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 46"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50.3866 76.103L49.6436 76.765L50.3866 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 47"
              d="M50.3866 76.103L49.6436 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 48"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.6436 76.103L50.3866 76.765L49.6436 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 49"
              d="M49.6436 76.103L50.3866 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 50"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.1465 76.103L49.8915 76.765L49.1465 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 51"
              d="M49.1465 76.103L49.8915 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 52"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.6514 76.103L49.3944 76.765L48.6514 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 53"
              d="M48.6514 76.103L49.3944 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 54"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.1553 76.103L48.8993 76.765L48.1553 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 55"
              d="M48.1553 76.103L48.8993 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 56"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.6592 76.103L48.4032 76.765L47.6592 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 57"
              d="M47.6592 76.103L48.4032 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 58"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.1641 76.103L47.9071 76.765L47.1641 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 59"
              d="M47.1641 76.103L47.9071 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 60"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.6689 76.103L47.4129 76.765L46.6689 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 61"
              d="M46.6689 76.103L47.4129 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 62"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.1729 76.103L46.9169 76.765L46.1729 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 63"
              d="M46.1729 76.103L46.9169 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 64"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.6768 76.103L46.4208 76.765L45.6768 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 65"
              d="M45.6768 76.103L46.4208 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 66"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.1816 76.103L45.9246 76.765L45.1816 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 67"
              d="M45.1816 76.103L45.9246 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 68"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M44.6855 76.103L45.4295 76.765L44.6855 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 69"
              d="M44.6855 76.103L45.4295 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 70"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M44.1895 76.103L44.9335 76.765L44.1895 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 71"
              d="M44.1895 76.103L44.9335 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 72"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.1729 76.103L46.9169 76.765L46.1729 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 73"
              d="M46.1729 76.103L46.9169 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 74"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.6934 76.103L44.4374 76.765L43.6934 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 75"
              d="M43.6934 76.103L44.4374 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 76"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.1982 76.103L43.9412 76.765L43.1982 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 77"
              d="M43.1982 76.103L43.9412 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 78"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.7021 76.103L43.4451 76.765L42.7021 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 79"
              d="M42.7021 76.103L43.4451 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 80"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.2061 76.103L42.9501 76.765L42.2061 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 81"
              d="M42.2061 76.103L42.9501 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 82"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.9501 79.8572L42.2061 80.5222L42.9501 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 83"
              d="M42.9501 79.8572L42.2061 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 84"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.4451 79.8572L42.7021 80.5222L43.4451 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 85"
              d="M43.4451 79.8572L42.7021 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 86"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.9412 79.8572L43.1982 80.5222L43.9412 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 87"
              d="M43.9412 79.8572L43.1982 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 88"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M44.4374 79.8572L43.6934 80.5222L44.4374 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 89"
              d="M44.4374 79.8572L43.6934 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 90"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M44.9335 79.8572L44.1895 80.5222L44.9335 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 91"
              d="M44.9335 79.8572L44.1895 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 92"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.4285 79.8572L44.6855 80.5222L45.4285 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 93"
              d="M45.4285 79.8572L44.6855 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 94"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.9246 79.8572L45.1816 80.5222L45.9246 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 95"
              d="M45.9246 79.8572L45.1816 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 96"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.4208 79.8572L45.6768 80.5222L46.4208 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 97"
              d="M46.4208 79.8572L45.6768 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 98"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.9169 79.8572L46.1729 80.5222L46.9169 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 99"
              d="M46.9169 79.8572L46.1729 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 100"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.4129 79.8572L46.6689 80.5222L47.4129 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 101"
              d="M47.4129 79.8572L46.6689 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 102"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.9071 79.8572L47.1641 80.5222L47.9071 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 103"
              d="M47.9071 79.8572L47.1641 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 104"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.4032 79.8572L47.6592 80.5222L48.4032 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 105"
              d="M48.4032 79.8572L47.6592 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 106"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.4208 79.8572L45.6768 80.5222L46.4208 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 107"
              d="M46.4208 79.8572L45.6768 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 108"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.8993 79.8572L48.1553 80.5222L48.8993 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 109"
              d="M48.8993 79.8572L48.1553 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 110"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.3944 79.8572L48.6514 80.5222L49.3944 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 111"
              d="M49.3944 79.8572L48.6514 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 112"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.8915 79.8572L49.1465 80.5222L49.8915 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 113"
              d="M49.8915 79.8572L49.1465 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 114"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50.3866 79.8572L49.6436 80.5222L50.3866 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 115"
              d="M50.3866 79.8572L49.6436 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 116"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.6436 79.8572L50.3866 80.5222L49.6436 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 117"
              d="M49.6436 79.8572L50.3866 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 118"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.1465 79.8572L49.8915 80.5222L49.1465 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 119"
              d="M49.1465 79.8572L49.8915 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 120"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.6514 79.8572L49.3944 80.5222L48.6514 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 121"
              d="M48.6514 79.8572L49.3944 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 122"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.1553 79.8572L48.8993 80.5222L48.1553 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 123"
              d="M48.1553 79.8572L48.8993 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 124"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.6592 79.8572L48.4032 80.5222L47.6592 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 125"
              d="M47.6592 79.8572L48.4032 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 126"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.1641 79.8572L47.9071 80.5222L47.1641 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 127"
              d="M47.1641 79.8572L47.9071 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 128"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.6689 79.8572L47.4129 80.5222L46.6689 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 129"
              d="M46.6689 79.8572L47.4129 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 130"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.1729 79.8572L46.9169 80.5222L46.1729 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 131"
              d="M46.1729 79.8572L46.9169 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 132"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.6768 79.8572L46.4208 80.5222L45.6768 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 133"
              d="M45.6768 79.8572L46.4208 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 134"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M45.1816 79.8572L45.9246 80.5222L45.1816 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 135"
              d="M45.1816 79.8572L45.9246 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 136"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M44.6855 79.8572L45.4295 80.5222L44.6855 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 137"
              d="M44.6855 79.8572L45.4295 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 138"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M44.1895 79.8572L44.9335 80.5222L44.1895 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 139"
              d="M44.1895 79.8572L44.9335 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 140"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.1729 79.8572L46.9169 80.5222L46.1729 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 141"
              d="M46.1729 79.8572L46.9169 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 142"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.6934 79.8572L44.4374 80.5222L43.6934 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 143"
              d="M43.6934 79.8572L44.4374 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 144"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.1982 79.8572L43.9412 80.5222L43.1982 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 145"
              d="M43.1982 79.8572L43.9412 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 146"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.7021 79.8572L43.4451 80.5222L42.7021 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 147"
              d="M42.7021 79.8572L43.4451 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 148"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.2061 79.8572L42.9501 80.5222L42.2061 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 149"
              d="M42.2061 79.8572L42.9501 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 150"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M82.7312 75.6602H74.6722C74.2282 75.6602 73.8682 75.9982 73.8682 76.4142V80.2102C73.8682 80.6272 74.2282 80.9642 74.6722 80.9642H82.7312C83.1752 80.9642 83.5352 80.6272 83.5352 80.2102V76.4142C83.5352 75.9982 83.1752 75.6602 82.7312 75.6602Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 151"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M82.7312 75.6602H74.6722C74.2282 75.6602 73.8682 75.9982 73.8682 76.4142V80.2102C73.8682 80.6272 74.2282 80.9642 74.6722 80.9642H82.7312C83.1752 80.9642 83.5352 80.6272 83.5352 80.2102V76.4142C83.5352 75.9982 83.1752 75.6602 82.7312 75.6602Z"
              stroke="#C8242B"
              strokeWidth={0.142}
            />
            <Path
              id="Fill 152"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M82.5252 75.8801H74.8782C74.4572 75.8801 74.1162 76.1891 74.1162 76.5711V80.0511C74.1162 80.4331 74.4572 80.7421 74.8782 80.7421H82.5252C82.9462 80.7421 83.2872 80.4331 83.2872 80.0511V76.5711C83.2872 76.1891 82.9462 75.8801 82.5252 75.8801Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 153"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M82.5252 75.8801H74.8782C74.4572 75.8801 74.1162 76.1891 74.1162 76.5711V80.0511C74.1162 80.4331 74.4572 80.7421 74.8782 80.7421H82.5252C82.9462 80.7421 83.2872 80.4331 83.2872 80.0511V76.5711C83.2872 76.1891 82.9462 75.8801 82.5252 75.8801Z"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 154"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.0239 77.207L78.5609 77.222L78.5389 77.432L78.1609 77.625L77.8659 77.385L77.5079 77.577L77.8449 77.788L77.7599 78.077L77.3389 78.062V78.45L77.6759 78.432L77.8449 78.675L77.4659 78.95L77.7599 79.175L78.0759 78.932L78.5389 79.03L78.5179 79.385L79.0239 79.417L79.0869 79.077L79.5079 78.9L79.7399 79.143L80.0979 78.965L79.8869 78.69L80.1399 78.512H80.4979L80.5189 78.012L80.1609 78.045L79.9079 77.755L80.2029 77.53L79.8239 77.27L79.5499 77.48L79.0869 77.417L79.0239 77.207Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 155"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.0239 77.207L78.5609 77.222L78.5389 77.432L78.1609 77.625L77.8659 77.385L77.5079 77.577L77.8449 77.788L77.7599 78.077L77.3389 78.062V78.45L77.6759 78.432L77.8449 78.675L77.4659 78.95L77.7599 79.175L78.0759 78.932L78.5389 79.03L78.5179 79.385L79.0239 79.417L79.0869 79.077L79.5079 78.9L79.7399 79.143L80.0979 78.965L79.8869 78.69L80.1399 78.512H80.4979L80.5189 78.012L80.1609 78.045L79.9079 77.755L80.2029 77.53L79.8239 77.27L79.5499 77.48L79.0869 77.417L79.0239 77.207Z"
              stroke="#C8242B"
              strokeWidth={0.083}
            />
            <Path
              id="Fill 156"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.884 77.8201C78.602 77.8201 78.375 78.0141 78.375 78.2551C78.375 78.4961 78.602 78.6911 78.884 78.6911C79.164 78.6911 79.393 78.4961 79.393 78.2551C79.393 78.0141 79.164 77.8201 78.884 77.8201Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 157"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.884 77.8201C78.602 77.8201 78.375 78.0141 78.375 78.2551C78.375 78.4961 78.602 78.6911 78.884 78.6911C79.164 78.6911 79.393 78.4961 79.393 78.2551C79.393 78.0141 79.164 77.8201 78.884 77.8201Z"
              stroke="#C8242B"
              strokeWidth={0.5}
            />
            <Path
              id="Fill 158"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M82.0488 76.103L82.7918 76.765L82.0488 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 159"
              d="M82.0488 76.103L82.7918 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 160"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M81.5527 76.103L82.2967 76.765L81.5527 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 161"
              d="M81.5527 76.103L82.2967 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 162"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M81.0576 76.103L81.8006 76.765L81.0576 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 163"
              d="M81.0576 76.103L81.8006 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 164"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.5615 76.103L81.3045 76.765L80.5615 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 165"
              d="M80.5615 76.103L81.3045 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 166"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.0654 76.103L80.8084 76.765L80.0654 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 167"
              d="M80.0654 76.103L80.8084 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 168"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.5693 76.103L80.3133 76.765L79.5693 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 169"
              d="M79.5693 76.103L80.3133 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 170"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.0732 76.103L79.8172 76.765L79.0732 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 171"
              d="M79.0732 76.103L79.8172 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 172"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.5781 76.103L79.3211 76.765L78.5781 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 173"
              d="M78.5781 76.103L79.3211 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 174"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.083 76.103L78.827 76.765L78.083 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 175"
              d="M78.083 76.103L78.827 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 176"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M77.5869 76.103L78.3309 76.765L77.5869 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 177"
              d="M77.5869 76.103L78.3309 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 178"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M77.0908 76.103L77.8348 76.765L77.0908 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 179"
              d="M77.0908 76.103L77.8348 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 180"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M76.5957 76.103L77.3387 76.765L76.5957 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 181"
              d="M76.5957 76.103L77.3387 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 182"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.5781 76.103L79.3211 76.765L78.5781 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 183"
              d="M78.5781 76.103L79.3211 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 184"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M76.0996 76.103L76.8436 76.765L76.0996 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 185"
              d="M76.0996 76.103L76.8436 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 186"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M75.6035 76.103L76.3475 76.765L75.6035 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 187"
              d="M75.6035 76.103L76.3475 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 188"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M75.1074 76.103L75.8514 76.765L75.1074 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 189"
              d="M75.1074 76.103L75.8514 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 190"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M74.6113 76.103L75.3553 76.765L74.6113 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 191"
              d="M74.6113 76.103L75.3553 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 192"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M75.3553 76.103L74.6113 76.765L75.3553 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 193"
              d="M75.3553 76.103L74.6113 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 194"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M75.8514 76.103L75.1074 76.765L75.8514 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 195"
              d="M75.8514 76.103L75.1074 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 196"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M76.3475 76.103L75.6035 76.765L76.3475 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 197"
              d="M76.3475 76.103L75.6035 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 198"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M76.8436 76.103L76.0996 76.765L76.8436 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 199"
              d="M76.8436 76.103L76.0996 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 200"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M77.3387 76.103L76.5957 76.765L77.3387 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 201"
              d="M77.3387 76.103L76.5957 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 202"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M77.8348 76.103L77.0908 76.765L77.8348 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 203"
              d="M77.8348 76.103L77.0908 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 204"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.3309 76.103L77.5869 76.765L78.3309 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 205"
              d="M78.3309 76.103L77.5869 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 206"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.827 76.103L78.083 76.765L78.827 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 207"
              d="M78.827 76.103L78.083 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 208"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.3211 76.103L78.5781 76.765L79.3211 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 209"
              d="M79.3211 76.103L78.5781 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 210"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.8172 76.103L79.0732 76.765L79.8172 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 211"
              d="M79.8172 76.103L79.0732 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 212"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.3133 76.103L79.5693 76.765L80.3133 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 213"
              d="M80.3133 76.103L79.5693 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 214"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.8084 76.103L80.0654 76.765L80.8084 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 215"
              d="M80.8084 76.103L80.0654 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 216"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.827 76.103L78.083 76.765L78.827 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 217"
              d="M78.827 76.103L78.083 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 218"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M81.3045 76.103L80.5615 76.765L81.3045 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 219"
              d="M81.3045 76.103L80.5615 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 220"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M81.8006 76.103L81.0576 76.765L81.8006 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 221"
              d="M81.8006 76.103L81.0576 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 222"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M82.2967 76.103L81.5527 76.765L82.2967 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 223"
              d="M82.2967 76.103L81.5527 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 224"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M82.7918 76.103L82.0488 76.765L82.7918 76.103Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 225"
              d="M82.7918 76.103L82.0488 76.765"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 226"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M82.0488 79.8572L82.7918 80.5222L82.0488 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 227"
              d="M82.0488 79.8572L82.7918 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 228"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M81.5527 79.8572L82.2967 80.5222L81.5527 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 229"
              d="M81.5527 79.8572L82.2967 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 230"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M81.0576 79.8572L81.8006 80.5222L81.0576 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 231"
              d="M81.0576 79.8572L81.8006 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 232"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.5615 79.8572L81.3045 80.5222L80.5615 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 233"
              d="M80.5615 79.8572L81.3045 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 234"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.0654 79.8572L80.8084 80.5222L80.0654 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 235"
              d="M80.0654 79.8572L80.8084 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 236"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.5693 79.8572L80.3133 80.5222L79.5693 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 237"
              d="M79.5693 79.8572L80.3133 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 238"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.0732 79.8572L79.8172 80.5222L79.0732 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 239"
              d="M79.0732 79.8572L79.8172 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 240"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.5781 79.8572L79.3211 80.5222L78.5781 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 241"
              d="M78.5781 79.8572L79.3211 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 242"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.083 79.8572L78.827 80.5222L78.083 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 243"
              d="M78.083 79.8572L78.827 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 244"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M77.5869 79.8572L78.3309 80.5222L77.5869 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 245"
              d="M77.5869 79.8572L78.3309 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 246"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M77.0908 79.8572L77.8348 80.5222L77.0908 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 247"
              d="M77.0908 79.8572L77.8348 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 248"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M76.5957 79.8572L77.3387 80.5222L76.5957 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 249"
              d="M76.5957 79.8572L77.3387 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 250"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.5781 79.8572L79.3211 80.5222L78.5781 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 251"
              d="M78.5781 79.8572L79.3211 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 252"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M76.0996 79.8572L76.8436 80.5222L76.0996 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 253"
              d="M76.0996 79.8572L76.8436 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 254"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M75.6035 79.8572L76.3475 80.5222L75.6035 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 255"
              d="M75.6035 79.8572L76.3475 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 256"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M75.1074 79.8572L75.8514 80.5222L75.1074 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 257"
              d="M75.1074 79.8572L75.8514 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 258"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M74.6113 79.8572L75.3553 80.5222L74.6113 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 259"
              d="M74.6113 79.8572L75.3553 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 260"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M75.3553 79.8572L74.6113 80.5222L75.3553 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 261"
              d="M75.3553 79.8572L74.6113 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 262"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M75.8514 79.8572L75.1074 80.5222L75.8514 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 263"
              d="M75.8514 79.8572L75.1074 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 264"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M76.3475 79.8572L75.6035 80.5222L76.3475 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 265"
              d="M76.3475 79.8572L75.6035 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 266"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M76.8436 79.8572L76.0996 80.5222L76.8436 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 267"
              d="M76.8436 79.8572L76.0996 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 268"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M77.3387 79.8572L76.5957 80.5222L77.3387 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 269"
              d="M77.3387 79.8572L76.5957 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 270"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M77.8348 79.8572L77.0908 80.5222L77.8348 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 271"
              d="M77.8348 79.8572L77.0908 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 272"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.3309 79.8572L77.5869 80.5222L78.3309 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 273"
              d="M78.3309 79.8572L77.5869 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 274"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.827 79.8572L78.083 80.5222L78.827 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 275"
              d="M78.827 79.8572L78.083 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 276"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.3211 79.8572L78.5781 80.5222L79.3211 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 277"
              d="M79.3211 79.8572L78.5781 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 278"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M79.8172 79.8572L79.0732 80.5222L79.8172 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 279"
              d="M79.8172 79.8572L79.0732 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 280"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.3133 79.8572L79.5693 80.5222L80.3133 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 281"
              d="M80.3133 79.8572L79.5693 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 282"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M80.8084 79.8572L80.0654 80.5222L80.8084 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 283"
              d="M80.8084 79.8572L80.0654 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 284"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.827 79.8572L78.083 80.5222L78.827 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 285"
              d="M78.827 79.8572L78.083 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 286"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M81.3045 79.8572L80.5615 80.5222L81.3045 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 287"
              d="M81.3045 79.8572L80.5615 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 288"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M81.8006 79.8572L81.0576 80.5222L81.8006 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 289"
              d="M81.8006 79.8572L81.0576 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 290"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M82.2967 79.8572L81.5527 80.5222L82.2967 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 291"
              d="M82.2967 79.8572L81.5527 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 292"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M82.7918 79.8572L82.0488 80.5222L82.7918 79.8572Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 293"
              d="M82.7918 79.8572L82.0488 80.5222"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 294"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M56.6264 86.7802C44.5984 98.5422 39.4674 100.03 41.8754 100.978C44.2834 101.925 52.0294 95.8552 60.0894 87.7902C68.1494 79.7282 73.0844 72.5512 70.6764 71.6032C68.2694 70.6552 69.4194 74.2692 56.6264 86.7802Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 295"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M56.6264 86.7802C44.5984 98.5422 39.4674 100.03 41.8754 100.978C44.2834 101.925 52.0294 95.8552 60.0894 87.7902C68.1494 79.7282 73.0844 72.5512 70.6764 71.6032C68.2694 70.6552 69.4194 74.2692 56.6264 86.7802Z"
              stroke="#C8242B"
              strokeWidth={0.212}
            />
            <Path
              id="Fill 296"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.5015 95.3271L50.7145 96.4321C46.7485 100.19 42.2875 101.738 41.0485 101.075C39.8085 100.413 43.2785 98.8651 46.5015 95.3271Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 297"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.5015 95.3271L50.7145 96.4321C46.7485 100.19 42.2875 101.738 41.0485 101.075C39.8085 100.413 43.2785 98.8651 46.5015 95.3271Z"
              stroke="#C8242B"
              strokeWidth={0.165}
            />
            <Path
              id="Fill 298"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.5014 95.77L49.9714 96.655C46.1084 100.268 42.2874 101.295 41.2984 100.855C40.3044 100.413 43.3624 99.17 46.5014 95.77Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 299"
              d="M46.5222 95.6901L46.5426 95.6102L46.5222 95.6901ZM46.4746 95.678L46.495 95.598L46.4473 95.5859L46.414 95.622L46.4746 95.678ZM49.9922 96.5751L50.0126 96.4952L49.9922 96.5751ZM50.1383 96.6124L50.1946 96.6726L50.3047 96.5697L50.1587 96.5324L50.1383 96.6124ZM50.0282 96.7153L49.9719 96.6551L50.0282 96.7153ZM44.5894 100.351L44.6213 100.427L44.5894 100.351ZM42.5413 100.974L42.528 100.893L42.5413 100.974ZM41.2989 100.855L41.3742 100.889L41.2235 100.822L41.2989 100.855ZM41.2653 100.93L41.2344 101.007L41.3083 101.037L41.3407 100.964L41.2653 100.93ZM41.026 100.654L41.1083 100.649L41.026 100.654ZM41.1881 100.299L41.2511 100.352L41.1881 100.299ZM42.3003 99.3563L42.3505 99.4218H42.3505L42.3003 99.3563ZM42.4464 99.2445L42.4965 99.3101L42.4464 99.2445ZM46.4412 95.7141L46.3806 95.6581L46.4412 95.7141ZM42.5477 99.3748L42.4976 99.3093H42.4976L42.5477 99.3748ZM46.5291 95.8621L46.5494 95.7822L46.5019 95.7701L46.4686 95.8061L46.5291 95.8621ZM42.4006 99.4873L42.3505 99.4218H42.3505L42.4006 99.4873ZM41.3141 100.405L41.2511 100.352H41.2511L41.3141 100.405ZM41.1906 100.644L41.1083 100.649H41.1083L41.1906 100.644ZM41.3324 100.78L41.2989 100.855L41.2994 100.855L41.3324 100.78ZM41.3324 100.78L41.3659 100.704L41.3654 100.704L41.3324 100.78ZM42.5147 100.811L42.528 100.893L42.5147 100.811ZM44.5258 100.199L44.5576 100.275L44.5258 100.199ZM49.8048 96.6976L49.8608 96.7582L49.9724 96.6552L49.8252 96.6177L49.8048 96.6976ZM59.5281 86.2793L59.6094 86.2936V86.2936L59.5281 86.2793ZM59.5722 86.0281L59.6535 86.0423L59.6975 85.7911L59.5147 85.9689L59.5722 86.0281ZM59.5151 86.3746L59.5969 86.3852V86.3852L59.5151 86.3746ZM59.5032 86.4649L59.4215 86.4539L59.5032 86.4649ZM59.4673 86.6849L59.387 86.6663L59.3849 86.6753L59.3848 86.6845L59.4673 86.6849ZM59.4382 87.0293L59.52 87.0405V87.0405L59.4382 87.0293ZM59.4366 87.0412L59.3549 87.0301L59.4366 87.0412ZM59.4351 87.052L59.5112 87.084L59.5154 87.074L59.5169 87.0632L59.4351 87.052ZM59.4309 87.0621L59.3549 87.0301V87.0301L59.4309 87.0621ZM59.4106 87.1207L59.4894 87.1452L59.4894 87.1452L59.4106 87.1207ZM59.4097 87.1237L59.4885 87.1482L59.4885 87.1482L59.4097 87.1237ZM59.3823 87.1972L59.3081 87.1612V87.1612L59.3823 87.1972ZM59.3237 87.2748L59.2699 87.2122V87.2122L59.3237 87.2748ZM59.251 87.3177L59.2208 87.2409L59.1992 87.2494L59.1852 87.2679L59.251 87.3177ZM59.1369 87.4356L59.1863 87.5017V87.5017L59.1369 87.4356ZM58.9967 87.5119L58.964 87.4361L58.9551 87.44L58.9473 87.4458L58.9967 87.5119ZM58.6755 87.6797L58.7061 87.7563L58.7061 87.7563L58.6755 87.6797ZM58.6743 87.6801L58.5974 87.7101L58.6277 87.7877L58.7049 87.7567L58.6743 87.6801ZM58.6743 87.6801L58.7512 87.6502L58.7214 87.5738L58.6449 87.6031L58.6743 87.6801ZM58.2616 87.7111L58.2769 87.6301L58.2616 87.7111ZM58.2465 87.7083L58.2031 87.7785L58.2162 87.7866L58.2313 87.7894L58.2465 87.7083ZM58.2335 87.7002L58.2769 87.6301L58.2335 87.7002ZM58.1477 87.6437L58.1949 87.576L58.139 87.5371L58.0902 87.5846L58.1477 87.6437ZM57.9344 87.8512L57.8834 87.9161L57.9402 87.9606L57.9919 87.9103L57.9344 87.8512ZM57.8057 87.7502L57.7346 87.7084L57.6981 87.7706L57.7548 87.8151L57.8057 87.7502ZM57.8351 87.7014L57.9056 87.7444V87.7444L57.8351 87.7014ZM57.9172 87.4898L58.0002 87.4983L57.9996 87.4861L57.9172 87.4898ZM57.9133 87.4326L57.9961 87.4251L57.9937 87.4144L57.9133 87.4326ZM57.8895 87.3144L57.9706 87.2991V87.2991L57.8895 87.3144ZM57.8877 87.3047L57.9687 87.2893V87.2893L57.8877 87.3047ZM57.8572 87.1616L57.8319 87.0831L57.757 87.1072L57.7776 87.1832L57.8572 87.1616ZM58.0141 87.1111L58.0913 87.0821L58.0637 87.0085L57.9888 87.0326L58.0141 87.1111ZM58.0748 87.3899L57.9928 87.3989L57.997 87.4376L58.0295 87.4589L58.0748 87.3899ZM58.1317 87.4291L58.0839 87.4963L58.1399 87.5362L58.1893 87.4882L58.1317 87.4291ZM59.3893 86.2059L59.4469 86.2651V86.2651L59.3893 86.2059ZM58.3071 87.5517L58.263 87.6214L58.2769 87.6302L58.2932 87.633L58.3071 87.5517ZM58.2684 87.5264L58.2109 87.4672L58.138 87.538L58.2223 87.5948L58.2684 87.5264ZM58.6148 87.5262L58.6442 87.6033L58.6455 87.6028L58.6148 87.5262ZM58.9044 87.3748L58.9549 87.4401L58.9549 87.4401L58.9044 87.3748ZM58.9127 87.3683L58.8803 87.2925L58.8706 87.2966L58.8623 87.3031L58.9127 87.3683ZM58.9224 87.3642L58.89 87.2883L58.9224 87.3642ZM59.0381 87.3035L59.0875 87.3696V87.3696L59.0381 87.3035ZM59.133 87.1998L59.1999 87.2481V87.2481L59.133 87.1998ZM59.1495 87.1769L59.1261 87.0978L59.0991 87.1058L59.0826 87.1286L59.1495 87.1769ZM59.1765 87.1689L59.1999 87.2481V87.2481L59.1765 87.1689ZM59.2162 87.1496L59.1624 87.087V87.087L59.2162 87.1496ZM59.2339 87.1252L59.1597 87.0892V87.0892L59.2339 87.1252ZM59.2521 87.0746L59.1734 87.0501V87.0501L59.2521 87.0746ZM59.2535 87.0701L59.3323 87.0946V87.0946L59.2535 87.0701ZM59.2745 87.0086L59.3513 87.0389L59.3549 87.0296L59.3563 87.0198L59.2745 87.0086ZM59.3024 86.6649L59.2223 86.6449L59.2199 86.6548V86.6649H59.3024ZM59.3048 86.6551L59.2248 86.635V86.635L59.3048 86.6551ZM59.3331 86.4907L59.4148 86.5023L59.4486 86.2634L59.2756 86.4316L59.3331 86.4907ZM56.9006 87.8774L56.9219 87.9571L56.9006 87.8774ZM57.7646 87.8206L57.8462 87.8332L57.8609 87.7381H57.7646V87.8206ZM57.7645 87.8215L57.6829 87.8089L57.6703 87.8904L57.7519 87.9031L57.7645 87.8215ZM58.187 87.9374L58.1519 88.0121V88.0121L58.187 87.9374ZM58.1902 87.9389L58.2632 87.9774L58.3034 87.901L58.2253 87.8643L58.1902 87.9389ZM58.1901 87.939L58.1171 87.9005L58.0786 87.9737L58.1519 88.0121L58.1901 87.939ZM58.3239 88.0121L58.2833 88.0839L58.3409 88.1165L58.3852 88.0673L58.3239 88.0121ZM58.3317 88.0035L58.3866 87.9418L58.3253 87.8873L58.2704 87.9483L58.3317 88.0035ZM58.3405 88.0113L58.2858 88.073L58.2858 88.073L58.3405 88.0113ZM58.3615 88.0301L58.3053 88.0912L58.313 88.0968L58.3615 88.0301ZM58.4957 88.1277L58.5173 88.2073L58.6836 88.1623L58.5442 88.061L58.4957 88.1277ZM58.3684 88.1621L58.3469 88.0825L58.3286 88.0874L58.3144 88.0998L58.3684 88.1621ZM58.3355 88.1797L58.357 88.2594L58.3355 88.1797ZM58.3043 88.182L58.3137 88.1001V88.1001L58.3043 88.182ZM58.2983 88.1811L58.3136 88.1L58.295 88.0965L58.2767 88.1015L58.2983 88.1811ZM56.2467 88.7365L56.2251 88.6568L56.1958 88.6647L56.1786 88.6898L56.2467 88.7365ZM56.2419 88.7432L56.1753 88.6945L56.1074 88.7874L56.2172 88.8219L56.2419 88.7432ZM56.2667 88.7505L56.2449 88.8301L56.2667 88.7505ZM56.29 88.7569L56.3513 88.7017L56.3352 88.6838L56.3118 88.6774L56.29 88.7569ZM56.3061 88.7748L56.2445 88.8303L56.2504 88.8357L56.3061 88.7748ZM56.3092 88.7777L56.2554 88.8402L56.3092 88.7777ZM56.3191 88.7855L56.2696 88.8515V88.8515L56.3191 88.7855ZM56.3387 88.7993L56.2927 88.8678L56.2991 88.8721L56.3062 88.8752L56.3387 88.7993ZM56.4304 88.8553L56.377 88.9182L56.3827 88.923L56.3893 88.9268L56.4304 88.8553ZM56.459 88.8718L56.5003 88.8003L56.5002 88.8003L56.459 88.8718ZM56.4597 88.8722L56.4184 88.9436L56.4184 88.9436L56.4597 88.8722ZM56.4818 88.8856L56.4343 88.9531L56.4343 88.9531L56.4818 88.8856ZM56.4875 88.89L56.435 88.9536L56.435 88.9537L56.4875 88.89ZM56.4876 88.8901L56.4356 88.9541L56.4356 88.9542L56.4876 88.8901ZM56.5031 88.9069L56.4353 88.954L56.4354 88.954L56.5031 88.9069ZM56.5032 88.9071L56.4355 88.9542L56.4355 88.9542L56.5032 88.9071ZM56.5179 88.9551L56.6004 88.9562V88.9562L56.5179 88.9551ZM56.5001 89.0053L56.5648 89.0564L56.5001 89.0053ZM56.465 89.0311L56.4946 89.1081L56.4946 89.1081L56.465 89.0311ZM56.4301 89.0365L56.4353 88.9542L56.4352 88.9542L56.4301 89.0365ZM56.43 89.0365L56.4248 89.1188L56.4249 89.1188L56.43 89.0365ZM56.4178 89.0348L56.4006 89.1155L56.4006 89.1155L56.4178 89.0348ZM56.3971 89.0279L56.4309 88.9527L56.4308 88.9526L56.3971 89.0279ZM56.397 89.0279L56.4308 88.9526L56.4295 88.952L56.397 89.0279ZM56.3618 89.0118L56.3969 88.9371V88.9371L56.3618 89.0118ZM56.3475 89.005L56.2873 89.0615L56.2981 89.073L56.3124 89.0797L56.3475 89.005ZM56.3367 88.9935L56.3969 88.9371V88.9371L56.3367 88.9935ZM56.3326 88.9893L56.3907 88.9308L56.3833 88.9233L56.3742 88.918L56.3326 88.9893ZM56.2613 88.9459L56.3061 88.8766L56.2984 88.8716L56.2898 88.8685L56.2613 88.9459ZM56.0542 88.9124L56.0599 88.8301L56.0542 88.9124ZM55.9329 88.904L55.8585 88.8683L55.8059 88.9779L55.9272 88.9863L55.9329 88.904ZM55.9552 88.8575L56.0296 88.8932L56.0718 88.8051L55.9778 88.7782L55.9552 88.8575ZM55.9442 88.8544L55.9215 88.9337L55.9442 88.8544ZM55.8059 88.8584L55.8281 88.9379L55.8059 88.8584ZM55.7627 88.8717L55.7376 88.7931H55.7376L55.7627 88.8717ZM55.6236 88.9092L55.6088 88.828L55.5965 88.8303L55.5854 88.8361L55.6236 88.9092ZM55.5213 88.9532L55.5435 89.0326L55.5213 88.9532ZM55.3819 88.9676L55.3001 88.9784L55.3096 89.0501H55.3819V88.9676ZM55.3603 88.8054L55.3387 88.7258L55.269 88.7447L55.2785 88.8163L55.3603 88.8054ZM56.1308 88.5969L56.1524 88.6765L56.1979 88.6642L56.2104 88.6187L56.1308 88.5969ZM56.1319 88.5926L56.2119 88.6131L56.1319 88.5926ZM56.1392 88.5643L56.0899 88.4981L56.0665 88.5155L56.0593 88.5438L56.1392 88.5643ZM56.1626 88.5469L56.2119 88.6131L56.1626 88.5469ZM56.2523 88.4459L56.3182 88.4954L56.3182 88.4954L56.2523 88.4459ZM56.2582 88.438L56.3242 88.4875V88.4875L56.2582 88.438ZM56.3639 88.3136L56.4204 88.3737L56.4301 88.3646L56.4364 88.3529L56.3639 88.3136ZM56.5679 88.0791L56.6117 88.1495L56.618 88.1447L56.5679 88.0791ZM56.7157 87.9902L56.6772 87.9172V87.9172L56.7157 87.9902ZM56.7308 87.9822L56.6921 87.9093V87.9093L56.7308 87.9822ZM56.8668 87.8956L56.9219 87.9571V87.9571L56.8668 87.8956ZM56.8815 87.8824L56.8602 87.8027L56.8411 87.8078L56.8264 87.821L56.8815 87.8824ZM56.4 88.524L56.3342 88.4742L56.1886 88.6667L56.4215 88.6036L56.4 88.524ZM56.4844 88.4269L56.539 88.4888L56.4844 88.4269ZM56.4955 88.4172L56.5501 88.479L56.5612 88.4692L56.5682 88.4562L56.4955 88.4172ZM56.5025 88.4041L56.4299 88.3651V88.3651L56.5025 88.4041ZM56.6578 88.2175L56.7283 88.1745L56.6853 88.1041L56.6149 88.1471L56.6578 88.2175ZM56.6581 88.2179L56.5877 88.2609L56.6359 88.3398L56.7088 88.2831L56.6581 88.2179ZM56.6655 88.2122L56.7162 88.2773L56.6655 88.2122ZM56.7948 88.135L56.8334 88.2079L56.8334 88.2079L56.7948 88.135ZM56.8082 88.1279L56.7695 88.0551L56.8082 88.1279ZM56.9611 88.0321L56.9404 87.9522L56.9228 87.9567L56.9088 87.9682L56.9611 88.0321ZM57.7455 87.9856L57.7584 87.9031H57.7455V87.9856ZM58.0782 88.0698L58.0998 88.1494L58.3342 88.0859L58.1096 87.9935L58.0782 88.0698ZM58.2925 88.0204L58.2711 87.9407L58.2711 87.9407L58.2925 88.0204ZM58.3189 88.0177L58.3802 88.0729L58.4944 87.946L58.324 87.9354L58.3189 88.0177ZM58.2885 88.0216L58.2628 87.9432L58.1884 87.9677L58.2089 88.0432L58.2885 88.0216ZM58.2947 88.0446L58.2151 88.0661L58.2547 88.2124L58.3561 88.0997L58.2947 88.0446ZM55.9742 89.2199L55.902 89.2614L55.9086 89.2701L55.9742 89.2199ZM55.9649 89.2056L55.8986 89.2547L55.8986 89.2547L55.9649 89.2056ZM55.9648 89.2054L55.8985 89.2546L55.8985 89.2546L55.9648 89.2054ZM55.9271 89.1747L55.8939 89.2502L55.9271 89.1747ZM55.8703 89.1705L55.8922 89.25L55.8703 89.1705ZM55.8251 89.2011L55.8907 89.2511L55.8251 89.2011ZM55.8075 89.2426L55.7262 89.2287L55.7262 89.2287L55.8075 89.2426ZM55.8075 89.2427L55.8888 89.2567L55.8888 89.2566L55.8075 89.2427ZM55.8057 89.2829L55.7233 89.286V89.286L55.8057 89.2829ZM55.8084 89.3224L55.7263 89.3298L55.8084 89.3224ZM55.8141 89.3797L55.8962 89.3711L55.8141 89.3797ZM55.8223 89.4821L55.9049 89.4887L55.9048 89.4812L55.8223 89.4821ZM55.79 89.59L55.8557 89.6399V89.6399L55.79 89.59ZM55.7556 89.6285L55.8153 89.6854V89.6854L55.7556 89.6285ZM55.7501 89.6342L55.8099 89.6911L55.7501 89.6342ZM55.6971 89.6942L55.7381 89.7658L55.7516 89.758L55.7614 89.7459L55.6971 89.6942ZM55.5993 89.7544L55.555 89.6848V89.6848L55.5993 89.7544ZM55.5705 89.7726L55.6145 89.8424L55.5705 89.7726ZM55.442 89.8444L55.4749 89.9201V89.9201L55.442 89.8444ZM55.4326 89.8485L55.3997 89.7728L55.3904 89.7769L55.3823 89.7831L55.4326 89.8485ZM55.4246 89.8547L55.3743 89.7893L55.4246 89.8547ZM55.1694 89.9793L55.0916 90.0067L55.119 90.0845L55.1969 90.0571L55.1694 89.9793ZM55.1694 89.9791L55.2472 89.9517L55.2183 89.8697L55.1379 89.9029L55.1694 89.9791ZM55.1654 89.9808L55.1969 90.0571L55.1969 90.0571L55.1654 89.9808ZM55.128 89.996L55.1588 90.0725L55.128 89.996ZM54.8725 90.1254L54.9174 90.1949L54.9224 90.1911L54.8725 90.1254ZM54.7518 90.2687L54.8274 90.3019V90.3019L54.7518 90.2687ZM54.7311 90.3203L54.6539 90.2911L54.7311 90.3203ZM54.6968 90.3951L54.6257 90.3532L54.6968 90.3951ZM54.6838 90.4171L54.6128 90.3752L54.5998 90.3972L54.6015 90.4226L54.6838 90.4171ZM54.6855 90.4426L54.6032 90.448L54.6855 90.4426ZM54.7232 90.6328L54.6471 90.6647L54.7232 90.6328ZM54.8222 90.7639L54.8973 90.7298L54.8894 90.7124L54.8747 90.7002L54.8222 90.7639ZM54.9245 90.9198L54.9802 90.9807L55.0387 90.9271L54.9876 90.8666L54.9245 90.9198ZM54.7122 91.1142L54.6564 91.0534L54.7122 91.1142ZM54.5689 91.2453L54.5132 91.1844L54.37 91.3155L54.5638 91.3276L54.5689 91.2453ZM54.7627 91.2574L54.7576 91.3397L54.7627 91.2574ZM54.8308 91.2652L54.8184 91.3468H54.8184L54.8308 91.2652ZM54.843 91.2671L54.8303 91.3486H54.8303L54.843 91.2671ZM54.8993 91.2748L54.8911 91.3569L54.8993 91.2748ZM55.0639 91.2549L55.0483 91.1728L55.0359 91.1773L55.0639 91.2549ZM55.1856 91.2119L55.2321 91.28L55.1856 91.2119ZM55.2327 91.1561L55.3086 91.1886L55.2327 91.1561ZM55.2399 91.0845L55.321 91.0693L55.2399 91.0845ZM55.1974 90.9936L55.1285 91.0389L55.1974 90.9936ZM55.1803 90.9681L55.2486 90.9218V90.9218L55.1803 90.9681ZM55.1561 90.9316L55.1004 90.8707L55.0493 90.9174L55.0865 90.9758L55.1561 90.9316ZM56.7006 89.5179L56.6449 89.4571L56.7006 89.5179ZM56.8689 89.3638L56.9246 89.4247L57.093 89.2705L56.865 89.2814L56.8689 89.3638ZM56.6409 89.3747L56.637 89.2923L56.6409 89.3747ZM56.5721 89.3814L56.5629 89.2994L56.5721 89.3814ZM56.5528 89.3835L56.5438 89.3015L56.5528 89.3835ZM56.427 89.395L56.4217 89.3127L56.427 89.395ZM56.2984 89.3967L56.2934 89.479L56.2984 89.3967ZM56.217 89.382L56.2512 89.3069L56.217 89.382ZM56.2098 89.3787L56.244 89.3036L56.2368 89.3003L56.2291 89.2985L56.2098 89.3787ZM56.2021 89.3768L56.2214 89.2966L56.2021 89.3768ZM55.0328 91.0444L55.1014 90.9987L55.048 90.9186L54.9771 90.9836L55.0328 91.0444ZM55.0466 91.0651L55.115 91.0188L55.115 91.0188L55.0466 91.0651ZM55.0596 91.0843L54.9906 91.1296L54.9906 91.1296L55.0596 91.0843ZM55.0611 91.0866L55.0815 91.1666L55.1932 91.1381L55.1302 91.0416L55.0611 91.0866ZM55.0271 91.0939L55.0124 91.0127H55.0124L55.0271 91.0939ZM55.0196 91.0953L55.0049 91.0141L54.9974 91.0154L54.9902 91.0182L55.0196 91.0953ZM55.0125 91.098L54.9831 91.0209H54.9831L55.0125 91.098ZM54.9599 91.1111L54.9042 91.0502L54.7203 91.2185L54.9684 91.1932L54.9599 91.1111ZM56.4088 89.5613L56.4645 89.6221L56.633 89.4679L56.4049 89.4789L56.4088 89.5613ZM55.0464 90.8083L54.9829 90.861L55.0382 90.9276L55.1021 90.8692L55.0464 90.8083ZM56.2885 89.5614L56.2934 89.479L56.2885 89.5614ZM56.1565 89.5356L56.1882 89.4584L56.1766 89.4555L56.1565 89.5356ZM55.9867 89.4613L56.0331 89.3931L55.8964 89.3002L55.9043 89.4653L55.9867 89.4613ZM55.9874 89.4913L55.9812 89.5735L56.0699 89.5802V89.4913H55.9874ZM55.9871 89.4912L55.9933 89.409L55.911 89.4028L55.9049 89.4851L55.9871 89.4912ZM55.9214 89.6899L55.8557 89.6399L55.9214 89.6899ZM55.8753 89.742L55.935 89.799L55.935 89.799L55.8753 89.742ZM55.8697 89.7479L55.9295 89.8048V89.8048L55.8697 89.7479ZM55.8174 89.8082L55.8829 89.8584L55.8174 89.8082ZM55.8068 89.822L55.8466 89.8943L55.8618 89.8859L55.8723 89.8721L55.8068 89.822ZM55.7916 89.8303L55.8314 89.9026L55.8314 89.9026L55.7916 89.8303ZM55.6906 89.8918L55.7349 89.9615L55.6906 89.8918ZM55.6585 89.9122L55.7024 89.982L55.6585 89.9122ZM55.5171 89.9916L55.4829 89.9165L55.4749 89.9201L55.4678 89.9254L55.5171 89.9916ZM55.2263 90.1341L55.1988 90.0563L55.1949 90.0579L55.2263 90.1341ZM55.1862 90.1505L55.2173 90.227L55.1862 90.1505ZM54.9703 90.2583L55.0208 90.3236V90.3236L54.9703 90.2583ZM54.9641 90.2632L54.8943 90.3072L54.9428 90.3839L55.0146 90.3284L54.9641 90.2632ZM54.9639 90.2628L55.0336 90.2188L54.9896 90.149L54.9199 90.1931L54.9639 90.2628ZM54.9029 90.3351L54.8274 90.3019L54.9029 90.3351ZM54.8918 90.3629L54.8148 90.3333L54.8918 90.3629ZM54.852 90.4552L54.7786 90.4175L54.7677 90.4387L54.7698 90.4625L54.852 90.4552ZM54.8753 90.5689L54.9514 90.5369L54.8753 90.5689ZM54.9389 90.6457L54.9879 90.5793H54.9879L54.9389 90.6457ZM54.9581 90.6599L55.035 90.63L55.0263 90.6077L55.0071 90.5935L54.9581 90.6599ZM54.9667 90.6822L55.0436 90.6523V90.6523L54.9667 90.6822ZM53.8119 91.1476H53.7294V91.2301H53.8119V91.1476ZM53.8119 91.1474H53.8944V91.0598L53.8069 91.0651L53.8119 91.1474ZM54.2555 91.1476L54.2819 91.0694L54.2691 91.0651H54.2555V91.1476ZM54.2683 91.1519L54.2419 91.2301H54.2419L54.2683 91.1519ZM54.721 91.2842L54.7049 91.3651L54.721 91.2842ZM54.8711 91.3142L54.9298 91.3722L55.0374 91.2633L54.8873 91.2333L54.8711 91.3142ZM54.7635 91.4231L54.8222 91.481L54.7635 91.4231ZM53.2535 92.9511L53.1949 92.8931L53.2535 92.9511ZM53.22 92.985L53.199 93.0648L53.2451 93.0769L53.2787 93.043L53.22 92.985ZM53.1739 92.9729L53.1529 93.0526L53.1739 92.9729ZM53.0985 92.9348L53.0419 92.9949L53.0985 92.9348ZM53.063 92.8807L53.1395 92.8498L53.134 92.8364L53.1243 92.8256L53.063 92.8807ZM52.8709 92.5361L52.9499 92.5121V92.5121L52.8709 92.5361ZM52.8685 92.528L52.7863 92.5355L52.7871 92.5439L52.7895 92.552L52.8685 92.528ZM52.8677 92.5196L52.7855 92.5271L52.8677 92.5196ZM52.8399 92.392L52.7612 92.4167L52.8399 92.392ZM52.8358 92.379L52.9146 92.3546V92.3546L52.8358 92.379ZM52.8044 92.1866L52.7219 92.1874L52.7219 92.1882L52.8044 92.1866ZM52.8044 92.1851H52.7218L52.7219 92.1858L52.8044 92.1851ZM52.8732 91.7996L52.9499 91.8301L52.8732 91.7996ZM52.876 91.7924L52.9135 91.7189L52.8329 91.6778L52.7994 91.7619L52.876 91.7924ZM52.8764 91.7926L52.8389 91.8661L52.9124 91.9035L52.9499 91.8301L52.8764 91.7926ZM53.0047 91.617L52.9428 91.5626L53.0047 91.617ZM53.0755 91.5389L53.0149 91.483L53.0755 91.5389ZM53.0769 91.5374L53.0162 91.4815V91.4815L53.0769 91.5374ZM53.1325 91.476L53.0702 91.422L53.1325 91.476ZM53.1452 91.4614L53.1135 91.3852L53.0956 91.3926L53.0829 91.4073L53.1452 91.4614ZM53.1632 91.4539L53.1949 91.5301L53.1632 91.4539ZM53.4146 91.2776L53.3587 91.217V91.217L53.4146 91.2776ZM53.4159 91.2764L53.4719 91.3371V91.3371L53.4159 91.2764ZM53.4279 91.2654L53.3992 91.1881L53.3839 91.1937L53.372 91.2047L53.4279 91.2654ZM53.4431 91.2597L53.4719 91.3371L53.4431 91.2597ZM53.532 91.2216L53.4973 91.1467L53.532 91.2216ZM53.8069 91.1477L53.8119 91.2301L53.8069 91.1477ZM53.6218 91.3629L53.5868 91.2882L53.6218 91.3629ZM53.8144 91.3126V91.2299L53.8092 91.2302L53.8144 91.3126ZM53.516 91.4086L53.4864 91.3316L53.4717 91.3372L53.4601 91.3479L53.516 91.4086ZM53.2445 91.5986L53.2112 91.5231L53.1948 91.5303L53.1829 91.5437L53.2445 91.5986ZM53.1993 91.6481L53.1386 91.5921L53.1386 91.5921L53.1993 91.6481ZM53.1968 91.6507L53.1362 91.5948L53.1362 91.5948L53.1968 91.6507ZM53.1287 91.7259L53.1907 91.7803L53.1287 91.7259ZM53.025 91.8643L52.9516 91.8255L52.9482 91.8343L53.025 91.8643ZM52.9694 92.1843L52.8868 92.1842L52.8869 92.1859L52.9694 92.1843ZM52.9934 92.3301L52.9146 92.3546L52.9934 92.3301ZM52.9974 92.3427L52.9187 92.3675V92.3675L52.9974 92.3427ZM53.0311 92.4957L52.9491 92.5042L52.9499 92.5125L52.9524 92.5204L53.0311 92.4957ZM53.1926 92.778L53.1319 92.8339L53.1905 92.8974L53.2513 92.836L53.1926 92.778ZM54.5455 91.4089L54.6042 91.4669L54.7025 91.3675L54.5679 91.3295L54.5455 91.4089ZM54.2284 91.3126L54.2544 91.2343L54.2417 91.2301H54.2284V91.3126ZM46.5426 95.6102L46.495 95.598L46.4542 95.7579L46.5019 95.7701L46.5426 95.6102ZM50.0126 96.4952L46.5426 95.6102L46.5019 95.7701L49.9719 96.6551L50.0126 96.4952ZM50.1587 96.5324L50.0126 96.4952L49.9719 96.6551L50.1179 96.6923L50.1587 96.5324ZM50.0846 96.7756L50.1946 96.6726L50.0819 96.5521L49.9719 96.6551L50.0846 96.7756ZM44.6213 100.427C46.2018 99.7659 48.1393 98.5949 50.0846 96.7756L49.9719 96.6551C48.0404 98.4616 46.1194 99.6216 44.5576 100.275L44.6213 100.427ZM42.5545 101.055C43.1277 100.962 43.8313 100.758 44.6213 100.427L44.5576 100.275C43.7767 100.602 43.0857 100.802 42.528 100.893L42.5545 101.055ZM41.2318 101.006C41.5251 101.136 41.99 101.147 42.5545 101.055L42.528 100.893C41.9704 100.983 41.5461 100.965 41.2989 100.855L41.2318 101.006ZM41.2235 100.822L41.1899 100.897L41.3407 100.964L41.3742 100.889L41.2235 100.822ZM41.3407 100.964L41.3742 100.889L41.2235 100.822L41.1899 100.897L41.3407 100.964ZM41.2344 101.007L41.2344 101.007L41.2962 100.854L41.2962 100.854L41.2344 101.007ZM40.9436 100.66C40.955 100.835 41.0869 100.941 41.2318 101.006L41.2988 100.855C41.1742 100.8 41.1136 100.732 41.1083 100.649L40.9436 100.66ZM41.125 100.246C41.0237 100.366 40.9338 100.508 40.9436 100.66L41.1083 100.649C41.1029 100.566 41.1531 100.468 41.2511 100.352L41.125 100.246ZM42.2501 99.2908C41.7403 99.6814 41.3353 99.9969 41.125 100.246L41.2511 100.352C41.447 100.12 41.8342 99.8173 42.3505 99.4218L42.2501 99.2908ZM42.3962 99.179C42.3465 99.2171 42.2978 99.2543 42.2501 99.2908L42.3505 99.4218C42.3981 99.3854 42.4467 99.3481 42.4965 99.3101L42.3962 99.179ZM46.3806 95.6581C44.8939 97.2685 43.4253 98.3919 42.3962 99.179L42.4965 99.3101C43.526 98.5226 45.0046 97.3918 46.5019 95.7701L46.3806 95.6581ZM46.414 95.622L46.3806 95.6581L46.5019 95.7701L46.5352 95.7339L46.414 95.622ZM42.5978 99.4403C43.62 98.6585 45.094 97.5312 46.5896 95.9182L46.4686 95.8061C44.9833 97.4079 43.5193 98.5278 42.4976 99.3093L42.5978 99.4403ZM42.4508 99.5528C42.4987 99.5161 42.5477 99.4786 42.5978 99.4403L42.4976 99.3093C42.4475 99.3476 42.3984 99.3851 42.3505 99.4218L42.4508 99.5528ZM41.3771 100.459C41.5587 100.244 41.928 99.9533 42.4508 99.5528L42.3505 99.4218C41.8342 99.8173 41.447 100.12 41.2511 100.352L41.3771 100.459ZM41.2729 100.638C41.2726 100.634 41.2736 100.617 41.2892 100.585C41.3044 100.554 41.3317 100.512 41.3771 100.459L41.2511 100.352C41.2001 100.412 41.1641 100.466 41.1409 100.513C41.118 100.56 41.1055 100.606 41.1083 100.649L41.2729 100.638ZM41.3659 100.704C41.3149 100.682 41.2913 100.663 41.2808 100.651C41.2759 100.646 41.2742 100.642 41.2736 100.641C41.2731 100.64 41.273 100.639 41.2729 100.638L41.1083 100.649C41.1136 100.732 41.1738 100.799 41.2989 100.855L41.3659 100.704ZM41.3654 100.704L41.3653 100.704L41.2994 100.855L41.2994 100.855L41.3654 100.704ZM42.5015 100.73C41.9507 100.819 41.5671 100.794 41.3659 100.704L41.2989 100.855C41.5461 100.965 41.9704 100.983 42.528 100.893L42.5015 100.73ZM44.4939 100.123C43.7222 100.446 43.0437 100.641 42.5015 100.73L42.528 100.893C43.0857 100.802 43.7767 100.602 44.5576 100.275L44.4939 100.123ZM49.7489 96.637C47.8685 98.3721 46.0073 99.4896 44.4939 100.123L44.5576 100.275C46.0894 99.6341 47.9668 98.5058 49.8608 96.7582L49.7489 96.637ZM46.5087 95.9421L49.7845 96.7776L49.8252 96.6177L46.5494 95.7822L46.5087 95.9421ZM59.6094 86.2936L59.6535 86.0423L59.4909 86.0138L59.4469 86.2651L59.6094 86.2936ZM59.5969 86.3852C59.6028 86.3394 59.6069 86.3076 59.6094 86.2936L59.4469 86.2651C59.4436 86.2838 59.4388 86.3209 59.4332 86.3641L59.5969 86.3852ZM59.585 86.4759C59.5894 86.4431 59.5934 86.4122 59.5969 86.3852L59.4332 86.3641C59.4298 86.3911 59.4258 86.4216 59.4215 86.4539L59.585 86.4759ZM59.5477 86.7035C59.5617 86.643 59.5748 86.5521 59.585 86.4759L59.4215 86.4539C59.4111 86.5315 59.3989 86.6146 59.387 86.6663L59.5477 86.7035ZM59.52 87.0405C59.5341 86.937 59.5491 86.8274 59.5498 86.6853L59.3848 86.6845C59.3842 86.8148 59.3706 86.915 59.3565 87.0182L59.52 87.0405ZM59.5183 87.0524C59.5189 87.0484 59.5194 87.0445 59.52 87.0405L59.3565 87.0182C59.3559 87.0221 59.3554 87.0261 59.3549 87.0301L59.5183 87.0524ZM59.5169 87.0632L59.5183 87.0524L59.3549 87.0301L59.3534 87.0409L59.5169 87.0632ZM59.5069 87.0941L59.5112 87.084L59.3591 87.02L59.3549 87.0301L59.5069 87.0941ZM59.4894 87.1452C59.4964 87.1228 59.5009 87.1083 59.5069 87.0941L59.3549 87.0301C59.3452 87.0529 59.3384 87.0751 59.3318 87.0962L59.4894 87.1452ZM59.4885 87.1482L59.4894 87.1452L59.3318 87.0962L59.3309 87.0992L59.4885 87.1482ZM59.4566 87.2332C59.472 87.2014 59.4819 87.1691 59.4885 87.1482L59.3309 87.0991C59.3241 87.1211 59.3174 87.1421 59.3081 87.1612L59.4566 87.2332ZM59.3774 87.3374C59.4155 87.3046 59.4399 87.2675 59.4566 87.2332L59.3081 87.1612C59.2988 87.1803 59.287 87.1975 59.2699 87.2122L59.3774 87.3374ZM59.2812 87.3945C59.3164 87.3806 59.3488 87.3619 59.3774 87.3374L59.2699 87.2122C59.2569 87.2234 59.2409 87.233 59.2208 87.2409L59.2812 87.3945ZM59.1863 87.5017C59.2349 87.4653 59.2756 87.4219 59.3168 87.3675L59.1852 87.2679C59.1502 87.3141 59.1202 87.3451 59.0875 87.3696L59.1863 87.5017ZM59.0294 87.5876C59.0824 87.5647 59.1352 87.5399 59.1863 87.5017L59.0875 87.3696C59.0525 87.3957 59.0144 87.4144 58.964 87.4361L59.0294 87.5876ZM58.7061 87.7563C58.8265 87.7081 58.9536 87.647 59.046 87.578L58.9473 87.4458C58.8721 87.5019 58.7606 87.5568 58.6449 87.6031L58.7061 87.7563ZM58.7049 87.7567L58.7061 87.7563L58.6449 87.6031L58.6437 87.6035L58.7049 87.7567ZM58.5974 87.7101L58.5974 87.7101L58.7512 87.6502L58.7512 87.6502L58.5974 87.7101ZM58.2464 87.7922C58.4039 87.8218 58.5475 87.8169 58.7037 87.7572L58.6449 87.6031C58.5219 87.6501 58.4099 87.6551 58.2769 87.6301L58.2464 87.7922ZM58.2313 87.7894L58.2464 87.7922L58.2769 87.6301L58.2618 87.6272L58.2313 87.7894ZM58.1901 87.7704L58.2031 87.7785L58.2899 87.6381L58.2769 87.6301L58.1901 87.7704ZM58.1006 87.7114C58.1279 87.7304 58.1576 87.7503 58.1901 87.7704L58.2769 87.6301C58.2475 87.6119 58.2205 87.5938 58.1949 87.576L58.1006 87.7114ZM57.9919 87.9103L58.2053 87.7028L58.0902 87.5846L57.8769 87.7921L57.9919 87.9103ZM57.7548 87.8151L57.8834 87.9161L57.9853 87.7863L57.8567 87.6853L57.7548 87.8151ZM57.7647 87.6585C57.7556 87.6733 57.7455 87.6899 57.7346 87.7084L57.8769 87.7921C57.887 87.7748 57.8965 87.7593 57.9056 87.7444L57.7647 87.6585ZM57.8351 87.4813C57.8275 87.5546 57.8088 87.586 57.7647 87.6585L57.9056 87.7444C57.9518 87.6685 57.9876 87.6104 57.9992 87.4982L57.8351 87.4813ZM57.8311 87.4401C57.8327 87.4581 57.834 87.4759 57.8348 87.4935L57.9996 87.4861C57.9987 87.4658 57.9973 87.4455 57.9954 87.4252L57.8311 87.4401ZM57.8084 87.3297C57.8159 87.369 57.824 87.4119 57.8328 87.4509L57.9937 87.4144C57.9857 87.3789 57.9781 87.339 57.9706 87.2991L57.8084 87.3297ZM57.8066 87.32C57.8072 87.3232 57.8078 87.3265 57.8084 87.3297L57.9706 87.2991C57.97 87.2958 57.9693 87.2926 57.9687 87.2893L57.8066 87.32ZM57.7776 87.1832C57.7871 87.2184 57.7962 87.265 57.8066 87.32L57.9687 87.2893C57.9586 87.2358 57.9484 87.1826 57.9369 87.1401L57.7776 87.1832ZM57.9888 87.0326L57.8319 87.0831L57.8825 87.2401L58.0394 87.1896L57.9888 87.0326ZM58.1568 87.3809C58.1451 87.2745 58.1223 87.1648 58.0913 87.0821L57.9369 87.1401C57.9615 87.2058 57.982 87.301 57.9928 87.3989L58.1568 87.3809ZM58.1796 87.3619C58.1605 87.3483 58.1407 87.3345 58.1201 87.3209L58.0295 87.4589C58.0478 87.4709 58.0658 87.4834 58.0839 87.4963L58.1796 87.3619ZM59.3318 86.1468L58.0742 87.3699L58.1893 87.4882L59.4469 86.2651L59.3318 86.1468ZM59.5147 85.9689L59.3318 86.1468L59.4469 86.2651L59.6297 86.0872L59.5147 85.9689ZM58.3512 87.482C58.3386 87.474 58.3264 87.466 58.3145 87.4579L58.2223 87.5948C58.2354 87.6036 58.2489 87.6125 58.263 87.6214L58.3512 87.482ZM58.5854 87.4491C58.4994 87.4819 58.4222 87.4877 58.3211 87.4704L58.2932 87.633C58.4192 87.6546 58.5268 87.648 58.6442 87.6033L58.5854 87.4491ZM58.8539 87.3095C58.7974 87.3533 58.6996 87.4034 58.5842 87.4496L58.6455 87.6028C58.7652 87.5549 58.88 87.498 58.9549 87.4401L58.8539 87.3095ZM58.8623 87.3031L58.8539 87.3095L58.9549 87.4401L58.9632 87.4336L58.8623 87.3031ZM58.89 87.2883L58.8803 87.2925L58.9451 87.4442L58.9549 87.4401L58.89 87.2883ZM58.9887 87.2374C58.9685 87.2525 58.9438 87.2654 58.89 87.2883L58.9549 87.4401C59.0098 87.4166 59.0503 87.3973 59.0875 87.3696L58.9887 87.2374ZM59.0661 87.1515C59.0301 87.2014 59.0076 87.2233 58.9887 87.2374L59.0875 87.3696C59.1246 87.3418 59.1584 87.3056 59.1999 87.2481L59.0661 87.1515ZM59.0826 87.1286L59.0661 87.1515L59.1999 87.2481L59.2164 87.2252L59.0826 87.1286ZM59.1532 87.0898L59.1261 87.0978L59.1728 87.256L59.1999 87.2481L59.1532 87.0898ZM59.1624 87.087C59.164 87.0857 59.1647 87.0854 59.1638 87.0859C59.1627 87.0864 59.1595 87.0879 59.1532 87.0898L59.1999 87.2481C59.2304 87.2391 59.2528 87.2269 59.2699 87.2122L59.1624 87.087ZM59.1597 87.0892C59.1586 87.0914 59.1583 87.0916 59.1589 87.0907C59.1597 87.0897 59.1609 87.0883 59.1624 87.087L59.2699 87.2122C59.287 87.1975 59.2988 87.1803 59.3081 87.1612L59.1597 87.0892ZM59.1734 87.0501C59.1661 87.0736 59.1627 87.0829 59.1597 87.0892L59.3081 87.1612C59.3174 87.1421 59.3241 87.1211 59.3309 87.0991L59.1734 87.0501ZM59.1748 87.0456C59.1743 87.0472 59.1738 87.0486 59.1734 87.0501L59.3309 87.0991C59.3314 87.0976 59.3319 87.0961 59.3323 87.0946L59.1748 87.0456ZM59.1978 86.9784C59.1877 87.004 59.1802 87.0282 59.1748 87.0456L59.3323 87.0946C59.3379 87.0767 59.3437 87.058 59.3513 87.0389L59.1978 86.9784ZM59.2199 86.6751C59.2199 86.7985 59.2073 86.8913 59.1928 86.9975L59.3563 87.0198C59.3708 86.9134 59.3849 86.8107 59.3849 86.6751H59.2199ZM59.2199 86.6649V86.6751H59.3849V86.6649H59.2199ZM59.2248 86.635L59.2223 86.6449L59.3824 86.6849L59.3849 86.6751L59.2248 86.635ZM59.2515 86.4792C59.242 86.5464 59.2326 86.6037 59.2248 86.635L59.3849 86.6751C59.3951 86.6341 59.4055 86.5684 59.4148 86.5023L59.2515 86.4792ZM58.3259 87.5855L59.3907 86.5499L59.2756 86.4316L58.2109 87.4672L58.3259 87.5855ZM57.3219 87.7381C57.137 87.7381 57.0094 87.763 56.8793 87.7976L56.9219 87.9571C57.0419 87.9251 57.1549 87.9031 57.3219 87.9031V87.7381ZM57.7519 87.7381H57.3219V87.9031H57.7519V87.7381ZM57.7646 87.7381H57.7519V87.9031H57.7646V87.7381ZM57.846 87.8342L57.8462 87.8332L57.6831 87.8079L57.6829 87.8089L57.846 87.8342ZM58.222 87.8627C58.084 87.7979 57.9379 87.7649 57.7771 87.74L57.7519 87.9031C57.9068 87.9271 58.0348 87.9571 58.1519 88.0121L58.222 87.8627ZM58.2253 87.8643L58.222 87.8627L58.1519 88.0121L58.1551 88.0136L58.2253 87.8643ZM58.2631 87.9774L58.2632 87.9774L58.1172 87.9005L58.1171 87.9005L58.2631 87.9774ZM58.3645 87.9403C58.3379 87.9252 58.2883 87.8973 58.2284 87.8659L58.1519 88.0121C58.2093 88.0422 58.257 88.0691 58.2833 88.0839L58.3645 87.9403ZM58.2704 87.9483L58.2626 87.9569L58.3852 88.0673L58.393 88.0586L58.2704 87.9483ZM58.3953 87.9496C58.3924 87.947 58.3895 87.9444 58.3866 87.9418L58.2769 88.0651C58.2799 88.0678 58.2829 88.0704 58.2858 88.073L58.3953 87.9496ZM58.4173 87.9693C58.4107 87.9633 58.4028 87.9562 58.3953 87.9496L58.2858 88.073C58.2937 88.08 58.3004 88.0859 58.3056 88.0908L58.4173 87.9693ZM58.5442 88.061L58.41 87.9633L58.313 88.0968L58.4472 88.1944L58.5442 88.061ZM58.39 88.2418L58.5173 88.2073L58.4742 88.0481L58.3469 88.0825L58.39 88.2418ZM58.357 88.2594C58.3765 88.2541 58.4005 88.2436 58.4225 88.2244L58.3144 88.0998L58.314 88.1001L58.357 88.2594ZM58.295 88.264C58.3048 88.2651 58.3284 88.2671 58.357 88.2594L58.314 88.1001L58.3137 88.1001L58.295 88.264ZM58.283 88.2622C58.2867 88.2629 58.2907 88.2635 58.295 88.264L58.3137 88.1001L58.3136 88.1L58.283 88.2622ZM56.2682 88.8161L58.3199 88.2608L58.2767 88.1015L56.2251 88.6568L56.2682 88.8161ZM56.3085 88.7918C56.3106 88.789 56.3127 88.7861 56.3147 88.7831L56.1786 88.6898C56.1775 88.6914 56.1764 88.693 56.1753 88.6945L56.3085 88.7918ZM56.2885 88.671C56.281 88.6689 56.2738 88.6667 56.2666 88.6645L56.2172 88.8219C56.2259 88.8246 56.2351 88.8274 56.2449 88.8301L56.2885 88.671ZM56.3118 88.6774L56.2885 88.671L56.2449 88.8301L56.2682 88.8365L56.3118 88.6774ZM56.3674 88.7196L56.3513 88.7017L56.2287 88.8121L56.2448 88.83L56.3674 88.7196ZM56.3631 88.7151C56.3629 88.715 56.363 88.7151 56.3634 88.7155C56.3636 88.7157 56.3639 88.7159 56.3642 88.7162C56.3644 88.7164 56.3645 88.7165 56.3646 88.7166C56.3646 88.7166 56.3646 88.7166 56.3646 88.7166C56.3646 88.7166 56.3646 88.7166 56.3646 88.7166C56.3646 88.7166 56.3645 88.7166 56.3645 88.7165C56.3645 88.7165 56.3643 88.7163 56.3641 88.7161C56.364 88.716 56.3638 88.7158 56.3635 88.7155C56.3633 88.7154 56.3627 88.7147 56.3618 88.714L56.2504 88.8357C56.2496 88.8349 56.2489 88.8343 56.2487 88.8341C56.2485 88.8338 56.2483 88.8336 56.2482 88.8335C56.248 88.8333 56.2478 88.8332 56.2478 88.8331C56.2477 88.8331 56.2477 88.8331 56.2477 88.8331C56.2477 88.8331 56.2477 88.8331 56.2478 88.8331C56.2479 88.8333 56.2482 88.8335 56.2484 88.8338C56.249 88.8343 56.2496 88.8349 56.2503 88.8356C56.2518 88.837 56.2534 88.8385 56.2554 88.8402L56.3631 88.7151ZM56.3686 88.7195C56.3654 88.7171 56.3637 88.7157 56.3631 88.7151L56.2554 88.8402C56.2596 88.8438 56.2644 88.8476 56.2696 88.8515L56.3686 88.7195ZM56.3847 88.7308C56.3781 88.7264 56.3727 88.7226 56.3686 88.7195L56.2696 88.8515C56.2767 88.8568 56.2845 88.8623 56.2927 88.8678L56.3847 88.7308ZM56.4839 88.7924C56.4488 88.7626 56.4106 88.7403 56.3712 88.7235L56.3062 88.8752C56.3327 88.8865 56.3563 88.9005 56.377 88.9182L56.4839 88.7924ZM56.5002 88.8003L56.4716 88.7838L56.3893 88.9268L56.4179 88.9433L56.5002 88.8003ZM56.501 88.8007L56.5003 88.8003L56.4178 88.9432L56.4184 88.9436L56.501 88.8007ZM56.5292 88.8182C56.5196 88.8114 56.5063 88.8038 56.501 88.8007L56.4184 88.9436C56.4218 88.9455 56.4252 88.9475 56.4285 88.9495C56.4301 88.9504 56.4314 88.9513 56.4325 88.952C56.4331 88.9523 56.4335 88.9526 56.4338 88.9528C56.4341 88.953 56.4343 88.9531 56.4343 88.9531L56.5292 88.8182ZM56.5399 88.8263C56.5352 88.8225 56.5312 88.8196 56.5292 88.8182L56.4343 88.9531L56.435 88.9536L56.5399 88.8263ZM56.5396 88.826L56.5399 88.8263L56.435 88.9537L56.4356 88.9541L56.5396 88.826ZM56.5709 88.8599C56.5575 88.8406 56.5429 88.8287 56.5395 88.826L56.4356 88.9542L56.4353 88.954L56.5709 88.8599ZM56.571 88.86L56.5708 88.8598L56.4354 88.954L56.4355 88.9542L56.571 88.86ZM56.6004 88.9562C56.601 88.9033 56.5763 88.8677 56.5709 88.86L56.4355 88.9542L56.4354 88.9541L56.6004 88.9562ZM56.5648 89.0564C56.5897 89.0249 56.6 88.9887 56.6004 88.9562L56.4354 88.9541L56.4354 88.9541L56.5648 89.0564ZM56.4946 89.1081C56.5137 89.1008 56.5415 89.0859 56.5648 89.0564L56.4354 88.9541L56.4353 88.9542L56.4946 89.1081ZM56.4249 89.1188C56.4323 89.1193 56.461 89.1211 56.4946 89.1081L56.4353 88.9542L56.4353 88.9542L56.4249 89.1188ZM56.4249 89.1188L56.4249 89.1188L56.4352 88.9542L56.4352 88.9542L56.4249 89.1188ZM56.4006 89.1155C56.405 89.1164 56.4137 89.1181 56.4248 89.1188L56.4352 88.9542L56.435 88.9541L56.4006 89.1155ZM56.3632 89.1031C56.3645 89.1037 56.3812 89.1114 56.4006 89.1155L56.435 88.9541C56.4353 88.9542 56.4344 88.954 56.4326 88.9533C56.4319 88.9531 56.4314 88.9528 56.431 88.9527C56.4309 88.9526 56.4308 88.9526 56.4308 88.9526C56.4308 88.9526 56.4308 88.9526 56.4309 88.9526C56.4309 88.9527 56.4309 88.9527 56.4309 88.9527L56.3632 89.1031ZM56.3633 89.1032L56.3633 89.1032L56.4308 88.9526L56.4307 88.9526L56.3633 89.1032ZM56.3268 89.0864C56.3426 89.0939 56.3557 89.0999 56.3646 89.1037L56.4295 88.952C56.4236 88.9495 56.4131 88.9447 56.3969 88.9371L56.3268 89.0864ZM56.3124 89.0797L56.3268 89.0864L56.3969 88.9371L56.3825 88.9303L56.3124 89.0797ZM56.2765 89.0499L56.2873 89.0615L56.4077 88.9486L56.3969 88.9371L56.2765 89.0499ZM56.2745 89.0478C56.2751 89.0485 56.2758 89.0492 56.2765 89.0499L56.3969 88.9371C56.3948 88.9349 56.3928 88.9328 56.3907 88.9308L56.2745 89.0478ZM56.2165 89.0152C56.2417 89.0314 56.2685 89.0474 56.291 89.0606L56.3742 88.918C56.3525 88.9054 56.3281 88.8908 56.3061 88.8766L56.2165 89.0152ZM56.0485 88.9947C56.1395 89.001 56.1956 89.0096 56.2328 89.0233L56.2898 88.8685C56.2284 88.8459 56.1514 88.8364 56.0599 88.8301L56.0485 88.9947ZM55.9272 88.9863L56.0485 88.9947L56.0599 88.8301L55.9386 88.8217L55.9272 88.9863ZM55.8808 88.8219L55.8585 88.8683L56.0073 88.9397L56.0296 88.8932L55.8808 88.8219ZM55.9215 88.9337L55.9325 88.9369L55.9778 88.7782L55.9669 88.7751L55.9215 88.9337ZM55.8281 88.9379C55.8683 88.9267 55.8913 88.9251 55.9215 88.9337L55.9669 88.7751C55.8969 88.7551 55.8406 88.7631 55.7837 88.7789L55.8281 88.9379ZM55.7879 88.9503C55.8046 88.9449 55.8175 88.9408 55.8281 88.9379L55.7837 88.7789C55.7695 88.7829 55.7533 88.7881 55.7376 88.7931L55.7879 88.9503ZM55.6384 88.9903C55.6959 88.9798 55.7494 88.9626 55.7879 88.9503L55.7376 88.7931C55.6981 88.8058 55.6543 88.8197 55.6088 88.828L55.6384 88.9903ZM55.5435 89.0326C55.5886 89.02 55.627 89.0005 55.6618 88.9823L55.5854 88.8361C55.5507 88.8542 55.5259 88.8662 55.4991 88.8737L55.5435 89.0326ZM55.3819 89.0501C55.4405 89.0501 55.4916 89.0471 55.5435 89.0326L55.4991 88.8737C55.4691 88.8821 55.4358 88.8851 55.3819 88.8851V89.0501ZM55.2785 88.8163L55.3001 88.9784L55.4636 88.9567L55.4421 88.7946L55.2785 88.8163ZM56.1092 88.5172L55.3387 88.7258L55.3819 88.8851L56.1524 88.6765L56.1092 88.5172ZM56.052 88.5721C56.0517 88.5732 56.0515 88.5741 56.0512 88.5751L56.2104 88.6187C56.2109 88.6168 56.2114 88.615 56.2119 88.6131L56.052 88.5721ZM56.0593 88.5438L56.052 88.5721L56.2119 88.6131L56.2191 88.5848L56.0593 88.5438ZM56.1134 88.4807L56.0899 88.4981L56.1884 88.6305L56.2119 88.6131L56.1134 88.4807ZM56.1864 88.3963C56.1493 88.4456 56.1299 88.4684 56.1134 88.4807L56.2119 88.6131C56.2509 88.584 56.2843 88.5406 56.3182 88.4954L56.1864 88.3963ZM56.1922 88.3885C56.1902 88.3911 56.1883 88.3937 56.1864 88.3963L56.3182 88.4954C56.3202 88.4928 56.3222 88.4902 56.3242 88.4875L56.1922 88.3885ZM56.3074 88.2535C56.2594 88.2986 56.2206 88.3506 56.1922 88.3885L56.3242 88.4875C56.3537 88.4482 56.3844 88.4075 56.4204 88.3737L56.3074 88.2535ZM56.5244 88.009C56.3988 88.087 56.3418 88.1813 56.2914 88.2742L56.4364 88.3529C56.4827 88.2675 56.523 88.2041 56.6115 88.1491L56.5244 88.009ZM56.6772 87.9172C56.631 87.9416 56.5705 87.9733 56.5179 88.0135L56.618 88.1447C56.6579 88.1142 56.7059 88.0887 56.7543 88.0631L56.6772 87.9172ZM56.6921 87.9093C56.6873 87.9119 56.6823 87.9145 56.6772 87.9172L56.7543 88.0631C56.7594 88.0604 56.7645 88.0577 56.7695 88.0551L56.6921 87.9093ZM56.8117 87.8342C56.7852 87.858 56.7482 87.8796 56.6921 87.9093L56.7695 88.0551C56.824 88.0261 56.8783 87.9961 56.9219 87.9571L56.8117 87.8342ZM56.8264 87.821L56.8117 87.8342L56.9219 87.9571L56.9366 87.9439L56.8264 87.821ZM56.8793 87.7976L56.8602 87.8027L56.9028 87.9622L56.9219 87.9571L56.8793 87.7976ZM56.4658 88.5738C56.4949 88.5353 56.5163 88.5088 56.539 88.4888L56.4299 88.3651C56.3933 88.3973 56.3629 88.4362 56.3342 88.4742L56.4658 88.5738ZM56.539 88.4888L56.5501 88.479L56.4409 88.3553L56.4299 88.3651L56.539 88.4888ZM56.5682 88.4562L56.5752 88.4432L56.4299 88.3651L56.4229 88.3781L56.5682 88.4562ZM56.5752 88.4432C56.6226 88.355 56.6454 88.3217 56.7008 88.2879L56.6149 88.1471C56.5198 88.2051 56.4798 88.2721 56.4299 88.3651L56.5752 88.4432ZM56.5874 88.2605L56.5877 88.2609L56.7285 88.1749L56.7283 88.1745L56.5874 88.2605ZM56.7088 88.2831L56.7162 88.2773L56.6149 88.1471L56.6075 88.1528L56.7088 88.2831ZM56.7162 88.2773C56.7443 88.2554 56.7802 88.2361 56.8334 88.2079L56.7562 88.0621C56.7066 88.0884 56.6567 88.1145 56.6149 88.1471L56.7162 88.2773ZM56.8334 88.2079C56.8378 88.2056 56.8423 88.2032 56.8468 88.2008L56.7695 88.0551C56.765 88.0574 56.7606 88.0598 56.7562 88.0621L56.8334 88.2079ZM56.8468 88.2008C56.8951 88.1752 56.9577 88.1415 57.0134 88.0959L56.9088 87.9682C56.8674 88.0022 56.8184 88.0291 56.7695 88.0551L56.8468 88.2008ZM56.9818 88.1119C57.0846 88.0853 57.1803 88.0681 57.3219 88.0681V87.9031C57.1638 87.9031 57.054 87.9228 56.9404 87.9522L56.9818 88.1119ZM57.3219 88.0681H57.7455V87.9031H57.3219V88.0681ZM57.7327 88.0671C57.8612 88.0872 57.9603 88.1104 58.0468 88.146L58.1096 87.9935C58.0057 87.9507 57.892 87.925 57.7582 87.9041L57.7327 88.0671ZM58.0567 87.9901L56.3784 88.4444L56.4215 88.6036L58.0998 88.1494L58.0567 87.9901ZM58.314 88.1001L58.3137 88.1001L58.324 87.9354C58.3121 87.9346 58.2931 87.9348 58.2711 87.9407L58.314 88.1001ZM58.3143 88.1L58.314 88.1001L58.2711 87.9407C58.2683 87.9415 58.2656 87.9423 58.2628 87.9432L58.3143 88.1ZM58.3744 88.023L58.3681 88.0001L58.2089 88.0432L58.2151 88.0661L58.3744 88.023ZM58.2575 87.9625L58.2334 87.9894L58.3561 88.0997L58.3802 88.0729L58.2575 87.9625ZM56.0457 89.1789C56.042 89.1723 56.0371 89.1645 56.0311 89.1564L55.8986 89.2547C55.8997 89.2562 55.9011 89.2583 55.9026 89.261L56.0457 89.1789ZM56.0311 89.1564L56.031 89.1563L55.8985 89.2546L55.8986 89.2547L56.0311 89.1564ZM56.031 89.1563C56.0258 89.1493 56.0029 89.1179 55.9603 89.0992L55.8939 89.2502C55.8954 89.2509 55.897 89.2526 55.8985 89.2546L56.031 89.1563ZM55.9603 89.0992C55.934 89.0876 55.894 89.0784 55.8485 89.0909L55.8922 89.25C55.8926 89.2499 55.8931 89.2499 55.8939 89.2502L55.9603 89.0992ZM55.8485 89.0909C55.8038 89.1032 55.7752 89.1305 55.7595 89.1511L55.8907 89.2511C55.8913 89.2504 55.8918 89.2501 55.8922 89.25L55.8485 89.0909ZM55.7595 89.1511C55.7334 89.1853 55.7276 89.2205 55.7262 89.2287L55.8888 89.2566C55.8892 89.2545 55.8898 89.2523 55.8907 89.2511L55.7595 89.1511ZM55.7262 89.2287L55.7262 89.2288L55.8888 89.2566L55.8889 89.2565L55.7262 89.2287ZM55.7262 89.2288C55.7222 89.2522 55.7229 89.275 55.7233 89.286L55.8882 89.2798C55.888 89.2754 55.8879 89.2709 55.888 89.2666C55.8881 89.2621 55.8885 89.2588 55.8888 89.2567L55.7262 89.2288ZM55.7233 89.286C55.7238 89.3002 55.725 89.3155 55.7263 89.3298L55.8906 89.3151C55.8894 89.3018 55.8885 89.2898 55.8882 89.2798L55.7233 89.286ZM55.7263 89.3298C55.728 89.3495 55.7301 89.3695 55.7321 89.3883L55.8962 89.3711C55.8942 89.3521 55.8922 89.3333 55.8906 89.3151L55.7263 89.3298ZM55.7321 89.3883C55.7363 89.4289 55.7396 89.4612 55.7398 89.4829L55.9048 89.4812C55.9045 89.4499 55.9001 89.4085 55.8962 89.3711L55.7321 89.3883ZM55.7401 89.4755C55.7378 89.5043 55.7341 89.5193 55.7314 89.5271C55.7293 89.5332 55.7275 89.536 55.7244 89.5401L55.8557 89.6399C55.8665 89.6257 55.8782 89.6076 55.8874 89.5809C55.8961 89.5557 55.9016 89.5259 55.9046 89.4887L55.7401 89.4755ZM55.7244 89.5401C55.7191 89.5471 55.7126 89.5541 55.6958 89.5716L55.8153 89.6854C55.8301 89.6699 55.8437 89.6557 55.8557 89.6399L55.7244 89.5401ZM55.6958 89.5716C55.6941 89.5735 55.6923 89.5754 55.6903 89.5774L55.8099 89.6911C55.8118 89.6891 55.8136 89.6872 55.8153 89.6854L55.6958 89.5716ZM55.6903 89.5774C55.6746 89.594 55.6547 89.6153 55.6328 89.6426L55.7614 89.7459C55.779 89.724 55.7951 89.7067 55.8099 89.6911L55.6903 89.5774ZM55.6561 89.6226C55.6215 89.6424 55.5864 89.6648 55.555 89.6848L55.6436 89.824C55.6756 89.8036 55.7074 89.7834 55.7381 89.7658L55.6561 89.6226ZM55.555 89.6848C55.5452 89.691 55.5357 89.697 55.5265 89.7028L55.6145 89.8424C55.6241 89.8364 55.6338 89.8302 55.6436 89.824L55.555 89.6848ZM55.5265 89.7028C55.4803 89.732 55.4425 89.7542 55.4091 89.7688L55.4749 89.9201C55.5209 89.9001 55.5679 89.8718 55.6145 89.8424L55.5265 89.7028ZM55.4091 89.7688L55.3997 89.7728L55.4655 89.9241L55.4749 89.9201L55.4091 89.7688ZM55.3823 89.7831L55.3743 89.7893L55.4749 89.9201L55.4829 89.9139L55.3823 89.7831ZM55.3743 89.7893C55.3181 89.8325 55.2439 89.8655 55.142 89.9014L55.1969 90.0571C55.3018 90.0201 55.3968 89.9801 55.4749 89.9201L55.3743 89.7893ZM55.2472 89.9518L55.2472 89.9517L55.0916 90.0066L55.0916 90.0067L55.2472 89.9518ZM55.1379 89.9029L55.1339 89.9046L55.1969 90.0571L55.2009 90.0554L55.1379 89.9029ZM55.1339 89.9046C55.1225 89.9093 55.1103 89.9142 55.0971 89.9195L55.1588 90.0725C55.1718 90.0673 55.1847 90.0621 55.1969 90.0571L55.1339 89.9046ZM55.0971 89.9195C55.0192 89.9509 54.9071 89.9956 54.8226 90.0597L54.9224 90.1911C54.986 90.1428 55.076 90.1059 55.1588 90.0725L55.0971 89.9195ZM54.8277 90.0561C54.7443 90.11 54.7032 90.1744 54.6763 90.2355L54.8274 90.3019C54.8449 90.2621 54.8677 90.2267 54.9172 90.1947L54.8277 90.0561ZM54.6763 90.2355C54.6665 90.2579 54.6596 90.2761 54.6539 90.2911L54.8083 90.3494C54.8139 90.3345 54.8194 90.32 54.8274 90.3019L54.6763 90.2355ZM54.6539 90.2911C54.6446 90.3159 54.6387 90.3313 54.6257 90.3532L54.7679 90.4371C54.7885 90.402 54.7986 90.3752 54.8083 90.3494L54.6539 90.2911ZM54.6257 90.3532L54.6128 90.3752L54.7549 90.459L54.7679 90.4371L54.6257 90.3532ZM54.6015 90.4226L54.6032 90.448L54.7679 90.4371L54.7662 90.4116L54.6015 90.4226ZM54.6032 90.448C54.6081 90.5211 54.618 90.5954 54.6471 90.6647L54.7992 90.6008C54.7808 90.557 54.7724 90.5045 54.7679 90.4371L54.6032 90.448ZM54.6471 90.6647C54.6746 90.7301 54.7156 90.783 54.7698 90.8276L54.8747 90.7002C54.8395 90.6712 54.8155 90.6397 54.7992 90.6008L54.6471 90.6647ZM54.7471 90.798C54.7764 90.8626 54.8189 90.9226 54.8615 90.9731L54.9876 90.8666C54.9508 90.8231 54.9183 90.776 54.8973 90.7298L54.7471 90.798ZM54.8688 90.859L54.6564 91.0534L54.7679 91.1751L54.9802 90.9807L54.8688 90.859ZM54.6564 91.0534L54.5132 91.1844L54.6246 91.3062L54.7679 91.1751L54.6564 91.0534ZM54.5638 91.3276L54.7576 91.3397L54.7679 91.1751L54.5741 91.163L54.5638 91.3276ZM54.7576 91.3397C54.7783 91.341 54.7973 91.3436 54.8184 91.3468L54.8432 91.1836C54.8204 91.1802 54.7959 91.1768 54.7679 91.1751L54.7576 91.3397ZM54.8184 91.3468C54.8222 91.3474 54.8261 91.348 54.8303 91.3486L54.8557 91.1856C54.8515 91.1849 54.8473 91.1843 54.8431 91.1836L54.8184 91.3468ZM54.8303 91.3486C54.8477 91.3513 54.8695 91.3547 54.8911 91.3569L54.9075 91.1927C54.8911 91.1911 54.8738 91.1884 54.8557 91.1856L54.8303 91.3486ZM54.8911 91.3569C54.9503 91.3628 55.0147 91.3603 55.0919 91.3325L55.0359 91.1773C54.9864 91.1951 54.9475 91.1967 54.9075 91.1927L54.8911 91.3569ZM55.0793 91.3359C55.1283 91.3266 55.1856 91.3118 55.2321 91.28L55.139 91.1438C55.122 91.1554 55.0932 91.1653 55.0485 91.1738L55.0793 91.3359ZM55.2321 91.28C55.2598 91.2611 55.2901 91.2318 55.3086 91.1886L55.1569 91.1237C55.1538 91.1309 55.148 91.1376 55.139 91.1438L55.2321 91.28ZM55.3086 91.1886C55.3274 91.1446 55.3272 91.1022 55.321 91.0693L55.1589 91.0998C55.1605 91.1085 55.16 91.1164 55.1569 91.1237L55.3086 91.1886ZM55.321 91.0693C55.3107 91.0148 55.2797 90.9686 55.2663 90.9483L55.1285 91.0389C55.1355 91.0497 55.1423 91.0602 55.1481 91.0715C55.154 91.0829 55.1575 91.0924 55.1589 91.0998L55.321 91.0693ZM55.2663 90.9483C55.2601 90.9388 55.2541 90.93 55.2486 90.9218L55.112 91.0144C55.1176 91.0227 55.123 91.0306 55.1285 91.0389L55.2663 90.9483ZM55.2486 90.9218C55.2404 90.9097 55.2331 90.8989 55.2257 90.8873L55.0865 90.9758C55.0953 90.9898 55.104 91.0025 55.112 91.0144L55.2486 90.9218ZM55.2118 90.9924L56.7563 89.5788L56.6449 89.4571L55.1004 90.8707L55.2118 90.9924ZM56.7563 89.5788L56.9246 89.4247L56.8132 89.3029L56.6449 89.4571L56.7563 89.5788ZM56.865 89.2814L56.637 89.2923L56.6449 89.4571L56.8729 89.4462L56.865 89.2814ZM56.637 89.2923C56.6181 89.2932 56.5893 89.2964 56.5629 89.2994L56.5813 89.4633C56.6104 89.4601 56.6326 89.4577 56.6449 89.4571L56.637 89.2923ZM56.5629 89.2994C56.5566 89.3001 56.5502 89.3008 56.5438 89.3015L56.5618 89.4655C56.5684 89.4648 56.5749 89.4641 56.5813 89.4633L56.5629 89.2994ZM56.5438 89.3015C56.5069 89.3055 56.4646 89.3099 56.4217 89.3127L56.4322 89.4773C56.479 89.4743 56.5243 89.4696 56.5618 89.4655L56.5438 89.3015ZM56.4217 89.3127C56.3782 89.3154 56.3374 89.3164 56.3033 89.3143L56.2934 89.479C56.3371 89.4816 56.3854 89.4803 56.4322 89.4773L56.4217 89.3127ZM56.3033 89.3143C56.2857 89.3132 56.2725 89.3115 56.2631 89.3097C56.2531 89.3078 56.25 89.3063 56.2512 89.3069L56.1829 89.4571C56.2109 89.4698 56.2499 89.4764 56.2934 89.479L56.3033 89.3143ZM56.2512 89.3069L56.244 89.3036L56.1756 89.4538L56.1829 89.4571L56.2512 89.3069ZM56.2291 89.2985L56.2214 89.2966L56.1829 89.4571L56.1906 89.4589L56.2291 89.2985ZM56.2214 89.2966C56.1794 89.2866 56.1491 89.273 56.1229 89.2546C56.0962 89.2359 56.0702 89.2097 56.0397 89.1698L55.9086 89.2701C55.9451 89.3177 55.9829 89.3579 56.0282 89.3897C56.0741 89.4219 56.1243 89.443 56.1829 89.4571L56.2214 89.2966ZM54.9641 91.0902C54.9692 91.0978 54.974 91.1049 54.9783 91.1113L55.115 91.0188C55.1106 91.0124 55.1061 91.0057 55.1014 90.9987L54.9641 91.0902ZM54.9783 91.1113C54.9833 91.1186 54.9873 91.1246 54.9906 91.1296L55.1285 91.0389C55.1245 91.0328 55.1197 91.0258 55.115 91.0188L54.9783 91.1113ZM54.9906 91.1296C54.9911 91.1303 54.9916 91.131 54.992 91.1317L55.1302 91.0416C55.1296 91.0407 55.1291 91.0398 55.1285 91.0389L54.9906 91.1296ZM55.0407 91.0067C55.0337 91.0085 55.0244 91.0105 55.0124 91.0127L55.0419 91.1751C55.0568 91.1724 55.07 91.1695 55.0815 91.1666L55.0407 91.0067ZM55.0124 91.0127L55.0049 91.0141L55.0343 91.1764L55.0419 91.1751L55.0124 91.0127ZM54.9902 91.0182L54.9831 91.0209L55.0419 91.1751L55.049 91.1723L54.9902 91.0182ZM54.9831 91.0209C54.9692 91.0262 54.9594 91.0282 54.9515 91.029L54.9684 91.1932C54.9923 91.1907 55.0162 91.1848 55.0419 91.1751L54.9831 91.0209ZM55.0157 91.1719L55.0885 91.1053L54.9771 90.9836L54.9042 91.0502L55.0157 91.1719ZM56.3531 89.5004L54.9907 90.7474L55.1021 90.8692L56.4645 89.6221L56.3531 89.5004ZM56.2835 89.6437C56.3265 89.6463 56.371 89.6457 56.4128 89.6437L56.4049 89.4789C56.3667 89.4807 56.3285 89.4811 56.2934 89.479L56.2835 89.6437ZM56.1252 89.6119C56.1782 89.6336 56.2366 89.6409 56.2835 89.6437L56.2934 89.479C56.2528 89.4766 56.2158 89.4707 56.1879 89.4592L56.1252 89.6119ZM55.9403 89.5296C55.9972 89.5682 56.0612 89.5967 56.1364 89.6156L56.1766 89.4555C56.1186 89.441 56.0727 89.42 56.0331 89.3931L55.9403 89.5296ZM56.0699 89.4851C56.0699 89.4762 56.0696 89.4668 56.0691 89.4574L55.9043 89.4653C55.9047 89.4729 55.9049 89.4795 55.9049 89.4851H56.0699ZM56.0699 89.4913V89.4851H55.9049V89.4913H56.0699ZM55.981 89.5735L55.9812 89.5735L55.9935 89.409L55.9933 89.409L55.981 89.5735ZM55.9871 89.7398C56.0372 89.6739 56.0617 89.6004 56.0694 89.4974L55.9049 89.4851C55.8989 89.5651 55.8818 89.6056 55.8557 89.6399L55.9871 89.7398ZM55.935 89.799C55.9492 89.7841 55.9692 89.7633 55.9871 89.7398L55.8557 89.6399C55.8444 89.6549 55.8308 89.6692 55.8157 89.6851L55.935 89.799ZM55.9295 89.8048C55.9313 89.8029 55.9331 89.801 55.935 89.799L55.8157 89.6851C55.8138 89.687 55.8118 89.6891 55.8099 89.6911L55.9295 89.8048ZM55.8829 89.8584C55.8987 89.8376 55.9134 89.8217 55.9295 89.8048L55.8099 89.6911C55.7925 89.7094 55.7731 89.7303 55.7519 89.7581L55.8829 89.8584ZM55.8723 89.8721L55.8829 89.8584L55.7519 89.7581L55.7413 89.7718L55.8723 89.8721ZM55.8314 89.9026L55.8466 89.8943L55.767 89.7497L55.7519 89.7581L55.8314 89.9026ZM55.7349 89.9615C55.7713 89.9383 55.8019 89.9189 55.8314 89.9026L55.7519 89.7581C55.7169 89.7773 55.6817 89.7998 55.6463 89.8222L55.7349 89.9615ZM55.7024 89.982C55.7136 89.975 55.7245 89.9681 55.7349 89.9615L55.6463 89.8222C55.6359 89.8289 55.6253 89.8356 55.6145 89.8424L55.7024 89.982ZM55.5512 90.0667C55.6058 90.0419 55.6581 90.01 55.7024 89.982L55.6145 89.8424C55.5707 89.87 55.5265 89.8967 55.4829 89.9165L55.5512 90.0667ZM55.2538 90.2119C55.3581 90.1751 55.4694 90.1299 55.5663 90.0578L55.4678 89.9254C55.3916 89.9821 55.2998 90.0207 55.1989 90.0564L55.2538 90.2119ZM55.2173 90.227C55.2305 90.2216 55.2441 90.2161 55.2578 90.2104L55.1949 90.0579C55.1816 90.0633 55.1684 90.0687 55.1551 90.0741L55.2173 90.227ZM55.0208 90.3236C55.0646 90.2897 55.1303 90.2623 55.2173 90.227L55.1551 90.0741C55.0752 90.1066 54.9853 90.1424 54.9199 90.1931L55.0208 90.3236ZM55.0146 90.3284L55.0208 90.3236L54.9199 90.1931L54.9136 90.1979L55.0146 90.3284ZM54.8941 90.3069L54.8943 90.3072L55.0338 90.2191L55.0336 90.2188L54.8941 90.3069ZM54.9784 90.3683C54.9835 90.3567 54.9868 90.3513 54.9898 90.3476C54.9925 90.3442 54.9972 90.3393 55.0079 90.3326L54.9199 90.1931C54.8684 90.2255 54.8451 90.2615 54.8274 90.3019L54.9784 90.3683ZM54.9688 90.3925C54.9734 90.3805 54.9763 90.3731 54.9784 90.3683L54.8274 90.3019C54.8233 90.3111 54.8189 90.3228 54.8148 90.3333L54.9688 90.3925ZM54.9253 90.493C54.9448 90.4552 54.9592 90.4174 54.9688 90.3925L54.8148 90.3333C54.805 90.3588 54.7934 90.3887 54.7786 90.4175L54.9253 90.493ZM54.9514 90.5369C54.9448 90.5213 54.9384 90.4959 54.9342 90.4479L54.7698 90.4625C54.7747 90.5176 54.7831 90.5624 54.7992 90.6008L54.9514 90.5369ZM54.9879 90.5793C54.9647 90.5622 54.9568 90.55 54.9514 90.5369L54.7992 90.6008C54.8176 90.6445 54.8458 90.6796 54.8899 90.7121L54.9879 90.5793ZM55.0071 90.5935L54.9879 90.5793L54.8899 90.7121L54.9091 90.7263L55.0071 90.5935ZM55.0436 90.6523L55.035 90.63L54.8812 90.6898L54.8899 90.7121L55.0436 90.6523ZM55.1098 90.7556C55.0782 90.7175 55.0549 90.6812 55.0436 90.6523L54.8899 90.7121C54.9103 90.7645 54.9459 90.8165 54.9829 90.861L55.1098 90.7556ZM53.8944 91.1476V91.1474H53.7294V91.1476H53.8944ZM54.2419 91.0651H53.8119V91.2301H54.2419V91.0651ZM54.2555 91.0651H54.2419V91.2301H54.2555V91.0651ZM54.2948 91.0738L54.2819 91.0694L54.229 91.2257L54.2419 91.2301L54.2948 91.0738ZM54.7372 91.2033C54.6733 91.1905 54.4118 91.1135 54.2948 91.0738L54.2419 91.2301C54.3598 91.2701 54.6299 91.3501 54.7049 91.3651L54.7372 91.2033ZM54.8873 91.2333L54.7372 91.2033L54.7049 91.3651L54.8549 91.3951L54.8873 91.2333ZM54.8222 91.481L54.9298 91.3722L54.8124 91.2562L54.7049 91.3651L54.8222 91.481ZM53.3122 93.009L54.8222 91.481L54.7049 91.3651L53.1949 92.8931L53.3122 93.009ZM53.2787 93.043L53.3122 93.009L53.1949 92.8931L53.1613 92.927L53.2787 93.043ZM53.1529 93.0526L53.199 93.0648L53.241 92.9052L53.1949 92.8931L53.1529 93.0526ZM53.0419 92.9949C53.0823 93.0329 53.1286 93.0462 53.1529 93.0526L53.1949 92.8931C53.1761 92.8881 53.1639 92.8831 53.1551 92.8748L53.0419 92.9949ZM52.9865 92.9116C52.9959 92.9351 53.0121 92.9668 53.0419 92.9949L53.1551 92.8748C53.1489 92.8689 53.1439 92.8609 53.1395 92.8498L52.9865 92.9116ZM52.792 92.5601C52.8316 92.6903 52.8946 92.8167 53.0016 92.9358L53.1243 92.8256C53.0358 92.727 52.9836 92.6229 52.9499 92.5121L52.792 92.5601ZM52.7895 92.552L52.792 92.5601L52.9499 92.5121L52.9474 92.504L52.7895 92.552ZM52.7855 92.5271L52.7863 92.5355L52.9506 92.5205L52.9499 92.5121L52.7855 92.5271ZM52.7612 92.4167C52.7731 92.4548 52.7813 92.4811 52.7855 92.5271L52.9499 92.5121C52.944 92.4479 52.9313 92.4077 52.9186 92.3673L52.7612 92.4167ZM52.757 92.4035C52.7585 92.4081 52.7598 92.4125 52.7612 92.4167L52.9186 92.3673C52.9172 92.363 52.9159 92.3588 52.9146 92.3546L52.757 92.4035ZM52.7219 92.1882C52.7238 92.2877 52.7404 92.35 52.757 92.4035L52.9146 92.3546C52.9009 92.3103 52.8884 92.2641 52.8869 92.1851L52.7219 92.1882ZM52.7219 92.1858L52.7219 92.1874L52.8869 92.1859L52.8868 92.1843L52.7219 92.1858ZM52.7965 91.7691C52.7513 91.8827 52.7219 92.0285 52.7219 92.1851H52.8869C52.8869 92.0481 52.9129 91.9231 52.9499 91.8301L52.7965 91.7691ZM52.7994 91.7619L52.7965 91.7691L52.9499 91.8301L52.9527 91.8229L52.7994 91.7619ZM52.9139 91.7191L52.9135 91.7189L52.8386 91.8659L52.8389 91.8661L52.9139 91.7191ZM52.9428 91.5626C52.8955 91.6164 52.8381 91.6861 52.8029 91.7551L52.9499 91.8301C52.9749 91.781 53.0199 91.7248 53.0667 91.6714L52.9428 91.5626ZM53.0149 91.483C52.9929 91.5068 52.9677 91.5342 52.9428 91.5626L53.0667 91.6714C53.0902 91.6448 53.1141 91.6188 53.1362 91.5948L53.0149 91.483ZM53.0162 91.4815L53.0149 91.483L53.1362 91.5948L53.1375 91.5933L53.0162 91.4815ZM53.0702 91.422C53.0563 91.4381 53.0384 91.4575 53.0162 91.4815L53.1375 91.5933C53.1591 91.5699 53.1789 91.5485 53.1949 91.5301L53.0702 91.422ZM53.0829 91.4073L53.0702 91.422L53.1949 91.5301L53.2076 91.5154L53.0829 91.4073ZM53.1315 91.3777L53.1135 91.3852L53.1769 91.5375L53.1949 91.5301L53.1315 91.3777ZM53.3587 91.217C53.2705 91.2983 53.2268 91.3381 53.1315 91.3777L53.1949 91.5301C53.3193 91.4783 53.3813 91.4206 53.4705 91.3383L53.3587 91.217ZM53.36 91.2158L53.3587 91.217L53.4705 91.3383L53.4719 91.3371L53.36 91.2158ZM53.372 91.2047L53.36 91.2158L53.4719 91.3371L53.4838 91.326L53.372 91.2047ZM53.4144 91.1824L53.3992 91.1881L53.4566 91.3427L53.4719 91.3371L53.4144 91.1824ZM53.4973 91.1467C53.4692 91.1597 53.4436 91.1716 53.4144 91.1824L53.4719 91.3371C53.5078 91.3237 53.539 91.3093 53.5666 91.2965L53.4973 91.1467ZM53.802 91.0654C53.6543 91.0742 53.5736 91.1114 53.4973 91.1467L53.5666 91.2965C53.6363 91.2642 53.6947 91.2371 53.8119 91.2301L53.802 91.0654ZM53.8069 91.0651L53.802 91.0654L53.8119 91.2301L53.8168 91.2298L53.8069 91.0651ZM53.6569 91.4375C53.6872 91.4233 53.7052 91.415 53.7266 91.4088C53.7474 91.4027 53.7743 91.3977 53.8195 91.3949L53.8092 91.2302C53.7561 91.2335 53.7163 91.2398 53.6802 91.2504C53.6447 91.2608 53.6156 91.2746 53.5868 91.2882L53.6569 91.4375ZM53.5456 91.4856C53.5946 91.4667 53.6293 91.4505 53.6569 91.4375L53.5868 91.2882C53.5598 91.3008 53.5296 91.315 53.4864 91.3316L53.5456 91.4856ZM53.2777 91.6741C53.4129 91.6146 53.4896 91.5452 53.5719 91.4692L53.4601 91.3479C53.3801 91.4217 53.3201 91.4751 53.2112 91.5231L53.2777 91.6741ZM53.2599 91.704C53.2757 91.6869 53.2917 91.6696 53.306 91.6535L53.1829 91.5437C53.1696 91.5585 53.1546 91.5748 53.1386 91.5921L53.2599 91.704ZM53.2575 91.7066L53.2599 91.704L53.1386 91.5921L53.1362 91.5948L53.2575 91.7066ZM53.1907 91.7803C53.2126 91.7553 53.2353 91.7307 53.2575 91.7066L53.1362 91.5948C53.1141 91.6188 53.0902 91.6448 53.0667 91.6714L53.1907 91.7803ZM53.098 91.9029C53.1134 91.8737 53.1456 91.8317 53.1907 91.7803L53.0667 91.6714C53.021 91.7235 52.9774 91.778 52.9521 91.8257L53.098 91.9029ZM53.0519 92.1843C53.0519 92.0689 53.0738 91.9664 53.1019 91.8943L52.9482 91.8343C52.9122 91.9266 52.887 92.0496 52.8869 92.1842L53.0519 92.1843ZM53.0722 92.3056C53.0613 92.2707 53.053 92.2407 53.0518 92.1826L52.8869 92.1859C52.8884 92.2644 52.9009 92.3105 52.9146 92.3546L53.0722 92.3056ZM53.076 92.3179C53.0747 92.3136 53.0734 92.3095 53.0722 92.3056L52.9146 92.3546C52.916 92.3589 52.9173 92.3633 52.9187 92.3675L53.076 92.3179ZM53.1132 92.4872C53.1052 92.4103 53.0887 92.3579 53.076 92.3179L52.9187 92.3675C52.9306 92.4052 52.9429 92.4446 52.9491 92.5042L53.1132 92.4872ZM53.2532 92.7221C53.1811 92.6438 53.1384 92.5619 53.1099 92.471L52.9524 92.5204C52.9872 92.6312 53.041 92.7354 53.1319 92.8339L53.2532 92.7221ZM54.4868 91.3509L53.1339 92.72L53.2513 92.836L54.6042 91.4669L54.4868 91.3509ZM54.2023 91.3908C54.2826 91.4176 54.416 91.4581 54.5231 91.4883L54.5679 91.3295C54.4626 91.2998 54.3317 91.26 54.2544 91.2343L54.2023 91.3908ZM53.8144 91.3951H54.2284V91.2301H53.8144V91.3951Z"
              fill="#C8242B"
            />
            <Path
              id="Stroke 300"
              d="M52.1775 92.6963L52.1883 92.6145L52.1076 92.6038L52.0959 92.6844L52.1775 92.6963ZM52.1537 92.8595L52.072 92.8476L52.0603 92.9281L52.1406 92.941L52.1537 92.8595ZM52.2013 92.7005L52.1837 92.7811L52.1854 92.7814L52.2013 92.7005ZM52.3406 92.7584L52.3897 92.6921V92.6921L52.3406 92.7584ZM52.3869 92.7979L52.331 92.8586L52.331 92.8586L52.3869 92.7979ZM52.389 92.7999L52.3332 92.8606L52.3332 92.8606L52.389 92.7999ZM52.4356 92.8401L52.3847 92.9051L52.3847 92.9051L52.4356 92.8401ZM52.4479 92.8498L52.519 92.808L52.5111 92.7945L52.4988 92.7848L52.4479 92.8498ZM52.4558 92.8633L52.527 92.8215L52.527 92.8215L52.4558 92.8633ZM52.4804 92.9044L52.5511 92.862V92.862L52.4804 92.9044ZM52.5693 93.0649L52.4947 93.1001L52.4947 93.1001L52.5693 93.0649ZM52.5749 93.0766L52.6567 93.0661L52.655 93.0532L52.6495 93.0415L52.5749 93.0766ZM52.5765 93.0895L52.4947 93.1001V93.1001L52.5765 93.0895ZM52.5844 93.1362L52.5035 93.1525L52.5065 93.1674L52.5146 93.1802L52.5844 93.1362ZM52.5867 93.1399L52.6558 93.0947L52.6557 93.0947L52.5867 93.1399ZM52.591 93.1464L52.6295 93.2194L52.7097 93.1772L52.66 93.1013L52.591 93.1464ZM52.5907 93.1466L52.5522 93.0736L52.4792 93.1121L52.5177 93.1851L52.5907 93.1466ZM52.6602 93.2512L52.5952 93.302L52.5952 93.302L52.6602 93.2512ZM52.6775 93.273L52.6129 93.3244L52.6129 93.3244L52.6775 93.273ZM52.7238 93.3332L52.6568 93.3814L52.6695 93.3991L52.6892 93.4082L52.7238 93.3332ZM52.7982 93.3786L52.8472 93.3122L52.8472 93.3122L52.7982 93.3786ZM52.8087 93.3862L52.7632 93.455L52.7632 93.455L52.8087 93.3862ZM52.8886 93.4056L52.8846 93.4881L52.8886 93.4881L52.8886 93.4056ZM53.0068 93.3956L53.0388 93.4716L53.0388 93.4716L53.0068 93.3956ZM53.0868 93.3264L53.1463 93.3848L53.1534 93.375L53.0868 93.3264ZM53.1329 93.2535L53.0617 93.2118L53.0616 93.2118L53.1329 93.2535ZM53.1344 93.2509L53.0631 93.2093L53.0631 93.2093L53.1344 93.2509ZM53.1566 93.2149L53.2244 93.262L53.2244 93.262L53.1566 93.2149ZM53.1734 93.1945L53.2314 93.2532V93.2532L53.1734 93.1945ZM53.1922 93.1799L53.1501 93.1089L53.1501 93.1089L53.1922 93.1799ZM53.2367 93.1676H53.3192V93.0851H53.2367V93.1676ZM53.2367 93.3326H53.1542V93.4151H53.2367V93.3326ZM53.2763 93.3219L53.3184 93.3928L53.2763 93.3219ZM53.2893 93.3119L53.3473 93.3706L53.3473 93.3706L53.2893 93.3119ZM53.2929 93.3079L53.2186 93.272L53.2184 93.2725L53.2929 93.3079ZM53.2922 93.309L53.2244 93.2619L53.2244 93.262L53.2922 93.309ZM53.2768 93.3342L53.348 93.3759L53.348 93.3759L53.2768 93.3342ZM53.2743 93.3385L53.3455 93.3801L53.3455 93.3801L53.2743 93.3385ZM53.2157 93.4296L53.2817 93.4791V93.4791L53.2157 93.4296ZM53.2091 93.4383L53.1514 93.4972L53.2186 93.5632L53.2751 93.4878L53.2091 93.4383ZM53.2086 93.4378L53.2664 93.3789L53.2074 93.3211L53.1497 93.3801L53.2086 93.4378ZM53.2054 93.4411L53.1464 93.3834L53.1464 93.3834L53.2054 93.4411ZM53.0709 93.5476L53.1029 93.6236L53.0709 93.5476ZM52.883 93.5706L52.8006 93.567L52.7968 93.6531H52.883V93.5706ZM52.883 93.5705L52.9655 93.5741L52.9691 93.4917L52.8867 93.4881L52.883 93.5705ZM52.7177 93.5238L52.6721 93.5926V93.5926L52.7177 93.5238ZM52.6915 93.5054L52.6427 93.5719L52.6427 93.5719L52.6915 93.5054ZM52.6412 93.4775L52.6127 93.5549L52.6412 93.4775ZM52.6194 93.4695L52.6479 93.3921L52.5403 93.3524L52.537 93.4671L52.6194 93.4695ZM52.5702 93.7132L52.4947 93.6801L52.4947 93.6801L52.5702 93.7132ZM52.5643 93.7267L52.6237 93.784L52.634 93.7734L52.6399 93.7599L52.5643 93.7267ZM52.5541 93.7373L52.4947 93.6801L52.4947 93.6801L52.5541 93.7373ZM52.5146 93.7809L52.5768 93.8351V93.8351L52.5146 93.7809ZM52.4827 93.8167L52.5435 93.8725L52.5435 93.8725L52.4827 93.8167ZM52.3932 93.8968L52.3458 93.8282L52.337 93.8365L52.3932 93.8968ZM52.2537 94.0503L52.1867 94.0021V94.0021L52.2537 94.0503ZM52.2445 94.063L52.289 94.1324L52.3023 94.124L52.3115 94.1112L52.2445 94.063ZM52.2313 94.0715L52.1867 94.0021V94.0021L52.2313 94.0715ZM52.0902 94.1658L52.1367 94.2339L52.1367 94.2339L52.0902 94.1658ZM52.0381 94.2013L51.9917 94.1331L52.0381 94.2013ZM52.0317 94.2056L51.9595 94.2455L52.0033 94.3247L52.0781 94.2738L52.0317 94.2056ZM52.0316 94.2053L52.1038 94.1654L52.0639 94.0932L51.9917 94.1331L52.0316 94.2053ZM52.0242 94.2094L52.0641 94.2816L52.0641 94.2816L52.0242 94.2094ZM51.7597 94.3022L51.7517 94.2201L51.7597 94.3022ZM51.7525 94.3029L51.7462 94.3851L51.7534 94.3857L51.7605 94.385L51.7525 94.3029ZM51.7454 94.3023L51.739 94.3846H51.739L51.7454 94.3023ZM51.5075 94.233L51.5443 94.1592V94.1592L51.5075 94.233ZM51.4563 94.2085L51.423 94.284L51.423 94.284L51.4563 94.2085ZM51.4481 94.2049L51.3992 94.2714L51.4065 94.2767L51.4147 94.2803L51.4481 94.2049ZM51.4408 94.1996L51.4897 94.1331L51.4897 94.1331L51.4408 94.1996ZM51.3301 94.1234L51.3756 94.0546L51.3756 94.0546L51.3301 94.1234ZM51.3262 94.1209L51.3717 94.052L51.3717 94.052L51.3262 94.1209ZM51.2221 94.0495L51.271 93.983L51.2686 93.9813L51.2221 94.0495ZM51.0673 93.8834L51.1345 93.8355L51.1155 93.8088L51.0834 93.8025L51.0673 93.8834ZM50.9814 93.8789L50.9681 93.7975H50.9681L50.9814 93.8789ZM50.9089 93.9153L50.9631 93.9775H50.9631L50.9089 93.9153ZM50.9008 93.9223L50.8322 93.9681L50.8843 94.0462L50.955 93.9845L50.9008 93.9223ZM50.9005 93.9217L50.9691 93.876L50.9233 93.8073L50.8547 93.8531L50.9005 93.9217ZM50.7692 94.0495L50.7017 94.0021L50.7017 94.0021L50.7692 94.0495ZM50.757 94.0669L50.7931 94.1411L50.8122 94.1318L50.8245 94.1143L50.757 94.0669ZM50.7378 94.0763L50.7017 94.0021L50.7017 94.0021L50.7378 94.0763ZM50.6846 94.1125L50.7336 94.1789L50.7336 94.1789L50.6846 94.1125ZM50.6812 94.115L50.6322 94.0486L50.6322 94.0486L50.6812 94.115ZM50.6058 94.1643L50.5316 94.2004L50.5677 94.2745L50.6419 94.2385L50.6058 94.1643ZM50.5336 94.0159L50.4975 93.9417L50.4233 93.9778L50.4594 94.052L50.5336 94.0159ZM50.5868 93.9797L50.5378 93.9132L50.5378 93.9132L50.5868 93.9797ZM50.5902 93.9771L50.6391 94.0435L50.6392 94.0435L50.5902 93.9771ZM50.6456 93.9389L50.6883 94.0095L50.702 94.0012L50.7117 93.9883L50.6456 93.9389ZM50.8046 93.7873L50.8512 93.856L50.858 93.8503L50.8046 93.7873ZM50.9548 93.716L50.9681 93.7975L50.9548 93.716ZM51.1372 93.7302L51.1167 93.8101L51.1372 93.7302ZM51.167 93.7378L51.2349 93.6909L51.2174 93.6656L51.1875 93.6579L51.167 93.7378ZM51.1846 93.7632L51.2524 93.7163V93.7163L51.1846 93.7632ZM51.3157 93.9136L51.3618 93.8452L51.3618 93.8452L51.3157 93.9136ZM51.3186 93.9156L51.3851 93.9645L51.4361 93.8952L51.3647 93.8471L51.3186 93.9156ZM51.3186 93.9156L51.2522 93.8667L51.2032 93.9332L51.2697 93.9821L51.3186 93.9156ZM51.4182 93.9839L51.3728 94.0527L51.3728 94.0528L51.4182 93.9839ZM51.421 93.9857L51.4664 93.9168L51.4664 93.9168L51.421 93.9857ZM51.5313 94.0613L51.4828 94.128L51.4897 94.133L51.4974 94.1365L51.5313 94.0613ZM51.5907 94.0897L51.5542 94.1636L51.5542 94.1636L51.5907 94.0897ZM51.7507 94.1372L51.7436 94.2194L51.7519 94.2201L51.7601 94.2192L51.7507 94.1372ZM51.9485 94.0627L51.9885 94.1352L51.9949 94.1309L51.9485 94.0627ZM51.9959 94.0304L52.0424 94.0985V94.0985L51.9959 94.0304ZM52.1293 93.9409L52.1741 94.0102L52.1864 94.0023L52.1952 93.9906L52.1293 93.9409ZM52.2857 93.7715L52.3417 93.8321L52.2857 93.7715ZM52.2954 93.7626L52.364 93.7168L52.3104 93.6364L52.2394 93.702L52.2954 93.7626ZM52.2959 93.7634L52.2273 93.8092L52.2731 93.8778L52.3417 93.8321L52.2959 93.7634ZM52.3612 93.7052L52.4219 93.761L52.4219 93.761L52.3612 93.7052ZM52.3852 93.6782L52.3232 93.6237V93.6237L52.3852 93.6782ZM52.4244 93.6343L52.4849 93.6904L52.4953 93.6792L52.501 93.665L52.4244 93.6343ZM52.44 93.2488L52.3592 93.2658L52.44 93.2488ZM52.4333 93.2184L52.3528 93.2364L52.3528 93.2364L52.4333 93.2184ZM52.4284 93.1962L52.509 93.1786L52.5064 93.1669L52.5006 93.1564L52.4284 93.1962ZM52.4002 93.1417L52.3264 93.1787L52.3264 93.1787L52.4002 93.1417ZM52.3913 93.1241L52.4648 93.0867L52.4648 93.0867L52.3913 93.1241ZM52.3441 93.0459L52.4067 92.9921V92.9921L52.3441 93.0459ZM52.3355 93.0359L52.2923 92.9656L52.2099 93.0163L52.273 93.0897L52.3355 93.0359ZM52.3364 93.0353L52.3797 93.1056L52.4499 93.0623L52.4067 92.9921L52.3364 93.0353ZM52.278 92.9569L52.3414 92.9042V92.9042L52.278 92.9569ZM52.2688 92.9459L52.2055 92.9988L52.2055 92.9988L52.2688 92.9459ZM52.22 92.8852L52.2861 92.8358L52.2748 92.8206L52.2579 92.8119L52.22 92.8852ZM52.2093 92.8795L52.2484 92.8069L52.2484 92.8069L52.2093 92.8795ZM52.2049 92.8772L52.2441 92.8046L52.2441 92.8046L52.2049 92.8772ZM52.1899 92.8693L52.2256 92.795L52.2256 92.795L52.1899 92.8693ZM52.1726 92.863L52.1931 92.783L52.1892 92.7822L52.1726 92.863ZM50.7972 94.2159L50.8295 94.14L50.759 94.11L50.7239 94.1781L50.7972 94.2159ZM50.7995 94.217L50.8389 94.1445L50.8373 94.1437L50.7995 94.217ZM50.7972 94.2159L50.7649 94.2918L50.8406 94.3241L50.873 94.2484L50.7972 94.2159ZM50.8622 94.0642L50.8947 93.9884L50.8189 93.9559L50.7864 94.0318L50.8622 94.0642ZM50.9136 94.0926L50.8704 94.1629H50.8704L50.9136 94.0926ZM50.9749 94.1316L50.9299 94.2008L50.9299 94.2008L50.9749 94.1316ZM50.996 94.1454L50.951 94.2145L50.996 94.1454ZM51.088 94.2037L51.1294 94.1323L51.088 94.2037ZM51.1159 94.2198L51.1946 94.1952L51.185 94.1645L51.1572 94.1484L51.1159 94.2198ZM51.1254 94.2505L51.2042 94.2259L51.2042 94.2259L51.1254 94.2505ZM51.1689 94.3566L51.2436 94.3218V94.3218L51.1689 94.3566ZM51.1822 94.3854L51.2572 94.3512L51.2572 94.3512L51.1822 94.3854ZM51.2356 94.5536L51.1538 94.5665L51.1556 94.5737L51.2356 94.5536ZM51.2652 94.9212L51.1827 94.9211V94.9211L51.2652 94.9212ZM51.2652 94.9562L51.3457 94.9743L51.3477 94.9654V94.9562H51.2652ZM51.2632 94.9652L51.3437 94.9832L51.3437 94.9832L51.2632 94.9652ZM51.1547 95.2573L51.2294 95.2921L51.2294 95.2921L51.1547 95.2573ZM51.1223 95.3281L51.0467 95.2951V95.2951L51.1223 95.3281ZM51.1129 95.3496L51.1597 95.4176L51.1791 95.4042L51.1885 95.3826L51.1129 95.3496ZM51.0935 95.363L51.1404 95.4309L51.0935 95.363ZM51.0324 95.4067L51.0809 95.4734L51.0809 95.4734L51.0324 95.4067ZM50.8408 95.5297L50.88 95.6023L50.88 95.6023L50.8408 95.5297ZM50.8278 95.5367L50.8393 95.6184L50.8539 95.6164L50.867 95.6093L50.8278 95.5367ZM50.8131 95.5388L50.8017 95.4571H50.8017L50.8131 95.5388ZM50.4619 95.5675L50.4615 95.485L50.4502 95.4851L50.4393 95.4882L50.4619 95.5675ZM50.2871 95.5927L50.2893 95.6751H50.2893L50.2871 95.5927ZM50.0984 95.565L50.1301 95.4888L50.121 95.4851L50.1113 95.4835L50.0984 95.565ZM49.8094 95.462L49.8459 95.388L49.8459 95.388L49.8094 95.462ZM49.7875 95.4512L49.8237 95.3771L49.8237 95.3771L49.7875 95.4512ZM49.7831 95.4491L49.7112 95.4085L49.6682 95.4848L49.7469 95.5232L49.7831 95.4491ZM49.7831 95.4489L49.855 95.4895L49.8955 95.4176L49.8237 95.3771L49.7831 95.4489ZM49.6692 95.3787L49.6243 95.4479L49.6692 95.3787ZM49.6465 95.364L49.6019 95.4334H49.6019L49.6465 95.364ZM49.5159 95.2894L49.5517 95.2151L49.5517 95.2151L49.5159 95.2894ZM49.4959 95.2798L49.4277 95.3261L49.4401 95.3445L49.4601 95.3541L49.4959 95.2798ZM49.4887 95.2691L49.5569 95.2227L49.4075 95.2837L49.4887 95.2691ZM49.4971 95.3336L49.4149 95.3409L49.4157 95.3499L49.4184 95.3584L49.4971 95.3336ZM49.5259 95.529L49.6084 95.5264L49.5259 95.529ZM49.5259 95.6589L49.6084 95.6601L49.5259 95.6589ZM49.5252 95.7365L49.5139 95.8182L49.6077 95.8311V95.7365H49.5252ZM49.5244 95.7364L49.5357 95.6546L49.454 95.6433L49.4427 95.7251L49.5244 95.7364ZM49.5164 95.8104L49.4343 95.8024L49.4343 95.8024L49.5164 95.8104ZM49.5161 95.8136L49.434 95.8056L49.434 95.8056L49.5161 95.8136ZM49.5066 95.903L49.5885 95.913H49.5885L49.5066 95.903ZM49.4712 96.0657L49.3947 96.0349L49.3887 96.0497V96.0657H49.4712ZM49.4712 96.1301V96.2126H49.5537V96.1301H49.4712ZM49.3062 96.1301H49.2237V96.2126H49.3062V96.1301ZM49.3062 96.0281L49.2328 95.9904L49.2237 96.0081V96.0281H49.3062ZM49.3153 96.0103L49.3887 96.0481H49.3887L49.3153 96.0103ZM49.3428 95.8829L49.4247 95.893H49.4247L49.3428 95.8829ZM49.3519 95.7969L49.2698 95.7889L49.2698 95.7889L49.3519 95.7969ZM49.3521 95.7944L49.27 95.7864L49.27 95.7864L49.3521 95.7944ZM49.3602 95.7195L49.4427 95.7303L49.4427 95.7197L49.3602 95.7195ZM49.361 95.6499L49.2785 95.6486H49.2785L49.361 95.6499ZM49.361 95.5342L49.2785 95.5368L49.361 95.5342ZM49.3376 95.3766L49.4157 95.3501L49.4157 95.3501L49.3376 95.3766ZM49.3343 95.3668L49.252 95.3733L49.2528 95.3836L49.2561 95.3933L49.3343 95.3668ZM49.3334 95.3565L49.2512 95.363H49.2512L49.3334 95.3565ZM49.3045 95.2244L49.2286 95.2568L49.3045 95.2244ZM49.2637 95.1457L49.3356 95.1052H49.3356L49.2637 95.1457ZM49.2352 95.0945L49.3077 95.0551L49.3077 95.0551L49.2352 95.0945ZM49.2317 95.0881L49.1535 95.1142L49.1558 95.1211L49.1593 95.1276L49.2317 95.0881ZM49.2294 95.0812L49.3077 95.0551L49.3077 95.0551L49.2294 95.0812ZM49.166 94.9312L49.2407 94.8962L49.2407 94.8962L49.166 94.9312ZM49.1644 94.9277L49.2391 94.8928L49.2391 94.8928L49.1644 94.9277ZM49.0928 94.7592L49.0619 94.6827L48.989 94.712L49.0149 94.7863L49.0928 94.7592ZM49.2456 94.6976L49.3206 94.6631L49.2877 94.5917L49.2148 94.6211L49.2456 94.6976ZM49.3512 94.8599L49.4161 94.8089H49.4161L49.3512 94.8599ZM49.398 94.9204L49.332 94.9702L49.3354 94.9741L49.398 94.9204ZM49.4922 95.0216L49.5514 94.9641H49.5514L49.4922 95.0216ZM49.5129 95.043L49.5723 94.9858H49.5723L49.5129 95.043ZM49.6069 95.1503L49.5405 95.1994L49.5522 95.2151L49.5697 95.224L49.6069 95.1503ZM49.7357 95.2252L49.7803 95.1558H49.7803L49.7357 95.2252ZM49.7604 95.2412L49.7156 95.3104H49.7156L49.7604 95.2412ZM49.8622 95.304L49.8214 95.376L49.8259 95.3782L49.8622 95.304ZM49.8802 95.3129L49.8438 95.3869L49.8438 95.3869L49.8802 95.3129ZM50.1333 95.4034L50.1217 95.4851H50.1217L50.1333 95.4034ZM50.146 95.4052L50.1818 95.3309L50.1702 95.3253L50.1575 95.3235L50.146 95.4052ZM50.1575 95.4108L50.1933 95.3364L50.1933 95.3364L50.1575 95.4108ZM50.2827 95.4277L50.2849 95.5102L50.2827 95.4277ZM50.4247 95.4065L50.3997 95.3278H50.3997L50.4247 95.4065ZM50.4369 95.4026V95.3201H50.4241L50.4119 95.324L50.4369 95.4026ZM50.7754 95.3774L50.7867 95.4592L50.8018 95.4571L50.8152 95.4497L50.7754 95.3774ZM50.9289 95.2778L50.8803 95.2112L50.9289 95.2778ZM50.9806 95.2406L51.0281 95.308L51.0466 95.295L51.0559 95.2743L50.9806 95.2406ZM51.0095 95.1776L51.0843 95.2124V95.2124L51.0095 95.1776ZM51.1002 94.9377L51.1805 94.9566L51.1827 94.9473L51.1827 94.9377L51.1002 94.9377ZM51.1002 94.9275L51.1827 94.9275V94.9275L51.1002 94.9275ZM51.0748 94.5906L50.9949 94.6111L50.9949 94.6111L51.0748 94.5906ZM51.0727 94.5824L51.0604 94.5008L50.9701 94.5143L50.9928 94.6029L51.0727 94.5824ZM51.0731 94.5823L51.0853 94.6639L51.1669 94.6517L51.1547 94.5701L51.0731 94.5823ZM51.032 94.4538L50.9569 94.488L50.9569 94.488L51.032 94.4538ZM51.021 94.4301L51.0958 94.3952V94.3952L51.021 94.4301ZM50.9782 94.3301L51.0558 94.3019L51.046 94.2751L51.0219 94.26L50.9782 94.3301ZM50.9049 94.2829L50.9499 94.2138L50.9499 94.2138L50.9049 94.2829ZM50.885 94.27L50.8401 94.3392L50.8401 94.3392L50.885 94.27ZM50.8271 94.2331L50.7839 94.3034L50.7839 94.3034L50.8271 94.2331ZM50.8062 94.2207L50.8467 94.1488L50.8456 94.1482L50.8062 94.2207ZM52.0959 92.6844L52.072 92.8476L52.2353 92.8715L52.2591 92.7082L52.0959 92.6844ZM52.2189 92.6199C52.2092 92.6177 52.199 92.6159 52.1883 92.6145L52.1667 92.7781C52.1727 92.7789 52.1784 92.7799 52.1837 92.7811L52.2189 92.6199ZM52.3897 92.6921C52.3415 92.6564 52.2882 92.6335 52.2173 92.6195L52.1854 92.7814C52.2358 92.7913 52.2656 92.8056 52.2914 92.8247L52.3897 92.6921ZM52.4427 92.7372C52.4298 92.7253 52.4112 92.7081 52.3897 92.6921L52.2914 92.8247C52.3049 92.8347 52.3174 92.8461 52.331 92.8586L52.4427 92.7372ZM52.4449 92.7392C52.4442 92.7385 52.4435 92.7379 52.4427 92.7372L52.331 92.8586C52.3317 92.8593 52.3325 92.86 52.3332 92.8606L52.4449 92.7392ZM52.4864 92.7752C52.4712 92.7633 52.4592 92.7523 52.4449 92.7392L52.3332 92.8606C52.3477 92.874 52.3639 92.8888 52.3847 92.9051L52.4864 92.7752ZM52.4988 92.7848L52.4864 92.7752L52.3847 92.9051L52.397 92.9147L52.4988 92.7848ZM52.527 92.8215L52.519 92.808L52.3768 92.8916L52.3847 92.9051L52.527 92.8215ZM52.5511 92.862C52.5426 92.8477 52.5345 92.8344 52.527 92.8215L52.3847 92.9051C52.3927 92.9188 52.4012 92.9329 52.4097 92.9469L52.5511 92.862ZM52.6439 93.0297C52.6147 92.9676 52.5802 92.9103 52.5511 92.862L52.4097 92.9469C52.4393 92.9963 52.4695 93.0466 52.4947 93.1001L52.6439 93.0297ZM52.6495 93.0415L52.6439 93.0297L52.4947 93.1001L52.5002 93.1118L52.6495 93.0415ZM52.6583 93.079L52.6567 93.0661L52.493 93.0872L52.4947 93.1001L52.6583 93.079ZM52.6652 93.1199C52.6624 93.106 52.6601 93.0929 52.6583 93.079L52.4947 93.1001C52.4971 93.1188 52.5001 93.1359 52.5035 93.1525L52.6652 93.1199ZM52.6557 93.0947C52.6552 93.0939 52.6547 93.0931 52.6541 93.0922L52.5146 93.1802C52.5156 93.1819 52.5166 93.1835 52.5177 93.1851L52.6557 93.0947ZM52.66 93.1013L52.6558 93.0947L52.5177 93.1851L52.522 93.1916L52.66 93.1013ZM52.6291 93.2196L52.6295 93.2194L52.5525 93.0735L52.5522 93.0736L52.6291 93.2196ZM52.7253 93.2004C52.7016 93.1701 52.6816 93.1422 52.6637 93.1082L52.5177 93.1851C52.5422 93.2316 52.569 93.2683 52.5952 93.302L52.7253 93.2004ZM52.7421 93.2217C52.736 93.2141 52.7305 93.2071 52.7253 93.2004L52.5952 93.302C52.601 93.3093 52.607 93.3169 52.6129 93.3244L52.7421 93.2217ZM52.7908 93.2851C52.7742 93.262 52.7568 93.2402 52.7421 93.2217L52.6129 93.3244C52.6281 93.3434 52.6429 93.3621 52.6568 93.3814L52.7908 93.2851ZM52.8472 93.3122C52.8314 93.3005 52.8011 93.2781 52.7583 93.2583L52.6892 93.4082C52.7158 93.4204 52.7348 93.4343 52.7492 93.4449L52.8472 93.3122ZM52.8543 93.3174C52.8543 93.3174 52.8538 93.317 52.8524 93.316C52.851 93.315 52.8494 93.3139 52.8472 93.3122L52.7492 93.4449C52.7527 93.4476 52.7582 93.4517 52.7632 93.455L52.8543 93.3174ZM52.8925 93.3232C52.8698 93.3221 52.8598 93.3197 52.8567 93.3187C52.8554 93.3183 52.8554 93.3182 52.856 93.3185C52.8565 93.3188 52.8566 93.3189 52.8543 93.3174L52.7632 93.455C52.7716 93.4605 52.7857 93.4696 52.8085 93.4765C52.8291 93.4828 52.8537 93.4865 52.8846 93.488L52.8925 93.3232ZM52.9747 93.3196C52.9771 93.3185 52.9763 93.3198 52.9635 93.321C52.9498 93.3222 52.9274 93.3231 52.8885 93.3231L52.8886 93.4881C52.9631 93.488 53.0045 93.4861 53.0388 93.4716L52.9747 93.3196ZM53.028 93.2685C53.0033 93.2936 52.9894 93.307 52.9805 93.3147C52.9726 93.3214 52.9721 93.3206 52.9747 93.3196L53.0388 93.4716C53.0728 93.4572 53.1 93.4306 53.1456 93.3842L53.028 93.2685ZM53.0616 93.2118C53.0474 93.2362 53.0345 93.2581 53.0202 93.2777L53.1534 93.375C53.1735 93.3475 53.1905 93.3183 53.2041 93.2951L53.0616 93.2118ZM53.0631 93.2093L53.0617 93.2118L53.2041 93.2951L53.2056 93.2926L53.0631 93.2093ZM53.0888 93.1679C53.0792 93.1817 53.0696 93.1983 53.0631 93.2093L53.2056 93.2926C53.2128 93.2802 53.2191 93.2695 53.2244 93.262L53.0888 93.1679ZM53.1154 93.1358C53.1025 93.1486 53.0933 93.1613 53.0888 93.1679L53.2244 93.262C53.2269 93.2583 53.2293 93.2553 53.2314 93.2532L53.1154 93.1358ZM53.1501 93.1089C53.1337 93.1187 53.122 93.1293 53.1154 93.1358L53.2314 93.2532C53.2324 93.2522 53.2333 93.2514 53.2342 93.2509L53.1501 93.1089ZM53.2367 93.0851C53.1961 93.0851 53.166 93.0995 53.1501 93.1089L53.2342 93.2509C53.2352 93.2503 53.236 93.2501 53.2367 93.2501V93.0851ZM53.3192 93.3326V93.1676H53.1542V93.3326H53.3192ZM53.2342 93.2509C53.2351 93.2504 53.2359 93.2501 53.2367 93.2501V93.4151C53.2758 93.4151 53.3043 93.4012 53.3184 93.3928L53.2342 93.2509ZM53.2314 93.2532C53.2324 93.2522 53.2334 93.2514 53.2342 93.2509L53.3184 93.3928C53.333 93.3841 53.3428 93.3751 53.3473 93.3706L53.2314 93.2532ZM53.2184 93.2725C53.22 93.2691 53.2215 93.2666 53.222 93.2658C53.2226 93.2647 53.2232 93.2638 53.2235 93.2633C53.2242 93.2623 53.2247 93.2615 53.225 93.2611C53.2255 93.2603 53.226 93.2597 53.2262 93.2594C53.2266 93.2588 53.227 93.2584 53.2271 93.2581C53.2275 93.2576 53.2279 93.2572 53.2281 93.2569C53.2286 93.2562 53.229 93.2557 53.2294 93.2553C53.2301 93.2545 53.2308 93.2538 53.2314 93.2532L53.3473 93.3706C53.3502 93.3677 53.3526 93.3651 53.3546 93.3628C53.3555 93.3617 53.3564 93.3606 53.3572 93.3596C53.3576 93.3591 53.3581 93.3585 53.3586 93.3579C53.3588 93.3576 53.3592 93.3571 53.3596 93.3565C53.3598 93.3562 53.3603 93.3556 53.3608 93.3548C53.3611 93.3544 53.3616 93.3536 53.3623 93.3526C53.3626 93.352 53.3632 93.3511 53.3639 93.35C53.3643 93.3492 53.3658 93.3467 53.3674 93.3434L53.2184 93.2725ZM53.3599 93.356C53.3598 93.3562 53.3596 93.3565 53.3592 93.357C53.359 93.3573 53.3587 93.3577 53.3583 93.3583C53.3581 93.3585 53.3575 93.3592 53.3568 93.3601C53.3568 93.3601 53.3552 93.3621 53.3532 93.3643C53.3526 93.3649 53.3512 93.3663 53.3494 93.3681C53.3485 93.3689 53.3469 93.3704 53.3448 93.372C53.3433 93.3733 53.3389 93.3768 53.3327 93.3802C53.3296 93.3819 53.3237 93.3849 53.3158 93.3872C53.3088 93.3892 53.2931 93.3928 53.2738 93.3882C53.2506 93.3827 53.2312 93.3675 53.2201 93.3468C53.211 93.3296 53.2103 93.3138 53.2104 93.3067C53.2106 93.2926 53.2145 93.2822 53.2152 93.2802C53.2166 93.2764 53.218 93.2734 53.2187 93.272L53.3672 93.3439C53.3679 93.3424 53.3692 93.3395 53.3706 93.3357C53.3713 93.3337 53.3752 93.3232 53.3754 93.3092C53.3755 93.302 53.3749 93.2863 53.3657 93.269C53.3546 93.2484 53.3352 93.2332 53.312 93.2277C53.2927 93.2231 53.277 93.2266 53.27 93.2287C53.2621 93.231 53.2562 93.2339 53.2531 93.2357C53.2469 93.2391 53.2426 93.2425 53.241 93.2438C53.2389 93.2455 53.2373 93.2469 53.2364 93.2478C53.2346 93.2495 53.2332 93.2509 53.2326 93.2516C53.2306 93.2538 53.229 93.2557 53.229 93.2557C53.2282 93.2567 53.2277 93.2574 53.2275 93.2577C53.227 93.2583 53.2265 93.2589 53.2263 93.2593C53.2256 93.2602 53.225 93.2611 53.2244 93.2619L53.3599 93.356ZM53.348 93.3759C53.3518 93.3693 53.3546 93.3646 53.3568 93.3611C53.3578 93.3593 53.3586 93.3581 53.3592 93.3572C53.3598 93.3562 53.36 93.3559 53.3599 93.356L53.2244 93.262C53.2191 93.2695 53.2128 93.2802 53.2056 93.2926L53.348 93.3759ZM53.3455 93.3801C53.3464 93.3786 53.3472 93.3772 53.348 93.3759L53.2056 93.2926C53.2048 93.294 53.2039 93.2954 53.2031 93.2969L53.3455 93.3801ZM53.2817 93.4791C53.3093 93.4423 53.3317 93.4038 53.3455 93.3801L53.2031 93.2969C53.1888 93.3212 53.1708 93.3519 53.1497 93.3801L53.2817 93.4791ZM53.2751 93.4878L53.2817 93.4791L53.1497 93.3801L53.1431 93.3888L53.2751 93.4878ZM53.1509 93.4967L53.1514 93.4972L53.2669 93.3794L53.2664 93.3789L53.1509 93.4967ZM53.2643 93.4989L53.2675 93.4956L53.1497 93.3801L53.1464 93.3834L53.2643 93.4989ZM53.1029 93.6236C53.1724 93.5943 53.2226 93.5415 53.2643 93.4989L53.1464 93.3834C53.0998 93.4311 53.0723 93.4575 53.0388 93.4716L53.1029 93.6236ZM52.8867 93.6531C52.9562 93.6531 53.0324 93.6534 53.1029 93.6236L53.0388 93.4716C53.0043 93.4861 52.9628 93.4881 52.8867 93.4881V93.6531ZM52.883 93.6531H52.8867V93.4881H52.883V93.6531ZM52.8006 93.5669L52.8006 93.567L52.9654 93.5742L52.9655 93.5741L52.8006 93.5669ZM52.6721 93.5926C52.7266 93.6286 52.7872 93.6488 52.8794 93.6529L52.8867 93.4881C52.8192 93.4851 52.7887 93.4718 52.7632 93.455L52.6721 93.5926ZM52.6427 93.5719C52.6499 93.5771 52.6593 93.5841 52.6721 93.5926L52.7632 93.455C52.7539 93.4488 52.747 93.4438 52.7402 93.4388L52.6427 93.5719ZM52.6127 93.5549C52.6214 93.5581 52.6255 93.5603 52.6281 93.5618C52.6313 93.5636 52.6343 93.5658 52.6427 93.5719L52.7402 93.4388C52.7218 93.4253 52.7047 93.413 52.6697 93.4001L52.6127 93.5549ZM52.5909 93.5469L52.6127 93.5549L52.6697 93.4001L52.6479 93.3921L52.5909 93.5469ZM52.6458 93.7464C52.6892 93.6475 52.6994 93.5586 52.7019 93.4719L52.537 93.4671C52.5348 93.5427 52.5263 93.6081 52.4947 93.6801L52.6458 93.7464ZM52.6399 93.7599L52.6458 93.7464L52.4947 93.6801L52.4888 93.6936L52.6399 93.7599ZM52.6135 93.7946L52.6237 93.784L52.5049 93.6695L52.4947 93.6801L52.6135 93.7946ZM52.5768 93.8351C52.5893 93.8208 52.5996 93.809 52.6135 93.7946L52.4947 93.6801C52.4777 93.6977 52.465 93.7123 52.4525 93.7266L52.5768 93.8351ZM52.5435 93.8725C52.5568 93.858 52.5674 93.8459 52.5768 93.8351L52.4525 93.7266C52.4431 93.7374 52.4337 93.7481 52.4219 93.761L52.5435 93.8725ZM52.4401 93.9647C52.4838 93.9345 52.5169 93.9015 52.5435 93.8725L52.4219 93.761C52.3994 93.7856 52.3757 93.8087 52.3463 93.8289L52.4401 93.9647ZM52.3206 94.0984C52.3517 94.0552 52.4028 94.0007 52.4495 93.9572L52.337 93.8365C52.2861 93.8839 52.2265 93.9467 52.1867 94.0021L52.3206 94.0984ZM52.3115 94.1112L52.3206 94.0984L52.1867 94.0021L52.1775 94.0148L52.3115 94.1112ZM52.2758 94.1409L52.289 94.1324L52.1999 93.9936L52.1867 94.0021L52.2758 94.1409ZM52.1367 94.2339C52.1878 94.199 52.2269 94.1723 52.2758 94.1409L52.1867 94.0021C52.1355 94.0349 52.0946 94.0629 52.0436 94.0977L52.1367 94.2339ZM52.0844 94.2696C52.1034 94.2567 52.1206 94.2449 52.1367 94.2339L52.0436 94.0977C52.0276 94.1086 52.0105 94.1203 51.9917 94.1331L52.0844 94.2696ZM52.0781 94.2738L52.0844 94.2696L51.9917 94.1331L51.9854 94.1374L52.0781 94.2738ZM51.9594 94.2452L51.9595 94.2455L52.104 94.1657L52.1038 94.1654L51.9594 94.2452ZM52.0641 94.2816C52.0666 94.2802 52.069 94.2788 52.0715 94.2775L51.9917 94.1331C51.9892 94.1345 51.9867 94.1358 51.9842 94.1372L52.0641 94.2816ZM51.7676 94.3843C51.9034 94.3711 51.9982 94.3181 52.0641 94.2816L51.9842 94.1372C51.9198 94.1729 51.8508 94.2105 51.7517 94.2201L51.7676 94.3843ZM51.7605 94.385L51.7676 94.3843L51.7517 94.2201L51.7446 94.2208L51.7605 94.385ZM51.739 94.3846L51.7462 94.3851L51.7588 94.2206L51.7517 94.2201L51.739 94.3846ZM51.4707 94.3069C51.5352 94.339 51.6067 94.3744 51.739 94.3846L51.7517 94.2201C51.6507 94.2123 51.6016 94.1877 51.5443 94.1592L51.4707 94.3069ZM51.423 94.284C51.4388 94.291 51.4539 94.2985 51.4707 94.3069L51.5443 94.1592C51.5279 94.151 51.5095 94.1419 51.4897 94.1331L51.423 94.284ZM51.4147 94.2803L51.423 94.284L51.4897 94.1331L51.4815 94.1294L51.4147 94.2803ZM51.392 94.266L51.3992 94.2714L51.497 94.1384L51.4897 94.1331L51.392 94.266ZM51.2847 94.1923C51.3203 94.2158 51.3542 94.2382 51.392 94.266L51.4897 94.1331C51.4482 94.1026 51.4112 94.0781 51.3756 94.0546L51.2847 94.1923ZM51.2808 94.1897L51.2847 94.1923L51.3756 94.0546L51.3717 94.052L51.2808 94.1897ZM51.1733 94.116C51.2113 94.1439 51.2473 94.1677 51.2808 94.1897L51.3717 94.052C51.3379 94.0297 51.3051 94.0081 51.2709 93.983L51.1733 94.116ZM51.0002 93.9313C51.0379 93.9842 51.101 94.0668 51.1756 94.1177L51.2686 93.9813C51.2205 93.9485 51.172 93.8881 51.1345 93.8355L51.0002 93.9313ZM50.9946 93.9603C51.0035 93.9589 51.0204 93.9582 51.0512 93.9643L51.0834 93.8025C51.0398 93.7938 51.0021 93.7919 50.9681 93.7975L50.9946 93.9603ZM50.9631 93.9775C50.9784 93.9642 50.987 93.9615 50.9946 93.9603L50.9681 93.7975C50.926 93.8043 50.8897 93.8226 50.8547 93.8531L50.9631 93.9775ZM50.955 93.9845L50.9631 93.9775L50.8547 93.8531L50.8466 93.8601L50.955 93.9845ZM50.8318 93.9675L50.8322 93.9681L50.9695 93.8765L50.9691 93.876L50.8318 93.9675ZM50.8368 94.0969C50.865 94.0567 50.9032 94.0191 50.9462 93.9904L50.8547 93.8531C50.7947 93.8931 50.7417 93.9451 50.7017 94.0021L50.8368 94.0969ZM50.8245 94.1143L50.8368 94.0969L50.7017 94.0021L50.6894 94.0195L50.8245 94.1143ZM50.7739 94.1505L50.7931 94.1411L50.7209 93.9927L50.7017 94.0021L50.7739 94.1505ZM50.7336 94.1789C50.7467 94.1692 50.7566 94.1621 50.7641 94.1569C50.7724 94.1512 50.7748 94.15 50.7739 94.1505L50.7017 94.0021C50.6831 94.0111 50.6591 94.0289 50.6357 94.0461L50.7336 94.1789ZM50.7302 94.1814C50.7314 94.1805 50.7325 94.1797 50.7336 94.1789L50.6357 94.0461C50.6346 94.0469 50.6334 94.0478 50.6322 94.0486L50.7302 94.1814ZM50.6419 94.2385C50.6755 94.2221 50.7109 94.1956 50.7302 94.1814L50.6322 94.0486C50.6096 94.0653 50.587 94.0817 50.5697 94.0901L50.6419 94.2385ZM50.4594 94.052L50.5316 94.2004L50.68 94.1282L50.6078 93.9798L50.4594 94.052ZM50.5378 93.9132C50.5247 93.9229 50.5148 93.9301 50.5073 93.9353C50.499 93.941 50.4966 93.9422 50.4975 93.9417L50.5697 94.0901C50.5883 94.081 50.6123 94.0633 50.6357 94.0461L50.5378 93.9132ZM50.5412 93.9108C50.54 93.9116 50.5389 93.9124 50.5378 93.9132L50.6357 94.0461C50.6368 94.0452 50.638 94.0444 50.6391 94.0435L50.5412 93.9108ZM50.603 93.8682C50.5794 93.8825 50.5563 93.8996 50.5412 93.9108L50.6392 94.0435C50.6553 94.0316 50.6723 94.0191 50.6883 94.0095L50.603 93.8682ZM50.7583 93.7191C50.6896 93.7657 50.6284 93.8243 50.5796 93.8894L50.7117 93.9883C50.7495 93.9379 50.7974 93.8919 50.8509 93.8556L50.7583 93.7191ZM50.9415 93.6346C50.8672 93.6467 50.8049 93.6789 50.7513 93.7244L50.858 93.8503C50.8919 93.8215 50.9272 93.8041 50.9681 93.7975L50.9415 93.6346ZM51.1577 93.6502C51.0872 93.6322 51.0145 93.6227 50.9415 93.6346L50.9681 93.7975C51.0102 93.7906 51.0582 93.7951 51.1167 93.8101L51.1577 93.6502ZM51.1875 93.6579L51.1577 93.6502L51.1167 93.8101L51.1466 93.8177L51.1875 93.6579ZM51.2524 93.7163L51.2349 93.6909L51.0992 93.7847L51.1167 93.8101L51.2524 93.7163ZM51.3618 93.8452C51.35 93.8373 51.3331 93.8211 51.3121 93.796C51.292 93.772 51.2716 93.744 51.2524 93.7163L51.1167 93.8101C51.1371 93.8395 51.1608 93.8723 51.1856 93.902C51.2096 93.9307 51.2385 93.9611 51.2697 93.9821L51.3618 93.8452ZM51.3647 93.8471L51.3618 93.8452L51.2697 93.9821L51.2726 93.984L51.3647 93.8471ZM51.385 93.9646L51.3851 93.9645L51.2522 93.8666L51.2522 93.8667L51.385 93.9646ZM51.4636 93.915C51.4286 93.8919 51.3987 93.8721 51.3675 93.8492L51.2697 93.9821C51.3048 94.0079 51.3382 94.0299 51.3728 94.0527L51.4636 93.915ZM51.4664 93.9168L51.4636 93.915L51.3728 94.0528L51.3756 94.0546L51.4664 93.9168ZM51.5799 93.9946C51.5378 93.964 51.5001 93.9391 51.4664 93.9168L51.3756 94.0546C51.4092 94.0768 51.444 94.0998 51.4828 94.128L51.5799 93.9946ZM51.6273 94.0157C51.6105 94.0074 51.5903 93.9974 51.5652 93.9861L51.4974 94.1365C51.5195 94.1465 51.5374 94.1553 51.5542 94.1636L51.6273 94.0157ZM51.7578 94.055C51.7238 94.0521 51.7034 94.0476 51.6871 94.0423C51.6698 94.0366 51.6544 94.0291 51.6273 94.0157L51.5542 94.1636C51.5794 94.1761 51.6053 94.1891 51.6356 94.199C51.6669 94.2093 51.7003 94.2157 51.7436 94.2194L51.7578 94.055ZM51.9086 93.9905C51.8438 94.0262 51.8022 94.0483 51.7413 94.0553L51.7601 94.2192C51.857 94.2081 51.9245 94.1702 51.9884 94.1349L51.9086 93.9905ZM51.9494 93.9622C51.9345 93.9724 51.9189 93.9831 51.9021 93.9945L51.9949 94.1309C52.0118 94.1194 52.0275 94.1087 52.0424 94.0985L51.9494 93.9622ZM52.0844 93.8717C52.037 93.9024 51.9966 93.93 51.9494 93.9622L52.0424 94.0985C52.0898 94.0661 52.1286 94.0396 52.1741 94.0102L52.0844 93.8717ZM52.2298 93.7108C52.1771 93.7595 52.1122 93.8265 52.0634 93.8913L52.1952 93.9906C52.2361 93.9363 52.2934 93.8767 52.3417 93.8321L52.2298 93.7108ZM52.2394 93.702L52.2298 93.7108L52.3417 93.8321L52.3513 93.8232L52.2394 93.702ZM52.3646 93.7177L52.364 93.7168L52.2267 93.8083L52.2273 93.8092L52.3646 93.7177ZM52.3004 93.6494C52.2809 93.6706 52.2661 93.6842 52.2502 93.6948L52.3417 93.8321C52.3732 93.8111 52.3982 93.7868 52.4219 93.761L52.3004 93.6494ZM52.3232 93.6237C52.314 93.6342 52.3063 93.6429 52.3004 93.6494L52.4219 93.761C52.4294 93.7529 52.4383 93.7427 52.4471 93.7327L52.3232 93.6237ZM52.364 93.5782C52.3498 93.5935 52.3354 93.6099 52.3232 93.6237L52.4471 93.7327C52.4595 93.7186 52.4725 93.7038 52.4849 93.6904L52.364 93.5782ZM52.3727 93.3801C52.3727 93.4957 52.3709 93.546 52.3479 93.6036L52.501 93.665C52.5378 93.5733 52.5377 93.4912 52.5377 93.3801H52.3727ZM52.3592 93.2658C52.3673 93.3041 52.3727 93.3385 52.3727 93.3801H52.5377C52.5377 93.3226 52.5299 93.2758 52.5207 93.2318L52.3592 93.2658ZM52.3528 93.2364C52.3552 93.2471 52.3573 93.2567 52.3592 93.2658L52.5207 93.2318C52.5185 93.2216 52.5162 93.211 52.5138 93.2005L52.3528 93.2364ZM52.3478 93.2137C52.3495 93.2216 52.3512 93.2292 52.3528 93.2364L52.5138 93.2005C52.5122 93.1932 52.5106 93.186 52.509 93.1786L52.3478 93.2137ZM52.3264 93.1787C52.335 93.1957 52.3452 93.2161 52.3561 93.236L52.5006 93.1564C52.4915 93.1398 52.4827 93.1222 52.4739 93.1047L52.3264 93.1787ZM52.3178 93.1615C52.3205 93.1669 52.3233 93.1725 52.3264 93.1787L52.4739 93.1047C52.4708 93.0986 52.4678 93.0925 52.4648 93.0867L52.3178 93.1615ZM52.2816 93.0997C52.2884 93.1076 52.2992 93.1251 52.3178 93.1615L52.4648 93.0867C52.447 93.0517 52.4282 93.0171 52.4067 92.9921L52.2816 93.0997ZM52.273 93.0897L52.2816 93.0997L52.4067 92.9921L52.3981 92.9821L52.273 93.0897ZM52.2932 92.9651L52.2923 92.9656L52.3788 93.1061L52.3797 93.1056L52.2932 92.9651ZM52.2145 93.0097C52.2366 93.0362 52.2527 93.0567 52.2662 93.0786L52.4067 92.9921C52.3867 92.9596 52.3642 92.9316 52.3414 92.9042L52.2145 93.0097ZM52.2055 92.9988C52.2087 93.0026 52.2116 93.0062 52.2145 93.0097L52.3414 92.9042C52.3384 92.9005 52.3352 92.8968 52.3321 92.893L52.2055 92.9988ZM52.154 92.9346C52.1719 92.9587 52.1903 92.9806 52.2055 92.9988L52.3321 92.893C52.3166 92.8744 52.301 92.8558 52.2861 92.8358L52.154 92.9346ZM52.1701 92.9522C52.1736 92.954 52.1776 92.9562 52.1822 92.9585L52.2579 92.8119C52.2546 92.8102 52.2515 92.8086 52.2484 92.8069L52.1701 92.9522ZM52.1656 92.9497C52.167 92.9505 52.1685 92.9513 52.1701 92.9522L52.2484 92.8069C52.2469 92.8061 52.2454 92.8053 52.2441 92.8046L52.1656 92.9497ZM52.1542 92.9437C52.1566 92.9448 52.1588 92.9461 52.1656 92.9497L52.2441 92.8046C52.2382 92.8014 52.2322 92.7981 52.2256 92.795L52.1542 92.9437ZM52.1522 92.9429C52.1525 92.943 52.1527 92.943 52.1527 92.9431C52.1528 92.9431 52.1528 92.9431 52.1528 92.9431C52.1528 92.9431 52.1528 92.9431 52.1528 92.9431C52.1528 92.9431 52.1528 92.9431 52.1528 92.9431C52.1529 92.9431 52.1529 92.9431 52.153 92.9432C52.1532 92.9433 52.1536 92.9434 52.1542 92.9437L52.2256 92.795C52.2175 92.7911 52.2071 92.7866 52.1931 92.7831L52.1522 92.9429ZM52.1406 92.941C52.1464 92.9419 52.1515 92.9429 52.1561 92.9438L52.1892 92.7822C52.1821 92.7807 52.1746 92.7793 52.1667 92.7781L52.1406 92.941ZM50.7239 94.1781C50.7147 94.2185 50.733 94.2678 50.7409 94.2763C50.7443 94.2792 50.7496 94.2833 50.7515 94.2846C50.7544 94.2866 50.7569 94.2879 50.7574 94.2882C50.759 94.289 50.7602 94.2897 50.7604 94.2898C50.7612 94.2902 50.7619 94.2905 50.7619 94.2905C50.7623 94.2907 50.7626 94.2908 50.7626 94.2908C50.7627 94.2908 50.7628 94.2909 50.7627 94.2909C50.7626 94.2908 50.7625 94.2908 50.7624 94.2907C50.7622 94.2906 50.762 94.2905 50.7619 94.2905C50.7616 94.2903 50.7615 94.2903 50.7617 94.2904L50.8373 94.1437C50.8359 94.143 50.8347 94.1424 50.8336 94.1419C50.8331 94.1416 50.8326 94.1414 50.8322 94.1412C50.832 94.1411 50.8318 94.141 50.8317 94.141C50.8316 94.1409 50.8317 94.141 50.8318 94.141C50.8318 94.141 50.8319 94.141 50.832 94.1411C50.832 94.1411 50.8322 94.1412 50.8324 94.1413C50.8325 94.1413 50.8331 94.1416 50.8339 94.142C50.8341 94.1421 50.8354 94.1428 50.837 94.1436C50.8374 94.1439 50.8399 94.1452 50.8429 94.1472C50.8448 94.1485 50.8501 94.1526 50.8534 94.1555C50.8613 94.164 50.8796 94.2133 50.8705 94.2537L50.7239 94.1781ZM50.8295 94.14L50.8295 94.14L50.7648 94.2918L50.7649 94.2918L50.8295 94.14ZM50.7864 94.0318L50.7214 94.1834L50.873 94.2484L50.938 94.0967L50.7864 94.0318ZM50.9568 94.0223C50.9405 94.0123 50.9162 93.9977 50.8947 93.9884L50.8297 94.1401C50.8385 94.1438 50.8529 94.1521 50.8704 94.1629L50.9568 94.0223ZM51.0198 94.0624C50.9984 94.0485 50.9762 94.0342 50.9568 94.0223L50.8704 94.1629C50.8879 94.1736 50.9086 94.187 50.9299 94.2008L51.0198 94.0624ZM51.041 94.0762C51.0341 94.0717 51.0269 94.0671 51.0198 94.0624L50.9299 94.2008C50.937 94.2054 50.9441 94.21 50.951 94.2145L51.041 94.0762ZM51.1294 94.1323C51.1098 94.1209 51.0784 94.1005 51.041 94.0762L50.951 94.2145C50.9866 94.2377 51.0224 94.261 51.0467 94.2751L51.1294 94.1323ZM51.1572 94.1484L51.1294 94.1323L51.0467 94.2751L51.0745 94.2912L51.1572 94.1484ZM51.2042 94.2259L51.1946 94.1952L51.0371 94.2444L51.0467 94.2751L51.2042 94.2259ZM51.2436 94.3218C51.2269 94.2859 51.2146 94.2593 51.2042 94.2259L51.0467 94.2751C51.0608 94.3204 51.0777 94.3563 51.0941 94.3915L51.2436 94.3218ZM51.2572 94.3512C51.2525 94.3408 51.2479 94.331 51.2436 94.3218L51.0941 94.3915C51.0984 94.4007 51.1027 94.4099 51.1071 94.4196L51.2572 94.3512ZM51.3171 94.5408C51.3046 94.4611 51.2798 94.4007 51.2572 94.3512L51.1071 94.4196C51.1271 94.4635 51.145 94.5083 51.1541 94.5665L51.3171 94.5408ZM51.3477 94.9213C51.3479 94.8035 51.3485 94.6648 51.3157 94.5336L51.1556 94.5737C51.1826 94.6816 51.1829 94.7995 51.1827 94.9211L51.3477 94.9213ZM51.3477 94.9471C51.3477 94.9386 51.3477 94.93 51.3477 94.9213L51.1827 94.9211C51.1827 94.9298 51.1827 94.9384 51.1827 94.9471H51.3477ZM51.3477 94.9562V94.9471H51.1827V94.9562H51.3477ZM51.3437 94.9832L51.3457 94.9743L51.1847 94.9382L51.1827 94.9471L51.3437 94.9832ZM51.2294 95.2921C51.2682 95.209 51.3157 95.1077 51.3437 94.9832L51.1827 94.9471C51.1591 95.052 51.119 95.1385 51.0799 95.2224L51.2294 95.2921ZM51.1979 95.3611C51.2074 95.3393 51.218 95.3167 51.2294 95.2921L51.0799 95.2224C51.0686 95.2466 51.0572 95.2711 51.0467 95.2951L51.1979 95.3611ZM51.1885 95.3826L51.1979 95.3611L51.0467 95.2951L51.0373 95.3166L51.1885 95.3826ZM51.1404 95.4309L51.1597 95.4176L51.0661 95.2817L51.0467 95.2951L51.1404 95.4309ZM51.0809 95.4734C51.1006 95.4591 51.1195 95.4453 51.1404 95.4309L51.0467 95.2951C51.0238 95.3109 51.0032 95.3259 50.9838 95.3401L51.0809 95.4734ZM50.88 95.6023C50.9726 95.5524 51.0276 95.5123 51.0809 95.4734L50.9838 95.3401C50.932 95.3778 50.8843 95.4126 50.8017 95.4571L50.88 95.6023ZM50.867 95.6093L50.88 95.6023L50.8017 95.4571L50.7887 95.4641L50.867 95.6093ZM50.8246 95.6205L50.8393 95.6184L50.8164 95.455L50.8017 95.4571L50.8246 95.6205ZM50.4624 95.65C50.6047 95.6493 50.718 95.6354 50.8246 95.6205L50.8017 95.4571C50.6977 95.4717 50.5929 95.4843 50.4615 95.485L50.4624 95.65ZM50.2893 95.6751C50.3571 95.6733 50.4274 95.6632 50.4845 95.6469L50.4393 95.4882C50.3972 95.5002 50.3408 95.5087 50.2849 95.5102L50.2893 95.6751ZM50.0667 95.6412C50.14 95.6716 50.2244 95.6769 50.2893 95.6751L50.2849 95.5102C50.2287 95.5117 50.1716 95.5061 50.1301 95.4888L50.0667 95.6412ZM49.7729 95.536C49.8507 95.5744 49.9534 95.6255 50.0854 95.6465L50.1113 95.4835C50.0067 95.4669 49.9242 95.4266 49.8459 95.388L49.7729 95.536ZM49.7513 95.5253C49.7583 95.5288 49.7654 95.5323 49.7729 95.536L49.8459 95.388C49.8385 95.3843 49.831 95.3807 49.8237 95.3771L49.7513 95.5253ZM49.7469 95.5232L49.7513 95.5253L49.8237 95.3771L49.8193 95.3749L49.7469 95.5232ZM49.7113 95.4084L49.7112 95.4085L49.8549 95.4896L49.855 95.4895L49.7113 95.4084ZM49.6243 95.4479C49.658 95.4697 49.6968 95.4949 49.7426 95.5208L49.8237 95.3771C49.7829 95.354 49.748 95.3314 49.7141 95.3094L49.6243 95.4479ZM49.6019 95.4334C49.6091 95.4381 49.6165 95.4429 49.6243 95.4479L49.7141 95.3094C49.7064 95.3045 49.6987 95.2995 49.6911 95.2946L49.6019 95.4334ZM49.4801 95.3637C49.5263 95.386 49.5625 95.4081 49.6019 95.4334L49.6911 95.2946C49.6494 95.2678 49.6067 95.2416 49.5517 95.2151L49.4801 95.3637ZM49.4601 95.3541L49.4801 95.3637L49.5517 95.2151L49.5317 95.2055L49.4601 95.3541ZM49.4204 95.3155L49.4277 95.3261L49.5642 95.2334L49.5569 95.2227L49.4204 95.3155ZM49.5793 95.3263C49.577 95.3008 49.5739 95.277 49.5699 95.2545L49.4075 95.2837C49.4105 95.3008 49.413 95.3196 49.4149 95.3409L49.5793 95.3263ZM49.6084 95.5264C49.6063 95.4594 49.5993 95.3835 49.5758 95.3088L49.4184 95.3584C49.4354 95.4123 49.4415 95.4711 49.4434 95.5316L49.6084 95.5264ZM49.6084 95.6601C49.609 95.6179 49.6098 95.5707 49.6084 95.5264L49.4434 95.5316C49.4447 95.5713 49.444 95.6146 49.4434 95.6576L49.6084 95.6601ZM49.6077 95.7251C49.6077 95.7052 49.608 95.6834 49.6084 95.6601L49.4434 95.6576C49.443 95.6806 49.4427 95.7037 49.4427 95.7251H49.6077ZM49.6077 95.7365V95.7251H49.4427V95.7365H49.6077ZM49.5131 95.8181L49.5139 95.8182L49.5365 95.6547L49.5357 95.6546L49.5131 95.8181ZM49.5985 95.8184C49.6014 95.7886 49.6037 95.7654 49.6061 95.7476L49.4427 95.7251C49.4397 95.7468 49.4371 95.7735 49.4343 95.8024L49.5985 95.8184ZM49.5982 95.8215L49.5985 95.8184L49.4343 95.8024L49.434 95.8056L49.5982 95.8215ZM49.5885 95.913C49.5924 95.8812 49.5955 95.8492 49.5982 95.8215L49.434 95.8056C49.4312 95.8336 49.4283 95.8635 49.4247 95.893L49.5885 95.913ZM49.5477 96.0965C49.5717 96.037 49.5822 95.9645 49.5885 95.913L49.4247 95.893C49.4183 95.9449 49.4096 95.9977 49.3947 96.0349L49.5477 96.0965ZM49.5537 96.1301V96.0657H49.3887V96.1301H49.5537ZM49.3062 96.2126H49.4712V96.0476H49.3062V96.2126ZM49.2237 96.0481V96.1301H49.3887V96.0481H49.2237ZM49.2237 96.0281V96.0481H49.3887V96.0281H49.2237ZM49.242 95.9726L49.2328 95.9904L49.3796 96.0658L49.3887 96.0481L49.242 95.9726ZM49.2609 95.8729C49.2572 95.9029 49.2533 95.9272 49.2494 95.9455C49.245 95.9655 49.2419 95.9727 49.242 95.9726L49.3887 96.0481C49.399 96.028 49.4057 96.0031 49.4107 95.9802C49.416 95.9555 49.4206 95.926 49.4247 95.893L49.2609 95.8729ZM49.2698 95.7889C49.267 95.8174 49.2643 95.8455 49.2609 95.8729L49.4247 95.893C49.4283 95.8632 49.4313 95.833 49.434 95.8049L49.2698 95.7889ZM49.27 95.7864L49.2698 95.7889L49.434 95.8049L49.4343 95.8024L49.27 95.7864ZM49.2784 95.7088C49.2752 95.7329 49.2725 95.7606 49.27 95.7864L49.4343 95.8024C49.4368 95.7759 49.4393 95.7511 49.442 95.7302L49.2784 95.7088ZM49.2785 95.6486C49.2781 95.6709 49.2778 95.6944 49.2777 95.7194L49.4427 95.7197C49.4427 95.6961 49.4431 95.6737 49.4435 95.6512L49.2785 95.6486ZM49.2785 95.5368C49.2797 95.5734 49.2791 95.6089 49.2785 95.6486L49.4435 95.6512C49.4441 95.6121 49.4447 95.5727 49.4434 95.5316L49.2785 95.5368ZM49.2594 95.4031C49.2708 95.4366 49.2767 95.4797 49.2785 95.5368L49.4434 95.5316C49.4414 95.4678 49.4347 95.4061 49.4157 95.3501L49.2594 95.4031ZM49.2561 95.3933L49.2594 95.4031L49.4157 95.3501L49.4124 95.3403L49.2561 95.3933ZM49.2512 95.363L49.252 95.3733L49.4165 95.3604L49.4157 95.3501L49.2512 95.363ZM49.2286 95.2568C49.2385 95.2798 49.2468 95.3076 49.2512 95.363L49.4157 95.3501C49.4102 95.2801 49.3984 95.2343 49.3804 95.1921L49.2286 95.2568ZM49.1918 95.1862C49.2097 95.218 49.2199 95.2363 49.2286 95.2568L49.3804 95.1921C49.3675 95.1617 49.3526 95.1354 49.3356 95.1052L49.1918 95.1862ZM49.1628 95.134C49.1739 95.1544 49.1835 95.1715 49.1918 95.1862L49.3356 95.1052C49.3273 95.0905 49.3182 95.0744 49.3077 95.0551L49.1628 95.134ZM49.1593 95.1276L49.1628 95.134L49.3077 95.0551L49.3042 95.0487L49.1593 95.1276ZM49.1512 95.1073L49.1535 95.1142L49.31 95.062L49.3077 95.0551L49.1512 95.1073ZM49.0913 94.9662C49.1166 95.0204 49.1367 95.0638 49.1512 95.1073L49.3077 95.0551C49.2897 95.0011 49.2654 94.949 49.2407 94.8962L49.0913 94.9662ZM49.0896 94.9627L49.0913 94.9662L49.2407 94.8962L49.2391 94.8928L49.0896 94.9627ZM49.0149 94.7863C49.0376 94.8517 49.0658 94.9119 49.0896 94.9627L49.2391 94.8928C49.2149 94.841 49.1902 94.7883 49.1707 94.7321L49.0149 94.7863ZM49.2148 94.6211L49.0619 94.6827L49.1236 94.8357L49.2765 94.7741L49.2148 94.6211ZM49.4161 94.8089C49.3722 94.753 49.3471 94.7207 49.3206 94.6631L49.1707 94.7321C49.2061 94.8089 49.2421 94.8545 49.2864 94.9109L49.4161 94.8089ZM49.4639 94.8707C49.4461 94.8471 49.4302 94.8268 49.4161 94.8089L49.2864 94.9109C49.3005 94.9288 49.3154 94.9479 49.3322 94.9701L49.4639 94.8707ZM49.5514 94.9641C49.5198 94.9316 49.4902 94.9011 49.4607 94.8667L49.3354 94.9741C49.3687 95.013 49.4018 95.047 49.433 95.0791L49.5514 94.9641ZM49.5723 94.9858C49.5653 94.9785 49.5583 94.9713 49.5514 94.9641L49.433 95.0791C49.4399 95.0862 49.4468 95.0933 49.4536 95.1003L49.5723 94.9858ZM49.6732 95.1012C49.6414 95.0583 49.605 95.0196 49.5723 94.9858L49.4536 95.1003C49.4859 95.1339 49.5157 95.1658 49.5405 95.1994L49.6732 95.1012ZM49.7803 95.1558C49.7413 95.1307 49.698 95.1039 49.644 95.0767L49.5697 95.224C49.6162 95.2474 49.654 95.2708 49.6911 95.2946L49.7803 95.1558ZM49.8053 95.1719C49.7972 95.1667 49.7889 95.1613 49.7803 95.1558L49.6911 95.2946C49.6993 95.2999 49.7074 95.3051 49.7156 95.3104L49.8053 95.1719ZM49.9028 95.2323C49.8677 95.2124 49.8383 95.1933 49.8053 95.1719L49.7156 95.3104C49.7483 95.3316 49.7815 95.3532 49.8215 95.3758L49.9028 95.2323ZM49.9165 95.2388C49.9106 95.2359 49.9045 95.2329 49.8984 95.2299L49.8259 95.3782C49.8319 95.3811 49.8378 95.384 49.8438 95.3869L49.9165 95.2388ZM50.1448 95.3217C50.0628 95.3101 49.9999 95.2798 49.9165 95.2388L49.8438 95.3869C49.9254 95.427 50.0102 95.4693 50.1217 95.4851L50.1448 95.3217ZM50.1575 95.3235L50.1448 95.3217L50.1217 95.4851L50.1344 95.4869L50.1575 95.3235ZM50.1933 95.3364L50.1818 95.3309L50.1101 95.4795L50.1217 95.4851L50.1933 95.3364ZM50.2806 95.3453C50.2559 95.3459 50.2352 95.3447 50.2192 95.3424C50.2113 95.3413 50.205 95.34 50.2003 95.3387C50.198 95.3381 50.1962 95.3375 50.195 95.3371C50.1938 95.3366 50.1932 95.3364 50.1933 95.3364L50.1217 95.4851C50.1632 95.5051 50.224 95.5118 50.2849 95.5102L50.2806 95.3453ZM50.3997 95.3278C50.3746 95.3358 50.3291 95.344 50.2806 95.3453L50.2849 95.5102C50.3459 95.5086 50.4072 95.4986 50.4497 95.4851L50.3997 95.3278ZM50.4119 95.324L50.3997 95.3278L50.4497 95.4851L50.4619 95.4812L50.4119 95.324ZM50.4497 95.3201H50.4369V95.4851H50.4497V95.3201ZM50.7642 95.2957C50.6653 95.3094 50.5695 95.3201 50.4497 95.3201V95.4851C50.5803 95.4851 50.6845 95.4733 50.7867 95.4592L50.7642 95.2957ZM50.8803 95.2112C50.8345 95.2446 50.7999 95.2698 50.7356 95.3052L50.8152 95.4497C50.8888 95.4092 50.9302 95.379 50.9775 95.3445L50.8803 95.2112ZM50.9331 95.1732C50.9132 95.1871 50.896 95.1997 50.8803 95.2112L50.9775 95.3445C50.9933 95.333 51.0095 95.3212 51.0281 95.308L50.9331 95.1732ZM50.9347 95.1428C50.9253 95.1631 50.9154 95.1844 50.9053 95.2068L51.0559 95.2743C51.0654 95.2531 51.0748 95.2328 51.0843 95.2124L50.9347 95.1428ZM51.0199 94.9188C51.0005 95.001 50.9712 95.0645 50.9347 95.1428L51.0843 95.2124C51.1204 95.135 51.1568 95.0573 51.1805 94.9566L51.0199 94.9188ZM51.0177 94.9274C51.0177 94.9308 51.0177 94.9342 51.0177 94.9377L51.1827 94.9377C51.1827 94.9343 51.1827 94.9309 51.1827 94.9275L51.0177 94.9274ZM50.9949 94.6111C51.0173 94.6986 51.0178 94.7974 51.0177 94.9275L51.1827 94.9275C51.1828 94.8029 51.1833 94.6818 51.1547 94.5701L50.9949 94.6111ZM50.9928 94.6029L50.9949 94.6111L51.1547 94.5701L51.1526 94.5619L50.9928 94.6029ZM51.0609 94.5007L51.0604 94.5008L51.0849 94.664L51.0853 94.6639L51.0609 94.5007ZM50.9569 94.488C50.9746 94.5269 50.9858 94.5566 50.9915 94.5946L51.1547 94.5701C51.1457 94.5101 51.1274 94.4643 51.1071 94.4196L50.9569 94.488ZM50.9463 94.4651C50.9502 94.4734 50.9537 94.4809 50.9569 94.488L51.1071 94.4196C51.1034 94.4116 51.0996 94.4033 51.0958 94.3952L50.9463 94.4651ZM50.9007 94.3582C50.9159 94.4001 50.9329 94.4364 50.9463 94.4651L51.0958 94.3952C51.0822 94.3661 51.0681 94.336 51.0558 94.3019L50.9007 94.3582ZM50.8599 94.3521C50.8846 94.3682 50.9114 94.3857 50.9346 94.4001L51.0219 94.26C51.0004 94.2467 50.975 94.2302 50.9499 94.2138L50.8599 94.3521ZM50.8401 94.3392C50.8465 94.3434 50.8531 94.3477 50.8599 94.3521L50.9499 94.2138C50.9432 94.2094 50.9365 94.2051 50.9299 94.2008L50.8401 94.3392ZM50.7839 94.3034C50.7996 94.313 50.8188 94.3254 50.8401 94.3392L50.9299 94.2008C50.9086 94.187 50.8879 94.1736 50.8704 94.1629L50.7839 94.3034ZM50.7657 94.2926C50.7701 94.295 50.7761 94.2986 50.7839 94.3034L50.8704 94.1629C50.8616 94.1575 50.8536 94.1527 50.8467 94.1488L50.7657 94.2926ZM50.7601 94.2895L50.7668 94.2932L50.8456 94.1482L50.8389 94.1446L50.7601 94.2895Z"
              fill="#C8242B"
            />
            <Path
              id="Stroke 301"
              d="M46.8103 96.5572V96.5972C46.8103 96.4922 46.8073 96.5452 46.8533 96.7522C46.9353 96.8452 47.1293 96.8702 47.2903 96.8302C47.4323 96.7282 47.4273 96.6472 47.6843 96.5972C47.9323 96.6132 48.0263 96.6772 48.1653 96.7522C48.3293 96.8252 48.4053 96.8632 48.5153 97.0252C48.5693 97.1572 48.5993 97.2482 48.4273 97.2982C48.2903 97.3852 48.1283 97.4322 47.9463 97.4552C47.7443 97.4552 47.5993 97.4322 47.5093 97.5322C47.3703 97.6602 47.3783 97.7382 47.3783 97.9602C47.3313 98.0302 47.3223 98.2352 47.2903 98.3122C47.1693 98.3632 47.0983 98.3902 46.8973 98.3902C46.8503 98.2702 46.7973 98.0522 46.7663 97.9232C46.7313 97.7822 46.7213 97.5872 46.6343 97.4922C46.5533 97.3872 46.4493 97.2922 46.3293 97.2202C46.2753 97.1532 46.1733 97.0972 46.0663 97.0652C46.2383 97.1432 46.2623 97.2282 46.2853 97.4152C46.1343 97.4822 46.0943 97.5302 45.8473 97.5322C45.6053 97.5152 45.5473 97.4602 45.4543 97.3372C45.4373 97.5322 45.3673 97.5972 45.3233 97.7682C45.2333 97.8852 45.1953 98.0052 45.1043 98.1552C45.1433 98.3452 45.2263 98.3532 45.2353 98.5852C45.2923 98.7382 45.2863 98.8832 45.4103 98.9752C45.4663 99.0352 45.5073 99.0482 45.6293 99.0522C45.3753 99.0522 45.2283 99.0282 45.0603 98.9352C44.9313 98.8652 44.8323 98.7752 44.7103 98.7022C44.5563 98.6032 44.3653 98.5102 44.1863 98.4682C43.9843 98.4682 43.8383 98.4472 43.7483 98.5452C43.6253 98.6252 43.5413 98.7602 43.4863 98.9352C43.4463 99.1372 43.4303 99.2722 43.5303 99.4032C43.6043 99.5552 43.6213 99.6132 43.5303 99.7922C43.4283 99.9202 43.2773 99.9352 43.0493 99.9882C42.8833 99.9802 42.7233 99.9472 42.6123 99.9102"
              stroke="#C8242B"
              strokeWidth={0.165}
            />
            <Path
              id="Fill 302"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M70.3522 76.1651C75.6892 66.9501 79.2312 59.1101 78.2562 58.6611C77.2842 58.2141 72.1642 65.3281 66.8262 74.5411L70.3522 76.1651Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 303"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M70.3522 76.1651C75.6892 66.9501 79.2312 59.1101 78.2562 58.6611C77.2842 58.2141 72.1642 65.3281 66.8262 74.5411L70.3522 76.1651Z"
              stroke="#C8242B"
              strokeWidth={0.168}
            />
            <Path
              id="Fill 304"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M69.9997 76.0021C75.1467 67.1131 78.6947 59.6091 77.9167 59.2511C77.1397 58.8931 72.3297 65.8151 67.1797 74.7031"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 305"
              d="M69.9997 76.0021C75.1467 67.1131 78.6947 59.6091 77.9167 59.2511C77.1397 58.8931 72.3297 65.8151 67.1797 74.7031"
              stroke="#C8242B"
              strokeWidth={0.147}
            />
            <Path
              id="Fill 306"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M69.1147 71.365C68.4867 72.405 67.8247 73.592 67.1797 74.703L69.9997 76.002C70.6427 74.89 71.3447 73.72 71.9327 72.664L69.1147 71.365Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 307"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M69.1147 71.365C68.4867 72.405 67.8247 73.592 67.1797 74.703L69.9997 76.002C70.6427 74.89 71.3447 73.72 71.9327 72.664L69.1147 71.365Z"
              stroke="#C8242B"
              strokeWidth={0.167}
            />
            <Path
              id="Fill 308"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M69.3525 71.7241C68.7275 72.7631 68.2895 73.5581 67.6465 74.6691L69.7595 75.6431C70.4045 74.5321 70.8795 73.7541 71.4665 72.6971L69.3525 71.7241Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 309"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M69.3525 71.7241C68.7275 72.7631 68.2895 73.5581 67.6465 74.6691L69.7595 75.6431C70.4045 74.5321 70.8795 73.7541 71.4665 72.6971L69.3525 71.7241Z"
              stroke="#C8242B"
              strokeWidth={0.167}
            />
            <Path
              id="Fill 310"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M70.8856 72.9271L69.4766 72.2781L68.2256 74.4381L69.6346 75.0871L70.8856 72.9271Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 311"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M70.8856 72.9271L69.4766 72.2781L68.2256 74.4381L69.6346 75.0871L70.8856 72.9271Z"
              stroke="#C8242B"
              strokeWidth={0.167}
            />
            <Path
              id="Fill 312"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M70.8865 72.928L68.2275 74.439L70.8865 72.928Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 313"
              d="M70.8865 72.928L68.2275 74.439"
              stroke="#C8242B"
              strokeWidth={0.167}
            />
            <Path
              id="Fill 314"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M69.6345 75.0871L69.4775 72.2791L69.6345 75.0871Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 315"
              d="M69.6345 75.0871L69.4775 72.2791"
              stroke="#C8242B"
              strokeWidth={0.167}
            />
            <Path
              id="Fill 316"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M77.2567 61.932L75.8467 61.282L77.2567 61.932Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 317"
              d="M77.2567 61.932L75.8467 61.282"
              stroke="#C8242B"
              strokeWidth={0.167}
            />
            <Path
              id="Fill 318"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M77.0796 60.2171C76.8596 60.2721 76.7216 60.4731 76.7706 60.6661C76.8206 60.8581 77.0386 60.9701 77.2586 60.9141C77.4776 60.8591 77.6156 60.6581 77.5666 60.4651C77.5166 60.2721 77.2986 60.1611 77.0796 60.2171Z"
              fill="#C8242B"
            />
            <Path
              id="Stroke 319"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M77.0796 60.2171C76.8596 60.2721 76.7216 60.4731 76.7706 60.6661C76.8206 60.8581 77.0386 60.9701 77.2586 60.9141C77.4776 60.8591 77.6156 60.6581 77.5666 60.4651C77.5166 60.2721 77.2986 60.1611 77.0796 60.2171Z"
              stroke="#C8242B"
              strokeWidth={0.5}
            />
            <Path
              id="Fill 320"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M68.3728 86.7802C80.4008 98.5422 85.5318 100.03 83.1238 100.978C80.7158 101.925 72.9698 95.8552 64.9098 87.7902C56.8498 79.7282 51.9148 72.5512 54.3218 71.6032C56.7298 70.6552 55.5798 74.2692 68.3728 86.7802Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 321"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M68.3728 86.7802C80.4008 98.5422 85.5318 100.03 83.1238 100.978C80.7158 101.925 72.9698 95.8552 64.9098 87.7902C56.8498 79.7282 51.9148 72.5512 54.3218 71.6032C56.7298 70.6552 55.5798 74.2692 68.3728 86.7802Z"
              stroke="#C8242B"
              strokeWidth={0.212}
            />
            <Path
              id="Fill 322"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.4972 95.3271L74.2842 96.4321C78.2492 100.19 82.7112 101.738 83.9502 101.075C85.1892 100.413 81.7192 98.8651 78.4972 95.3271Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 323"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.4972 95.3271L74.2842 96.4321C78.2492 100.19 82.7112 101.738 83.9502 101.075C85.1892 100.413 81.7192 98.8651 78.4972 95.3271Z"
              stroke="#C8242B"
              strokeWidth={0.165}
            />
            <Path
              id="Fill 324"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M78.4973 95.77L75.0273 96.655C78.8903 100.268 82.7113 101.295 83.7003 100.855C84.6943 100.413 81.6363 99.17 78.4973 95.77Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 325"
              d="M78.5577 95.7142L78.6183 95.6582L78.5577 95.7142ZM78.5244 95.6781L78.5829 95.62L78.4637 95.734L78.5244 95.6781ZM82.5526 99.2447L82.5025 99.3102L82.5526 99.2447ZM82.6986 99.3564L82.7488 99.2909L82.6986 99.3564ZM83.8109 100.299L83.8739 100.246L83.8109 100.299ZM83.973 100.655L83.8907 100.649L83.973 100.655ZM83.7336 100.931L83.6751 100.989L83.7151 101.029L83.7672 101.006L83.7336 100.931ZM80.4732 100.199L80.4413 100.275L80.4732 100.199ZM75.1941 96.6977L75.1737 96.6178L75.0265 96.6553L75.1382 96.7584L75.1941 96.6977ZM82.4842 100.811L82.4709 100.893L82.4842 100.811ZM83.6666 100.78L83.6338 100.704L83.633 100.704L83.6666 100.78ZM83.6666 100.78L83.6994 100.855L83.7001 100.855L83.6666 100.78ZM83.8083 100.644L83.726 100.639V100.639L83.8083 100.644ZM83.6849 100.406L83.6219 100.459L83.6849 100.406ZM82.5983 99.4874L82.6485 99.4219L82.5983 99.4874ZM82.4512 99.3749L82.5014 99.3094L82.4512 99.3749ZM78.4699 95.8623L78.5304 95.8062L78.497 95.7702L78.4495 95.7823L78.4699 95.8623ZM65.6086 86.206L65.5511 86.2652L65.6086 86.206ZM65.4258 86.0283L65.4833 85.9692L65.3005 85.7915L65.3445 86.0426L65.4258 86.0283ZM66.867 87.4292L66.8095 87.4883L66.8587 87.5362L66.9147 87.4965L66.867 87.4292ZM66.9241 87.39L66.9693 87.459L67.0019 87.4377L67.0062 87.399L66.9241 87.39ZM66.9836 87.112L67.008 87.0332L66.9329 87.0099L66.906 87.0838L66.9836 87.112ZM67.141 87.1608L67.2208 87.1815L67.2405 87.1054L67.1654 87.0821L67.141 87.1608ZM67.1112 87.3046L67.0301 87.2894L67.0301 87.2894L67.1112 87.3046ZM67.1104 87.3086L67.0293 87.2935L67.0293 87.2935L67.1104 87.3086ZM67.0857 87.4328L67.0045 87.4144L67.0035 87.4253L67.0857 87.4328ZM67.0818 87.4902L66.9985 87.4864L66.9996 87.498L67.0818 87.4902ZM67.1648 87.7038L67.235 87.6605L67.235 87.6605L67.1648 87.7038ZM67.1929 87.7498L67.2441 87.8145L67.3009 87.7696L67.2637 87.7075L67.1929 87.7498ZM67.0646 87.8513L67.0071 87.9105L67.059 87.9609L67.1158 87.916L67.0646 87.8513ZM66.8508 87.6435L66.9083 87.5844L66.8596 87.537L66.8037 87.5758L66.8508 87.6435ZM66.7645 87.7003L66.8079 87.7705L66.8079 87.7705L66.7645 87.7003ZM66.7515 87.7084L66.7668 87.7894L66.7818 87.7866L66.7948 87.7786L66.7515 87.7084ZM66.7364 87.7112L66.7211 87.6302L66.7211 87.6302L66.7364 87.7112ZM66.3246 87.6802L66.2952 87.7573L66.2952 87.7573L66.3246 87.6802ZM66.3235 87.6798L66.2469 87.649L66.2156 87.7269L66.294 87.7568L66.3235 87.6798ZM66.3235 87.6798L66.4 87.7106L66.4309 87.6339L66.3541 87.6032L66.3235 87.6798ZM66.0023 87.512L66.0516 87.4459L66.0438 87.4401L66.0349 87.4362L66.0023 87.512ZM65.8618 87.4358L65.9111 87.3697L65.9111 87.3697L65.8618 87.4358ZM65.7478 87.3178L65.8138 87.2683L65.7997 87.2495L65.7779 87.241L65.7478 87.3178ZM65.675 87.275L65.6213 87.3376L65.6213 87.3376L65.675 87.275ZM65.6162 87.1971L65.6905 87.1613L65.6905 87.1613L65.6162 87.1971ZM65.589 87.1235L65.5102 87.1478L65.5102 87.1478L65.589 87.1235ZM65.5883 87.1213L65.5095 87.1455L65.5095 87.1455L65.5883 87.1213ZM65.5681 87.0622L65.492 87.0942L65.492 87.0942L65.5681 87.0622ZM65.5638 87.0521L65.4821 87.0633L65.4836 87.0741L65.4878 87.0841L65.5638 87.0521ZM65.5624 87.0413L65.4806 87.0525H65.4806L65.5624 87.0413ZM65.5607 87.0294L65.479 87.0406L65.5607 87.0294ZM65.5316 86.685L65.6141 86.6846L65.6141 86.6754L65.612 86.6664L65.5316 86.685ZM65.4952 86.4653L65.4135 86.4765H65.4135L65.4952 86.4653ZM65.4829 86.3732L65.5647 86.3624V86.3624L65.4829 86.3732ZM65.4698 86.2794L65.5511 86.2652V86.2652L65.4698 86.2794ZM65.6655 86.4915L65.723 86.4323L65.5493 86.2634L65.5839 86.5032L65.6655 86.4915ZM66.7301 87.5262L66.7761 87.5947L66.8605 87.5379L66.7876 87.467L66.7301 87.5262ZM65.6941 86.6552L65.7742 86.6352V86.6352L65.6941 86.6552ZM65.6966 86.665H65.7791V86.6549L65.7766 86.645L65.6966 86.665ZM65.7244 87.0087L65.6427 87.0199L65.644 87.0297L65.6477 87.0389L65.7244 87.0087ZM65.7455 87.0709L65.8243 87.0466L65.8243 87.0466L65.7455 87.0709ZM65.7467 87.075L65.8256 87.0507L65.8256 87.0507L65.7467 87.075ZM65.7648 87.1255L65.8391 87.0897L65.8391 87.0897L65.7648 87.1255ZM65.7823 87.1496L65.8359 87.087L65.8359 87.0869L65.7823 87.1496ZM65.8223 87.169L65.8454 87.0898L65.8454 87.0898L65.8223 87.169ZM65.8497 87.177L65.9169 87.1291L65.9003 87.1059L65.8729 87.0978L65.8497 87.177ZM65.8663 87.2003L65.9334 87.1524L65.8663 87.2003ZM65.9604 87.3035L66.0097 87.2374H66.0097L65.9604 87.3035ZM66.0765 87.3643L66.1089 87.2884L66.1089 87.2884L66.0765 87.3643ZM66.0862 87.3685L66.1367 87.3032L66.1283 87.2967L66.1186 87.2926L66.0862 87.3685ZM66.0946 87.3749L66.0441 87.4402L66.0441 87.4402L66.0946 87.3749ZM66.3841 87.5263L66.3535 87.6029L66.3548 87.6034L66.3841 87.5263ZM66.6908 87.5518L66.7048 87.6331L66.721 87.6303L66.7349 87.6216L66.6908 87.5518ZM67.2471 87.8207H67.1646V87.9032H67.2471V87.8207ZM67.2471 87.8197H67.3296V87.7235L67.2345 87.7382L67.2471 87.8197ZM68.0974 87.8775L68.0761 87.9572L68.0974 87.8775ZM68.1162 87.8825L68.1709 87.8208L68.1563 87.8078L68.1375 87.8028L68.1162 87.8825ZM68.1308 87.8954L68.1855 87.8337V87.8337L68.1308 87.8954ZM68.268 87.9823L68.2293 88.0552H68.2293L68.268 87.9823ZM68.2825 87.9899L68.3209 87.9169L68.3209 87.9169L68.2825 87.9899ZM68.431 88.0792L68.3808 88.1451L68.3875 88.1493L68.431 88.0792ZM68.6351 88.3137L68.5625 88.353L68.5689 88.3647L68.5785 88.3738L68.6351 88.3137ZM68.7407 88.4381L68.8067 88.3886L68.8067 88.3886L68.7407 88.4381ZM68.7467 88.446L68.8126 88.3964L68.8126 88.3964L68.7467 88.446ZM68.8363 88.547L68.7871 88.6132L68.8363 88.547ZM68.8598 88.5644L68.9397 88.5439L68.9324 88.5156L68.909 88.4982L68.8598 88.5644ZM68.867 88.5927L68.9469 88.5723L68.9469 88.5723L68.867 88.5927ZM68.8682 88.5972L68.7887 88.6191L68.8012 88.6645L68.8466 88.6768L68.8682 88.5972ZM69.6377 88.8055L69.7194 88.8164L69.729 88.7448L69.6592 88.7259L69.6377 88.8055ZM69.6161 88.9677V89.0502H69.6883L69.6979 88.9786L69.6161 88.9677ZM69.4774 88.9533L69.4552 89.0327H69.4552L69.4774 88.9533ZM69.3746 88.9093L69.4124 88.836L69.4015 88.8304L69.3894 88.8282L69.3746 88.9093ZM69.2352 88.8718L69.2604 88.7933H69.2604L69.2352 88.8718ZM69.192 88.8585L69.1699 88.938V88.938L69.192 88.8585ZM69.0538 88.8545L69.0764 88.9338H69.0764L69.0538 88.8545ZM69.0436 88.8574L69.021 88.7781L68.927 88.8049L68.9693 88.8931L69.0436 88.8574ZM69.0661 88.9041L69.0717 88.9864L69.193 88.9781L69.1404 88.8684L69.0661 88.9041ZM68.9448 88.9125L68.9504 88.9948L68.9448 88.9125ZM68.7379 88.9457L68.7096 88.8682L68.7009 88.8714L68.6931 88.8764L68.7379 88.9457ZM68.7376 88.9459L68.6929 88.8766L68.6929 88.8766L68.7376 88.9459ZM68.6666 88.989L68.6251 88.9177L68.6158 88.9232L68.6082 88.9308L68.6666 88.989ZM68.6627 88.9932L68.7232 89.0492L68.7232 89.0492L68.6627 88.9932ZM68.6516 89.0051L68.6865 89.0799L68.7012 89.073L68.7122 89.0611L68.6516 89.0051ZM68.6369 89.012L68.6717 89.0868L68.6369 89.012ZM68.6013 89.0281L68.5692 88.9521L68.5681 88.9526L68.6013 89.0281ZM68.6012 89.0282L68.568 88.9526L68.5678 88.9527L68.6012 89.0282ZM68.5803 89.035L68.5636 88.9542L68.5636 88.9542L68.5803 89.035ZM68.5683 89.0366L68.5733 89.119H68.5733L68.5683 89.0366ZM68.5355 89.032L68.5632 88.9543L68.5632 88.9543L68.5355 89.032ZM68.5021 89.0097L68.4411 89.0652L68.4411 89.0652L68.5021 89.0097ZM68.481 88.962L68.3989 88.9698V88.9698L68.481 88.962ZM68.4938 88.9094L68.5632 88.9542L68.5632 88.9542L68.4938 88.9094ZM68.4939 88.9094L68.4246 88.8646L68.4246 88.8646L68.4939 88.9094ZM68.5103 88.8907L68.5628 88.9544L68.5629 88.9543L68.5103 88.8907ZM68.5104 88.8906L68.563 88.9542L68.5636 88.9537L68.5104 88.8906ZM68.5165 88.886L68.4687 88.8187L68.4686 88.8187L68.5165 88.886ZM68.5388 88.8723L68.58 88.9437L68.58 88.9437L68.5388 88.8723ZM68.5395 88.8719L68.4984 88.8003L68.4983 88.8004L68.5395 88.8719ZM68.5686 88.8551L68.6098 88.9266L68.6164 88.9228L68.6222 88.9179L68.5686 88.8551ZM68.6607 88.799L68.693 88.875L68.7002 88.8719L68.7067 88.8675L68.6607 88.799ZM68.6799 88.7856L68.7293 88.8516L68.7293 88.8516L68.6799 88.7856ZM68.6898 88.7777L68.636 88.7152L68.636 88.7152L68.6898 88.7777ZM68.6928 88.7749L68.6359 88.8346L68.6973 88.8933L68.7542 88.8301L68.6928 88.7749ZM68.7089 88.757L68.6871 88.6775L68.6638 88.6839L68.6476 88.7018L68.7089 88.757ZM68.7323 88.7506L68.7104 88.6711L68.7323 88.7506ZM68.757 88.7433L68.7818 88.822L68.8915 88.7875L68.8237 88.6946L68.757 88.7433ZM68.7524 88.7368L68.8204 88.6901L68.8033 88.6651L68.774 88.6572L68.7524 88.7368ZM66.7005 88.1812L66.7221 88.1016L66.7038 88.0966L66.6851 88.1001L66.7005 88.1812ZM66.6941 88.1822L66.685 88.1002H66.685L66.6941 88.1822ZM66.6641 88.1801L66.6436 88.26L66.6641 88.1801ZM66.63 88.1621L66.6843 88.1L66.67 88.0875L66.6516 88.0825L66.63 88.1621ZM66.5126 88.1303L66.4611 88.0659L66.3341 88.1675L66.491 88.2099L66.5126 88.1303ZM66.6321 88.0347L66.6839 88.0994L66.6894 88.0941L66.6321 88.0347ZM66.6579 88.0111L66.6027 87.9497H66.6027L66.6579 88.0111ZM66.6658 88.0039L66.7256 87.9471L66.6702 87.8888L66.6105 87.9427L66.6658 88.0039ZM66.6741 88.0126L66.6143 88.0695L66.6588 88.1163L66.7149 88.0844L66.6741 88.0126ZM66.6772 88.0109L66.718 88.0826H66.718L66.6772 88.0109ZM66.7055 87.9948L66.665 87.9229L66.7055 87.9948ZM66.8076 87.9392L66.7692 87.8662L66.8076 87.9392ZM66.8112 87.9373L66.886 87.9025L66.8494 87.8239L66.7727 87.8643L66.8112 87.9373ZM66.8112 87.9374L66.7365 87.9723L66.7713 88.047L66.8461 88.0122L66.8112 87.9374ZM67.2345 87.8216L67.2471 87.9032H67.2471L67.2345 87.8216ZM66.7051 88.0203L66.6846 88.1002L66.7051 88.0203ZM66.7104 88.0218L66.79 88.0434L66.8104 87.9681L66.7365 87.9435L66.7104 88.0218ZM66.6791 88.0179L66.6732 87.9356L66.4989 87.9481L66.6193 88.0747L66.6791 88.0179ZM66.7043 88.0444L66.6445 88.1013L66.7456 88.2076L66.7839 88.066L66.7043 88.0444ZM68.5991 88.5243L68.5776 88.604L68.8105 88.667L68.6649 88.4746L68.5991 88.5243ZM66.9203 88.0698L66.889 87.9934L66.6634 88.0857L66.8987 88.1494L66.9203 88.0698ZM68.5145 88.427L68.4599 88.4889L68.5145 88.427ZM68.5034 88.4173L68.4308 88.4563L68.4378 88.4693L68.4488 88.4791L68.5034 88.4173ZM68.4964 88.4042L68.5691 88.3652V88.3652L68.4964 88.4042ZM68.3411 88.2176L68.3841 88.1472L68.3411 88.2176ZM68.3331 88.2127L68.268 88.1621L68.2113 88.235L68.2901 88.2831L68.3331 88.2127ZM68.3334 88.2123L68.3986 88.2629L68.4492 88.1978L68.3841 88.1472L68.3334 88.2123ZM68.2032 88.1347L68.2417 88.0617L68.2417 88.0617L68.2032 88.1347ZM68.1907 88.1281L68.2293 88.0552H68.2293L68.1907 88.1281ZM68.0371 88.0322L68.0891 87.9682L68.0751 87.9569L68.0578 87.9524L68.0371 88.0322ZM67.2534 87.9857V87.9022L67.2407 87.9042L67.2534 87.9857ZM68.8424 89.5357L68.8221 89.4548L68.8111 89.4593L68.8424 89.5357ZM69.0122 89.4615L69.0946 89.4653L69.1023 89.3005L68.9658 89.3932L69.0122 89.4615ZM68.7103 89.5615L68.7153 89.6438L68.7103 89.5615ZM68.5901 89.5614L68.5941 89.479L68.366 89.4681L68.5344 89.6222L68.5901 89.5614ZM69.9523 90.8082L69.8966 90.8691L69.9604 90.9274L70.0157 90.861L69.9523 90.8082ZM70.0322 90.6823L70.1091 90.7122V90.7122L70.0322 90.6823ZM70.0408 90.6602L69.9914 90.5941L69.9725 90.6083L69.9639 90.6303L70.0408 90.6602ZM70.0597 90.6461L70.1091 90.7122L70.0597 90.6461ZM70.1229 90.569L70.199 90.6009V90.6009L70.1229 90.569ZM70.1468 90.4553L70.2289 90.4632L70.2312 90.4388L70.2199 90.4172L70.1468 90.4553ZM70.1064 90.3621L70.1834 90.3326L70.1064 90.3621ZM70.0956 90.3351L70.02 90.3681V90.3681L70.0956 90.3351ZM70.0351 90.2629L69.991 90.3327L70.0351 90.2629ZM70.0284 90.2587L69.9631 90.2083L69.9076 90.2801L69.9844 90.3285L70.0284 90.2587ZM70.0286 90.2584L70.0939 90.3089L70.1444 90.2437L70.0791 90.1932L70.0286 90.2584ZM69.8086 90.1492L69.7777 90.2257L69.8086 90.1492ZM69.7718 90.1343L69.803 90.0578L69.7992 90.0565L69.7718 90.1343ZM69.4819 89.9917L69.5312 89.9255L69.5241 89.9202L69.516 89.9166L69.4819 89.9917ZM69.3405 89.9124L69.3845 89.8425L69.3405 89.9124ZM69.3083 89.892L69.3526 89.8224L69.3083 89.892ZM69.2073 89.8304L69.2471 89.7582L69.2073 89.8304ZM69.1921 89.8221L69.1266 89.8722L69.1372 89.886L69.1523 89.8944L69.1921 89.8221ZM69.1816 89.8083L69.1161 89.8585L69.1816 89.8083ZM69.1292 89.748L69.0694 89.8049L69.1292 89.748ZM69.1236 89.7421L69.1833 89.6852L69.1833 89.6852L69.1236 89.7421ZM69.0775 89.69L69.0119 89.7399V89.7399L69.0775 89.69ZM69.0118 89.4913L69.0941 89.4852V89.4852L69.0118 89.4913ZM69.0114 89.4852V89.4027H68.9224L68.9291 89.4913L69.0114 89.4852ZM69.0116 89.4852V89.5677H69.0941V89.4852H69.0116ZM68.2984 89.518L68.3541 89.4572L68.2984 89.518ZM69.8429 90.9317L69.9125 90.976L69.9496 90.9176L69.8986 90.8708L69.8429 90.9317ZM68.1298 89.3637L68.1338 89.2813L67.9055 89.2703L68.0741 89.4246L68.1298 89.3637ZM68.3581 89.3748L68.3621 89.2924L68.3581 89.3748ZM68.4258 89.3814L68.435 89.2994L68.4258 89.3814ZM68.4457 89.3836L68.4547 89.3016L68.4457 89.3836ZM68.5716 89.3951L68.5769 89.3128L68.5716 89.3951ZM68.7004 89.3968L68.6955 89.3144L68.7004 89.3968ZM68.7819 89.3821L68.7477 89.307L68.7819 89.3821ZM68.7891 89.3788L68.7699 89.2986L68.7622 89.3004L68.7549 89.3037L68.7891 89.3788ZM68.7968 89.377L68.7776 89.2967L68.7968 89.377ZM69.0245 89.2204L69.0907 89.271L69.0964 89.2608L69.0245 89.2204ZM69.0333 89.2065L69.1002 89.2548L69.1002 89.2548L69.0333 89.2065ZM69.0334 89.2063L69.1003 89.2546L69.1003 89.2546L69.0334 89.2063ZM69.0708 89.1751L69.0369 89.0999V89.0999L69.0708 89.1751ZM69.1288 89.1707L69.1512 89.0913L69.1288 89.1707ZM69.1741 89.202L69.2403 89.1529L69.2403 89.1529L69.1741 89.202ZM69.191 89.243L69.1097 89.2566L69.1097 89.2566L69.191 89.243ZM69.1911 89.2432L69.1097 89.2568L69.1097 89.2568L69.1911 89.2432ZM69.1928 89.2829L69.1104 89.2799V89.2799L69.1928 89.2829ZM69.1902 89.3223L69.108 89.3152V89.3152L69.1902 89.3223ZM69.1846 89.3794L69.2667 89.3878V89.3878L69.1846 89.3794ZM69.1766 89.4822L69.0938 89.4813L69.0944 89.4888L69.1766 89.4822ZM69.2089 89.5901L69.1432 89.64L69.2089 89.5901ZM69.2434 89.6286L69.1836 89.6855L69.1836 89.6855L69.2434 89.6286ZM69.2488 89.6344L69.3086 89.5775L69.3086 89.5775L69.2488 89.6344ZM69.3018 89.6943L69.2375 89.746L69.2473 89.7581L69.2609 89.7659L69.3018 89.6943ZM69.3996 89.7545L69.4439 89.6849V89.6849L69.3996 89.7545ZM69.4284 89.7727L69.4724 89.7029L69.4724 89.7029L69.4284 89.7727ZM69.557 89.8445L69.5241 89.9202L69.5241 89.9202L69.557 89.8445ZM69.5663 89.8486L69.6166 89.7832L69.6086 89.777L69.5992 89.7729L69.5663 89.8486ZM69.5744 89.8548L69.6247 89.7894L69.5744 89.8548ZM69.8285 89.9794L69.8011 90.0572L69.8011 90.0572L69.8285 89.9794ZM69.8323 89.9807L69.9087 90.0119L69.9415 89.9317L69.8598 89.9029L69.8323 89.9807ZM69.8323 89.9808L69.7559 89.9496L69.7247 90.026L69.8011 90.0572L69.8323 89.9808ZM69.8678 89.9951L69.8371 90.0717H69.8371L69.8678 89.9951ZM70.1265 90.1255L70.0764 90.1914L70.0817 90.1949L70.1265 90.1255ZM70.2468 90.269L70.1712 90.302V90.302L70.2468 90.269ZM70.2668 90.3188L70.3439 90.2896L70.2668 90.3188ZM70.3018 90.3947L70.2311 90.4372L70.3018 90.3947ZM70.3153 90.4172L70.3976 90.4233L70.3995 90.3972L70.386 90.3747L70.3153 90.4172ZM70.3134 90.4433L70.2311 90.4372L70.3134 90.4433ZM70.275 90.6329L70.3511 90.6648L70.275 90.6329ZM70.1768 90.7638L70.124 90.7004L70.1095 90.7125L70.1017 90.7297L70.1768 90.7638ZM70.0742 90.9197L70.0112 90.8664L69.96 90.927L70.0185 90.9806L70.0742 90.9197ZM70.2868 91.1143L70.2311 91.1752L70.2868 91.1143ZM70.43 91.2454L70.4352 91.3277L70.6289 91.3156L70.4857 91.1845L70.43 91.2454ZM70.2362 91.2575L70.2311 91.1752H70.2311L70.2362 91.2575ZM70.168 91.2653L70.1556 91.1838H70.1556L70.168 91.2653ZM70.1558 91.2672L70.1432 91.1857H70.1432L70.1558 91.2672ZM70.0991 91.2749L70.091 91.1928L70.091 91.1928L70.0991 91.2749ZM69.934 91.255L69.9624 91.1764L69.9495 91.1739L69.934 91.255ZM69.8127 91.2118L69.8595 91.1439L69.8127 91.2118ZM69.7658 91.1558L69.6898 91.1878L69.7658 91.1558ZM69.7589 91.0844L69.6779 91.0688V91.0688L69.7589 91.0844ZM69.8016 90.9937L69.7326 90.9483L69.7326 90.9483L69.8016 90.9937ZM69.8185 90.9684L69.8868 91.0147L69.8868 91.0147L69.8185 90.9684ZM69.9662 91.0445L70.0219 90.9837L69.9509 90.9187L69.8975 90.9988L69.9662 91.0445ZM70.0391 91.1113L70.0312 91.1934L70.2769 91.2171L70.0948 91.0504L70.0391 91.1113ZM69.9855 91.0981L69.9561 91.1752H69.9561L69.9855 91.0981ZM69.9784 91.0954L70.0077 91.0183L70.0006 91.0156L69.9932 91.0142L69.9784 91.0954ZM69.9709 91.094L69.9561 91.1752L69.9561 91.1752L69.9709 91.094ZM69.9377 91.0869L69.8686 91.0418L69.8056 91.1384L69.9174 91.1669L69.9377 91.0869ZM69.9394 91.0844L69.8705 91.039L69.8705 91.0391L69.9394 91.0844ZM69.9522 91.0653L70.0205 91.1116L69.9522 91.0653ZM70.7424 91.1477V91.0652H70.7287L70.7157 91.0696L70.7424 91.1477ZM71.191 91.1477L71.2734 91.1526L71.2785 91.0652H71.191V91.1477ZM71.191 91.1478L71.1086 91.1429L71.1038 91.2253L71.1861 91.2302L71.191 91.1478ZM71.4661 91.2217L71.4314 91.2965L71.4661 91.2217ZM71.5548 91.2598L71.5261 91.3372L71.5548 91.2598ZM71.5701 91.2655L71.626 91.2049L71.614 91.1938L71.5988 91.1882L71.5701 91.2655ZM71.582 91.2765L71.638 91.2159V91.2159L71.582 91.2765ZM71.8358 91.454L71.8041 91.5302L71.8358 91.454ZM71.8537 91.4615L71.9161 91.4074L71.9033 91.3928L71.8854 91.3853L71.8537 91.4615ZM71.8664 91.4761L71.8041 91.5302L71.8041 91.5302L71.8664 91.4761ZM71.9221 91.5375L71.9827 91.4816L71.9827 91.4816L71.9221 91.5375ZM71.9234 91.539L71.8628 91.5949L71.8628 91.5949L71.9234 91.539ZM71.9942 91.6171L71.9322 91.6715L71.9942 91.6171ZM72.1226 91.7927L72.1961 91.7552L72.1961 91.7552L72.1226 91.7927ZM72.1261 91.7995L72.1566 91.8762L72.2407 91.8427L72.1996 91.7621L72.1261 91.7995ZM72.1258 91.7997L72.0952 91.723L72.0186 91.7535L72.0491 91.8302L72.1258 91.7997ZM72.1936 92.1862L72.1921 92.2687L72.2761 92.2702V92.1862H72.1936ZM72.1936 92.1862L72.1951 92.1037L72.1121 92.1022L72.1111 92.1852L72.1936 92.1862ZM72.1626 92.3792L72.2414 92.4036V92.4036L72.1626 92.3792ZM72.1587 92.3917L72.2374 92.4165L72.2374 92.4165L72.1587 92.3917ZM72.1313 92.5191L72.0491 92.5122L72.1313 92.5191ZM72.1306 92.5278L72.2095 92.5519L72.212 92.5435L72.2128 92.5348L72.1306 92.5278ZM72.128 92.5362L72.2069 92.5602L72.128 92.5362ZM71.9359 92.8809L71.8745 92.8258L71.8649 92.8364L71.8595 92.8497L71.9359 92.8809ZM71.8996 92.9353L71.8435 92.8749V92.8749L71.8996 92.9353ZM71.8256 92.9728L71.8471 93.0525L71.8256 92.9728ZM71.7792 92.9854L71.7205 93.0434L71.7543 93.0775L71.8007 93.065L71.7792 92.9854ZM71.7454 92.9512L71.8041 92.8932V92.8932L71.7454 92.9512ZM70.2354 91.4232L70.1767 91.4812L70.2354 91.4232ZM70.1278 91.3143L70.1116 91.2334L69.9616 91.2634L70.0691 91.3723L70.1278 91.3143ZM70.2779 91.2843L70.2941 91.3652L70.2779 91.2843ZM70.7294 91.1521L70.7561 91.2302L70.7294 91.1521ZM70.4534 91.409L70.431 91.3296L70.2965 91.3676L70.3947 91.467L70.4534 91.409ZM70.7697 91.3127V91.2302H70.7562L70.7435 91.2345L70.7697 91.3127ZM71.8064 92.7781L71.7477 92.8361L71.8084 92.8976L71.867 92.834L71.8064 92.7781ZM71.9677 92.4961L72.0464 92.5208L72.049 92.5126L72.0498 92.5041L71.9677 92.4961ZM72.0012 92.3425L71.9225 92.3177L72.0012 92.3425ZM72.0051 92.3302L71.9263 92.3057V92.3057L72.0051 92.3302ZM72.0286 92.1846L72.1111 92.1857L72.1111 92.1846L72.0286 92.1846ZM71.9739 91.8644L72.0513 91.8342L72.0468 91.8258L71.9739 91.8644ZM71.8702 91.726L71.9322 91.6715L71.8702 91.726ZM71.8021 91.6508L71.8628 91.5949L71.8628 91.5949L71.8021 91.6508ZM71.7997 91.6482L71.8603 91.5923L71.8603 91.5923L71.7997 91.6482ZM71.7545 91.5987L71.8161 91.5438L71.8041 91.5304L71.7877 91.5232L71.7545 91.5987ZM71.4819 91.4087L71.5378 91.348L71.5263 91.3373L71.5115 91.3317L71.4819 91.4087ZM71.376 91.3628L71.4112 91.2882L71.376 91.3628ZM71.1836 91.3127L71.1887 91.2302H71.1836V91.3127ZM78.6183 95.6582L78.585 95.6221L78.4637 95.734L78.4971 95.7702L78.6183 95.6582ZM82.6027 99.1791C81.5736 98.392 80.105 97.2686 78.6183 95.6582L78.4971 95.7702C79.9943 97.3919 81.4729 98.5227 82.5025 99.3102L82.6027 99.1791ZM82.7488 99.2909C82.7012 99.2544 82.6524 99.2172 82.6027 99.1791L82.5025 99.3102C82.5522 99.3482 82.6009 99.3855 82.6485 99.4219L82.7488 99.2909ZM83.8739 100.246C83.6636 99.997 83.2586 99.6815 82.7488 99.2909L82.6485 99.4219C83.1648 99.8174 83.5519 100.12 83.7479 100.352L83.8739 100.246ZM84.0553 100.66C84.0652 100.508 83.9752 100.366 83.8739 100.246L83.7479 100.352C83.8458 100.468 83.896 100.566 83.8907 100.649L84.0553 100.66ZM83.7672 101.006C83.912 100.942 84.044 100.835 84.0553 100.66L83.8907 100.649C83.8853 100.732 83.8247 100.8 83.7001 100.855L83.7672 101.006ZM83.7922 100.872L78.5829 95.62L78.4658 95.7362L83.6751 100.989L83.7922 100.872ZM80.505 100.123C78.9917 99.4897 77.1304 98.3722 75.2501 96.6371L75.1382 96.7584C77.0321 98.506 78.9095 99.6342 80.4413 100.275L80.505 100.123ZM82.4975 100.73C81.9553 100.641 81.2768 100.446 80.505 100.123L80.4413 100.275C81.2222 100.602 81.9133 100.802 82.4709 100.893L82.4975 100.73ZM83.633 100.704C83.4318 100.794 83.0483 100.82 82.4975 100.73L82.4709 100.893C83.0286 100.983 83.4528 100.965 83.7001 100.855L83.633 100.704ZM83.6338 100.704L83.6338 100.704L83.6994 100.855L83.6994 100.855L83.6338 100.704ZM83.726 100.639C83.726 100.639 83.7259 100.64 83.7254 100.641C83.7248 100.642 83.7231 100.646 83.7181 100.651C83.7077 100.663 83.684 100.682 83.6331 100.704L83.7001 100.855C83.8251 100.8 83.8853 100.732 83.8907 100.649L83.726 100.639ZM83.6219 100.459C83.6673 100.513 83.6945 100.554 83.7098 100.586C83.7253 100.617 83.7263 100.634 83.726 100.639L83.8907 100.649C83.8935 100.606 83.8809 100.56 83.858 100.513C83.8349 100.466 83.7988 100.413 83.7479 100.352L83.6219 100.459ZM82.5481 99.5529C83.071 99.9534 83.4403 100.244 83.6219 100.459L83.7479 100.352C83.5519 100.12 83.1648 99.8174 82.6485 99.4219L82.5481 99.5529ZM82.4011 99.4404C82.4512 99.4787 82.5003 99.5162 82.5481 99.5529L82.6485 99.4219C82.6005 99.3852 82.5515 99.3477 82.5014 99.3094L82.4011 99.4404ZM78.4094 95.9183C79.905 97.5314 81.379 98.6586 82.4011 99.4404L82.5014 99.3094C81.4797 98.5279 80.0156 97.408 78.5304 95.8062L78.4094 95.9183ZM75.2145 96.7777L78.4903 95.9422L78.4495 95.7823L75.1737 96.6178L75.2145 96.7777ZM65.6661 86.1469L65.4833 85.9692L65.3683 86.0875L65.5511 86.2652L65.6661 86.1469ZM66.9245 87.37L65.6661 86.1469L65.5511 86.2652L66.8095 87.4883L66.9245 87.37ZM66.8789 87.321C66.8583 87.3345 66.8384 87.3483 66.8193 87.3619L66.9147 87.4965C66.9329 87.4836 66.951 87.471 66.9693 87.459L66.8789 87.321ZM66.906 87.0838C66.8763 87.1656 66.8538 87.2747 66.8421 87.381L67.0062 87.399C67.0169 87.3012 67.0372 87.2059 67.0611 87.1402L66.906 87.0838ZM67.1654 87.0821L67.008 87.0332L66.9591 87.1908L67.1165 87.2396L67.1654 87.0821ZM67.1923 87.3197C67.2026 87.2646 67.2115 87.2174 67.2208 87.1815L67.0611 87.1402C67.0501 87.1827 67.0401 87.2359 67.0301 87.2894L67.1923 87.3197ZM67.1915 87.3238L67.1923 87.3197L67.0301 87.2894L67.0293 87.2935L67.1915 87.3238ZM67.1661 87.451C67.1754 87.4101 67.1839 87.3648 67.1915 87.3238L67.0293 87.2935C67.0215 87.3352 67.0137 87.3773 67.0052 87.4145L67.1661 87.451ZM67.1642 87.4938C67.165 87.4762 67.1662 87.4583 67.1678 87.4403L67.0035 87.4253C67.0017 87.4457 67.0002 87.4662 66.9993 87.4865L67.1642 87.4938ZM67.235 87.6605C67.1895 87.5867 67.1709 87.5558 67.1639 87.4823L66.9996 87.498C67.0105 87.6116 67.047 87.67 67.0946 87.7471L67.235 87.6605ZM67.2637 87.7075C67.2533 87.6902 67.2437 87.6745 67.235 87.6605L67.0946 87.7471C67.1033 87.7613 67.1124 87.776 67.1221 87.7922L67.2637 87.7075ZM67.1158 87.916L67.2441 87.8145L67.1417 87.6851L67.0134 87.7866L67.1158 87.916ZM66.7933 87.7027L67.0071 87.9105L67.1221 87.7922L66.9083 87.5844L66.7933 87.7027ZM66.8079 87.7705C66.8405 87.7504 66.8703 87.7304 66.8979 87.7113L66.8037 87.5758C66.7779 87.5937 66.7506 87.6119 66.7211 87.6302L66.8079 87.7705ZM66.7948 87.7786L66.8079 87.7705L66.7211 87.6302L66.7081 87.6382L66.7948 87.7786ZM66.7518 87.7923L66.7668 87.7894L66.7361 87.6273L66.7211 87.6302L66.7518 87.7923ZM66.2952 87.7573C66.4513 87.817 66.595 87.822 66.7518 87.7923L66.7211 87.6302C66.5891 87.6552 66.4771 87.6502 66.3541 87.6032L66.2952 87.7573ZM66.294 87.7568L66.2952 87.7573L66.3541 87.6032L66.3529 87.6027L66.294 87.7568ZM66.2469 87.649L66.2469 87.649L66.4 87.7106L66.4 87.7106L66.2469 87.649ZM65.9529 87.5781C66.0454 87.6471 66.1725 87.7082 66.2928 87.7564L66.3541 87.6032C66.2383 87.5569 66.1269 87.5021 66.0516 87.4459L65.9529 87.5781ZM65.8125 87.502C65.8637 87.5401 65.9168 87.565 65.9696 87.5878L66.0349 87.4362C65.9845 87.4145 65.9462 87.3958 65.9111 87.3697L65.8125 87.502ZM65.6818 87.3673C65.7228 87.422 65.7636 87.4656 65.8125 87.502L65.9111 87.3697C65.8783 87.3453 65.8483 87.3143 65.8138 87.2683L65.6818 87.3673ZM65.6213 87.3376C65.65 87.3622 65.6825 87.3808 65.7177 87.3946L65.7779 87.241C65.7577 87.2331 65.7416 87.2234 65.7286 87.2123L65.6213 87.3376ZM65.5418 87.2329C65.5584 87.2674 65.5829 87.3047 65.6213 87.3376L65.7286 87.2123C65.7114 87.1976 65.6997 87.1804 65.6905 87.1613L65.5418 87.2329ZM65.5102 87.1478C65.5166 87.1686 65.5265 87.201 65.5418 87.2329L65.6905 87.1613C65.6813 87.1422 65.6747 87.1212 65.6679 87.0993L65.5102 87.1478ZM65.5095 87.1455L65.5102 87.1478L65.6679 87.0993L65.6672 87.097L65.5095 87.1455ZM65.492 87.0942C65.498 87.1083 65.5025 87.1228 65.5095 87.1455L65.6672 87.097C65.6606 87.0757 65.6538 87.0532 65.6441 87.0302L65.492 87.0942ZM65.4878 87.0841L65.492 87.0942L65.6441 87.0302L65.6399 87.0201L65.4878 87.0841ZM65.4806 87.0525L65.4821 87.0633L65.6456 87.041L65.6441 87.0302L65.4806 87.0525ZM65.479 87.0406C65.4795 87.0446 65.4801 87.0485 65.4806 87.0525L65.6441 87.0302C65.6436 87.0262 65.643 87.0222 65.6425 87.0183L65.479 87.0406ZM65.4491 86.6854C65.4498 86.8275 65.4648 86.9371 65.479 87.0406L65.6425 87.0183C65.6284 86.9151 65.6148 86.8149 65.6141 86.6846L65.4491 86.6854ZM65.4135 86.4765C65.424 86.5528 65.4373 86.6434 65.4513 86.7037L65.612 86.6664C65.6 86.6147 65.5876 86.5316 65.577 86.454L65.4135 86.4765ZM65.4011 86.384C65.4047 86.4115 65.4089 86.443 65.4135 86.4765L65.577 86.454C65.5724 86.4211 65.5683 86.3899 65.5647 86.3624L65.4011 86.384ZM65.3886 86.2937C65.391 86.3077 65.3952 86.3392 65.4011 86.384L65.5647 86.3624C65.5591 86.32 65.5543 86.2837 65.5511 86.2652L65.3886 86.2937ZM65.3445 86.0426L65.3886 86.2937L65.5511 86.2652L65.507 86.0141L65.3445 86.0426ZM65.608 86.5506L66.6726 87.5853L66.7876 87.467L65.723 86.4323L65.608 86.5506ZM65.7742 86.6352C65.7663 86.6037 65.7568 86.5465 65.7472 86.4797L65.5839 86.5032C65.5934 86.5691 65.6039 86.6344 65.6141 86.6752L65.7742 86.6352ZM65.7766 86.645L65.7742 86.6352L65.6141 86.6752L65.6166 86.685L65.7766 86.645ZM65.7791 86.6752V86.665H65.6141V86.6752H65.7791ZM65.8062 86.9976C65.7917 86.8914 65.7791 86.7986 65.7791 86.6752H65.6141C65.6141 86.8109 65.6282 86.9135 65.6427 87.0199L65.8062 86.9976ZM65.8243 87.0466C65.8189 87.0291 65.8114 87.0045 65.8012 86.9785L65.6477 87.0389C65.6553 87.0583 65.6611 87.0771 65.6666 87.0951L65.8243 87.0466ZM65.8256 87.0507C65.8252 87.0494 65.8248 87.048 65.8243 87.0466L65.6666 87.0951C65.667 87.0965 65.6675 87.0979 65.6679 87.0993L65.8256 87.0507ZM65.8391 87.0897C65.8361 87.0835 65.8329 87.0743 65.8256 87.0507L65.6679 87.0993C65.6746 87.1212 65.6813 87.1422 65.6905 87.1613L65.8391 87.0897ZM65.8359 87.0869C65.8375 87.0883 65.8388 87.0898 65.8397 87.091C65.8404 87.0919 65.8402 87.0919 65.8391 87.0897L65.6905 87.1613C65.6997 87.1804 65.7115 87.1976 65.7286 87.2123L65.8359 87.0869ZM65.8454 87.0898C65.8327 87.0861 65.8322 87.0837 65.8359 87.087L65.7286 87.2123C65.7458 87.227 65.7683 87.2392 65.7991 87.2482L65.8454 87.0898ZM65.8729 87.0978L65.8454 87.0898L65.7991 87.2482L65.8265 87.2562L65.8729 87.0978ZM65.9334 87.1524L65.9169 87.1291L65.7825 87.2249L65.7991 87.2482L65.9334 87.1524ZM66.0097 87.2374C65.9909 87.2234 65.9686 87.2017 65.9334 87.1524L65.7991 87.2482C65.8401 87.3057 65.8738 87.3419 65.9111 87.3697L66.0097 87.2374ZM66.1089 87.2884C66.0549 87.2653 66.0299 87.2525 66.0097 87.2374L65.9111 87.3697C65.9484 87.3974 65.9892 87.4167 66.0441 87.4402L66.1089 87.2884ZM66.1186 87.2926L66.1089 87.2884L66.0441 87.4402L66.0538 87.4443L66.1186 87.2926ZM66.145 87.3097L66.1367 87.3032L66.0357 87.4337L66.0441 87.4402L66.145 87.3097ZM66.4148 87.4497C66.2993 87.4035 66.2016 87.3534 66.145 87.3097L66.0441 87.4402C66.119 87.4981 66.2337 87.555 66.3535 87.6029L66.4148 87.4497ZM66.6768 87.4705C66.5768 87.4878 66.4996 87.482 66.4135 87.4492L66.3548 87.6034C66.4721 87.6481 66.5798 87.6547 66.7048 87.6331L66.6768 87.4705ZM66.6841 87.4577C66.6719 87.4659 66.6595 87.474 66.6467 87.4821L66.7349 87.6216C66.7491 87.6125 66.7628 87.6036 66.7761 87.5947L66.6841 87.4577ZM67.3296 87.8207V87.8197H67.1646V87.8207H67.3296ZM67.6761 87.7382H67.2471V87.9032H67.6761V87.7382ZM68.1186 87.7977C67.9886 87.7631 67.862 87.7382 67.6761 87.7382V87.9032C67.8441 87.9032 67.9561 87.9252 68.0761 87.9572L68.1186 87.7977ZM68.1375 87.8028L68.1186 87.7977L68.0761 87.9572L68.095 87.9622L68.1375 87.8028ZM68.1855 87.8337L68.1709 87.8208L68.0615 87.9442L68.0761 87.9572L68.1855 87.8337ZM68.3066 87.9094C68.2504 87.8796 68.2128 87.8578 68.1855 87.8337L68.0761 87.9572C68.1201 87.9962 68.1747 88.0262 68.2293 88.0552L68.3066 87.9094ZM68.3209 87.9169C68.316 87.9144 68.3112 87.9118 68.3066 87.9094L68.2293 88.0552C68.2342 88.0577 68.2391 88.0603 68.244 88.0629L68.3209 87.9169ZM68.4811 88.0136C68.4282 87.9733 68.3675 87.9415 68.3209 87.9169L68.244 88.0629C68.2927 88.0886 68.3409 88.1142 68.381 88.1448L68.4811 88.0136ZM68.7076 88.2744C68.6572 88.1814 68.6001 88.0871 68.4746 88.0091L68.3875 88.1493C68.476 88.2042 68.5162 88.2676 68.5625 88.353L68.7076 88.2744ZM68.8067 88.3886C68.7783 88.3507 68.7395 88.2987 68.6916 88.2536L68.5785 88.3738C68.6145 88.4076 68.6452 88.4483 68.6748 88.4876L68.8067 88.3886ZM68.8126 88.3964C68.8107 88.3938 68.8087 88.3912 68.8067 88.3886L68.6748 88.4876C68.6768 88.4903 68.6787 88.4929 68.6807 88.4955L68.8126 88.3964ZM68.8856 88.4808C68.869 88.4685 68.8497 88.4457 68.8126 88.3964L68.6807 88.4955C68.7147 88.5407 68.748 88.5841 68.7871 88.6132L68.8856 88.4808ZM68.909 88.4982L68.8856 88.4808L68.7871 88.6132L68.8105 88.6306L68.909 88.4982ZM68.9469 88.5723L68.9397 88.5439L68.7798 88.5849L68.7871 88.6132L68.9469 88.5723ZM68.9478 88.5753C68.9475 88.5743 68.9472 88.5733 68.9469 88.5723L68.7871 88.6132C68.7876 88.6152 68.7881 88.6171 68.7887 88.6191L68.9478 88.5753ZM69.6592 88.7259L68.8898 88.5176L68.8466 88.6768L69.6161 88.8852L69.6592 88.7259ZM69.6979 88.9786L69.7194 88.8164L69.5559 88.7947L69.5343 88.9568L69.6979 88.9786ZM69.4552 89.0327C69.507 89.0472 69.5578 89.0502 69.6161 89.0502V88.8852C69.5626 88.8852 69.5296 88.8822 69.4996 88.8738L69.4552 89.0327ZM69.3367 88.9826C69.3719 89.0008 69.4104 89.0202 69.4552 89.0327L69.4996 88.8738C69.4728 88.8663 69.4477 88.8542 69.4124 88.836L69.3367 88.9826ZM69.2101 88.9504C69.2486 88.9627 69.3022 88.98 69.3597 88.9905L69.3894 88.8282C69.3438 88.8199 69.2999 88.8059 69.2604 88.7933L69.2101 88.9504ZM69.1699 88.938C69.1804 88.9409 69.1934 88.9451 69.2101 88.9504L69.2604 88.7933C69.2446 88.7882 69.2284 88.783 69.2142 88.779L69.1699 88.938ZM69.0764 88.9338C69.1067 88.9252 69.1297 88.9268 69.1699 88.938L69.2142 88.779C69.1573 88.7632 69.1011 88.7552 69.0311 88.7752L69.0764 88.9338ZM69.0663 88.9367L69.0764 88.9338L69.0311 88.7752L69.021 88.7781L69.0663 88.9367ZM69.1404 88.8684L69.118 88.8217L68.9693 88.8931L68.9917 88.9398L69.1404 88.8684ZM68.9504 88.9948L69.0717 88.9864L69.0604 88.8218L68.9391 88.8302L68.9504 88.9948ZM68.7662 89.0232C68.8034 89.0097 68.8596 89.001 68.9504 88.9948L68.9391 88.8302C68.8476 88.8365 68.7707 88.846 68.7096 88.8682L68.7662 89.0232ZM68.7823 89.0153C68.7823 89.0153 68.7825 89.0151 68.7827 89.015L68.6931 88.8764C68.6931 88.8765 68.6931 88.8764 68.6929 88.8766L68.7823 89.0153ZM68.7082 89.0603C68.7306 89.0473 68.7573 89.0314 68.7823 89.0153L68.6929 88.8766C68.671 88.8907 68.6468 88.9052 68.6251 88.9177L68.7082 89.0603ZM68.7232 89.0492C68.7238 89.0486 68.7245 89.0479 68.7251 89.0473L68.6082 88.9308C68.6061 88.9329 68.6041 88.935 68.6021 88.9372L68.7232 89.0492ZM68.7122 89.0611L68.7232 89.0492L68.6021 88.9372L68.5911 88.9491L68.7122 89.0611ZM68.6717 89.0868L68.6865 89.0799L68.6168 88.9303L68.6021 88.9372L68.6717 89.0868ZM68.6335 89.1041C68.6425 89.1003 68.6558 89.0942 68.6717 89.0868L68.6021 88.9372C68.5857 88.9448 68.5751 88.9496 68.5692 88.9521L68.6335 89.1041ZM68.6345 89.1037L68.6345 89.1036L68.5681 88.9526L68.568 88.9526L68.6345 89.1037ZM68.597 89.1158C68.6164 89.1118 68.6331 89.1043 68.6347 89.1036L68.5678 88.9527C68.5678 88.9527 68.5678 88.9527 68.5679 88.9527C68.5679 88.9527 68.5679 88.9527 68.5679 88.9527C68.5678 88.9527 68.5677 88.9528 68.5676 88.9528C68.5672 88.953 68.5666 88.9532 68.5659 88.9535C68.5641 88.9541 68.5633 88.9543 68.5636 88.9542L68.597 89.1158ZM68.5733 89.119C68.5841 89.1183 68.5926 89.1167 68.597 89.1158L68.5636 88.9542L68.5634 88.9543L68.5733 89.119ZM68.5078 89.1097C68.5393 89.1209 68.566 89.1194 68.5733 89.119L68.5634 88.9543L68.5632 88.9543L68.5078 89.1097ZM68.4411 89.0652C68.4643 89.0908 68.4903 89.1034 68.5078 89.1097L68.5632 88.9543L68.5632 88.9542L68.4411 89.0652ZM68.3989 88.9698C68.4021 89.0037 68.416 89.0376 68.4411 89.0652L68.5632 88.9542L68.5632 88.9542L68.3989 88.9698ZM68.4245 88.8647C68.4191 88.8731 68.3935 88.9128 68.3989 88.9698L68.5632 88.9542L68.5632 88.9542L68.4245 88.8647ZM68.4246 88.8646L68.4245 88.8647L68.5632 88.9542L68.5632 88.9541L68.4246 88.8646ZM68.4579 88.827C68.4543 88.8299 68.4385 88.8431 68.4246 88.8646L68.5632 88.9541L68.5628 88.9544L68.4579 88.827ZM68.4579 88.827L68.4578 88.8271L68.5629 88.9543L68.563 88.9542L68.4579 88.827ZM68.4686 88.8187C68.4665 88.8202 68.4623 88.8233 68.4573 88.8275L68.5636 88.9537L68.5643 88.9532L68.4686 88.8187ZM68.4975 88.8008C68.4923 88.8039 68.4786 88.8116 68.4687 88.8187L68.5643 88.9532C68.5642 88.9532 68.5644 88.9531 68.5647 88.9529C68.565 88.9527 68.5654 88.9524 68.566 88.9521C68.5671 88.9514 68.5684 88.9505 68.57 88.9496C68.5733 88.9476 68.5767 88.9457 68.58 88.9437L68.4975 88.8008ZM68.4983 88.8004L68.4975 88.8008L68.58 88.9437L68.5807 88.9433L68.4983 88.8004ZM68.5275 88.7836L68.4984 88.8003L68.5806 88.9434L68.6098 88.9266L68.5275 88.7836ZM68.6284 88.7231C68.5888 88.74 68.5503 88.7623 68.5151 88.7923L68.6222 88.9179C68.6428 88.9003 68.6664 88.8863 68.693 88.875L68.6284 88.7231ZM68.6305 88.7195C68.6264 88.7225 68.6212 88.7262 68.6147 88.7305L68.7067 88.8675C68.7147 88.8622 68.7224 88.8568 68.7293 88.8516L68.6305 88.7195ZM68.636 88.7152C68.6353 88.7157 68.6336 88.7171 68.6305 88.7195L68.7293 88.8516C68.7345 88.8477 68.7393 88.8439 68.7435 88.8403L68.636 88.7152ZM68.7498 88.7152C68.7295 88.701 68.692 88.6924 68.6781 88.6938C68.6709 88.6954 68.66 88.6992 68.6562 88.701C68.6498 88.7042 68.6453 88.7075 68.6443 88.7082C68.6412 88.7105 68.639 88.7124 68.6385 88.7128C68.6371 88.714 68.6361 88.7151 68.6359 88.7152C68.6353 88.7158 68.6348 88.7163 68.6347 88.7163C68.6346 88.7165 68.6343 88.7167 68.6344 88.7166C68.6345 88.7166 68.6346 88.7165 68.6348 88.7163C68.6351 88.716 68.6353 88.7157 68.6356 88.7155C68.636 88.7151 68.6362 88.715 68.636 88.7152L68.7435 88.8403C68.7455 88.8386 68.7472 88.837 68.7487 88.8357C68.7494 88.835 68.75 88.8344 68.7506 88.8339C68.7508 88.8336 68.751 88.8334 68.7511 88.8333C68.7513 88.8332 68.7511 88.8334 68.7509 88.8335C68.7509 88.8335 68.7504 88.834 68.7498 88.8346C68.7496 88.8348 68.7485 88.8358 68.7471 88.837C68.7467 88.8374 68.7445 88.8394 68.7414 88.8416C68.7404 88.8423 68.7359 88.8457 68.7295 88.8488C68.7257 88.8506 68.7148 88.8545 68.7076 88.8561C68.6936 88.8574 68.6561 88.8488 68.6359 88.8346L68.7498 88.7152ZM68.6476 88.7018L68.6315 88.7197L68.7542 88.8301L68.7703 88.8122L68.6476 88.7018ZM68.7104 88.6711L68.6871 88.6775L68.7308 88.8366L68.7541 88.8302L68.7104 88.6711ZM68.7323 88.6646C68.7251 88.6669 68.7179 88.669 68.7104 88.6711L68.7541 88.8302C68.7639 88.8275 68.7731 88.8247 68.7818 88.822L68.7323 88.6646ZM68.6845 88.7835C68.6864 88.7864 68.6884 88.7892 68.6904 88.7919L68.8237 88.6946C68.8226 88.6931 68.8215 88.6916 68.8204 88.6901L68.6845 88.7835ZM66.679 88.2608L68.7309 88.8164L68.774 88.6572L66.7221 88.1016L66.679 88.2608ZM66.7032 88.2642C66.7078 88.2637 66.712 88.263 66.7159 88.2622L66.6851 88.1001L66.685 88.1002L66.7032 88.2642ZM66.6436 88.26C66.6709 88.267 66.6933 88.2653 66.7032 88.2642L66.685 88.1002L66.6846 88.1002L66.6436 88.26ZM66.5757 88.2242C66.5989 88.2445 66.6241 88.255 66.6436 88.26L66.6846 88.1002L66.6843 88.1L66.5757 88.2242ZM66.491 88.2099L66.6085 88.2417L66.6516 88.0825L66.5342 88.0507L66.491 88.2099ZM66.5805 87.9703L66.4611 88.0659L66.5641 88.1947L66.6836 88.0992L66.5805 87.9703ZM66.6027 87.9497C66.5933 87.9582 66.5827 87.9677 66.5748 87.9754L66.6894 88.0941C66.6948 88.0889 66.7028 88.0816 66.7131 88.0724L66.6027 87.9497ZM66.6105 87.9427C66.6079 87.945 66.6054 87.9474 66.6027 87.9497L66.7131 88.0724C66.7157 88.07 66.7184 88.0676 66.7211 88.0652L66.6105 87.9427ZM66.7339 87.9558L66.7256 87.9471L66.606 88.0608L66.6143 88.0695L66.7339 87.9558ZM66.6364 87.9392C66.6353 87.9398 66.6343 87.9404 66.6333 87.9409L66.7149 88.0844C66.7159 88.0838 66.7169 88.0832 66.718 88.0826L66.6364 87.9392ZM66.665 87.9229C66.6534 87.9295 66.644 87.9349 66.6364 87.9392L66.718 88.0826C66.7255 88.0783 66.7347 88.0731 66.746 88.0667L66.665 87.9229ZM66.7692 87.8662C66.7258 87.8891 66.6912 87.9082 66.665 87.9229L66.746 88.0667C66.7712 88.0525 66.8043 88.0342 66.8461 88.0122L66.7692 87.8662ZM66.7727 87.8643L66.7692 87.8662L66.8461 88.0122L66.8497 88.0103L66.7727 87.8643ZM66.886 87.9025L66.886 87.9025L66.7364 87.9722L66.7365 87.9723L66.886 87.9025ZM67.222 87.7401C67.0597 87.7651 66.915 87.798 66.7764 87.8626L66.8461 88.0122C66.9641 87.9572 67.0911 87.9272 67.2471 87.9032L67.222 87.7401ZM67.2345 87.7382L67.222 87.7401L67.2471 87.9032L67.2596 87.9012L67.2345 87.7382ZM66.6846 88.1002L66.6844 88.1001L66.7365 87.9435C66.7328 87.9423 66.7291 87.9412 66.7256 87.9403L66.6846 88.1002ZM66.6849 88.1002L66.6846 88.1002L66.7256 87.9403C66.7035 87.9347 66.6847 87.9348 66.6732 87.9356L66.6849 88.1002ZM66.7641 87.9876L66.7389 87.9611L66.6193 88.0747L66.6445 88.1013L66.7641 87.9876ZM66.6308 88.0003L66.6247 88.0229L66.7839 88.066L66.79 88.0434L66.6308 88.0003ZM68.6207 88.4447L66.9418 87.9901L66.8987 88.1494L68.5776 88.604L68.6207 88.4447ZM68.4599 88.4889C68.4827 88.509 68.5042 88.5355 68.5333 88.5741L68.6649 88.4746C68.6361 88.4365 68.6057 88.3975 68.5691 88.3652L68.4599 88.4889ZM68.4488 88.4791L68.4599 88.4889L68.5691 88.3652L68.558 88.3554L68.4488 88.4791ZM68.4238 88.4433L68.4308 88.4563L68.5761 88.3782L68.5691 88.3652L68.4238 88.4433ZM68.2981 88.288C68.3535 88.3218 68.3763 88.3551 68.4238 88.4433L68.5691 88.3652C68.5191 88.2723 68.4791 88.2052 68.3841 88.1472L68.2981 88.288ZM68.2901 88.2831L68.2981 88.288L68.3841 88.1472L68.3761 88.1423L68.2901 88.2831ZM68.2683 88.1616L68.268 88.1621L68.3982 88.2634L68.3986 88.2629L68.2683 88.1616ZM68.1646 88.2076C68.2183 88.236 68.2545 88.2554 68.2828 88.2774L68.3841 88.1472C68.3421 88.1145 68.2918 88.0882 68.2417 88.0617L68.1646 88.2076ZM68.1521 88.201C68.1564 88.2032 68.1605 88.2054 68.1646 88.2076L68.2417 88.0617C68.2376 88.0596 68.2335 88.0574 68.2293 88.0552L68.1521 88.201ZM67.985 88.0962C68.041 88.1417 68.1037 88.1753 68.1521 88.201L68.2293 88.0552C68.1802 88.0291 68.131 88.0022 68.0891 87.9682L67.985 88.0962ZM67.6761 88.0682C67.8186 88.0682 67.9135 88.0854 68.0163 88.1121L68.0578 87.9524C67.9442 87.9229 67.8352 87.9032 67.6761 87.9032V88.0682ZM67.2534 88.0682H67.6761V87.9032H67.2534V88.0682ZM66.9515 88.1461C67.0387 88.1105 67.1373 88.0873 67.2661 88.0672L67.2407 87.9042C67.1064 87.9251 66.9934 87.9507 66.889 87.9934L66.9515 88.1461ZM68.8625 89.6157C68.9377 89.5968 69.0017 89.5684 69.0586 89.5297L68.9658 89.3932C68.9263 89.4201 68.8803 89.4411 68.8223 89.4556L68.8625 89.6157ZM68.7153 89.6438C68.7622 89.641 68.8207 89.6337 68.8738 89.612L68.8111 89.4593C68.7832 89.4708 68.7461 89.4767 68.7054 89.4791L68.7153 89.6438ZM68.5862 89.6438C68.6279 89.6458 68.6724 89.6464 68.7153 89.6438L68.7054 89.4791C68.6704 89.4812 68.6322 89.4808 68.5941 89.479L68.5862 89.6438ZM70.008 90.7473L68.6458 89.5005L68.5344 89.6222L69.8966 90.8691L70.008 90.7473ZM69.9553 90.6524C69.9442 90.681 69.9209 90.717 69.8889 90.7554L70.0157 90.861C70.0527 90.8166 70.0887 90.7647 70.1091 90.7122L69.9553 90.6524ZM69.9639 90.6303L69.9553 90.6524L70.1091 90.7122L70.1177 90.6901L69.9639 90.6303ZM70.0103 90.58L69.9914 90.5941L70.0902 90.7263L70.1091 90.7122L70.0103 90.58ZM70.0468 90.537C70.0411 90.5506 70.0331 90.563 70.0103 90.58L70.1091 90.7122C70.1526 90.6797 70.1806 90.6447 70.199 90.6009L70.0468 90.537ZM70.0647 90.4474C70.0601 90.4953 70.0536 90.521 70.0468 90.537L70.199 90.6009C70.2151 90.5626 70.2236 90.518 70.2289 90.4632L70.0647 90.4474ZM70.0293 90.3917C70.0389 90.4167 70.0535 90.4549 70.0736 90.4935L70.2199 90.4172C70.2048 90.3881 70.1932 90.3582 70.1834 90.3326L70.0293 90.3917ZM70.02 90.3681C70.0221 90.3729 70.0249 90.3801 70.0293 90.3917L70.1834 90.3326C70.1795 90.3224 70.1752 90.3111 70.1712 90.302L70.02 90.3681ZM69.991 90.3327C70.0016 90.3394 70.0061 90.3441 70.0087 90.3473C70.0116 90.351 70.0149 90.3563 70.02 90.3681L70.1712 90.302C70.1635 90.2843 70.1535 90.2643 70.1378 90.2446C70.1219 90.2246 70.1026 90.208 70.0791 90.1932L69.991 90.3327ZM69.9844 90.3285L69.991 90.3327L70.0791 90.1932L70.0724 90.189L69.9844 90.3285ZM69.9634 90.208L69.9631 90.2083L70.0936 90.3092L70.0939 90.3089L69.9634 90.208ZM69.7777 90.2257C69.8666 90.2616 69.9338 90.2894 69.9782 90.3237L70.0791 90.1932C70.0128 90.1419 69.9212 90.1057 69.8395 90.0727L69.7777 90.2257ZM69.7406 90.2107C69.7531 90.2158 69.7656 90.2208 69.7777 90.2257L69.8395 90.0727C69.8273 90.0678 69.8151 90.0629 69.8029 90.0579L69.7406 90.2107ZM69.4326 90.0579C69.5293 90.1299 69.6394 90.1751 69.7443 90.2121L69.7992 90.0565C69.6982 90.0208 69.6073 89.9823 69.5312 89.9255L69.4326 90.0579ZM69.2965 89.9822C69.3409 90.0101 69.3932 90.042 69.4478 90.0668L69.516 89.9166C69.4724 89.8968 69.4282 89.8701 69.3845 89.8425L69.2965 89.9822ZM69.264 89.9616C69.2745 89.9682 69.2853 89.9751 69.2965 89.9822L69.3845 89.8425C69.3736 89.8357 69.3631 89.829 69.3526 89.8224L69.264 89.9616ZM69.1675 89.9027C69.1971 89.919 69.2277 89.9384 69.264 89.9616L69.3526 89.8224C69.3173 89.7999 69.2821 89.7774 69.2471 89.7582L69.1675 89.9027ZM69.1523 89.8944L69.1675 89.9027L69.2471 89.7582L69.2319 89.7498L69.1523 89.8944ZM69.1161 89.8585L69.1266 89.8722L69.2576 89.7719L69.2471 89.7582L69.1161 89.8585ZM69.0694 89.8049C69.0855 89.8218 69.1002 89.8378 69.1161 89.8585L69.2471 89.7582C69.2258 89.7304 69.2064 89.7095 69.189 89.6912L69.0694 89.8049ZM69.0639 89.7991C69.0659 89.8011 69.0677 89.803 69.0694 89.8049L69.189 89.6912C69.1871 89.6892 69.1852 89.6872 69.1833 89.6852L69.0639 89.7991ZM69.0119 89.7399C69.0297 89.7634 69.0497 89.7843 69.0639 89.7991L69.1833 89.6852C69.1682 89.6694 69.1546 89.655 69.1432 89.64L69.0119 89.7399ZM68.9296 89.4975C68.9373 89.6005 68.9618 89.674 69.0119 89.7399L69.1432 89.64C69.1171 89.6057 69.1001 89.5652 69.0941 89.4852L68.9296 89.4975ZM68.9291 89.4913L68.9296 89.4975L69.0941 89.4852L69.0936 89.479L68.9291 89.4913ZM69.0116 89.4027H69.0114V89.5677H69.0116V89.4027ZM68.9298 89.4576C68.9294 89.467 68.9291 89.4763 68.9291 89.4852H69.0941C69.0941 89.4796 69.0943 89.4729 69.0946 89.4653L68.9298 89.4576ZM68.2427 89.5789L69.7872 90.9925L69.8986 90.8708L68.3541 89.4572L68.2427 89.5789ZM68.0741 89.4246L68.2427 89.5789L68.3541 89.4572L68.1855 89.3029L68.0741 89.4246ZM68.3621 89.2924L68.1338 89.2813L68.1258 89.4461L68.3541 89.4572L68.3621 89.2924ZM68.435 89.2994C68.409 89.2965 68.3806 89.2933 68.3621 89.2924L68.3541 89.4572C68.366 89.4578 68.3879 89.4602 68.4167 89.4634L68.435 89.2994ZM68.4547 89.3016C68.4482 89.3009 68.4416 89.3001 68.435 89.2994L68.4167 89.4634C68.4232 89.4641 68.4299 89.4649 68.4367 89.4656L68.4547 89.3016ZM68.5769 89.3128C68.5339 89.31 68.4915 89.3057 68.4547 89.3016L68.4367 89.4656C68.4742 89.4697 68.5195 89.4744 68.5663 89.4774L68.5769 89.3128ZM68.6955 89.3144C68.6613 89.3165 68.6204 89.3155 68.5769 89.3128L68.5663 89.4774C68.6132 89.4804 68.6617 89.4817 68.7054 89.4791L68.6955 89.3144ZM68.7477 89.307C68.749 89.3064 68.7459 89.3079 68.7358 89.3098C68.7264 89.3116 68.7131 89.3133 68.6955 89.3144L68.7054 89.4791C68.749 89.4765 68.788 89.4699 68.8161 89.4572L68.7477 89.307ZM68.7549 89.3037L68.7477 89.307L68.8161 89.4572L68.8233 89.4539L68.7549 89.3037ZM68.7776 89.2967L68.7699 89.2986L68.8084 89.459L68.8161 89.4572L68.7776 89.2967ZM68.959 89.1702C68.9286 89.21 68.9027 89.2361 68.8759 89.2548C68.8498 89.2731 68.8195 89.2867 68.7776 89.2967L68.8161 89.4572C68.8746 89.4431 68.9247 89.4221 68.9706 89.39C69.0159 89.3582 69.0536 89.3181 69.09 89.2705L68.959 89.1702ZM68.9664 89.1582C68.9608 89.166 68.9562 89.1735 68.9526 89.1799L69.0964 89.2608C69.0979 89.2583 69.0991 89.2563 69.1002 89.2548L68.9664 89.1582ZM68.9665 89.1581L68.9664 89.1582L69.1002 89.2548L69.1003 89.2546L68.9665 89.1581ZM69.0369 89.0999C68.9943 89.1192 68.9716 89.1511 68.9665 89.1581L69.1003 89.2546C69.101 89.2536 69.1015 89.2529 69.1025 89.252C69.1036 89.251 69.1044 89.2505 69.1047 89.2503L69.0369 89.0999ZM69.1512 89.0913C69.1045 89.0782 69.0635 89.0879 69.0369 89.0999L69.1047 89.2503C69.1055 89.25 69.1061 89.25 69.1064 89.2501L69.1512 89.0913ZM69.2403 89.1529C69.2252 89.1325 69.1968 89.1042 69.1512 89.0913L69.1064 89.2501C69.1068 89.2503 69.1073 89.2505 69.1078 89.2512L69.2403 89.1529ZM69.2724 89.2295C69.2711 89.2215 69.2655 89.1868 69.2403 89.1529L69.1078 89.2512C69.1088 89.2524 69.1093 89.2546 69.1097 89.2566L69.2724 89.2295ZM69.2724 89.2296L69.2724 89.2294L69.1097 89.2566L69.1097 89.2568L69.2724 89.2296ZM69.2752 89.2859C69.2756 89.275 69.2763 89.2526 69.2724 89.2296L69.1097 89.2568C69.1101 89.2589 69.1104 89.2622 69.1105 89.2667C69.1106 89.271 69.1105 89.2755 69.1104 89.2799L69.2752 89.2859ZM69.2723 89.3295C69.2736 89.3153 69.2747 89.3 69.2752 89.2859L69.1104 89.2799C69.11 89.2899 69.1091 89.3019 69.108 89.3152L69.2723 89.3295ZM69.2667 89.3878C69.2686 89.369 69.2706 89.3491 69.2723 89.3295L69.108 89.3152C69.1064 89.3334 69.1045 89.3521 69.1025 89.3711L69.2667 89.3878ZM69.2591 89.483C69.2593 89.461 69.2626 89.4284 69.2667 89.3878L69.1025 89.3711C69.0987 89.4086 69.0944 89.45 69.0941 89.4813L69.2591 89.483ZM69.2746 89.5402C69.2715 89.5361 69.2696 89.5333 69.2675 89.5272C69.2649 89.5194 69.2612 89.5044 69.2588 89.4756L69.0944 89.4888C69.0974 89.526 69.1029 89.5558 69.1115 89.581C69.1208 89.6077 69.1324 89.6259 69.1432 89.64L69.2746 89.5402ZM69.3031 89.5717C69.2864 89.5542 69.2799 89.5472 69.2746 89.5402L69.1432 89.64C69.1552 89.6558 69.1688 89.67 69.1836 89.6855L69.3031 89.5717ZM69.3086 89.5775C69.3067 89.5755 69.3049 89.5736 69.3031 89.5717L69.1836 89.6855C69.1854 89.6873 69.1871 89.6892 69.189 89.6912L69.3086 89.5775ZM69.3662 89.6427C69.3443 89.6154 69.3244 89.5941 69.3086 89.5775L69.189 89.6912C69.2038 89.7068 69.22 89.7241 69.2375 89.746L69.3662 89.6427ZM69.4439 89.6849C69.4126 89.6649 69.3775 89.6425 69.3428 89.6227L69.2609 89.7659C69.2915 89.7835 69.3233 89.8037 69.3553 89.8241L69.4439 89.6849ZM69.4724 89.7029C69.4632 89.6972 69.4538 89.6911 69.4439 89.6849L69.3553 89.8241C69.3651 89.8303 69.3749 89.8365 69.3845 89.8425L69.4724 89.7029ZM69.5899 89.7689C69.5564 89.7543 69.5187 89.7321 69.4724 89.7029L69.3845 89.8425C69.4311 89.8719 69.4781 89.9002 69.5241 89.9202L69.5899 89.7689ZM69.5992 89.7729L69.5899 89.7689L69.5241 89.9202L69.5334 89.9242L69.5992 89.7729ZM69.6247 89.7894L69.6166 89.7832L69.516 89.914L69.5241 89.9202L69.6247 89.7894ZM69.8559 89.9016C69.7546 89.8659 69.6811 89.8328 69.6247 89.7894L69.5241 89.9202C69.6021 89.9802 69.6961 90.0202 69.8011 90.0572L69.8559 89.9016ZM69.8598 89.9029L69.8559 89.9016L69.8011 90.0572L69.8049 90.0585L69.8598 89.9029ZM69.9087 90.012L69.9087 90.0119L69.756 89.9495L69.7559 89.9496L69.9087 90.012ZM69.8984 89.9185C69.886 89.9135 69.8744 89.9089 69.8635 89.9044L69.8011 90.0572C69.8126 90.0619 69.8248 90.0668 69.8371 90.0717L69.8984 89.9185ZM70.1764 90.0598C70.0909 89.995 69.9774 89.9501 69.8984 89.9185L69.8371 90.0717C69.9211 90.1053 70.0122 90.1424 70.0766 90.1912L70.1764 90.0598ZM70.3224 90.236C70.2958 90.1751 70.255 90.1103 70.1712 90.0562L70.0817 90.1949C70.1313 90.2268 70.1538 90.2622 70.1712 90.302L70.3224 90.236ZM70.3439 90.2896C70.3384 90.275 70.3318 90.2574 70.3224 90.236L70.1712 90.302C70.1788 90.3193 70.1841 90.3335 70.1896 90.348L70.3439 90.2896ZM70.3726 90.3523C70.3595 90.3305 70.3536 90.315 70.3439 90.2896L70.1896 90.348C70.1996 90.3743 70.2099 90.4018 70.2311 90.4372L70.3726 90.3523ZM70.386 90.3747L70.3726 90.3523L70.2311 90.4372L70.2446 90.4596L70.386 90.3747ZM70.3956 90.4494L70.3976 90.4233L70.233 90.4111L70.2311 90.4372L70.3956 90.4494ZM70.3511 90.6648C70.38 90.5961 70.3903 90.5222 70.3956 90.4494L70.2311 90.4372C70.2261 90.5046 70.2174 90.5572 70.199 90.6009L70.3511 90.6648ZM70.2296 90.8272C70.2833 90.7825 70.3238 90.7298 70.3511 90.6648L70.199 90.6009C70.1826 90.6398 70.1589 90.6714 70.124 90.7004L70.2296 90.8272ZM70.1372 90.973C70.1797 90.9227 70.2225 90.8627 70.2519 90.7979L70.1017 90.7297C70.0808 90.7758 70.048 90.8229 70.0112 90.8664L70.1372 90.973ZM70.3425 91.0535L70.1299 90.8588L70.0185 90.9806L70.2311 91.1752L70.3425 91.0535ZM70.4857 91.1845L70.3425 91.0535L70.2311 91.1752L70.3743 91.3063L70.4857 91.1845ZM70.2414 91.3399L70.4352 91.3277L70.4249 91.1631L70.2311 91.1752L70.2414 91.3399ZM70.1803 91.3469C70.2015 91.3437 70.2206 91.3412 70.2414 91.3399L70.2311 91.1752C70.2031 91.1769 70.1785 91.1803 70.1556 91.1838L70.1803 91.3469ZM70.1684 91.3487C70.1726 91.3481 70.1765 91.3475 70.1803 91.3469L70.1556 91.1838C70.1515 91.1844 70.1474 91.185 70.1432 91.1857L70.1684 91.3487ZM70.1072 91.357C70.129 91.3548 70.1509 91.3514 70.1684 91.3487L70.1432 91.1857C70.1249 91.1885 70.1075 91.1912 70.091 91.1928L70.1072 91.357ZM69.906 91.3326C69.9833 91.3605 70.048 91.3629 70.1072 91.357L70.091 91.1928C70.0507 91.1968 70.0115 91.1952 69.962 91.1774L69.906 91.3326ZM69.7659 91.2798C69.8124 91.3119 69.8697 91.3267 69.9186 91.336L69.9495 91.1739C69.9051 91.1655 69.8764 91.1555 69.8595 91.1439L69.7659 91.2798ZM69.6898 91.1878C69.708 91.2312 69.7382 91.2606 69.7659 91.2798L69.8595 91.1439C69.8506 91.1377 69.8449 91.131 69.8418 91.1238L69.6898 91.1878ZM69.6779 91.0688C69.6716 91.1016 69.6712 91.1438 69.6898 91.1878L69.8418 91.1238C69.8388 91.1165 69.8383 91.1086 69.84 91.0999L69.6779 91.0688ZM69.7326 90.9483C69.7193 90.9686 69.6883 91.0147 69.6779 91.0688L69.84 91.0999C69.8414 91.0925 69.8449 91.083 69.8507 91.0716C69.8566 91.0604 69.8634 91.0498 69.8705 91.039L69.7326 90.9483ZM69.7502 90.9221C69.7447 90.9302 69.7388 90.939 69.7326 90.9483L69.8705 91.039C69.8759 91.0308 69.8812 91.0229 69.8868 91.0147L69.7502 90.9221ZM69.7733 90.8874C69.7658 90.8991 69.7585 90.9099 69.7502 90.9221L69.8868 91.0147C69.8949 91.0028 69.9036 90.99 69.9125 90.976L69.7733 90.8874ZM69.9105 91.1054L69.9834 91.1721L70.0948 91.0504L70.0219 90.9837L69.9105 91.1054ZM70.047 91.0292C70.0389 91.0284 70.0289 91.0263 70.0148 91.021L69.9561 91.1752C69.9823 91.1852 70.0067 91.191 70.0312 91.1934L70.047 91.0292ZM70.0148 91.021L70.0077 91.0183L69.949 91.1725L69.9561 91.1752L70.0148 91.021ZM69.9932 91.0142L69.9857 91.0128L69.9561 91.1752L69.9636 91.1765L69.9932 91.0142ZM69.9857 91.0128C69.974 91.0107 69.965 91.0087 69.9581 91.007L69.9174 91.1669C69.9286 91.1697 69.9415 91.1725 69.9561 91.1752L69.9857 91.0128ZM70.0068 91.132C70.0073 91.1313 70.0078 91.1306 70.0083 91.1298L69.8705 91.0391C69.8698 91.04 69.8692 91.0409 69.8686 91.0418L70.0068 91.132ZM70.0083 91.1298C70.0116 91.1248 70.0156 91.1188 70.0205 91.1116L69.8839 91.0191C69.8791 91.026 69.8745 91.033 69.8705 91.039L70.0083 91.1298ZM70.0205 91.1116C70.0248 91.1052 70.0297 91.098 70.0348 91.0903L69.8975 90.9988C69.8928 91.0059 69.8882 91.0126 69.8839 91.0191L70.0205 91.1116ZM70.7561 91.0652H70.7424V91.2302H70.7561V91.0652ZM71.1861 91.0652H70.7561V91.2302H71.1861V91.0652ZM71.191 91.0652H71.1861V91.2302H71.191V91.0652ZM71.2734 91.1527L71.2734 91.1526L71.1086 91.1428L71.1086 91.1429L71.2734 91.1527ZM71.5009 91.1469C71.4247 91.1115 71.3443 91.0743 71.1959 91.0655L71.1861 91.2302C71.3038 91.2372 71.3621 91.2644 71.4314 91.2965L71.5009 91.1469ZM71.5835 91.1825C71.5545 91.1717 71.5289 91.1599 71.5009 91.1469L71.4314 91.2965C71.459 91.3093 71.4901 91.3238 71.5261 91.3372L71.5835 91.1825ZM71.5988 91.1882L71.5835 91.1825L71.5261 91.3372L71.5413 91.3428L71.5988 91.1882ZM71.638 91.2159L71.626 91.2049L71.5141 91.3261L71.5261 91.3372L71.638 91.2159ZM71.8675 91.3778C71.7713 91.3378 71.7264 91.2974 71.638 91.2159L71.5261 91.3372C71.6161 91.4201 71.6791 91.4782 71.8041 91.5302L71.8675 91.3778ZM71.8854 91.3853L71.8675 91.3778L71.8041 91.5302L71.822 91.5376L71.8854 91.3853ZM71.9288 91.4221L71.9161 91.4074L71.7914 91.5155L71.8041 91.5302L71.9288 91.4221ZM71.9827 91.4816C71.9606 91.4576 71.9427 91.4382 71.9288 91.4221L71.8041 91.5302C71.82 91.5486 71.8399 91.5701 71.8614 91.5934L71.9827 91.4816ZM71.9841 91.4831L71.9827 91.4816L71.8614 91.5934L71.8628 91.5949L71.9841 91.4831ZM72.0562 91.5627C72.0313 91.5343 72.0061 91.5069 71.9841 91.4831L71.8628 91.5949C71.8849 91.6189 71.9088 91.6449 71.9322 91.6715L72.0562 91.5627ZM72.1961 91.7552C72.1609 91.6862 72.1035 91.6165 72.0562 91.5627L71.9322 91.6715C71.9791 91.7249 72.0241 91.7812 72.0491 91.8302L72.1961 91.7552ZM72.1996 91.7621L72.1961 91.7552L72.0491 91.8302L72.0526 91.837L72.1996 91.7621ZM72.1563 91.8763L72.1566 91.8762L72.0956 91.7229L72.0952 91.723L72.1563 91.8763ZM72.2761 92.1852C72.2761 92.0296 72.2479 91.8836 72.2024 91.7692L72.0491 91.8302C72.0861 91.9232 72.1111 92.0482 72.1111 92.1852H72.2761ZM72.2761 92.1862V92.1852H72.1111V92.1862H72.2761ZM72.1921 92.2687H72.1921L72.1951 92.1037L72.1951 92.1037L72.1921 92.2687ZM72.2414 92.4036C72.2581 92.35 72.2748 92.2873 72.2761 92.1873L72.1111 92.1852C72.1101 92.2642 72.0976 92.3104 72.0838 92.3547L72.2414 92.4036ZM72.2374 92.4165C72.2387 92.4124 72.24 92.4081 72.2414 92.4036L72.0838 92.3547C72.0826 92.3588 72.0813 92.3629 72.08 92.367L72.2374 92.4165ZM72.2135 92.5261C72.2174 92.4805 72.2254 92.4546 72.2374 92.4165L72.08 92.367C72.0672 92.4076 72.0545 92.4478 72.0491 92.5122L72.2135 92.5261ZM72.2128 92.5348L72.2135 92.5261L72.0491 92.5122L72.0484 92.5209L72.2128 92.5348ZM72.2069 92.5602L72.2095 92.5519L72.0516 92.5038L72.0491 92.5122L72.2069 92.5602ZM71.9973 92.936C72.1043 92.8169 72.1673 92.6905 72.2069 92.5602L72.0491 92.5122C72.0154 92.623 71.9631 92.7272 71.8745 92.8258L71.9973 92.936ZM71.9558 92.9958C71.9858 92.9679 72.0024 92.9364 72.0123 92.9121L71.8595 92.8497C71.855 92.8609 71.8499 92.8689 71.8435 92.8749L71.9558 92.9958ZM71.8471 93.0525C71.871 93.046 71.9161 93.0327 71.9558 92.9958L71.8435 92.8749C71.8345 92.8832 71.8224 92.8882 71.8041 92.8932L71.8471 93.0525ZM71.8007 93.065L71.8471 93.0525L71.8041 92.8932L71.7577 92.9057L71.8007 93.065ZM71.6867 93.0092L71.7205 93.0434L71.8379 92.9274L71.8041 92.8932L71.6867 93.0092ZM70.1767 91.4812L71.6867 93.0092L71.8041 92.8932L70.2941 91.3652L70.1767 91.4812ZM70.0691 91.3723L70.1767 91.4812L70.2941 91.3652L70.1865 91.2563L70.0691 91.3723ZM70.2617 91.2034L70.1116 91.2334L70.144 91.3952L70.2941 91.3652L70.2617 91.2034ZM70.7027 91.074C70.5872 91.1136 70.3256 91.1906 70.2617 91.2034L70.2941 91.3652C70.3691 91.3502 70.6391 91.2702 70.7561 91.2302L70.7027 91.074ZM70.7157 91.0696L70.7027 91.074L70.7561 91.2302L70.7691 91.2257L70.7157 91.0696ZM70.4758 91.4884C70.5828 91.4583 70.716 91.4177 70.7959 91.3909L70.7435 91.2345C70.6667 91.2602 70.5362 91.3 70.431 91.3296L70.4758 91.4884ZM71.865 92.7201L70.5121 91.351L70.3947 91.467L71.7477 92.8361L71.865 92.7201ZM71.889 92.4714C71.8605 92.5621 71.8178 92.644 71.7457 92.7222L71.867 92.834C71.9578 92.7355 72.0117 92.6314 72.0464 92.5208L71.889 92.4714ZM71.9225 92.3177C71.9099 92.3579 71.8931 92.4106 71.8856 92.4881L72.0498 92.5041C72.0556 92.4444 72.068 92.4051 72.0799 92.3674L71.9225 92.3177ZM71.9263 92.3057C71.9251 92.3096 71.9238 92.3135 71.9225 92.3177L72.0799 92.3674C72.0812 92.3632 72.0825 92.3589 72.0838 92.3547L71.9263 92.3057ZM71.9461 92.1835C71.9453 92.2412 71.9371 92.2709 71.9263 92.3057L72.0838 92.3547C72.0976 92.3106 72.11 92.2644 72.1111 92.1857L71.9461 92.1835ZM71.897 91.8944C71.9249 91.9658 71.946 92.0683 71.9461 92.1847L72.1111 92.1846C72.111 92.0498 72.0868 91.9268 72.0508 91.8344L71.897 91.8944ZM71.8082 91.7804C71.8533 91.8318 71.8855 91.8738 71.901 91.903L72.0468 91.8258C72.0216 91.7781 71.9779 91.7236 71.9322 91.6715L71.8082 91.7804ZM71.7414 91.7067C71.7637 91.7309 71.7863 91.7554 71.8082 91.7804L71.9322 91.6715C71.9088 91.6449 71.8849 91.6189 71.8628 91.5949L71.7414 91.7067ZM71.739 91.7041L71.7414 91.7067L71.8628 91.5949L71.8603 91.5923L71.739 91.7041ZM71.6929 91.6536C71.7073 91.6697 71.7233 91.687 71.739 91.7041L71.8603 91.5923C71.8444 91.575 71.8293 91.5586 71.8161 91.5438L71.6929 91.6536ZM71.4261 91.4694C71.509 91.5458 71.5863 91.6149 71.7213 91.6742L71.7877 91.5232C71.6787 91.4752 71.6179 91.4218 71.5378 91.348L71.4261 91.4694ZM71.3409 91.4375C71.3684 91.4504 71.4031 91.4668 71.4524 91.4857L71.5115 91.3317C71.4682 91.315 71.438 91.3008 71.4112 91.2882L71.3409 91.4375ZM71.1785 91.395C71.224 91.3978 71.251 91.4028 71.2717 91.4088C71.293 91.4151 71.3107 91.4232 71.3409 91.4375L71.4112 91.2882C71.3825 91.2747 71.3535 91.2609 71.318 91.2505C71.282 91.2399 71.2421 91.2336 71.1887 91.2303L71.1785 91.395ZM70.7697 91.3952H71.1836V91.2302H70.7697V91.3952Z"
              fill="#C8242B"
            />
            <Path
              id="Stroke 326"
              d="M72.7298 92.9467L72.6668 92.8934L72.6668 92.8934L72.7298 92.9467ZM72.7796 92.8852L72.7417 92.8119L72.725 92.8206L72.7136 92.8357L72.7796 92.8852ZM72.7209 92.9572L72.6577 92.9042L72.6577 92.9042L72.7209 92.9572ZM72.6622 93.0353L72.7325 93.0785L72.7325 93.0785L72.6622 93.0353ZM72.6558 93.0457L72.6028 93.1089L72.676 93.1704L72.7261 93.0889L72.6558 93.0457ZM72.6552 93.0451L72.7082 92.9819L72.6451 92.9289L72.592 92.9921L72.6552 93.0451ZM72.6084 93.1239L72.682 93.1611L72.682 93.1611L72.6084 93.1239ZM72.6002 93.1402L72.5264 93.1034L72.5264 93.1034L72.6002 93.1402ZM72.5706 93.1975L72.4984 93.1575L72.4926 93.168L72.49 93.1798L72.5706 93.1975ZM72.5667 93.2149L72.6472 93.2328L72.6472 93.2328L72.5667 93.2149ZM72.5594 93.2486L72.6402 93.2653V93.2653L72.5594 93.2486ZM72.5752 93.6343L72.4987 93.665L72.5044 93.6792L72.5148 93.6904L72.5752 93.6343ZM72.6151 93.6789L72.6772 93.6245V93.6245L72.6151 93.6789ZM72.6385 93.7053L72.5776 93.7609L72.5776 93.7609L72.6385 93.7053ZM72.7033 93.7637L72.7495 93.6954L72.7033 93.7637ZM72.7129 93.7703L72.7741 93.8257L72.8378 93.7553L72.7592 93.702L72.7129 93.7703ZM72.7124 93.7709L72.6512 93.7155L72.5958 93.7767L72.657 93.8321L72.7124 93.7709ZM72.8696 93.9409L72.8033 93.99L72.8124 94.0022L72.8252 94.0104L72.8696 93.9409ZM73.0268 94.0465L73.0737 93.9786L73.0737 93.9786L73.0268 94.0465ZM73.0502 94.0627L73.0032 94.131L73.0108 94.1351L73.0502 94.0627ZM73.0514 94.0633L73.0119 94.1357L73.0119 94.1357L73.0514 94.0633ZM73.248 94.1372L73.2385 94.2191L73.2468 94.2201L73.2551 94.2194L73.248 94.1372ZM73.4099 94.0891L73.3735 94.0151L73.3735 94.0151L73.4099 94.0891ZM73.4681 94.0614L73.502 94.1366L73.51 94.133L73.5171 94.1278L73.4681 94.0614ZM73.5779 93.9857L73.6234 94.0546L73.6234 94.0546L73.5779 93.9857ZM73.5872 93.9796L73.5418 93.9107L73.5418 93.9107L73.5872 93.9796ZM73.6815 93.9153L73.633 93.8485L73.633 93.8485L73.6815 93.9153ZM73.6839 93.9135L73.7525 93.8676L73.7048 93.7965L73.6355 93.8468L73.6839 93.9135ZM73.684 93.9136L73.6154 93.9595L73.6614 94.0282L73.73 93.9821L73.684 93.9136ZM73.8135 93.764L73.7451 93.718L73.8135 93.764ZM73.8311 93.7379L73.8108 93.6579L73.7803 93.6657L73.7627 93.6918L73.8311 93.7379ZM73.8617 93.7301L73.882 93.8101L73.882 93.8101L73.8617 93.7301ZM74.0447 93.716L74.0315 93.7974H74.0315L74.0447 93.716ZM74.1951 93.7873L74.1414 93.8506L74.1487 93.8556L74.1951 93.7873ZM74.3528 93.9385L74.2868 93.9879L74.2966 94.0011L74.3108 94.0095L74.3528 93.9385ZM74.4099 93.9775L74.4587 93.911L74.4587 93.911L74.4099 93.9775ZM74.4126 93.9795L74.4614 93.913L74.4614 93.913L74.4126 93.9795ZM74.4661 94.0159L74.5403 94.052L74.5764 93.9778L74.5022 93.9417L74.4661 94.0159ZM74.3939 94.1642L74.3578 94.2384L74.432 94.2745L74.4681 94.2003L74.3939 94.1642ZM74.3192 94.1156L74.2704 94.1821L74.2704 94.1821L74.3192 94.1156ZM74.3151 94.1126L74.2663 94.1791L74.2663 94.1791L74.3151 94.1126ZM74.2617 94.0766L74.297 94.0021L74.297 94.0021L74.2617 94.0766ZM74.242 94.0673L74.1744 94.1147L74.187 94.1325L74.2067 94.1418L74.242 94.0673ZM74.2295 94.0494L74.297 94.0021L74.297 94.0021L74.2295 94.0494ZM74.0992 93.9217L74.0535 93.9903H74.0535L74.0992 93.9217ZM74.0903 93.9158L74.0281 93.8616L73.9665 93.9323L74.0446 93.9844L74.0903 93.9158ZM74.0908 93.9152L74.153 93.9695L74.2072 93.9073L74.145 93.8531L74.0908 93.9152ZM74.0182 93.8789L74.0315 93.7974L74.0182 93.8789ZM73.9318 93.8833L73.9158 93.8024L73.8833 93.8088L73.8642 93.8359L73.9318 93.8833ZM73.7773 94.0496L73.7309 93.9814L73.7289 93.9828L73.7773 94.0496ZM73.6783 94.1172L73.7237 94.1861L73.7237 94.1861L73.6783 94.1172ZM73.6688 94.1234L73.6234 94.0546L73.6234 94.0546L73.6688 94.1234ZM73.5592 94.1992L73.6085 94.2654L73.6085 94.2654L73.5592 94.1992ZM73.5518 94.2048L73.5852 94.2802L73.5936 94.2765L73.601 94.271L73.5518 94.2048ZM73.5433 94.2085L73.5767 94.284L73.5767 94.284L73.5433 94.2085ZM73.4925 94.2327L73.5292 94.3067L73.4925 94.2327ZM73.2533 94.3023L73.247 94.2201L73.2533 94.3023ZM73.2461 94.3029L73.2381 94.385L73.2453 94.3857L73.2524 94.3851L73.2461 94.3029ZM73.2389 94.3022L73.247 94.2201H73.247L73.2389 94.3022ZM72.9773 94.2108L72.9377 94.2832L72.9377 94.2832L72.9773 94.2108ZM72.9676 94.2055L72.9281 94.278L72.9281 94.278L72.9676 94.2055ZM72.96 94.2014L72.892 94.1546L72.8401 94.2301L72.9205 94.2738L72.96 94.2014ZM72.9602 94.201L73.0282 94.2478L73.0749 94.1798L73.007 94.1331L72.9602 94.201ZM72.9332 94.1824L72.8863 94.2503L72.9332 94.1824ZM72.7679 94.0718L72.7238 94.1415L72.7238 94.1415L72.7679 94.0718ZM72.7539 94.063L72.6864 94.1103L72.6959 94.1239L72.7098 94.1327L72.7539 94.063ZM72.7445 94.0494L72.812 94.0021L72.812 94.0021L72.7445 94.0494ZM72.6056 93.8968L72.6617 93.8354L72.6529 93.8292L72.6056 93.8968ZM72.5167 93.8166L72.4558 93.8722L72.4558 93.8722L72.5167 93.8166ZM72.4858 93.7818L72.4237 93.836L72.4237 93.836L72.4858 93.7818ZM72.4456 93.7373L72.505 93.6801L72.505 93.6801L72.4456 93.7373ZM72.4354 93.7267L72.3598 93.7598L72.3657 93.7733L72.376 93.7839L72.4354 93.7267ZM72.4294 93.7132L72.3539 93.7463V93.7463L72.4294 93.7132ZM72.3803 93.4695L72.4627 93.4671L72.4594 93.3524L72.3517 93.392L72.3803 93.4695ZM72.3585 93.4775L72.387 93.5549L72.387 93.5549L72.3585 93.4775ZM72.3084 93.5052L72.357 93.5718L72.357 93.5718L72.3084 93.5052ZM72.2817 93.5238L72.3271 93.5927L72.2817 93.5238ZM72.1156 93.5705L72.112 93.4881L72.112 93.4881L72.1156 93.5705ZM72.112 93.5706H72.0295V93.6569L72.1156 93.6531L72.112 93.5706ZM72.112 93.5706H72.1945V93.4881H72.112V93.5706ZM71.9283 93.5476L71.8962 93.6236H71.8962L71.9283 93.5476ZM71.7928 93.4396L71.852 93.3821L71.852 93.3821L71.7928 93.4396ZM71.7908 93.4375L71.85 93.3801L71.85 93.3801L71.7908 93.4375ZM71.7835 93.43L71.734 93.364L71.659 93.4202L71.7242 93.4874L71.7835 93.43ZM71.784 93.4296L71.8335 93.4955L71.8995 93.446L71.85 93.3801L71.784 93.4296ZM71.7264 93.3404L71.7975 93.2986L71.7975 93.2986L71.7264 93.3404ZM71.7229 93.3345L71.6519 93.3764L71.6519 93.3764L71.7229 93.3345ZM71.7077 93.3098L71.6405 93.3577H71.6405L71.7077 93.3098ZM71.707 93.3089L71.789 93.2999L71.789 93.2999L71.707 93.3089ZM71.711 93.3132L71.7677 93.2532L71.7677 93.2532L71.711 93.3132ZM71.7244 93.3229L71.6842 93.3949L71.6842 93.3949L71.7244 93.3229ZM71.762 93.3326V93.4151H71.8445V93.3326H71.762ZM71.762 93.1676V93.0851H71.6795V93.1676H71.762ZM71.8241 93.193L71.7675 93.253L71.7675 93.253L71.8241 93.193ZM71.8243 93.1932L71.7676 93.2532L71.7677 93.2532L71.8243 93.1932ZM71.8421 93.2141L71.7749 93.2619L71.7749 93.2619L71.8421 93.2141ZM71.865 93.2506L71.9361 93.2087L71.9361 93.2087L71.865 93.2506ZM71.868 93.2557L71.797 93.2976L71.797 93.2976L71.868 93.2557ZM71.913 93.3265L71.8457 93.3757L71.8539 93.384L71.913 93.3265ZM71.9924 93.3955L72.0245 93.3195L72.0245 93.3195L71.9924 93.3955ZM72.1101 93.4056L72.1101 93.4881L72.114 93.488L72.1101 93.4056ZM72.191 93.386L72.1456 93.3171L72.1456 93.3171L72.191 93.386ZM72.2015 93.3785L72.1526 93.312L72.1526 93.312L72.2015 93.3785ZM72.2759 93.3332L72.3105 93.4081L72.3302 93.399L72.3429 93.3813L72.2759 93.3332ZM72.3222 93.273L72.3867 93.3244L72.3867 93.3244L72.3222 93.273ZM72.3395 93.2512L72.4045 93.3019L72.4045 93.3019L72.3395 93.2512ZM72.409 93.1466L72.482 93.1851V93.1851L72.409 93.1466ZM72.4126 93.1397L72.4578 93.0706L72.3819 93.021L72.3397 93.1012L72.4126 93.1397ZM72.413 93.1399L72.3678 93.2089L72.4368 93.2541L72.482 93.1851L72.413 93.1399ZM72.4148 93.1371L72.4844 93.1814L72.4925 93.1686L72.4956 93.1538L72.4148 93.1371ZM72.4233 93.0886L72.3416 93.0772L72.3416 93.0772L72.4233 93.0886ZM72.425 93.0762L72.3504 93.041L72.345 93.0524L72.3433 93.0648L72.425 93.0762ZM72.4304 93.0649L72.505 93.1001V93.1001L72.4304 93.0649ZM72.5299 92.8863L72.4594 92.8435L72.4594 92.8435L72.5299 92.8863ZM72.5443 92.8624L72.4737 92.8198L72.4737 92.8198L72.5443 92.8624ZM72.552 92.8497L72.5008 92.785L72.4891 92.7943L72.4814 92.8071L72.552 92.8497ZM72.5637 92.8404L72.5125 92.7757L72.5125 92.7757L72.5637 92.8404ZM72.6098 92.8001L72.6659 92.8606L72.6659 92.8606L72.6098 92.8001ZM72.6116 92.7984L72.6678 92.8589L72.6678 92.8589L72.6116 92.7984ZM72.6581 92.7585L72.6088 92.6923V92.6923L72.6581 92.7585ZM72.8007 92.6998L72.8161 92.7808L72.8176 92.7805L72.8007 92.6998ZM72.821 92.6963L72.9026 92.6843L72.8907 92.6037L72.81 92.6145L72.821 92.6963ZM72.845 92.8595L72.8581 92.941L72.9385 92.9281L72.9266 92.8475L72.845 92.8595ZM72.8284 92.8625L72.8123 92.7815L72.8088 92.7823L72.8284 92.8625ZM72.8099 92.8692L72.774 92.7949V92.7949L72.8099 92.8692ZM72.7954 92.8768L72.8347 92.9493L72.8347 92.9493L72.7954 92.8768ZM72.7905 92.8795L72.7513 92.8069L72.7513 92.8069L72.7905 92.8795ZM74.1375 94.0642L74.2133 94.0317L74.1808 93.9559L74.105 93.9884L74.1375 94.0642ZM74.0861 94.0925L74.0429 94.0222L74.0429 94.0222L74.0861 94.0925ZM74.2025 94.2159L74.1267 94.2484L74.1592 94.3242L74.235 94.2917L74.2025 94.2159ZM74.2025 94.2159L74.2793 94.1839L74.2741 94.1749L74.2025 94.2159ZM74.2002 94.217L74.1624 94.1437L74.1608 94.1445L74.2002 94.217ZM74.1935 94.2207L74.1541 94.1482L74.153 94.1488L74.1935 94.2207ZM74.1725 94.2331L74.2157 94.3034L74.1725 94.2331ZM74.1144 94.2701L74.0696 94.2008L74.1144 94.2701ZM74.0982 94.2806L74.0533 94.2114L74.0982 94.2806ZM74.0204 94.3303L73.9771 94.2601L73.9526 94.2751L73.9428 94.3021L74.0204 94.3303ZM73.9782 94.4291L74.053 94.464V94.464L73.9782 94.4291ZM73.9669 94.4536L73.8917 94.4196L73.9669 94.4536ZM73.9267 94.5816L74.0084 94.5932L73.9267 94.5816ZM73.9254 94.5907L73.9049 94.6706L73.9942 94.6935L74.0071 94.6022L73.9254 94.5907ZM73.9249 94.5905L73.9454 94.5106L73.8655 94.4901L73.845 94.5701L73.9249 94.5905ZM73.8995 94.9275L73.982 94.9274V94.9274L73.8995 94.9275ZM73.8995 94.938L73.817 94.938L73.817 94.9473L73.8191 94.9564L73.8995 94.938ZM73.9866 95.1711L74.0615 95.1365V95.1365L73.9866 95.1711ZM74.0183 95.2405L73.9428 95.2738L73.9521 95.295L73.971 95.3082L74.0183 95.2405ZM74.0747 95.2811L74.1233 95.2144L74.0747 95.2811ZM74.2232 95.3774L74.1834 95.4496L74.1968 95.457L74.212 95.4591L74.2232 95.3774ZM74.5628 95.4026L74.5878 95.3239L74.5756 95.3201H74.5628V95.4026ZM74.575 95.4064L74.5999 95.3278H74.5999L74.575 95.4064ZM74.7168 95.4277L74.7146 95.5102H74.7146L74.7168 95.4277ZM74.8408 95.4109L74.8046 95.3368H74.8046L74.8408 95.4109ZM74.8525 95.4052L74.841 95.3235L74.8281 95.3253L74.8164 95.331L74.8525 95.4052ZM74.8654 95.4034L74.877 95.4851H74.877L74.8654 95.4034ZM75.1221 95.3116L75.1585 95.3856L75.1585 95.3856L75.1221 95.3116ZM75.1374 95.3041L75.1737 95.3784L75.1784 95.3757L75.1374 95.3041ZM75.2361 95.2429L75.281 95.3121L75.281 95.3121L75.2361 95.2429ZM75.2637 95.2251L75.3082 95.2946L75.3082 95.2946L75.2637 95.2251ZM75.3928 95.1503L75.43 95.2239L75.4475 95.2151L75.4591 95.1993L75.3928 95.1503ZM75.4865 95.0431L75.4271 94.9859L75.4865 95.0431ZM75.5052 95.0238L75.4459 94.9664H75.4459L75.5052 95.0238ZM75.6007 94.9203L75.6637 94.9737L75.6662 94.9705L75.6007 94.9203ZM75.6459 94.8626L75.5812 94.8113L75.5812 94.8113L75.6459 94.8626ZM75.754 94.6976L75.7852 94.6212L75.7121 94.5914L75.6791 94.6631L75.754 94.6976ZM75.9067 94.7598L75.9844 94.7875L76.0109 94.7131L75.9378 94.6834L75.9067 94.7598ZM75.8369 94.9227L75.9116 94.9577V94.9577L75.8369 94.9227ZM75.833 94.9312L75.9077 94.9661V94.9661L75.833 94.9312ZM75.7705 95.0805L75.849 95.1059V95.1059L75.7705 95.0805ZM75.7681 95.0878L75.8406 95.1272L75.8442 95.1205L75.8466 95.1132L75.7681 95.0878ZM75.7644 95.0945L75.692 95.0551V95.0551L75.7644 95.0945ZM75.7357 95.1462L75.6638 95.1056L75.6638 95.1056L75.7357 95.1462ZM75.6949 95.2246L75.7707 95.2571L75.6949 95.2246ZM75.6652 95.3571L75.7474 95.3641V95.3641L75.6652 95.3571ZM75.6644 95.3667L75.7427 95.3926L75.7457 95.3834L75.7466 95.3738L75.6644 95.3667ZM75.6613 95.3759L75.583 95.3501L75.6613 95.3759ZM75.6381 95.5343L75.7205 95.537V95.537L75.6381 95.5343ZM75.6378 95.6533L75.5553 95.6545V95.6545L75.6378 95.6533ZM75.6385 95.7195L75.5553 95.7197L75.5567 95.7302L75.6385 95.7195ZM75.6466 95.7933L75.5645 95.8015L75.5645 95.8015L75.6466 95.7933ZM75.6467 95.7941L75.7288 95.7859L75.7288 95.7859L75.6467 95.7941ZM75.6563 95.8825L75.7382 95.8722V95.8722L75.6563 95.8825ZM75.6844 96.0103L75.7577 95.9726V95.9726L75.6844 96.0103ZM75.6935 96.0281H75.776V96.0081L75.7669 95.9903L75.6935 96.0281ZM75.6935 96.1301V96.2126H75.776V96.1301H75.6935ZM75.5285 96.1301H75.446V96.2126H75.5285V96.1301ZM75.5285 96.0657H75.611V96.0497L75.605 96.0348L75.5285 96.0657ZM75.4926 95.9033L75.5745 95.8929L75.4926 95.9033ZM75.4826 95.8114L75.4005 95.8197L75.4005 95.8197L75.4826 95.8114ZM75.4825 95.8106L75.5646 95.8024L75.5646 95.8024L75.4825 95.8106ZM75.4743 95.7363L75.556 95.7251V95.7251L75.4743 95.7363ZM75.4727 95.7251V95.6426H75.378L75.391 95.7363L75.4727 95.7251ZM75.4735 95.7251V95.8076H75.556V95.7251H75.4735ZM75.4729 95.6615L75.3904 95.6626V95.6626L75.4729 95.6615ZM75.4732 95.5288L75.5556 95.5316L75.4732 95.5288ZM75.5016 95.3336L75.5805 95.3579L75.583 95.3498L75.5838 95.3415L75.5016 95.3336ZM75.5103 95.2702L75.5914 95.285L75.442 95.2238L75.5103 95.2702ZM75.5038 95.2798L75.5396 95.3541L75.5595 95.3445L75.572 95.3261L75.5038 95.2798ZM75.4838 95.2894L75.448 95.2151L75.448 95.2151L75.4838 95.2894ZM75.3527 95.364L75.3973 95.4335V95.4335L75.3527 95.364ZM75.3276 95.3802L75.2828 95.311L75.3276 95.3802ZM75.2168 95.4487L75.176 95.3771L75.176 95.3771L75.2168 95.4487ZM75.2123 95.4513L75.1382 95.4876L75.1768 95.5665L75.2531 95.523L75.2123 95.4513ZM75.2122 95.4512L75.2863 95.4149L75.2501 95.3408L75.176 95.3771L75.2122 95.4512ZM75.1922 95.461L75.1557 95.387L75.1557 95.387L75.1922 95.461ZM74.9005 95.5649L74.8875 95.4835L74.8777 95.485L74.8686 95.4889L74.9005 95.5649ZM74.7124 95.5926L74.7102 95.6751H74.7102L74.7124 95.5926ZM74.5378 95.5675L74.5604 95.4882L74.5495 95.4851L74.5382 95.485L74.5378 95.5675ZM74.1856 95.5388L74.197 95.4571H74.197L74.1856 95.5388ZM74.1709 95.5367L74.1318 95.6093L74.1448 95.6164L74.1596 95.6184L74.1709 95.5367ZM74.1578 95.5297L74.1187 95.6023L74.1187 95.6023L74.1578 95.5297ZM73.9701 95.4092L74.0187 95.3425L73.9701 95.4092ZM73.9055 95.3632L73.859 95.4314L73.859 95.4314L73.9055 95.3632ZM73.8856 95.3496L73.8097 95.3821L73.8192 95.4042L73.8391 95.4178L73.8856 95.3496ZM73.8761 95.3275L73.952 95.2951L73.8761 95.3275ZM73.8423 95.2526L73.7674 95.2873L73.8423 95.2526ZM73.7364 94.9646L73.817 94.9471L73.7364 94.9646ZM73.7345 94.9559H73.652V94.9648L73.6539 94.9734L73.7345 94.9559ZM73.7345 94.9212L73.652 94.9213L73.7345 94.9212ZM73.764 94.5539L73.8444 94.574L73.8456 94.5662L73.764 94.5539ZM73.8166 94.3855L73.7414 94.3515L73.8166 94.3855ZM73.8304 94.3555L73.7556 94.3207L73.8304 94.3555ZM73.8732 94.2504L73.7945 94.2258L73.8732 94.2504ZM73.8829 94.2194L73.8421 94.1477L73.8139 94.1638L73.8042 94.1948L73.8829 94.2194ZM73.9112 94.2033L73.952 94.2751L73.9112 94.2033ZM74.0082 94.1423L74.053 94.2115V94.2115L74.0082 94.1423ZM74.0248 94.1315L74.0696 94.2008L74.0248 94.1315ZM72.7928 92.9999C72.8083 92.9816 72.8272 92.9592 72.8456 92.9347L72.7136 92.8357C72.6985 92.8558 72.6826 92.8747 72.6668 92.8934L72.7928 92.9999ZM72.7841 93.0103C72.7869 93.007 72.7898 93.0035 72.7928 92.9999L72.6668 92.8934C72.6638 92.897 72.6607 92.9006 72.6577 92.9042L72.7841 93.0103ZM72.7325 93.0785C72.7457 93.0571 72.7617 93.0369 72.7841 93.0103L72.6577 92.9042C72.6348 92.9315 72.612 92.9595 72.592 92.9921L72.7325 93.0785ZM72.7261 93.0889L72.7325 93.0785L72.592 92.9921L72.5856 93.0025L72.7261 93.0889ZM72.6021 93.1083L72.6028 93.1089L72.7089 92.9825L72.7082 92.9819L72.6021 93.1083ZM72.682 93.1611C72.7006 93.1244 72.7113 93.1065 72.7183 93.0982L72.592 92.9921C72.5709 93.0171 72.5524 93.0517 72.5347 93.0867L72.682 93.1611ZM72.674 93.1771C72.6768 93.1714 72.6795 93.1661 72.682 93.1611L72.5347 93.0867C72.532 93.0921 72.5292 93.0977 72.5264 93.1034L72.674 93.1771ZM72.6428 93.2374C72.6543 93.2165 72.6651 93.1949 72.674 93.1771L72.5264 93.1034C72.5172 93.1217 72.508 93.1402 72.4984 93.1575L72.6428 93.2374ZM72.6472 93.2328C72.6485 93.2271 72.6498 93.2212 72.6512 93.2151L72.49 93.1798C72.4887 93.1856 72.4874 93.1913 72.4862 93.197L72.6472 93.2328ZM72.6402 93.2653C72.6422 93.2554 72.6446 93.2447 72.6472 93.2328L72.4862 93.197C72.4836 93.2087 72.4809 93.2205 72.4786 93.2318L72.6402 93.2653ZM72.627 93.3801C72.627 93.338 72.6323 93.3033 72.6402 93.2653L72.4786 93.2318C72.4695 93.2758 72.462 93.3225 72.462 93.3801H72.627ZM72.6518 93.6036C72.6288 93.546 72.627 93.4957 72.627 93.3801H72.462C72.462 93.4911 72.4619 93.5733 72.4987 93.665L72.6518 93.6036ZM72.6772 93.6245C72.6649 93.6105 72.6503 93.5939 72.6357 93.5782L72.5148 93.6904C72.5275 93.7041 72.5406 93.719 72.5531 93.7333L72.6772 93.6245ZM72.6995 93.6497C72.6935 93.6431 72.6861 93.6347 72.6772 93.6245L72.5531 93.7333C72.5617 93.7431 72.5703 93.7529 72.5776 93.7609L72.6995 93.6497ZM72.7495 93.6954C72.7339 93.6848 72.7191 93.6712 72.6995 93.6497L72.5776 93.7609C72.6012 93.7868 72.626 93.811 72.657 93.8321L72.7495 93.6954ZM72.7592 93.702L72.7495 93.6954L72.657 93.8321L72.6666 93.8386L72.7592 93.702ZM72.7735 93.8263L72.7741 93.8257L72.6518 93.7149L72.6512 93.7155L72.7735 93.8263ZM72.9359 93.8918C72.8873 93.8262 72.8219 93.7588 72.7677 93.7098L72.657 93.8321C72.706 93.8764 72.7632 93.9358 72.8033 93.99L72.9359 93.8918ZM73.0737 93.9786C73.0161 93.9389 72.9702 93.9073 72.914 93.8714L72.8252 94.0104C72.8786 94.0446 72.9222 94.0746 72.98 94.1145L73.0737 93.9786ZM73.097 93.9947C73.089 93.9892 73.0812 93.9838 73.0737 93.9786L72.98 94.1145C72.9876 94.1197 72.9954 94.125 73.0034 94.1306L73.097 93.9947ZM73.0909 93.9908C73.0904 93.9906 73.09 93.9904 73.0897 93.9902L73.0108 94.1351C73.0112 94.1353 73.0116 94.1355 73.0119 94.1357L73.0909 93.9908ZM73.2575 94.0552C73.198 94.0483 73.1566 94.0267 73.0908 93.9908L73.0119 94.1357C73.0762 94.1707 73.1433 94.2081 73.2385 94.2191L73.2575 94.0552ZM73.3735 94.0151C73.3461 94.0286 73.3302 94.0362 73.3125 94.042C73.2959 94.0475 73.2752 94.052 73.2409 94.055L73.2551 94.2194C73.2987 94.2156 73.3324 94.2092 73.364 94.1988C73.3945 94.1888 73.4207 94.1757 73.4464 94.1631L73.3735 94.0151ZM73.4343 93.9862C73.4099 93.9971 73.3901 94.0069 73.3735 94.0151L73.4464 94.1631C73.4629 94.1549 73.4805 94.1463 73.502 94.1366L73.4343 93.9862ZM73.5325 93.9168C73.4986 93.9392 73.461 93.9642 73.4192 93.9949L73.5171 94.1278C73.5552 94.0997 73.5898 94.0767 73.6234 94.0546L73.5325 93.9168ZM73.5418 93.9107C73.5387 93.9127 73.5356 93.9148 73.5325 93.9168L73.6234 94.0546C73.6264 94.0525 73.6295 94.0505 73.6326 94.0485L73.5418 93.9107ZM73.633 93.8485C73.6031 93.8703 73.5745 93.8891 73.5418 93.9107L73.6326 94.0485C73.6649 94.0272 73.6965 94.0063 73.73 93.9821L73.633 93.8485ZM73.6355 93.8468L73.633 93.8485L73.73 93.9821L73.7324 93.9803L73.6355 93.8468ZM73.7525 93.8677L73.7525 93.8676L73.6154 93.9595L73.6154 93.9595L73.7525 93.8677ZM73.7451 93.718C73.727 93.7448 73.7071 93.7725 73.6872 93.7963C73.6665 93.8211 73.6495 93.8373 73.6379 93.8451L73.73 93.9821C73.7611 93.9611 73.79 93.9307 73.8139 93.902C73.8387 93.8722 73.8622 93.8395 73.882 93.8101L73.7451 93.718ZM73.7627 93.6918L73.7451 93.718L73.882 93.8101L73.8996 93.7839L73.7627 93.6918ZM73.8413 93.6501L73.8108 93.6579L73.8515 93.8178L73.882 93.8101L73.8413 93.6501ZM74.058 93.6346C73.9849 93.6227 73.9121 93.6322 73.8413 93.6501L73.882 93.8101C73.941 93.7951 73.9892 93.7906 74.0315 93.7974L74.058 93.6346ZM74.2484 93.7244C74.1947 93.6789 74.1324 93.6467 74.058 93.6346L74.0315 93.7974C74.0725 93.8041 74.1078 93.8215 74.1417 93.8502L74.2484 93.7244ZM74.4189 93.8891C74.3708 93.8249 74.3107 93.7661 74.2414 93.719L74.1487 93.8556C74.2022 93.8918 74.2491 93.9376 74.2868 93.9879L74.4189 93.8891ZM74.4587 93.911C74.4433 93.8997 74.4195 93.8821 74.3949 93.8676L74.3108 94.0095C74.3272 94.0193 74.3447 94.032 74.3611 94.044L74.4587 93.911ZM74.4614 93.913C74.4605 93.9123 74.4596 93.9117 74.4587 93.911L74.3611 94.044C74.362 94.0447 74.363 94.0454 74.3639 94.0461L74.4614 93.913ZM74.5022 93.9417C74.503 93.9421 74.5007 93.9409 74.4923 93.9352C74.4847 93.9299 74.4748 93.9228 74.4614 93.913L74.3639 94.0461C74.3873 94.0633 74.4114 94.081 74.43 94.0901L74.5022 93.9417ZM74.4681 94.2003L74.5403 94.052L74.3919 93.9798L74.3197 94.1281L74.4681 94.2003ZM74.2704 94.1821C74.2896 94.1962 74.3246 94.2223 74.3578 94.2384L74.43 94.0901C74.4129 94.0818 74.3906 94.0657 74.3681 94.0491L74.2704 94.1821ZM74.2663 94.1791C74.2676 94.1801 74.269 94.1811 74.2704 94.1821L74.3681 94.0491C74.3667 94.0481 74.3652 94.0471 74.3639 94.0461L74.2663 94.1791ZM74.2264 94.1512C74.2254 94.1507 74.2277 94.1518 74.2359 94.1574C74.2434 94.1625 74.2532 94.1695 74.2663 94.1791L74.3639 94.0461C74.3404 94.0288 74.3161 94.0111 74.297 94.0021L74.2264 94.1512ZM74.2067 94.1418L74.2264 94.1512L74.297 94.0021L74.2773 93.9927L74.2067 94.1418ZM74.1619 94.0968L74.1744 94.1147L74.3095 94.0199L74.297 94.0021L74.1619 94.0968ZM74.0535 93.9903C74.0956 94.0184 74.1331 94.0557 74.1619 94.0968L74.297 94.0021C74.257 93.9451 74.205 93.8931 74.145 93.8531L74.0535 93.9903ZM74.0446 93.9844L74.0535 93.9903L74.145 93.8531L74.1361 93.8471L74.0446 93.9844ZM74.0286 93.861L74.0281 93.8616L74.1525 93.97L74.153 93.9695L74.0286 93.861ZM74.005 93.9603C74.0127 93.9615 74.0214 93.9642 74.0366 93.9774L74.145 93.8531C74.11 93.8225 74.0737 93.8043 74.0315 93.7974L74.005 93.9603ZM73.9477 93.9643C73.9789 93.9581 73.996 93.9588 74.005 93.9603L74.0315 93.7974C73.9974 93.7919 73.9596 93.7938 73.9158 93.8024L73.9477 93.9643ZM73.8237 94.1178C73.8986 94.0669 73.9614 93.9847 73.9993 93.9307L73.8642 93.8359C73.8273 93.8885 73.779 93.9487 73.7309 93.9814L73.8237 94.1178ZM73.7237 94.1861C73.7553 94.1652 73.7896 94.1426 73.8257 94.1164L73.7289 93.9828C73.6962 94.0066 73.6648 94.0272 73.6329 94.0483L73.7237 94.1861ZM73.7142 94.1923C73.7173 94.1902 73.7205 94.1881 73.7237 94.1861L73.6329 94.0483C73.6297 94.0504 73.6265 94.0525 73.6234 94.0546L73.7142 94.1923ZM73.6085 94.2654C73.6455 94.2379 73.679 94.2155 73.7142 94.1923L73.6234 94.0546C73.5877 94.078 73.551 94.1026 73.51 94.1331L73.6085 94.2654ZM73.601 94.271L73.6085 94.2654L73.51 94.1331L73.5026 94.1386L73.601 94.271ZM73.5767 94.284L73.5852 94.2802L73.5184 94.1293L73.51 94.1331L73.5767 94.284ZM73.5292 94.3067C73.5459 94.2984 73.5609 94.291 73.5767 94.284L73.51 94.1331C73.4903 94.1417 73.4722 94.1507 73.4559 94.1588L73.5292 94.3067ZM73.2596 94.3846C73.3923 94.3744 73.4642 94.3389 73.5292 94.3067L73.4559 94.1588C73.3979 94.1876 73.3484 94.2122 73.247 94.2201L73.2596 94.3846ZM73.2524 94.3851L73.2596 94.3846L73.247 94.2201L73.2398 94.2206L73.2524 94.3851ZM73.2309 94.3843L73.2381 94.385L73.2542 94.2208L73.247 94.2201L73.2309 94.3843ZM72.9377 94.2832C73.0034 94.3191 73.0977 94.3712 73.2309 94.3843L73.247 94.2201C73.15 94.2105 73.0814 94.1737 73.0168 94.1384L72.9377 94.2832ZM72.9281 94.278C72.9313 94.2797 72.9344 94.2814 72.9377 94.2832L73.0168 94.1384C73.0135 94.1366 73.0102 94.1348 73.007 94.1331L72.9281 94.278ZM72.9205 94.2738L72.9281 94.278L73.007 94.1331L72.9994 94.1289L72.9205 94.2738ZM72.8923 94.1542L72.892 94.1546L73.0279 94.2482L73.0282 94.2478L72.8923 94.1542ZM72.8863 94.2503C72.895 94.2563 72.904 94.2625 72.9134 94.269L73.007 94.1331C72.9976 94.1266 72.9886 94.1204 72.98 94.1145L72.8863 94.2503ZM72.7238 94.1415C72.7805 94.1774 72.8237 94.2071 72.8863 94.2503L72.98 94.1145C72.9175 94.0714 72.8718 94.0399 72.812 94.0021L72.7238 94.1415ZM72.7098 94.1327L72.7238 94.1415L72.812 94.0021L72.798 93.9932L72.7098 94.1327ZM72.6769 94.0968L72.6864 94.1103L72.8215 94.0156L72.812 94.0021L72.6769 94.0968ZM72.5499 93.9577C72.5969 94.0007 72.6474 94.0547 72.6769 94.0968L72.812 94.0021C72.773 93.9465 72.7132 93.8834 72.6613 93.8359L72.5499 93.9577ZM72.4558 93.8722C72.4821 93.9011 72.5151 93.9342 72.5583 93.9644L72.6529 93.8292C72.6238 93.8089 72.6002 93.7856 72.5776 93.7609L72.4558 93.8722ZM72.4237 93.836C72.4329 93.8466 72.4431 93.8584 72.4558 93.8722L72.5776 93.7609C72.5664 93.7487 72.5573 93.7382 72.548 93.7276L72.4237 93.836ZM72.3862 93.7945C72.4001 93.809 72.4107 93.8212 72.4237 93.836L72.548 93.7276C72.5352 93.7128 72.5221 93.6978 72.505 93.6801L72.3862 93.7945ZM72.376 93.7839L72.3862 93.7945L72.505 93.6801L72.4948 93.6694L72.376 93.7839ZM72.3539 93.7463L72.3598 93.7598L72.5109 93.6935L72.505 93.6801L72.3539 93.7463ZM72.2978 93.4718C72.3003 93.5586 72.3105 93.6475 72.3539 93.7463L72.505 93.6801C72.4734 93.6081 72.4649 93.5427 72.4627 93.4671L72.2978 93.4718ZM72.387 93.5549L72.4088 93.5469L72.3517 93.392L72.33 93.4001L72.387 93.5549ZM72.357 93.5718C72.3654 93.5657 72.3684 93.5636 72.3716 93.5617C72.3742 93.5602 72.3783 93.5581 72.387 93.5549L72.33 93.4001C72.295 93.4129 72.2781 93.4252 72.2597 93.4386L72.357 93.5718ZM72.3271 93.5927C72.3402 93.5841 72.3498 93.5771 72.357 93.5718L72.2597 93.4386C72.2528 93.4436 72.2459 93.4486 72.2364 93.4549L72.3271 93.5927ZM72.1193 93.6529C72.2116 93.6488 72.2724 93.6287 72.3271 93.5927L72.2364 93.4549C72.2108 93.4718 72.18 93.4851 72.112 93.4881L72.1193 93.6529ZM72.1156 93.6531L72.1193 93.6529L72.112 93.4881L72.1084 93.4882L72.1156 93.6531ZM72.0295 93.5706V93.5706H72.1945V93.5706H72.0295ZM71.8962 93.6236C71.9667 93.6533 72.0429 93.6531 72.112 93.6531V93.4881C72.0364 93.4881 71.9949 93.4861 71.9604 93.4716L71.8962 93.6236ZM71.7336 93.497C71.7755 93.5403 71.8259 93.5939 71.8962 93.6236L71.9604 93.4716C71.9265 93.4573 71.899 93.4305 71.852 93.3821L71.7336 93.497ZM71.7315 93.4949L71.7336 93.497L71.852 93.3821L71.85 93.3801L71.7315 93.4949ZM71.7242 93.4874L71.7316 93.4949L71.85 93.3801L71.8427 93.3725L71.7242 93.4874ZM71.7345 93.3636L71.734 93.364L71.833 93.4959L71.8335 93.4955L71.7345 93.3636ZM71.6553 93.3822C71.6691 93.4057 71.6911 93.4432 71.718 93.4791L71.85 93.3801C71.8294 93.3526 71.8117 93.3226 71.7975 93.2986L71.6553 93.3822ZM71.6519 93.3764C71.653 93.3782 71.6541 93.3802 71.6553 93.3822L71.7975 93.2986C71.7963 93.2965 71.7951 93.2945 71.794 93.2926L71.6519 93.3764ZM71.6405 93.3577C71.6403 93.3574 71.6411 93.3584 71.6432 93.362C71.6453 93.3653 71.6481 93.3699 71.6519 93.3764L71.794 93.2926C71.7867 93.2802 71.7803 93.2695 71.7749 93.2619L71.6405 93.3577ZM71.789 93.2999C71.7896 93.3046 71.7932 93.335 71.7699 93.3623C71.7405 93.3969 71.7011 93.3921 71.6888 93.3894C71.6757 93.3864 71.6666 93.3808 71.6639 93.3792C71.6601 93.3769 71.6572 93.3747 71.6557 93.3735C71.6508 93.3695 71.6473 93.3658 71.6472 93.3657C71.6454 93.3638 71.6442 93.3623 71.644 93.3621C71.6432 93.3612 71.6426 93.3604 71.6424 93.3602C71.6419 93.3596 71.6415 93.3591 71.6414 93.3588C71.6409 93.3583 71.6407 93.3579 71.6405 93.3577L71.7749 93.2619C71.7743 93.2611 71.7737 93.2602 71.773 93.2594C71.7727 93.259 71.7723 93.2584 71.7717 93.2577C71.7715 93.2575 71.7709 93.2567 71.7701 93.2557C71.7699 93.2555 71.7686 93.254 71.7669 93.2521C71.7668 93.252 71.7633 93.2482 71.7583 93.2443C71.7568 93.2431 71.754 93.2409 71.7501 93.2385C71.7475 93.2369 71.7384 93.2314 71.7252 93.2284C71.7129 93.2256 71.6736 93.2209 71.6442 93.2554C71.6209 93.2828 71.6245 93.3132 71.625 93.3179L71.789 93.2999ZM71.7677 93.2532C71.7683 93.2538 71.769 93.2545 71.7698 93.2554C71.7702 93.2559 71.7707 93.2564 71.7712 93.2571C71.7715 93.2574 71.7719 93.2579 71.7724 93.2585C71.7725 93.2588 71.773 93.2593 71.7735 93.26C71.7737 93.2603 71.7743 93.2612 71.7751 93.2623C71.7754 93.2628 71.7764 93.2641 71.7775 93.266C71.778 93.2668 71.7792 93.2688 71.7806 93.2716C71.7813 93.2729 71.7825 93.2755 71.7838 93.2788C71.7846 93.2808 71.7878 93.2889 71.789 93.2999L71.625 93.3179C71.6262 93.3289 71.6294 93.337 71.6302 93.339C71.6315 93.3423 71.6328 93.3449 71.6335 93.3462C71.6348 93.3489 71.6361 93.351 71.6366 93.3518C71.6377 93.3537 71.6386 93.355 71.639 93.3555C71.6397 93.3566 71.6404 93.3575 71.6406 93.3578C71.6411 93.3585 71.6416 93.3591 71.6418 93.3595C71.6424 93.3602 71.6429 93.3608 71.6433 93.3613C71.6442 93.3624 71.6452 93.3636 71.6463 93.3648C71.6484 93.3672 71.6511 93.3701 71.6544 93.3732L71.7677 93.2532ZM71.7646 93.2509C71.7655 93.2514 71.7666 93.2521 71.7677 93.2532L71.6544 93.3732C71.6594 93.3778 71.6694 93.3866 71.6842 93.3949L71.7646 93.2509ZM71.762 93.2501C71.7628 93.2501 71.7637 93.2504 71.7646 93.2509L71.6842 93.3949C71.6988 93.4031 71.7258 93.4151 71.762 93.4151V93.2501ZM71.6795 93.1676V93.3326H71.8445V93.1676H71.6795ZM71.8808 93.1331C71.8731 93.1258 71.8307 93.0851 71.762 93.0851V93.2501C71.7627 93.2501 71.7634 93.2502 71.7647 93.2509C71.766 93.2516 71.7668 93.2524 71.7675 93.253L71.8808 93.1331ZM71.8809 93.1332L71.8808 93.1331L71.7675 93.253L71.7676 93.2532L71.8809 93.1332ZM71.9093 93.1662C71.9044 93.1593 71.8947 93.1462 71.8809 93.1332L71.7677 93.2532C71.7698 93.2552 71.7723 93.2582 71.7749 93.2619L71.9093 93.1662ZM71.9361 93.2087C71.9295 93.1976 71.9195 93.1805 71.9093 93.1662L71.7749 93.2619C71.7803 93.2694 71.7867 93.2801 71.794 93.2926L71.9361 93.2087ZM71.9391 93.2138C71.9381 93.2121 71.9371 93.2104 71.9361 93.2087L71.794 93.2926C71.795 93.2942 71.796 93.2959 71.797 93.2976L71.9391 93.2138ZM71.9796 93.2778C71.9657 93.2588 71.9532 93.2377 71.9391 93.2138L71.797 93.2976C71.8104 93.3203 71.8269 93.3485 71.8464 93.3752L71.9796 93.2778ZM72.0245 93.3195C72.0271 93.3206 72.0267 93.3214 72.019 93.3148C72.0102 93.3072 71.9964 93.294 71.9721 93.269L71.8539 93.384C71.8991 93.4306 71.9264 93.4572 71.9604 93.4716L72.0245 93.3195ZM72.1102 93.3231C72.0715 93.323 72.0493 93.3222 72.0357 93.3209C72.0229 93.3197 72.0221 93.3185 72.0245 93.3195L71.9604 93.4716C71.9947 93.486 72.0361 93.488 72.1101 93.4881L72.1102 93.3231ZM72.1456 93.3171C72.1433 93.3187 72.1434 93.3185 72.1438 93.3183C72.1444 93.318 72.1443 93.3182 72.1429 93.3186C72.1395 93.3196 72.1293 93.322 72.1062 93.3231L72.114 93.488C72.1453 93.4865 72.17 93.4828 72.1908 93.4765C72.2136 93.4696 72.2278 93.4606 72.2364 93.4549L72.1456 93.3171ZM72.1526 93.312C72.1504 93.3137 72.1488 93.3149 72.1474 93.3158C72.146 93.3168 72.1456 93.3172 72.1456 93.3171L72.2364 93.4549C72.2414 93.4516 72.2469 93.4475 72.2505 93.4449L72.1526 93.312ZM72.2414 93.2583C72.1987 93.278 72.1685 93.3004 72.1526 93.312L72.2505 93.4449C72.2649 93.4343 72.2839 93.4204 72.3105 93.4081L72.2414 93.2583ZM72.2576 93.2216C72.2428 93.2402 72.2255 93.262 72.2089 93.2851L72.3429 93.3813C72.3567 93.3621 72.3716 93.3434 72.3867 93.3244L72.2576 93.2216ZM72.2744 93.2004C72.2692 93.2071 72.2637 93.214 72.2576 93.2216L72.3867 93.3244C72.3927 93.3169 72.3987 93.3093 72.4045 93.3019L72.2744 93.2004ZM72.336 93.1081C72.3181 93.1422 72.2981 93.1701 72.2744 93.2004L72.4045 93.3019C72.4307 93.2683 72.4575 93.2316 72.482 93.1851L72.336 93.1081ZM72.3397 93.1012L72.336 93.1081L72.482 93.1851L72.4856 93.1781L72.3397 93.1012ZM72.4581 93.0708L72.4578 93.0706L72.3675 93.2087L72.3678 93.2089L72.4581 93.0708ZM72.3451 93.0928C72.3447 93.0934 72.3443 93.0941 72.3439 93.0947L72.482 93.1851C72.4828 93.1838 72.4836 93.1826 72.4844 93.1814L72.3451 93.0928ZM72.3416 93.0772C72.3395 93.092 72.337 93.1058 72.334 93.1204L72.4956 93.1538C72.4991 93.1368 72.5023 93.1193 72.505 93.1001L72.3416 93.0772ZM72.3433 93.0648L72.3416 93.0772L72.505 93.1001L72.5067 93.0876L72.3433 93.0648ZM72.3557 93.0297L72.3504 93.041L72.4996 93.1114L72.505 93.1001L72.3557 93.0297ZM72.4594 92.8435C72.4265 92.8976 72.3886 92.96 72.3557 93.0297L72.505 93.1001C72.5336 93.0394 72.5671 92.9841 72.6004 92.9291L72.4594 92.8435ZM72.4737 92.8198C72.469 92.8276 72.4643 92.8354 72.4594 92.8435L72.6004 92.9291C72.6053 92.9211 72.6102 92.913 72.615 92.9051L72.4737 92.8198ZM72.4814 92.8071L72.4737 92.8198L72.615 92.9051L72.6227 92.8923L72.4814 92.8071ZM72.5125 92.7757L72.5008 92.785L72.6033 92.9143L72.615 92.9051L72.5125 92.7757ZM72.5536 92.7397C72.5394 92.7529 72.5275 92.7639 72.5125 92.7757L72.615 92.9051C72.6355 92.8888 72.6515 92.874 72.6659 92.8606L72.5536 92.7397ZM72.5554 92.738C72.5548 92.7386 72.5542 92.7391 72.5536 92.7397L72.6659 92.8606C72.6665 92.86 72.6671 92.8595 72.6678 92.8589L72.5554 92.738ZM72.6088 92.6923C72.5871 92.7085 72.5684 92.726 72.5554 92.738L72.6678 92.8589C72.6814 92.8462 72.6939 92.8347 72.7074 92.8247L72.6088 92.6923ZM72.7852 92.6187C72.7125 92.6326 72.658 92.6557 72.6088 92.6923L72.7074 92.8247C72.7335 92.8052 72.7639 92.7908 72.8161 92.7808L72.7852 92.6187ZM72.81 92.6145C72.8009 92.6158 72.7921 92.6173 72.7837 92.6191L72.8176 92.7805C72.8222 92.7796 72.827 92.7787 72.832 92.7781L72.81 92.6145ZM72.9266 92.8475L72.9026 92.6843L72.7394 92.7083L72.7634 92.8715L72.9266 92.8475ZM72.8444 92.9434C72.8485 92.9426 72.853 92.9418 72.8581 92.941L72.832 92.7781C72.8251 92.7792 72.8185 92.7803 72.8123 92.7816L72.8444 92.9434ZM72.8458 92.9435C72.8471 92.9428 72.8474 92.9428 72.8472 92.9428C72.8471 92.9429 72.8472 92.9428 72.8479 92.9426L72.8088 92.7823C72.7937 92.786 72.7827 92.7907 72.774 92.7949L72.8458 92.9435ZM72.8347 92.9493C72.8412 92.9458 72.8435 92.9446 72.8458 92.9435L72.774 92.7949C72.7676 92.798 72.7618 92.8012 72.7561 92.8043L72.8347 92.9493ZM72.8297 92.9521C72.8315 92.9511 72.8332 92.9501 72.8347 92.9493L72.7561 92.8043C72.7546 92.8051 72.753 92.8059 72.7513 92.8069L72.8297 92.9521ZM72.8175 92.9585C72.8221 92.9562 72.8262 92.954 72.8297 92.9521L72.7513 92.8069C72.7482 92.8086 72.745 92.8102 72.7417 92.8119L72.8175 92.9585ZM74.105 93.9884C74.0835 93.9976 74.0592 94.0123 74.0429 94.0222L74.1293 94.1628C74.1468 94.1521 74.1612 94.1438 74.17 94.1401L74.105 93.9884ZM74.2783 94.1834L74.2133 94.0317L74.0617 94.0967L74.1267 94.2484L74.2783 94.1834ZM74.2741 94.1749C74.2562 94.1436 74.2265 94.1366 74.219 94.135C74.2087 94.1329 74.2004 94.1333 74.1973 94.1335C74.1903 94.134 74.1849 94.1353 74.1836 94.1356C74.1798 94.1365 74.1769 94.1374 74.1764 94.1376C74.1745 94.1383 74.173 94.1388 74.1727 94.1389C74.1718 94.1393 74.1711 94.1396 74.171 94.1396C74.1705 94.1398 74.1702 94.14 74.1702 94.14C74.17 94.14 74.1699 94.1401 74.17 94.1401L74.235 94.2917C74.2351 94.2917 74.235 94.2917 74.2348 94.2918C74.2348 94.2918 74.2345 94.2919 74.2341 94.2921C74.2339 94.2921 74.2332 94.2924 74.2323 94.2928C74.232 94.2929 74.2306 94.2935 74.2287 94.2941C74.2281 94.2943 74.2252 94.2953 74.2214 94.2962C74.2201 94.2965 74.2147 94.2978 74.2077 94.2982C74.2046 94.2984 74.1963 94.2988 74.186 94.2967C74.1785 94.2952 74.1488 94.2882 74.1309 94.2568L74.2741 94.1749ZM74.238 94.2904C74.2382 94.2903 74.2381 94.2903 74.2378 94.2904C74.2377 94.2905 74.2375 94.2906 74.2372 94.2907C74.2371 94.2908 74.237 94.2908 74.237 94.2908C74.2369 94.2909 74.237 94.2908 74.2371 94.2908C74.2371 94.2908 74.2374 94.2907 74.2377 94.2905C74.2378 94.2905 74.2384 94.2902 74.2391 94.2898C74.2394 94.2897 74.2406 94.2891 74.2421 94.2883C74.2425 94.288 74.2449 94.2867 74.2477 94.2849C74.2495 94.2837 74.2546 94.2799 74.2577 94.2772C74.2652 94.2696 74.2847 94.2235 74.2787 94.1842L74.1263 94.2476C74.1204 94.2082 74.1399 94.1622 74.1473 94.1545C74.1505 94.1519 74.1555 94.1481 74.1573 94.1469C74.1601 94.145 74.1625 94.1437 74.1629 94.1435C74.1645 94.1427 74.1657 94.1421 74.1659 94.1419C74.1666 94.1416 74.1672 94.1413 74.1673 94.1412C74.1675 94.1412 74.1677 94.1411 74.1678 94.141C74.1678 94.141 74.1679 94.141 74.1679 94.141C74.168 94.1409 74.1681 94.1409 74.168 94.1409C74.1679 94.141 74.1677 94.1411 74.1675 94.1412C74.1671 94.1414 74.1666 94.1416 74.1661 94.1418C74.165 94.1423 74.1638 94.143 74.1624 94.1437L74.238 94.2904ZM74.2329 94.2932L74.2396 94.2895L74.1608 94.1445L74.1541 94.1482L74.2329 94.2932ZM74.2157 94.3034C74.2235 94.2986 74.2296 94.295 74.234 94.2925L74.153 94.1488C74.1461 94.1527 74.1381 94.1574 74.1293 94.1628L74.2157 94.3034ZM74.1593 94.3393C74.1807 94.3254 74.2 94.3131 74.2157 94.3034L74.1293 94.1628C74.1118 94.1736 74.091 94.1869 74.0696 94.2008L74.1593 94.3393ZM74.143 94.3498C74.1486 94.3463 74.154 94.3427 74.1593 94.3393L74.0696 94.2008C74.0642 94.2043 74.0588 94.2078 74.0533 94.2114L74.143 94.3498ZM74.0637 94.4005C74.0884 94.3853 74.117 94.3667 74.143 94.3498L74.0533 94.2114C74.0268 94.2286 73.9999 94.246 73.9771 94.2601L74.0637 94.4005ZM74.053 94.464C74.0662 94.4356 74.0829 94.3997 74.0979 94.3585L73.9428 94.3021C73.9306 94.3357 73.9168 94.3656 73.9034 94.3943L74.053 94.464ZM74.0421 94.4876C74.0454 94.4803 74.049 94.4726 74.053 94.464L73.9034 94.3943C73.8995 94.4028 73.8955 94.4113 73.8917 94.4196L74.0421 94.4876ZM74.0084 94.5932C74.0137 94.5556 74.0246 94.5262 74.0421 94.4876L73.8917 94.4196C73.8715 94.4643 73.8535 94.51 73.845 94.5701L74.0084 94.5932ZM74.0071 94.6022L74.0084 94.5932L73.845 94.5701L73.8437 94.5791L74.0071 94.6022ZM73.9044 94.6705L73.9049 94.6706L73.9459 94.5108L73.9454 94.5106L73.9044 94.6705ZM73.982 94.9274C73.9819 94.7974 73.9824 94.6986 74.0048 94.611L73.845 94.5701C73.8163 94.6817 73.8169 94.8029 73.817 94.9275L73.982 94.9274ZM73.982 94.9379C73.982 94.9344 73.982 94.9309 73.982 94.9274L73.817 94.9275C73.817 94.931 73.817 94.9345 73.817 94.938L73.982 94.9379ZM74.0615 95.1365C74.0263 95.0605 73.9981 94.9991 73.9799 94.9196L73.8191 94.9564C73.8416 95.0549 73.8769 95.1306 73.9118 95.2058L74.0615 95.1365ZM74.0937 95.2072C74.0827 95.1822 74.0718 95.1587 74.0615 95.1365L73.9118 95.2058C73.9221 95.2282 73.9324 95.2504 73.9428 95.2738L74.0937 95.2072ZM74.1233 95.2144C74.1063 95.202 74.0876 95.1883 74.0655 95.1729L73.971 95.3082C73.9916 95.3225 74.0091 95.3353 74.0261 95.3477L74.1233 95.2144ZM74.263 95.3051C74.2008 95.2708 74.1672 95.2464 74.1233 95.2144L74.0261 95.3477C74.0715 95.3808 74.1118 95.4102 74.1834 95.4496L74.263 95.3051ZM74.55 95.3201C74.4302 95.3201 74.3343 95.3093 74.2344 95.2956L74.212 95.4591C74.3151 95.4732 74.4194 95.4851 74.55 95.4851V95.3201ZM74.5628 95.3201H74.55V95.4851H74.5628V95.3201ZM74.5999 95.3278L74.5878 95.3239L74.5378 95.4812L74.55 95.4851L74.5999 95.3278ZM74.719 95.3452C74.6706 95.3439 74.6251 95.3358 74.5999 95.3278L74.55 95.4851C74.5925 95.4986 74.6537 95.5086 74.7146 95.5102L74.719 95.3452ZM74.8046 95.3368C74.8049 95.3366 74.8031 95.3375 74.7984 95.3388C74.7939 95.34 74.7878 95.3413 74.7799 95.3424C74.7642 95.3446 74.7436 95.3459 74.719 95.3452L74.7146 95.5102C74.7754 95.5118 74.8359 95.5051 74.877 95.4851L74.8046 95.3368ZM74.8164 95.331L74.8046 95.3368L74.877 95.4851L74.8887 95.4793L74.8164 95.331ZM74.8538 95.3217L74.841 95.3235L74.8641 95.4869L74.877 95.4851L74.8538 95.3217ZM75.0858 95.2375C75.0014 95.2789 74.937 95.3099 74.8538 95.3217L74.877 95.4851C74.9896 95.4691 75.0759 95.4261 75.1585 95.3856L75.0858 95.2375ZM75.1011 95.23C75.096 95.2325 75.0908 95.235 75.0858 95.2375L75.1585 95.3856C75.1635 95.3832 75.1686 95.3807 75.1736 95.3782L75.1011 95.23ZM75.1913 95.1736C75.1592 95.1944 75.1304 95.213 75.0964 95.2325L75.1784 95.3757C75.2168 95.3537 75.2491 95.3328 75.281 95.3121L75.1913 95.1736ZM75.2192 95.1556C75.2096 95.1618 75.2003 95.1678 75.1913 95.1736L75.281 95.3121C75.29 95.3063 75.299 95.3005 75.3082 95.2946L75.2192 95.1556ZM75.3557 95.0766C75.3018 95.1038 75.2584 95.1305 75.2192 95.1556L75.3082 95.2946C75.3454 95.2707 75.3834 95.2474 75.43 95.2239L75.3557 95.0766ZM75.4271 94.9859C75.3946 95.0196 75.3583 95.0583 75.3265 95.1012L75.4591 95.1993C75.484 95.1658 75.5138 95.1338 75.546 95.1003L75.4271 94.9859ZM75.4459 94.9664C75.4397 94.9728 75.4334 94.9794 75.4271 94.9859L75.546 95.1003C75.5521 95.0939 75.5583 95.0876 75.5645 95.0811L75.4459 94.9664ZM75.5377 94.867C75.508 94.9021 75.4781 94.9331 75.4459 94.9664L75.5645 95.0811C75.5963 95.0483 75.6299 95.0135 75.6636 94.9736L75.5377 94.867ZM75.5812 94.8113C75.5676 94.8285 75.5523 94.8478 75.5352 94.8702L75.6662 94.9705C75.6823 94.9494 75.6969 94.9311 75.7105 94.9138L75.5812 94.8113ZM75.6791 94.6631C75.6522 94.7214 75.6267 94.7539 75.5812 94.8113L75.7105 94.9138C75.7563 94.8561 75.7931 94.8101 75.829 94.7321L75.6791 94.6631ZM75.9378 94.6834L75.7852 94.6212L75.7229 94.774L75.8756 94.8362L75.9378 94.6834ZM75.9116 94.9577C75.9347 94.9084 75.962 94.8503 75.9844 94.7875L75.829 94.7321C75.8096 94.7864 75.7857 94.8375 75.7622 94.8877L75.9116 94.9577ZM75.9077 94.9661C75.909 94.9633 75.9103 94.9605 75.9116 94.9577L75.7622 94.8877C75.7609 94.8905 75.7596 94.8934 75.7582 94.8962L75.9077 94.9661ZM75.849 95.1059C75.8628 95.0631 75.8825 95.0199 75.9077 94.9661L75.7582 94.8962C75.7335 94.949 75.7095 95.001 75.692 95.0551L75.849 95.1059ZM75.8466 95.1132L75.849 95.1059L75.692 95.0551L75.6896 95.0623L75.8466 95.1132ZM75.8369 95.134L75.8406 95.1272L75.6957 95.0483L75.692 95.0551L75.8369 95.134ZM75.8076 95.1867C75.8159 95.1719 75.8257 95.1546 75.8369 95.134L75.692 95.0551C75.6814 95.0745 75.6722 95.0908 75.6638 95.1056L75.8076 95.1867ZM75.7707 95.2571C75.7796 95.2366 75.7898 95.2182 75.8076 95.1867L75.6638 95.1056C75.6469 95.1357 75.6321 95.1619 75.6191 95.1921L75.7707 95.2571ZM75.7474 95.3641C75.7521 95.3086 75.7607 95.2805 75.7707 95.2571L75.6191 95.1921C75.601 95.2343 75.589 95.28 75.583 95.3501L75.7474 95.3641ZM75.7466 95.3738L75.7474 95.3641L75.583 95.3501L75.5822 95.3597L75.7466 95.3738ZM75.7397 95.4018L75.7427 95.3926L75.586 95.3409L75.583 95.3501L75.7397 95.4018ZM75.7205 95.537C75.7224 95.4798 75.7283 95.4361 75.7397 95.4018L75.583 95.3501C75.5645 95.4061 75.5577 95.4678 75.5556 95.5316L75.7205 95.537ZM75.7203 95.6522C75.7198 95.6113 75.7193 95.5745 75.7205 95.537L75.5556 95.5316C75.5542 95.5735 75.5548 95.6142 75.5553 95.6545L75.7203 95.6522ZM75.721 95.7193C75.7209 95.6959 75.7206 95.6735 75.7203 95.6522L75.5553 95.6545C75.5556 95.6759 75.5559 95.6973 75.556 95.7197L75.721 95.7193ZM75.7287 95.785C75.7261 95.7595 75.7234 95.7324 75.7203 95.7088L75.5567 95.7302C75.5594 95.7509 75.5619 95.7753 75.5645 95.8015L75.7287 95.785ZM75.7288 95.7859L75.7287 95.785L75.5645 95.8015L75.5646 95.8024L75.7288 95.7859ZM75.7382 95.8722C75.7346 95.8441 75.7317 95.8151 75.7288 95.7859L75.5646 95.8024C75.5675 95.8313 75.5706 95.8624 75.5745 95.8929L75.7382 95.8722ZM75.7577 95.9726C75.7581 95.9734 75.7572 95.9717 75.7555 95.9662C75.7539 95.9611 75.7521 95.954 75.7501 95.9449C75.746 95.9265 75.742 95.9022 75.7382 95.8722L75.5745 95.8929C75.5787 95.9259 75.5835 95.9554 75.5889 95.9801C75.5939 96.0032 75.6007 96.028 75.611 96.0481L75.7577 95.9726ZM75.7669 95.9903L75.7577 95.9726L75.611 96.0481L75.6201 96.0658L75.7669 95.9903ZM75.776 96.0481V96.0281H75.611V96.0481H75.776ZM75.776 96.1301V96.0481H75.611V96.1301H75.776ZM75.5285 96.2126H75.6935V96.0476H75.5285V96.2126ZM75.446 96.0657V96.1301H75.611V96.0657H75.446ZM75.4108 95.9137C75.4173 95.9652 75.4281 96.0374 75.452 96.0966L75.605 96.0348C75.59 95.9976 75.5811 95.9448 75.5745 95.8929L75.4108 95.9137ZM75.4005 95.8197C75.4033 95.848 75.4066 95.8809 75.4108 95.9137L75.5745 95.8929C75.5706 95.8626 75.5675 95.8318 75.5647 95.8031L75.4005 95.8197ZM75.4004 95.8189L75.4005 95.8197L75.5647 95.8032L75.5646 95.8024L75.4004 95.8189ZM75.3925 95.7476C75.395 95.7657 75.3974 95.789 75.4004 95.8189L75.5646 95.8024C75.5617 95.7735 75.559 95.7468 75.556 95.7251L75.3925 95.7476ZM75.391 95.7363L75.3925 95.7476L75.556 95.7251L75.5544 95.7138L75.391 95.7363ZM75.4735 95.6426H75.4727V95.8076H75.4735V95.6426ZM75.3904 95.6626C75.3907 95.6848 75.391 95.7057 75.391 95.7251H75.556C75.556 95.7044 75.5557 95.6824 75.5554 95.6604L75.3904 95.6626ZM75.3907 95.5261C75.3892 95.5715 75.3898 95.6195 75.3904 95.6626L75.5554 95.6604C75.5548 95.6166 75.5542 95.5725 75.5556 95.5316L75.3907 95.5261ZM75.4228 95.3093C75.4 95.3834 75.3929 95.459 75.3907 95.5261L75.5556 95.5316C75.5576 95.4709 75.5638 95.4119 75.5805 95.3579L75.4228 95.3093ZM75.4291 95.2554C75.4251 95.2775 75.4219 95.3008 75.4195 95.3258L75.5838 95.3415C75.5858 95.3205 75.5883 95.3019 75.5914 95.285L75.4291 95.2554ZM75.572 95.3261L75.5785 95.3166L75.442 95.2238L75.4355 95.2334L75.572 95.3261ZM75.5196 95.3637L75.5396 95.3541L75.468 95.2054L75.448 95.2151L75.5196 95.3637ZM75.3973 95.4335C75.4366 95.4083 75.4732 95.386 75.5196 95.3637L75.448 95.2151C75.393 95.2416 75.35 95.2678 75.3082 95.2946L75.3973 95.4335ZM75.3725 95.4495C75.381 95.4439 75.3892 95.4386 75.3973 95.4335L75.3082 95.2946C75.2998 95.2999 75.2913 95.3055 75.2828 95.311L75.3725 95.4495ZM75.2577 95.5204C75.3017 95.4953 75.3395 95.4708 75.3725 95.4495L75.2828 95.311C75.2496 95.3325 75.2154 95.3546 75.176 95.3771L75.2577 95.5204ZM75.2531 95.523L75.2577 95.5204L75.176 95.3771L75.1714 95.3797L75.2531 95.523ZM75.1381 95.4874L75.1382 95.4876L75.2864 95.4151L75.2863 95.4149L75.1381 95.4874ZM75.2286 95.535C75.2354 95.5317 75.242 95.5284 75.2484 95.5253L75.176 95.3771C75.1693 95.3803 75.1625 95.3837 75.1557 95.387L75.2286 95.535ZM74.9134 95.6464C75.0463 95.6253 75.1502 95.5737 75.2286 95.535L75.1557 95.387C75.0767 95.4259 74.993 95.4667 74.8875 95.4835L74.9134 95.6464ZM74.7102 95.6751C74.7748 95.6768 74.8592 95.6717 74.9323 95.641L74.8686 95.4889C74.8274 95.5061 74.7706 95.5117 74.7146 95.5102L74.7102 95.6751ZM74.5152 95.6469C74.5722 95.6631 74.6426 95.6733 74.7102 95.6751L74.7146 95.5102C74.6589 95.5087 74.6025 95.5002 74.5604 95.4882L74.5152 95.6469ZM74.1743 95.6205C74.2817 95.6354 74.395 95.6492 74.5373 95.65L74.5382 95.485C74.4068 95.4843 74.3019 95.4716 74.197 95.4571L74.1743 95.6205ZM74.1596 95.6184L74.1743 95.6205L74.197 95.4571L74.1823 95.455L74.1596 95.6184ZM74.1187 95.6023L74.1318 95.6093L74.2101 95.4641L74.197 95.4571L74.1187 95.6023ZM73.9216 95.4759C73.9737 95.5138 74.0283 95.5536 74.1187 95.6023L74.197 95.4571C74.1167 95.4137 74.0693 95.3793 74.0187 95.3425L73.9216 95.4759ZM73.859 95.4314C73.881 95.4463 73.9008 95.4607 73.9216 95.4759L74.0187 95.3425C73.9981 95.3275 73.9763 95.3116 73.952 95.2951L73.859 95.4314ZM73.8391 95.4178L73.859 95.4314L73.952 95.2951L73.9321 95.2815L73.8391 95.4178ZM73.8003 95.3599L73.8097 95.3821L73.9615 95.3172L73.952 95.2951L73.8003 95.3599ZM73.7674 95.2873C73.7796 95.3136 73.7906 95.3373 73.8003 95.3599L73.952 95.2951C73.9411 95.2697 73.929 95.2436 73.9171 95.2179L73.7674 95.2873ZM73.6558 94.9821C73.6824 95.1047 73.7295 95.2057 73.7674 95.2873L73.9171 95.2179C73.8788 95.1353 73.8393 95.0496 73.817 94.9471L73.6558 94.9821ZM73.6539 94.9734L73.6558 94.9821L73.817 94.9471L73.8151 94.9384L73.6539 94.9734ZM73.652 94.9471V94.9559H73.817V94.9471H73.652ZM73.652 94.9213C73.652 94.93 73.652 94.9385 73.652 94.9471H73.817C73.817 94.9384 73.817 94.9297 73.817 94.9211L73.652 94.9213ZM73.6839 94.5339C73.6512 94.665 73.6518 94.8036 73.652 94.9213L73.817 94.9211C73.8168 94.7996 73.8171 94.6818 73.844 94.5739L73.6839 94.5339ZM73.7414 94.3515C73.7189 94.4013 73.6944 94.4619 73.6824 94.5417L73.8456 94.5662C73.8543 94.5081 73.8719 94.4634 73.8917 94.4196L73.7414 94.3515ZM73.7556 94.3207C73.7511 94.3303 73.7464 94.3406 73.7414 94.3515L73.8917 94.4196C73.8963 94.4095 73.9008 94.3999 73.9052 94.3902L73.7556 94.3207ZM73.7945 94.2258C73.7841 94.259 73.772 94.2853 73.7556 94.3207L73.9052 94.3902C73.9214 94.3554 73.938 94.3199 73.952 94.2751L73.7945 94.2258ZM73.8042 94.1948L73.7945 94.2258L73.952 94.2751L73.9617 94.244L73.8042 94.1948ZM73.8704 94.1316L73.8421 94.1477L73.9237 94.2911L73.952 94.2751L73.8704 94.1316ZM73.9633 94.0731C73.924 94.0986 73.8908 94.12 73.8704 94.1316L73.952 94.2751C73.9776 94.2605 74.0158 94.2357 74.053 94.2115L73.9633 94.0731ZM73.98 94.0623C73.9744 94.0659 73.9688 94.0695 73.9633 94.0731L74.053 94.2115C74.0585 94.208 74.0641 94.2044 74.0696 94.2008L73.98 94.0623ZM74.0429 94.0222C74.0236 94.0342 74.0014 94.0484 73.98 94.0623L74.0696 94.2008C74.091 94.1869 74.1118 94.1736 74.1293 94.1628L74.0429 94.0222Z"
              fill="#C8242B"
            />
            <Path
              id="Stroke 327"
              d="M78.1889 96.5572V96.5972C78.1889 96.4922 78.1919 96.5452 78.1449 96.7522C78.0629 96.8452 77.8699 96.8702 77.7079 96.8302C77.5669 96.7282 77.5709 96.6472 77.3149 96.5972C77.0669 96.6132 76.9729 96.6772 76.8339 96.7522C76.6689 96.8252 76.5929 96.8632 76.4839 97.0252C76.4299 97.1572 76.3989 97.2482 76.5719 97.2982C76.7079 97.3852 76.8709 97.4322 77.0529 97.4552C77.2539 97.4552 77.3999 97.4322 77.4899 97.5322C77.6279 97.6602 77.6209 97.7382 77.6209 97.9602C77.6669 98.0302 77.6769 98.2352 77.7079 98.3122C77.8299 98.3632 77.9009 98.3902 78.1019 98.3902C78.1489 98.2702 78.2009 98.0522 78.2329 97.9232C78.2679 97.7822 78.2779 97.5872 78.3639 97.4922C78.4459 97.3872 78.5499 97.2922 78.6699 97.2202C78.7239 97.1532 78.8259 97.0972 78.9329 97.0652C78.7609 97.1432 78.7369 97.2282 78.7139 97.4152C78.8649 97.4822 78.9049 97.5302 79.1509 97.5322C79.3929 97.5152 79.4519 97.4602 79.5449 97.3372C79.5619 97.5322 79.6319 97.5972 79.6759 97.7682C79.7659 97.8852 79.8039 98.0052 79.8949 98.1552C79.8559 98.3452 79.7729 98.3532 79.7629 98.5852C79.7059 98.7382 79.7129 98.8832 79.5889 98.9752C79.5329 99.0352 79.4919 99.0482 79.3699 99.0522C79.6229 99.0522 79.7699 99.0282 79.9379 98.9352C80.0679 98.8652 80.1659 98.7752 80.2879 98.7022C80.4429 98.6032 80.6339 98.5102 80.8129 98.4682C81.0149 98.4682 81.1599 98.4472 81.2499 98.5452C81.3739 98.6252 81.4569 98.7602 81.5119 98.9352C81.5529 99.1372 81.5679 99.2722 81.4689 99.4032C81.3949 99.5552 81.3779 99.6132 81.4689 99.7922C81.5699 99.9202 81.7219 99.9352 81.9499 99.9882C82.1159 99.9802 82.2759 99.9472 82.3869 99.9102"
              stroke="#C8242B"
              strokeWidth={0.165}
            />
            <Path
              id="Fill 328"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.6462 76.1651C49.3092 66.9501 45.7672 59.1101 46.7412 58.6611C47.7142 58.2141 52.8342 65.3281 58.1712 74.5411L54.6462 76.1651Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 329"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.6462 76.1651C49.3092 66.9501 45.7672 59.1101 46.7412 58.6611C47.7142 58.2141 52.8342 65.3281 58.1712 74.5411L54.6462 76.1651Z"
              stroke="#C8242B"
              strokeWidth={0.168}
            />
            <Path
              id="Fill 330"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.9994 76.0021C49.8524 67.1131 46.3044 59.6091 47.0814 59.2511C47.8594 58.8931 52.6694 65.8151 57.8194 74.7031"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 331"
              d="M54.9994 76.0021C49.8524 67.1131 46.3044 59.6091 47.0814 59.2511C47.8594 58.8931 52.6694 65.8151 57.8194 74.7031"
              stroke="#C8242B"
              strokeWidth={0.147}
            />
            <Path
              id="Fill 332"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M55.8844 71.365C56.5114 72.405 57.1744 73.592 57.8194 74.703L54.9994 76.002C54.3564 74.89 53.6544 73.72 53.0664 72.664L55.8844 71.365Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 333"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M55.8844 71.365C56.5114 72.405 57.1744 73.592 57.8194 74.703L54.9994 76.002C54.3564 74.89 53.6544 73.72 53.0664 72.664L55.8844 71.365Z"
              stroke="#C8242B"
              strokeWidth={0.167}
            />
            <Path
              id="Fill 334"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M55.6463 71.7241C56.2713 72.7631 56.7092 73.5581 57.3523 74.6691L55.2392 75.6431C54.5942 74.5321 54.1192 73.7541 53.5312 72.6971L55.6463 71.7241Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 335"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M55.6463 71.7241C56.2713 72.7631 56.7093 73.5581 57.3523 74.6691L55.2392 75.6431C54.5942 74.5321 54.1192 73.7541 53.5312 72.6971L55.6463 71.7241Z"
              stroke="#C8242B"
              strokeWidth={0.167}
            />
            <Path
              id="Fill 336"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.1133 72.9271L55.5223 72.2781L56.7733 74.4381L55.3643 75.0871L54.1133 72.9271Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 337"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.1133 72.9271L55.5223 72.2781L56.7733 74.4381L55.3643 75.0871L54.1133 72.9271Z"
              stroke="#C8242B"
              strokeWidth={0.167}
            />
            <Path
              id="Fill 338"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.1113 72.928L56.7713 74.439L54.1113 72.928Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 339"
              d="M54.1113 72.928L56.7713 74.439"
              stroke="#C8242B"
              strokeWidth={0.167}
            />
            <Path
              id="Fill 340"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M55.3643 75.0871L55.5213 72.2791L55.3643 75.0871Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 341"
              d="M55.3643 75.0871L55.5213 72.2791"
              stroke="#C8242B"
              strokeWidth={0.167}
            />
            <Path
              id="Fill 342"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.7412 61.932L49.1512 61.282L47.7412 61.932Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 343"
              d="M47.7412 61.932L49.1512 61.282"
              stroke="#C8242B"
              strokeWidth={0.167}
            />
            <Path
              id="Fill 344"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.9191 60.2171C48.1391 60.2721 48.2771 60.4731 48.2271 60.6661C48.1781 60.8581 47.9591 60.9701 47.7401 60.9141C47.5201 60.8591 47.3821 60.6581 47.4321 60.4651C47.4811 60.2721 47.7001 60.1611 47.9191 60.2171Z"
              fill="#C8242B"
            />
            <Path
              id="Stroke 345"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.9191 60.2171C48.1391 60.2721 48.2771 60.4731 48.2271 60.6661C48.1781 60.8581 47.9591 60.9701 47.7401 60.9141C47.5201 60.8591 47.3821 60.6581 47.4321 60.4651C47.4811 60.2721 47.7001 60.1611 47.9191 60.2171Z"
              stroke="#C8242B"
              strokeWidth={0.5}
            />
            <Path
              id="Fill 346"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8141 71.24C58.8141 78.975 58.8591 81.89 58.2891 82.29C57.7491 82.718 42.7021 82.29 42.7021 84.5C42.7021 86.71 55.0961 88.92 58.8141 88.92C63.7711 88.92 66.2511 86.71 66.2511 82.29V71.24H58.8141Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 347"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8141 71.24C58.8141 78.975 58.8591 81.89 58.2891 82.29C57.7491 82.718 42.7021 82.29 42.7021 84.5C42.7021 86.71 55.0961 88.92 58.8141 88.92C63.7711 88.92 66.2511 86.71 66.2511 82.29V71.24H58.8141Z"
              stroke="#C8242B"
              strokeWidth={0.153}
            />
            <Path
              id="Fill 348"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 73.449V74.554C61.2945 74.923 63.7715 74.923 66.2515 74.554V73.449C63.7715 73.818 61.2945 73.818 58.8145 73.449Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 349"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 73.449V74.554C61.2945 74.923 63.7715 74.923 66.2515 74.554V73.449C63.7715 73.818 61.2945 73.818 58.8145 73.449Z"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 350"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 71.24V72.344C61.2945 72.713 63.7715 72.713 66.2515 72.344V71.24C63.7715 71.608 61.2945 71.608 58.8145 71.24Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 351"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 71.24V72.344C61.2945 72.713 63.7715 72.713 66.2515 72.344V71.24C63.7715 71.608 61.2945 71.608 58.8145 71.24Z"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 352"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 72.344V73.449C61.2945 73.818 63.7715 73.818 66.2515 73.449V72.344C63.7715 72.713 61.2945 72.713 58.8145 72.344Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 353"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 72.344V73.449C61.2945 73.818 63.7715 73.818 66.2515 73.449V72.344C63.7715 72.713 61.2945 72.713 58.8145 72.344Z"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 354"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 74.554V75.66C61.2945 76.028 63.7715 76.028 66.2515 75.66V74.554C63.7715 74.923 61.2945 74.923 58.8145 74.554Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 355"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 74.554V75.66C61.2945 76.028 63.7715 76.028 66.2515 75.66V74.554C63.7715 74.923 61.2945 74.923 58.8145 74.554Z"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 356"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.1525 72.7341C59.3395 72.7341 59.4905 72.8411 59.4905 72.9731C59.4905 73.1041 59.3395 73.2111 59.1525 73.2111C58.9655 73.2111 58.8145 73.1041 58.8145 72.9731C58.8145 72.8411 58.9655 72.7341 59.1525 72.7341Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 357"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.1525 72.7341C59.3395 72.7341 59.4905 72.8411 59.4905 72.9731C59.4905 73.1041 59.3395 73.2111 59.1525 73.2111C58.9655 73.2111 58.8145 73.1041 58.8145 72.9731C58.8145 72.8411 58.9655 72.7341 59.1525 72.7341Z"
              stroke="#C8242B"
              strokeWidth={2.231}
            />
            <Path
              id="Fill 358"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.505 72.853C60.691 72.853 60.843 72.96 60.843 73.092C60.843 73.224 60.691 73.33 60.505 73.33C60.318 73.33 60.167 73.224 60.167 73.092C60.167 72.96 60.318 72.853 60.505 72.853Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 359"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.505 72.853C60.691 72.853 60.843 72.96 60.843 73.092C60.843 73.224 60.691 73.33 60.505 73.33C60.318 73.33 60.167 73.224 60.167 73.092C60.167 72.96 60.318 72.853 60.505 72.853Z"
              stroke="#C8242B"
              strokeWidth={2.231}
            />
            <Path
              id="Fill 360"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.8566 72.9731C62.0436 72.9731 62.1946 73.0791 62.1946 73.2111C62.1946 73.3431 62.0436 73.4491 61.8566 73.4491C61.6696 73.4491 61.5186 73.3431 61.5186 73.2111C61.5186 73.0791 61.6696 72.9731 61.8566 72.9731Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 361"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.8566 72.9731C62.0436 72.9731 62.1946 73.0791 62.1946 73.2111C62.1946 73.3431 62.0436 73.4491 61.8566 73.4491C61.6696 73.4491 61.5186 73.3431 61.5186 73.2111C61.5186 73.0791 61.6696 72.9731 61.8566 72.9731Z"
              stroke="#C8242B"
              strokeWidth={2.231}
            />
            <Path
              id="Fill 362"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.2081 72.9731C63.3951 72.9731 63.5461 73.0791 63.5461 73.2111C63.5461 73.3431 63.3951 73.4491 63.2081 73.4491C63.0211 73.4491 62.8701 73.3431 62.8701 73.2111C62.8701 73.0791 63.0211 72.9731 63.2081 72.9731Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 363"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.2081 72.9731C63.3951 72.9731 63.5461 73.0791 63.5461 73.2111C63.5461 73.3431 63.3951 73.4491 63.2081 73.4491C63.0211 73.4491 62.8701 73.3431 62.8701 73.2111C62.8701 73.0791 63.0211 72.9731 63.2081 72.9731Z"
              stroke="#C8242B"
              strokeWidth={2.231}
            />
            <Path
              id="Fill 364"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64.5607 72.853C64.7477 72.853 64.8987 72.96 64.8987 73.092C64.8987 73.224 64.7477 73.33 64.5607 73.33C64.3737 73.33 64.2227 73.224 64.2227 73.092C64.2227 72.96 64.3737 72.853 64.5607 72.853Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 365"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64.5607 72.853C64.7477 72.853 64.8987 72.96 64.8987 73.092C64.8987 73.224 64.7477 73.33 64.5607 73.33C64.3737 73.33 64.2227 73.224 64.2227 73.092C64.2227 72.96 64.3737 72.853 64.5607 72.853Z"
              stroke="#C8242B"
              strokeWidth={2.231}
            />
            <Path
              id="Fill 366"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.9132 72.7341C66.0992 72.7341 66.2502 72.8411 66.2502 72.9731C66.2502 73.1041 66.0992 73.2111 65.9132 73.2111C65.7262 73.2111 65.5752 73.1041 65.5752 72.9731C65.5752 72.8411 65.7262 72.7341 65.9132 72.7341Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 367"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.9132 72.7341C66.0992 72.7341 66.2502 72.8411 66.2502 72.9731C66.2502 73.1041 66.0992 73.2111 65.9132 73.2111C65.7262 73.2111 65.5752 73.1041 65.5752 72.9731C65.5752 72.8411 65.7262 72.7341 65.9132 72.7341Z"
              stroke="#C8242B"
              strokeWidth={2.231}
            />
            <Path
              id="Fill 368"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 76.7651L66.2515 82.7321L58.8145 76.7651Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 369"
              d="M58.8145 76.7651L66.2515 82.7321"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 370"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.5576 76.7651L66.2516 82.0681L59.5576 76.7651Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 371"
              d="M59.5576 76.7651L66.2516 82.0681"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 372"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.5498 76.9851L66.2518 81.4051L60.5498 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 373"
              d="M60.5498 76.9851L66.2518 81.4051"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 374"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.2949 76.9851L66.2519 80.7421L61.2949 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 375"
              d="M61.2949 76.9851L66.2519 80.7421"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 376"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.0371 76.9851L66.2511 80.0801L62.0371 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 377"
              d="M62.0371 76.9851L66.2511 80.0801"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 378"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.7793 76.9851L66.2513 79.4171L62.7793 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 379"
              d="M62.7793 76.9851L66.2513 79.4171"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 380"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.5244 76.9851L66.2514 78.7521L63.5244 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 381"
              d="M63.5244 76.9851L66.2514 78.7521"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 382"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64.2676 76.9851L66.2516 78.3121L64.2676 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 383"
              d="M64.2676 76.9851L66.2516 78.3121"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 384"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.0117 76.9851L66.2517 77.8701L65.0117 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 385"
              d="M65.0117 76.9851L66.2517 77.8701"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 386"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.7549 76.9851L66.2519 77.4271L65.7549 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 387"
              d="M65.7549 76.9851L66.2519 77.4271"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 388"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 77.427L66.2515 83.395L58.8145 77.427Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 389"
              d="M58.8145 77.427L66.2515 83.395"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 390"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.2513 76.7651L58.0713 83.3951L66.2513 76.7651Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 391"
              d="M66.2513 76.7651L58.0713 83.3951"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 392"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.5063 76.7651L58.3193 82.5101L65.5063 76.7651Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 393"
              d="M65.5063 76.7651L58.3193 82.5101"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 394"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64.5175 76.9851L58.8145 81.4051L64.5175 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 395"
              d="M64.5175 76.9851L58.8145 81.4051"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 396"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.7715 76.9851L58.8145 80.7421L63.7715 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 397"
              d="M63.7715 76.9851L58.8145 80.7421"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 398"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.0295 76.9851L58.8145 80.0801L63.0295 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 399"
              d="M63.0295 76.9851L58.8145 80.0801"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 400"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.2845 76.9851L58.8145 79.4171L62.2845 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 401"
              d="M62.2845 76.9851L58.8145 79.4171"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 402"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.5415 76.9851L58.8145 78.7521L61.5415 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 403"
              d="M61.5415 76.9851L58.8145 78.7521"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 404"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.7965 76.9851L58.8145 78.3121L60.7965 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 405"
              d="M60.7965 76.9851L58.8145 78.3121"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 406"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.0545 76.9851L58.8145 77.8701L60.0545 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 407"
              d="M60.0545 76.9851L58.8145 77.8701"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 408"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.3095 76.9851L58.8145 77.4271L59.3095 76.9851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 409"
              d="M59.3095 76.9851L58.8145 77.4271"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 410"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.2513 77.427L58.0713 84.057L66.2513 77.427Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 411"
              d="M66.2513 77.427L58.0713 84.057"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 412"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.2513 78.0901L58.0713 84.7201L66.2513 78.0901Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 413"
              d="M66.2513 78.0901L58.0713 84.7201"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 414"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.2513 78.752L58.0713 85.385L66.2513 78.752Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 415"
              d="M66.2513 78.752L58.0713 85.385"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 416"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.2513 79.417L58.0713 86.048L66.2513 79.417Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 417"
              d="M66.2513 79.417L58.0713 86.048"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 418"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.2513 80.0801L58.0713 86.7101L66.2513 80.0801Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 419"
              d="M66.2513 80.0801L58.0713 86.7101"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 420"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.2513 80.7419L58.0713 87.3729L66.2513 80.7419Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 421"
              d="M66.2513 80.7419L58.0713 87.3729"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 422"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.2513 81.405L58.0713 88.035L66.2513 81.405Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 423"
              d="M66.2513 81.405L58.0713 88.035"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 424"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.2513 82.0701L58.0713 88.7001L66.2513 82.0701Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 425"
              d="M66.2513 82.0701L58.0713 88.7001"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 426"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.2514 82.7322L58.5664 88.9202L66.2514 82.7322Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 427"
              d="M66.2514 82.7322L58.5664 88.9202"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 428"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.2516 83.395L59.3096 88.92L66.2516 83.395Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 429"
              d="M66.2516 83.395L59.3096 88.92"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 430"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.0018 84.28L60.5498 88.7L66.0018 84.28Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 431"
              d="M66.0018 84.28L60.5498 88.7"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 432"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.7549 85.1631L61.2949 88.7001L65.7549 85.1631Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 433"
              d="M65.7549 85.1631L61.2949 88.7001"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 434"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.2593 86.2681L63.0293 88.0351L65.2593 86.2681Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 435"
              d="M65.2593 86.2681L63.0293 88.0351"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 436"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 78.0901L66.0015 83.8371L58.8145 78.0901Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 437"
              d="M58.8145 78.0901L66.0015 83.8371"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 438"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 78.752L66.0015 84.5L58.8145 78.752Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 439"
              d="M58.8145 78.752L66.0015 84.5"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 440"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 79.417L65.7545 84.943L58.8145 79.417Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 441"
              d="M58.8145 79.417L65.7545 84.943"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 442"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 80.0801L65.7545 85.6051L58.8145 80.0801Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 443"
              d="M58.8145 80.0801L65.7545 85.6051"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 444"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 80.7419L65.5065 86.0479L58.8145 80.7419Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 445"
              d="M58.8145 80.7419L65.5065 86.0479"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 446"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.5664 81.1851L65.2594 86.4901L58.5664 81.1851Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 447"
              d="M58.5664 81.1851L65.2594 86.4901"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 448"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.5664 81.8472L64.7644 86.7102L58.5664 81.8472Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 449"
              d="M58.5664 81.8472L64.7644 86.7102"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 450"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.3193 82.29L64.5173 87.153L58.3193 82.29Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 451"
              d="M58.3193 82.29L64.5173 87.153"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 452"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.0713 82.7322L64.0193 87.3732L58.0713 82.7322Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 453"
              d="M58.0713 82.7322L64.0193 87.3732"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 454"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.0713 83.395L63.7713 87.815L58.0713 83.395Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 455"
              d="M58.0713 83.395L63.7713 87.815"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 456"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.0713 84.0571L63.0293 88.0351L58.0713 84.0571Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 457"
              d="M58.0713 84.0571L63.0293 88.0351"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 458"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 75.6602V76.7652C61.2945 77.1332 63.7715 77.1332 66.2515 76.7652V75.6602C63.7715 76.0282 61.2945 76.0282 58.8145 75.6602Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 459"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.8145 75.6602V76.7652C61.2945 77.1332 63.7715 77.1332 66.2515 76.7652V75.6602C63.7715 76.0282 61.2945 76.0282 58.8145 75.6602Z"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 460"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.0713 84.72L62.5313 88.258L58.0713 84.72Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 461"
              d="M58.0713 84.72L62.5313 88.258"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 462"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.0713 85.385L62.0373 88.478L58.0713 85.385Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 463"
              d="M58.0713 85.385L62.0373 88.478"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 464"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.0713 86.0481L61.5413 88.7001L58.0713 86.0481Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 465"
              d="M58.0713 86.0481L61.5413 88.7001"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 466"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.0713 86.71L60.5493 88.7L58.0713 86.71Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 467"
              d="M58.0713 86.71L60.5493 88.7"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 468"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.0713 87.373L60.0543 88.92L58.0713 87.373Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 469"
              d="M58.0713 87.373L60.0543 88.92"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 470"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.0713 88.0352L59.3093 88.9202L58.0713 88.0352Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 471"
              d="M58.0713 88.0352L59.3093 88.9202"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 472"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.1525 76.05C59.3395 76.05 59.4905 76.156 59.4905 76.288C59.4905 76.419 59.3395 76.526 59.1525 76.526C58.9655 76.526 58.8145 76.419 58.8145 76.288C58.8145 76.156 58.9655 76.05 59.1525 76.05Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 473"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.1525 76.05C59.3395 76.05 59.4905 76.156 59.4905 76.288C59.4905 76.419 59.3395 76.526 59.1525 76.526C58.9655 76.526 58.8145 76.419 58.8145 76.288C58.8145 76.156 58.9655 76.05 59.1525 76.05Z"
              stroke="#C8242B"
              strokeWidth={2.231}
            />
            <Path
              id="Fill 474"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.505 76.1689C60.691 76.1689 60.843 76.2749 60.843 76.4069C60.843 76.5389 60.691 76.6449 60.505 76.6449C60.318 76.6449 60.167 76.5389 60.167 76.4069C60.167 76.2749 60.318 76.1689 60.505 76.1689Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 475"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.505 76.1689C60.691 76.1689 60.843 76.2749 60.843 76.4069C60.843 76.5389 60.691 76.6449 60.505 76.6449C60.318 76.6449 60.167 76.5389 60.167 76.4069C60.167 76.2749 60.318 76.1689 60.505 76.1689Z"
              stroke="#C8242B"
              strokeWidth={2.231}
            />
            <Path
              id="Fill 476"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.8566 76.2881C62.0436 76.2881 62.1946 76.3951 62.1946 76.5261C62.1946 76.6581 62.0436 76.7651 61.8566 76.7651C61.6696 76.7651 61.5186 76.6581 61.5186 76.5261C61.5186 76.3951 61.6696 76.2881 61.8566 76.2881Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 477"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.8566 76.2881C62.0436 76.2881 62.1946 76.3951 62.1946 76.5261C62.1946 76.6581 62.0436 76.7651 61.8566 76.7651C61.6696 76.7651 61.5186 76.6581 61.5186 76.5261C61.5186 76.3951 61.6696 76.2881 61.8566 76.2881Z"
              stroke="#C8242B"
              strokeWidth={2.231}
            />
            <Path
              id="Fill 478"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.2081 76.2881C63.3951 76.2881 63.5461 76.3951 63.5461 76.5261C63.5461 76.6581 63.3951 76.7651 63.2081 76.7651C63.0211 76.7651 62.8701 76.6581 62.8701 76.5261C62.8701 76.3951 63.0211 76.2881 63.2081 76.2881Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 479"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.2081 76.2881C63.3951 76.2881 63.5461 76.3951 63.5461 76.5261C63.5461 76.6581 63.3951 76.7651 63.2081 76.7651C63.0211 76.7651 62.8701 76.6581 62.8701 76.5261C62.8701 76.3951 63.0211 76.2881 63.2081 76.2881Z"
              stroke="#C8242B"
              strokeWidth={2.231}
            />
            <Path
              id="Fill 480"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64.5607 76.1689C64.7477 76.1689 64.8987 76.2749 64.8987 76.4069C64.8987 76.5389 64.7477 76.6449 64.5607 76.6449C64.3737 76.6449 64.2227 76.5389 64.2227 76.4069C64.2227 76.2749 64.3737 76.1689 64.5607 76.1689Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 481"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64.5607 76.1689C64.7477 76.1689 64.8987 76.2749 64.8987 76.4069C64.8987 76.5389 64.7477 76.6449 64.5607 76.6449C64.3737 76.6449 64.2227 76.5389 64.2227 76.4069C64.2227 76.2749 64.3737 76.1689 64.5607 76.1689Z"
              stroke="#C8242B"
              strokeWidth={2.231}
            />
            <Path
              id="Fill 482"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.9132 76.05C66.0992 76.05 66.2502 76.156 66.2502 76.288C66.2502 76.419 66.0992 76.526 65.9132 76.526C65.7262 76.526 65.5752 76.419 65.5752 76.288C65.5752 76.156 65.7262 76.05 65.9132 76.05Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 483"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.9132 76.05C66.0992 76.05 66.2502 76.156 66.2502 76.288C66.2502 76.419 66.0992 76.526 65.9132 76.526C65.7262 76.526 65.5752 76.419 65.5752 76.288C65.5752 76.156 65.7262 76.05 65.9132 76.05Z"
              stroke="#C8242B"
              strokeWidth={2.231}
            />
            <Path
              id="Fill 484"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.1553 87.153L57.0793 82.51L48.1553 87.153Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 485"
              d="M48.1553 87.153L57.0793 82.51"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 486"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.6592 86.93L56.0862 82.51L47.6592 86.93Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 487"
              d="M47.6592 86.93L56.0862 82.51"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 488"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.4121 86.49L55.0961 82.51L47.4121 86.49Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 489"
              d="M47.4121 86.49L55.0961 82.51"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 490"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M47.1641 86.048L53.8561 82.51L47.1641 86.048Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 491"
              d="M47.1641 86.048L53.8561 82.51"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 492"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.6689 85.605L52.8649 82.51L46.6689 85.605Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 493"
              d="M46.6689 85.605L52.8649 82.51"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 494"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.917 84.9432L51.13 82.7322L46.917 84.9432Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 495"
              d="M46.917 84.9432L51.13 82.7322"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 496"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.6689 84.5002L49.8919 82.7322L46.6689 84.5002Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 497"
              d="M46.6689 84.5002L49.8919 82.7322"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 498"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.6689 83.8372L48.8999 82.7322L46.6689 83.8372Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 499"
              d="M46.6689 83.8372L48.8999 82.7322"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 500"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.8994 87.3731L57.3264 82.9521L48.8994 87.3731Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 501"
              d="M48.8994 87.3731L57.3264 82.9521"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 502"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M49.6436 87.595L57.5746 83.395L49.6436 87.595Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 503"
              d="M49.6436 87.595L57.5746 83.395"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 504"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50.3867 87.8152L57.8217 83.8372L50.3867 87.8152Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 505"
              d="M50.3867 87.8152L57.8217 83.8372"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 506"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M51.1299 88.035L57.3269 84.72L51.1299 88.035Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 507"
              d="M51.1299 88.035L57.3269 84.72"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 508"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M52.1211 88.0351L57.5741 85.1631L52.1211 88.0351Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 509"
              d="M52.1211 88.0351L57.5741 85.1631"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 510"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M52.8643 88.258L57.5743 85.825L52.8643 88.258Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 511"
              d="M52.8643 88.258L57.5743 85.825"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 512"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M53.6094 88.478L57.3264 86.49L53.6094 88.478Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 513"
              d="M53.6094 88.478L57.3264 86.49"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 514"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.5996 88.4782L57.5746 86.9302L54.5996 88.4782Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 515"
              d="M54.5996 88.4782L57.5746 86.9302"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 516"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M55.5918 88.7L57.5748 87.595L55.5918 88.7Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 517"
              d="M55.5918 88.7L57.5748 87.595"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 518"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M56.585 88.7002L57.822 88.0352L56.585 88.7002Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 519"
              d="M56.585 88.7002L57.822 88.0352"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 520"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.3193 82.29H57.0793C56.6663 84.5 56.6663 86.71 57.0793 88.92H58.3193C57.9043 86.71 57.9043 84.5 58.3193 82.29Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 521"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.3193 82.29H57.0793C56.6663 84.5 56.6663 86.71 57.0793 88.92H58.3193C57.9043 86.71 57.9043 84.5 58.3193 82.29Z"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 522"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.6934 85.385L46.6684 83.175L43.6934 85.385Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 523"
              d="M43.6934 85.385L46.6684 83.175"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 524"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M43.6934 83.8372L46.6684 86.4902L43.6934 83.8372Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 525"
              d="M43.6934 83.8372L46.6684 86.4902"
              stroke="#C8242B"
              strokeWidth={0.132}
            />
            <Path
              id="Fill 526"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.1552 82.7322L46.6682 82.9522C46.3372 84.3532 46.3372 85.5302 46.6682 86.9302L48.1552 87.3732C47.8252 85.9722 47.8252 84.1332 48.1552 82.7322Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 527"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.1552 82.7322L46.6682 82.9522C46.3372 84.3532 46.3372 85.5302 46.6682 86.9302L48.1552 87.3732C47.8252 85.9722 47.8252 84.1332 48.1552 82.7322Z"
              stroke="#C8242B"
              strokeWidth={0.094}
            />
            <Path
              id="Fill 528"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.2415 71.681V70.567C65.1295 70.576 64.3845 69.914 64.3845 69.241L60.6715 69.25C60.6715 69.914 59.9295 70.576 58.8145 70.576V71.681H66.2415Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 529"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.2415 71.681V70.567C65.1295 70.576 64.3845 69.914 64.3845 69.241L60.6715 69.25C60.6715 69.914 59.9295 70.576 58.8145 70.576V71.681H66.2415Z"
              stroke="#C8242B"
              strokeWidth={0.162}
            />
            <Path
              id="Fill 530"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.9365 69.2501H64.1205V67.9241H60.9365V69.2501Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 531"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.9365 69.2501H64.1205V67.9241H60.9365V69.2501Z"
              stroke="#C8242B"
              strokeWidth={0.137}
            />
            <Path
              id="Fill 532"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.2012 67.9241H63.8542V66.5981H61.2012V67.9241Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 533"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.2012 67.9241H63.8542V66.5981H61.2012V67.9241Z"
              stroke="#C8242B"
              strokeWidth={0.137}
            />
            <Path
              id="Fill 534"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.2012 66.598H63.8542V65.272H61.2012V66.598Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 535"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.2012 66.598H63.8542V65.272H61.2012V66.598Z"
              stroke="#C8242B"
              strokeWidth={0.137}
            />
            <Path
              id="Fill 536"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.4668 65.2722H63.5898V63.5042H61.4668V65.2722Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 537"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.4668 65.2722H63.5898V63.5042H61.4668V65.2722Z"
              stroke="#C8242B"
              strokeWidth={0.137}
            />
            <Path
              id="Fill 538"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.377 63.504H63.682V61.957H61.377V63.504Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 539"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M61.377 63.504H63.682V61.957H61.377V63.504Z"
              stroke="#C8242B"
              strokeWidth={0.142}
            />
            <Path
              id="Fill 540"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.657 58.4211C64.354 58.4211 65.73 59.3611 65.73 60.5201C65.73 61.6801 64.354 62.6201 62.657 62.6201C60.959 62.6201 59.583 61.6801 59.583 60.5201C59.583 59.3611 60.959 58.4211 62.657 58.4211Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 541"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.657 58.4211C64.354 58.4211 65.73 59.3611 65.73 60.5201C65.73 61.6801 64.354 62.6201 62.657 62.6201C60.959 62.6201 59.583 61.6801 59.583 60.5201C59.583 59.3611 60.959 58.4211 62.657 58.4211Z"
              stroke="#C8242B"
              strokeWidth={0.5}
            />
            <Path
              id="Fill 542"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64.1945 60.4101C64.1945 60.9901 64.9615 61.9571 64.9615 61.9571C64.4045 62.3371 63.5045 62.6201 62.6565 62.6201C61.8095 62.6201 60.7515 62.4621 60.3525 61.9571C60.3525 61.9571 61.1195 60.9901 61.1195 60.4101C61.1195 59.8311 60.3525 59.0841 60.3525 59.0841C60.9065 58.7041 61.8095 58.4211 62.6565 58.4211C63.5045 58.4211 64.4045 58.7041 64.9615 59.0841C64.9615 59.0841 64.1945 59.8311 64.1945 60.4101Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 543"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64.1945 60.4101C64.1945 60.9901 64.9615 61.9571 64.9615 61.9571C64.4045 62.3371 63.5045 62.6201 62.6565 62.6201C61.8095 62.6201 60.7515 62.4621 60.3525 61.9571C60.3525 61.9571 61.1195 60.9901 61.1195 60.4101C61.1195 59.8311 60.3525 59.0841 60.3525 59.0841C60.9065 58.7041 61.8095 58.4211 62.6565 58.4211C63.5045 58.4211 64.4045 58.7041 64.9615 59.0841C64.9615 59.0841 64.1945 59.8311 64.1945 60.4101Z"
              stroke="#C8242B"
              strokeWidth={0.134}
            />
            <Path
              id="Fill 544"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.6823 60.4101C63.6823 60.9901 64.4493 62.1781 64.4493 62.1781C63.8943 62.5581 63.5043 62.6201 62.6563 62.6201C61.8093 62.6201 61.2643 62.6841 60.8643 62.1781C60.8643 62.1781 61.6313 60.9901 61.6313 60.4101C61.6313 59.8311 60.8643 58.8631 60.8643 58.8631C61.4193 58.4831 61.8093 58.4211 62.6563 58.4211C63.5043 58.4211 63.8943 58.4831 64.4493 58.8631C64.4493 58.8631 63.6823 59.8311 63.6823 60.4101Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 545"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.6823 60.4101C63.6823 60.9901 64.4493 62.1781 64.4493 62.1781C63.8943 62.5581 63.5043 62.6201 62.6563 62.6201C61.8093 62.6201 61.2643 62.6841 60.8643 62.1781C60.8643 62.1781 61.6313 60.9901 61.6313 60.4101C61.6313 59.8311 60.8643 58.8631 60.8643 58.8631C61.4193 58.4831 61.8093 58.4211 62.6563 58.4211C63.5043 58.4211 63.8943 58.4831 64.4493 58.8631C64.4493 58.8631 63.6823 59.8311 63.6823 60.4101Z"
              stroke="#C8242B"
              strokeWidth={0.134}
            />
            <Path
              id="Fill 546"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.5825 59.968C60.0075 59.968 60.3515 60.265 60.3515 60.631C60.3515 60.998 60.0075 61.294 59.5825 61.294C59.1585 61.294 58.8145 60.998 58.8145 60.631C58.8145 60.265 59.1585 59.968 59.5825 59.968Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 547"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.5825 59.968C60.0075 59.968 60.3515 60.265 60.3515 60.631C60.3515 60.998 60.0075 61.294 59.5825 61.294C59.1585 61.294 58.8145 60.998 58.8145 60.631C58.8145 60.265 59.1585 59.968 59.5825 59.968Z"
              stroke="#C8242B"
              strokeWidth={0.5}
            />
            <Path
              id="Fill 548"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.7299 59.968C66.1549 59.968 66.4989 60.265 66.4989 60.631C66.4989 60.998 66.1549 61.294 65.7299 61.294C65.3059 61.294 64.9619 60.998 64.9619 60.631C64.9619 60.265 65.3059 59.968 65.7299 59.968Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 549"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.7299 59.968C66.1549 59.968 66.4989 60.265 66.4989 60.631C66.4989 60.998 66.1549 61.294 65.7299 61.294C65.3059 61.294 64.9619 60.998 64.9619 60.631C64.9619 60.265 65.3059 59.968 65.7299 59.968Z"
              stroke="#C8242B"
              strokeWidth={0.5}
            />
            <Path
              id="Fill 550"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.6567 59.968C63.0817 59.968 63.4247 60.265 63.4247 60.631C63.4247 60.998 63.0817 61.294 62.6567 61.294C62.2317 61.294 61.8887 60.998 61.8887 60.631C61.8887 60.265 62.2317 59.968 62.6567 59.968Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 551"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.6567 59.968C63.0817 59.968 63.4247 60.265 63.4247 60.631C63.4247 60.998 63.0817 61.294 62.6567 61.294C62.2317 61.294 61.8887 60.998 61.8887 60.631C61.8887 60.265 62.2317 59.968 62.6567 59.968Z"
              stroke="#C8242B"
              strokeWidth={0.5}
            />
            <Path
              id="Fill 552"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.6567 57.7581C63.0817 57.7581 63.4247 58.0551 63.4247 58.4211C63.4247 58.7881 63.0817 59.0841 62.6567 59.0841C62.2317 59.0841 61.8887 58.7881 61.8887 58.4211C61.8887 58.0551 62.2317 57.7581 62.6567 57.7581Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 553"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.6567 57.7581C63.0817 57.7581 63.4247 58.0551 63.4247 58.4211C63.4247 58.7881 63.0817 59.0841 62.6567 59.0841C62.2317 59.0841 61.8887 58.7881 61.8887 58.4211C61.8887 58.0551 62.2317 57.7581 62.6567 57.7581Z"
              stroke="#C8242B"
              strokeWidth={0.5}
            />
            <Path
              id="Fill 554"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.4064 70.356C60.8454 70.356 61.2024 70.653 61.2024 71.019C61.2024 71.385 60.8454 71.682 60.4064 71.682C59.9664 71.682 59.6104 71.385 59.6104 71.019C59.6104 70.653 59.9664 70.356 60.4064 70.356Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 555"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.4064 70.356C60.8454 70.356 61.2024 70.653 61.2024 71.019C61.2024 71.385 60.8454 71.682 60.4064 71.682C59.9664 71.682 59.6104 71.385 59.6104 71.019C59.6104 70.653 59.9664 70.356 60.4064 70.356Z"
              stroke="#C8242B"
              strokeWidth={0.5}
            />
            <Path
              id="Fill 556"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64.6505 70.356C65.0905 70.356 65.4465 70.653 65.4465 71.019C65.4465 71.385 65.0905 71.682 64.6505 71.682C64.2105 71.682 63.8545 71.385 63.8545 71.019C63.8545 70.653 64.2105 70.356 64.6505 70.356Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 557"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M64.6505 70.356C65.0905 70.356 65.4465 70.653 65.4465 71.019C65.4465 71.385 65.0905 71.682 64.6505 71.682C64.2105 71.682 63.8545 71.385 63.8545 71.019C63.8545 70.653 64.2105 70.356 64.6505 70.356Z"
              stroke="#C8242B"
              strokeWidth={0.5}
            />
            <Path
              id="Fill 558"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.6719 69.25H64.3849L62.5299 71.24L60.6719 69.25Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 559"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60.6719 69.25H64.3849L62.5299 71.24L60.6719 69.25Z"
              stroke="#C8242B"
              strokeWidth={0.137}
            />
            <Path
              id="Fill 560"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.5288 69.9141C63.1148 69.9141 63.5898 70.3101 63.5898 70.7981C63.5898 71.2861 63.1148 71.6821 62.5288 71.6821C61.9428 71.6821 61.4678 71.2861 61.4678 70.7981C61.4678 70.3101 61.9428 69.9141 62.5288 69.9141Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 561"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M62.5288 69.9141C63.1148 69.9141 63.5898 70.3101 63.5898 70.7981C63.5898 71.2861 63.1148 71.6821 62.5288 71.6821C61.9428 71.6821 61.4678 71.2861 61.4678 70.7981C61.4678 70.3101 61.9428 69.9141 62.5288 69.9141Z"
              stroke="#C8242B"
              strokeWidth={0.5}
            />
            <Path
              id="Fill 562"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.7514 77.4302H63.8334C64.0044 77.4302 64.1434 77.5352 64.1434 77.6652V78.5212C64.1434 78.6512 64.0044 78.7562 63.8334 78.7562H58.7514C58.5804 78.7562 58.4414 78.6512 58.4414 78.5212V77.6652C58.4414 77.5352 58.5804 77.4302 58.7514 77.4302Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 563"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M58.7514 77.4302H63.8334C64.0044 77.4302 64.1434 77.5352 64.1434 77.6652V78.5212C64.1434 78.6512 64.0044 78.7562 63.8334 78.7562H58.7514C58.5804 78.7562 58.4414 78.6512 58.4414 78.5212V77.6652C58.4414 77.5352 58.5804 77.4302 58.7514 77.4302Z"
              stroke="#C8242B"
              strokeWidth={0.165}
            />
            <Path
              id="Fill 564"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M65.8796 76.768C65.4666 76.768 65.1346 77.18 65.1346 77.693V78.275C65.1346 78.788 65.4666 79.197 65.8796 79.197C66.2916 79.197 66.6226 78.788 66.6226 78.275V77.693C66.6226 77.18 66.2916 76.768 65.8796 76.768ZM65.8796 76.325C65.1916 76.325 64.6396 76.84 64.6396 77.48V78.485C64.6396 79.125 65.1916 79.64 65.8796 79.64C66.5666 79.64 67.1196 79.125 67.1196 78.485V77.48C67.1196 76.84 66.5666 76.325 65.8796 76.325Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 565"
              d="M65.8791 76.6032C65.3431 76.6032 64.9691 77.1246 64.9691 77.6932H65.1341C65.1341 77.1797 65.4665 76.7682 65.8791 76.7682V76.6032ZM66.7871 77.6932C66.7871 77.1251 66.4146 76.6032 65.8791 76.6032V76.7682C66.2908 76.7682 66.6221 77.1797 66.6221 77.6932H66.7871ZM66.7871 78.2752V77.6932H66.6221V78.2752H66.7871ZM65.8791 79.3622C66.4139 79.3622 66.7871 78.844 66.7871 78.2752H66.6221C66.6221 78.7886 66.2908 79.1972 65.8791 79.1972V79.3622ZM64.9691 78.2752C64.9691 78.8445 65.3437 79.3622 65.8791 79.3622V79.1972C65.4665 79.1972 65.1341 78.7886 65.1341 78.2752H64.9691ZM64.9691 77.6932V78.2752H65.1341V77.6932H64.9691ZM65.2991 77.6932C65.2991 77.2368 65.5883 76.9332 65.8791 76.9332V76.7682C65.4666 76.7682 65.1341 77.1796 65.1341 77.6932H65.2991ZM65.2991 78.2752V77.6932H65.1341V78.2752H65.2991ZM65.8791 79.0322C65.5877 79.0322 65.2991 78.7308 65.2991 78.2752H65.1341C65.1341 78.7887 65.4666 79.1972 65.8791 79.1972V79.0322ZM66.4571 78.2752C66.4571 78.7313 66.1692 79.0322 65.8791 79.0322V79.1972C66.2907 79.1972 66.6221 78.7887 66.6221 78.2752H66.4571ZM66.4571 77.6932V78.2752H66.6221V77.6932H66.4571ZM65.8791 76.9332C66.1686 76.9332 66.4571 77.2363 66.4571 77.6932H66.6221C66.6221 77.1796 66.2907 76.7682 65.8791 76.7682V76.9332ZM65.8791 76.1602C65.1113 76.1602 64.4741 76.7382 64.4741 77.4802H64.6391C64.6391 76.8403 65.191 76.3252 65.8791 76.3252V76.1602ZM67.2841 77.4802C67.2841 76.7381 66.6459 76.1602 65.8791 76.1602V76.3252C66.5663 76.3252 67.1191 76.8403 67.1191 77.4802H67.2841ZM67.2841 78.4852V77.4802H67.1191V78.4852H67.2841ZM65.8791 79.8052C66.6459 79.8052 67.2841 79.2273 67.2841 78.4852H67.1191C67.1191 79.1251 66.5663 79.6402 65.8791 79.6402V79.8052ZM64.4741 78.4852C64.4741 79.2272 65.1113 79.8052 65.8791 79.8052V79.6402C65.191 79.6402 64.6391 79.1251 64.6391 78.4852H64.4741ZM64.4741 77.4802V78.4852H64.6391V77.4802H64.4741ZM64.8041 77.4802C64.8041 76.9419 65.2712 76.4902 65.8791 76.4902V76.3252C65.191 76.3252 64.6391 76.8403 64.6391 77.4802H64.8041ZM64.8041 78.4852V77.4802H64.6391V78.4852H64.8041ZM65.8791 79.4752C65.2712 79.4752 64.8041 79.0234 64.8041 78.4852H64.6391C64.6391 79.1251 65.191 79.6402 65.8791 79.6402V79.4752ZM66.9541 78.4852C66.9541 79.0233 66.4861 79.4752 65.8791 79.4752V79.6402C66.5663 79.6402 67.1191 79.1251 67.1191 78.4852H66.9541ZM66.9541 77.4802V78.4852H67.1191V77.4802H66.9541ZM65.8791 76.4902C66.4861 76.4902 66.9541 76.942 66.9541 77.4802H67.1191C67.1191 76.8403 66.5663 76.3252 65.8791 76.3252V76.4902Z"
              fill="#C8242B"
            />
            <Path
              id="Fill 566"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M59.4343 76.105C58.7473 76.105 58.1943 76.62 58.1943 77.26V78.707C58.1943 79.347 58.7473 79.863 59.4343 79.863C60.1223 79.863 60.6743 79.347 60.6743 78.707V77.26C60.6743 76.62 60.1223 76.105 59.4343 76.105ZM59.4343 76.548C59.0213 76.548 58.6913 76.957 58.6913 77.47V78.495C58.6913 79.008 59.0213 79.42 59.4343 79.42C59.8463 79.42 60.1763 79.008 60.1763 78.495V77.47C60.1763 76.957 59.8463 76.548 59.4343 76.548Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 567"
              d="M59.4348 75.94C58.668 75.94 58.0298 76.5179 58.0298 77.26H58.1948C58.1948 76.6201 58.7477 76.105 59.4348 76.105V75.94ZM60.8398 77.26C60.8398 76.518 60.2027 75.94 59.4348 75.94V76.105C60.1229 76.105 60.6748 76.6201 60.6748 77.26H60.8398ZM60.8398 78.707V77.26H60.6748V78.707H60.8398ZM59.4348 80.028C60.2029 80.028 60.8398 79.4488 60.8398 78.707H60.6748C60.6748 79.3469 60.1229 79.863 59.4348 79.863V80.028ZM58.0298 78.707C58.0298 79.4489 58.6678 80.028 59.4348 80.028V79.863C58.7477 79.863 58.1948 79.3469 58.1948 78.707H58.0298ZM58.0298 77.26V78.707H58.1948V77.26H58.0298ZM58.3598 77.26C58.3598 76.7218 58.8278 76.27 59.4348 76.27V76.105C58.7477 76.105 58.1948 76.6201 58.1948 77.26H58.3598ZM58.3598 78.707V77.26H58.1948V78.707H58.3598ZM59.4348 79.698C58.828 79.698 58.3598 79.2453 58.3598 78.707H58.1948C58.1948 79.3468 58.7477 79.863 59.4348 79.863V79.698ZM60.5098 78.707C60.5098 79.2454 60.0425 79.698 59.4348 79.698V79.863C60.1229 79.863 60.6748 79.3468 60.6748 78.707H60.5098ZM60.5098 77.26V78.707H60.6748V77.26H60.5098ZM59.4348 76.27C60.0427 76.27 60.5098 76.7217 60.5098 77.26H60.6748C60.6748 76.6201 60.1229 76.105 59.4348 76.105V76.27ZM59.4348 76.383C58.8989 76.383 58.5268 76.9013 58.5268 77.47H58.6918C58.6918 76.9565 59.0222 76.548 59.4348 76.548V76.383ZM60.3418 77.47C60.3418 76.9014 59.9699 76.383 59.4348 76.383V76.548C59.8464 76.548 60.1768 76.9565 60.1768 77.47H60.3418ZM60.3418 78.495V77.47H60.1768V78.495H60.3418ZM59.4348 79.585C59.9705 79.585 60.3418 79.0627 60.3418 78.495H60.1768C60.1768 79.0084 59.8464 79.42 59.4348 79.42V79.585ZM58.5268 78.495C58.5268 79.0629 58.8983 79.585 59.4348 79.585V79.42C59.0222 79.42 58.6918 79.0084 58.6918 78.495H58.5268ZM58.5268 77.47V78.495H58.6918V77.47H58.5268ZM58.8568 77.47C58.8568 77.0137 59.1439 76.713 59.4348 76.713V76.548C59.0223 76.548 58.6918 76.9564 58.6918 77.47H58.8568ZM58.8568 78.495V77.47H58.6918V78.495H58.8568ZM59.4348 79.255C59.1445 79.255 58.8568 78.952 58.8568 78.495H58.6918C58.6918 79.0085 59.0223 79.42 59.4348 79.42V79.255ZM60.0118 78.495C60.0118 78.9521 59.724 79.255 59.4348 79.255V79.42C59.8463 79.42 60.1768 79.0085 60.1768 78.495H60.0118ZM60.0118 77.47V78.495H60.1768V77.47H60.0118ZM59.4348 76.713C59.7246 76.713 60.0118 77.0135 60.0118 77.47H60.1768C60.1768 76.9564 59.8463 76.548 59.4348 76.548V76.713Z"
              fill="#C8242B"
            />
            <Path
              id="Fill 568"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M57.4519 76.5481C56.7649 76.5481 56.2119 77.0621 56.2119 77.7021V78.3651C56.2119 79.0051 56.7649 79.5201 57.4519 79.5201C58.1369 79.5201 58.6919 79.0051 58.6919 78.3651V77.7021C58.6919 77.0621 58.1369 76.5481 57.4519 76.5481ZM57.4519 76.9881C57.0399 76.9881 56.7069 77.4001 56.7069 77.9131V78.1531C56.7069 78.6651 57.0399 79.0771 57.4519 79.0771C57.8649 79.0771 58.1949 78.6651 58.1949 78.1531V77.9131C58.1949 77.4001 57.8649 76.9881 57.4519 76.9881Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 569"
              d="M57.4514 76.3831C56.6848 76.3831 56.0464 76.9598 56.0464 77.7021H56.2114C56.2114 77.0622 56.7643 76.5481 57.4514 76.5481V76.3831ZM58.8564 77.7021C58.8564 76.9596 58.2158 76.3831 57.4514 76.3831V76.5481C58.1365 76.5481 58.6914 77.0622 58.6914 77.7021H58.8564ZM58.8564 78.3651V77.7021H58.6914V78.3651H58.8564ZM57.4514 79.6851C58.216 79.6851 58.8564 79.1073 58.8564 78.3651H58.6914C58.6914 79.005 58.1365 79.5201 57.4514 79.5201V79.6851ZM56.0464 78.3651C56.0464 79.1072 56.6846 79.6851 57.4514 79.6851V79.5201C56.7643 79.5201 56.2114 79.005 56.2114 78.3651H56.0464ZM56.0464 77.7021V78.3651H56.2114V77.7021H56.0464ZM56.3764 77.7021C56.3764 77.1641 56.8442 76.7131 57.4514 76.7131V76.5481C56.7643 76.5481 56.2114 77.0622 56.2114 77.7021H56.3764ZM56.3764 78.3651V77.7021H56.2114V78.3651H56.3764ZM57.4514 79.3551C56.8444 79.3551 56.3764 78.9032 56.3764 78.3651H56.2114C56.2114 79.005 56.7643 79.5201 57.4514 79.5201V79.3551ZM58.5264 78.3651C58.5264 78.9031 58.0566 79.3551 57.4514 79.3551V79.5201C58.1365 79.5201 58.6914 79.005 58.6914 78.3651H58.5264ZM58.5264 77.7021V78.3651H58.6914V77.7021H58.5264ZM57.4514 76.7131C58.0568 76.7131 58.5264 77.1643 58.5264 77.7021H58.6914C58.6914 77.0622 58.1365 76.5481 57.4514 76.5481V76.7131ZM57.4514 76.8231C56.9165 76.8231 56.5414 77.3444 56.5414 77.9131H56.7064C56.7064 77.3996 57.0398 76.9881 57.4514 76.9881V76.8231ZM58.3594 77.9131C58.3594 77.3452 57.9879 76.8231 57.4514 76.8231V76.9881C57.864 76.9881 58.1944 77.3996 58.1944 77.9131H58.3594ZM58.3594 78.1531V77.9131H58.1944V78.1531H58.3594ZM57.4514 79.2421C57.9878 79.2421 58.3594 78.7201 58.3594 78.1531H58.1944C58.1944 78.6656 57.864 79.0771 57.4514 79.0771V79.2421ZM56.5414 78.1531C56.5414 78.7209 56.9166 79.2421 57.4514 79.2421V79.0771C57.0398 79.0771 56.7064 78.6655 56.7064 78.1531H56.5414ZM56.5414 77.9131V78.1531H56.7064V77.9131H56.5414ZM56.8714 77.9131C56.8714 77.4568 57.1615 77.1531 57.4514 77.1531V76.9881C57.0399 76.9881 56.7064 77.3995 56.7064 77.9131H56.8714ZM56.8714 78.1531V77.9131H56.7064V78.1531H56.8714ZM57.4514 78.9121C57.1614 78.9121 56.8714 78.6082 56.8714 78.1531H56.7064C56.7064 78.6656 57.0399 79.0771 57.4514 79.0771V78.9121ZM58.0294 78.1531C58.0294 78.609 57.7418 78.9121 57.4514 78.9121V79.0771C57.8639 79.0771 58.1944 78.6657 58.1944 78.1531H58.0294ZM58.0294 77.9131V78.1531H58.1944V77.9131H58.0294ZM57.4514 77.1531C57.7417 77.1531 58.0294 77.4561 58.0294 77.9131H58.1944C58.1944 77.3995 57.8639 76.9881 57.4514 76.9881V77.1531Z"
              fill="#C8242B"
            />
            <Path
              id="Fill 570"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M54.4771 75.8831C53.2411 75.8831 52.2461 76.4601 52.2461 77.1751V78.7921C52.2461 79.5081 53.2411 80.0821 54.4771 80.0821C55.7111 80.0821 56.7061 79.5081 56.7061 78.7921V77.1751C56.7061 76.4601 55.7111 75.8831 54.4771 75.8831ZM54.4771 76.3771C53.7341 76.3771 53.1391 76.8371 53.1391 77.4101V78.5551C53.1391 79.1271 53.7341 79.5871 54.4771 79.5871C55.2191 79.5871 55.8141 79.1271 55.8141 78.5551V77.4101C55.8141 76.8371 55.2191 76.3771 54.4771 76.3771Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 571"
              d="M52.8572 76.1895L52.8986 76.2609L52.8572 76.1895ZM56.0962 76.1895L56.0548 76.2609L56.0962 76.1895ZM56.0961 79.777L56.0548 79.7055L56.0961 79.777ZM52.8573 79.777L52.8986 79.7055L52.8573 79.777ZM52.9399 76.3323L52.8986 76.2609L52.9399 76.3323ZM52.9398 79.6341L52.8986 79.7055L52.9398 79.6341ZM56.0135 79.6341L55.9722 79.5627L56.0135 79.6341ZM56.0134 76.3323L55.9721 76.4037L55.9721 76.4037L56.0134 76.3323ZM54.4776 75.718C53.836 75.718 53.2486 75.8675 52.8158 76.1181L52.8986 76.2609C53.3018 76.0273 53.8596 75.883 54.4776 75.883V75.718ZM56.1376 76.1182C55.7051 75.8675 55.1182 75.718 54.4776 75.718V75.883C55.0946 75.883 55.6518 76.0273 56.0548 76.2609L56.1376 76.1182ZM56.8716 77.175C56.8716 76.7341 56.5659 76.3665 56.1376 76.1182L56.0548 76.2609C56.4579 76.4946 56.7066 76.8176 56.7066 77.175H56.8716ZM56.8716 78.792V77.175H56.7066V78.792H56.8716ZM56.1374 79.8484C56.5658 79.6007 56.8716 79.2335 56.8716 78.792H56.7066C56.7066 79.15 56.4579 79.4725 56.0548 79.7055L56.1374 79.8484ZM54.4776 80.247C55.1181 80.247 55.7049 80.0984 56.1374 79.8484L56.0548 79.7055C55.6518 79.9385 55.0946 80.082 54.4776 80.082V80.247ZM52.816 79.8484C53.2487 80.0984 53.8361 80.247 54.4776 80.247V80.082C53.8596 80.082 53.3018 79.9385 52.8986 79.7055L52.816 79.8484ZM52.0816 78.792C52.0816 79.2335 52.3873 79.6007 52.816 79.8484L52.8986 79.7055C52.4952 79.4725 52.2466 79.15 52.2466 78.792H52.0816ZM52.0816 77.175V78.792H52.2466V77.175H52.0816ZM52.8158 76.1181C52.3873 76.3664 52.0816 76.7341 52.0816 77.175H52.2466C52.2466 76.8176 52.4952 76.4946 52.8986 76.2609L52.8158 76.1181ZM52.4116 77.175C52.4116 76.9008 52.6035 76.6225 52.9813 76.4037L52.8986 76.2609C52.4952 76.4946 52.2466 76.8176 52.2466 77.175H52.4116ZM52.4116 78.792V77.175H52.2466V78.792H52.4116ZM52.9811 79.5627C52.6035 79.3445 52.4116 79.0667 52.4116 78.792H52.2466C52.2466 79.15 52.4952 79.4725 52.8986 79.7055L52.9811 79.5627ZM54.4776 79.917C53.883 79.917 53.3549 79.7786 52.9811 79.5627L52.8986 79.7055C53.3018 79.9385 53.8596 80.082 54.4776 80.082V79.917ZM55.9722 79.5627C55.5987 79.7787 55.0711 79.917 54.4776 79.917V80.082C55.0946 80.082 55.6518 79.9385 56.0548 79.7055L55.9722 79.5627ZM56.5416 78.792C56.5416 79.0667 56.3496 79.3445 55.9722 79.5627L56.0548 79.7055C56.4579 79.4725 56.7066 79.15 56.7066 78.792H56.5416ZM56.5416 77.175V78.792H56.7066V77.175H56.5416ZM55.9721 76.4037C56.3496 76.6225 56.5416 76.9008 56.5416 77.175H56.7066C56.7066 76.8176 56.4579 76.4946 56.0548 76.2609L55.9721 76.4037ZM54.4776 76.048C55.0709 76.048 55.5985 76.1871 55.9721 76.4037L56.0548 76.2609C55.6518 76.0273 55.0946 75.883 54.4776 75.883V76.048ZM52.9813 76.4037C53.3551 76.1871 53.8832 76.048 54.4776 76.048V75.883C53.8596 75.883 53.3018 76.0273 52.8986 76.2609L52.9813 76.4037ZM54.4776 76.212C53.686 76.212 52.9746 76.7085 52.9746 77.41H53.1396C53.1396 76.8373 53.7342 76.377 54.4776 76.377V76.212ZM55.9796 77.41C55.9796 76.7086 55.2682 76.212 54.4776 76.212V76.377C55.22 76.377 55.8146 76.8373 55.8146 77.41H55.9796ZM55.9796 78.555V77.41H55.8146V78.555H55.9796ZM54.4776 79.752C55.2681 79.752 55.9796 79.2556 55.9796 78.555H55.8146C55.8146 79.1267 55.22 79.587 54.4776 79.587V79.752ZM52.9746 78.555C52.9746 79.2557 53.6861 79.752 54.4776 79.752V79.587C53.7342 79.587 53.1396 79.1267 53.1396 78.555H52.9746ZM52.9746 77.41V78.555H53.1396V77.41H52.9746ZM53.3046 77.41C53.3046 76.9649 53.784 76.542 54.4776 76.542V76.377C53.7341 76.377 53.1396 76.8374 53.1396 77.41H53.3046ZM53.3046 78.555V77.41H53.1396V78.555H53.3046ZM54.4776 79.422C53.7839 79.422 53.3046 78.9991 53.3046 78.555H53.1396C53.1396 79.1267 53.7341 79.587 54.4776 79.587V79.422ZM55.6496 78.555C55.6496 78.9992 55.1702 79.422 54.4776 79.422V79.587C55.22 79.587 55.8146 79.1267 55.8146 78.555H55.6496ZM55.6496 77.41V78.555H55.8146V77.41H55.6496ZM54.4776 76.542C55.1701 76.542 55.6496 76.9648 55.6496 77.41H55.8146C55.8146 76.8374 55.22 76.377 54.4776 76.377V76.542Z"
              fill="#C8242B"
            />
            <Path
              id="Fill 572"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M70.5894 76.105C69.3524 76.105 68.3564 76.68 68.3564 77.395V79.012C68.3564 79.728 69.3524 80.302 70.5894 80.302C71.8244 80.302 72.8194 79.728 72.8194 79.012V77.395C72.8194 76.68 71.8244 76.105 70.5894 76.105ZM70.5894 76.597C69.8464 76.597 69.2494 77.06 69.2494 77.633V78.778C69.2494 79.35 69.8464 79.81 70.5894 79.81C71.3294 79.81 71.9264 79.35 71.9264 78.778V77.633C71.9264 77.06 71.3294 76.597 70.5894 76.597Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 573"
              d="M68.9683 76.4104L68.927 76.339L68.9683 76.4104ZM72.2093 76.4104L72.2506 76.339V76.339L72.2093 76.4104ZM72.2093 79.9969L72.168 79.9255H72.168L72.2093 79.9969ZM68.9683 79.9969L69.0095 79.9255L68.9683 79.9969ZM69.0508 76.5533L69.0095 76.4818V76.4818L69.0508 76.5533ZM69.0508 79.854L69.092 79.7826L69.0508 79.854ZM72.1268 79.854L72.0855 79.7826L72.1268 79.854ZM72.1267 76.5533L72.0854 76.6247L72.1267 76.5533ZM70.5899 75.94C69.9479 75.94 69.3601 76.0888 68.927 76.339L69.0095 76.4818C69.4132 76.2487 69.9714 76.105 70.5899 76.105V75.94ZM72.2506 76.339C71.8181 76.0888 71.2309 75.94 70.5899 75.94V76.105C71.2074 76.105 71.7649 76.2487 72.168 76.4818L72.2506 76.339ZM72.9849 77.395C72.9849 76.954 72.6791 76.5868 72.2506 76.339L72.168 76.4818C72.5712 76.715 72.8199 77.0375 72.8199 77.395H72.9849ZM72.9849 79.012V77.395H72.8199V79.012H72.9849ZM72.2506 80.0683C72.6792 79.8206 72.9849 79.4534 72.9849 79.012H72.8199C72.8199 79.3699 72.5712 79.6924 72.168 79.9255L72.2506 80.0683ZM70.5899 80.467C71.2309 80.467 71.818 80.3184 72.2506 80.0683L72.168 79.9255C71.7649 80.1585 71.2074 80.302 70.5899 80.302V80.467ZM68.927 80.0684C69.3601 80.3184 69.948 80.467 70.5899 80.467V80.302C69.9714 80.302 69.4132 80.1585 69.0095 79.9255L68.927 80.0684ZM68.1919 79.012C68.1919 79.4535 68.498 79.8207 68.927 80.0684L69.0095 79.9255C68.6058 79.6924 68.3569 79.3699 68.3569 79.012H68.1919ZM68.1919 77.395V79.012H68.3569V77.395H68.1919ZM68.927 76.339C68.4981 76.5867 68.1919 76.9539 68.1919 77.395H68.3569C68.3569 77.0375 68.6058 76.715 69.0095 76.4818L68.927 76.339ZM68.5219 77.395C68.5219 77.1209 68.7139 76.8431 69.0921 76.6247L69.0095 76.4818C68.6058 76.715 68.3569 77.0375 68.3569 77.395H68.5219ZM68.5219 79.012V77.395H68.3569V79.012H68.5219ZM69.092 79.7826C68.714 79.5643 68.5219 79.2866 68.5219 79.012H68.3569C68.3569 79.3699 68.6058 79.6924 69.0095 79.9255L69.092 79.7826ZM70.5899 80.137C69.9949 80.137 69.4662 79.9986 69.092 79.7826L69.0095 79.9255C69.4132 80.1585 69.9714 80.302 70.5899 80.302V80.137ZM72.0855 79.7826C71.7118 79.9986 71.1839 80.137 70.5899 80.137V80.302C71.2074 80.302 71.7649 80.1585 72.168 79.9255L72.0855 79.7826ZM72.6549 79.012C72.6549 79.2866 72.463 79.5644 72.0855 79.7826L72.168 79.9255C72.5713 79.6924 72.8199 79.3699 72.8199 79.012H72.6549ZM72.6549 77.395V79.012H72.8199V77.395H72.6549ZM72.0854 76.6247C72.463 76.843 72.6549 77.1208 72.6549 77.395H72.8199C72.8199 77.0375 72.5713 76.715 72.168 76.4818L72.0854 76.6247ZM70.5899 76.27C71.1839 76.27 71.7118 76.4086 72.0854 76.6247L72.168 76.4818C71.7649 76.2487 71.2074 76.105 70.5899 76.105V76.27ZM69.0921 76.6247C69.4662 76.4086 69.9949 76.27 70.5899 76.27V76.105C69.9714 76.105 69.4132 76.2487 69.0095 76.4818L69.0921 76.6247ZM70.5899 76.432C69.798 76.432 69.0849 76.9317 69.0849 77.633H69.2499C69.2499 77.0603 69.8465 76.597 70.5899 76.597V76.432ZM72.0919 77.633C72.0919 76.9319 71.3791 76.432 70.5899 76.432V76.597C71.3303 76.597 71.9269 77.0603 71.9269 77.633H72.0919ZM72.0919 78.778V77.633H71.9269V78.778H72.0919ZM70.5899 79.975C70.9886 79.975 71.3616 79.8503 71.6365 79.6392C71.912 79.4278 72.0919 79.1266 72.0919 78.778H71.9269C71.9269 79.0655 71.7793 79.3216 71.5361 79.5083C71.2924 79.6954 70.9556 79.81 70.5899 79.81V79.975ZM69.0849 78.778C69.0849 79.1267 69.2649 79.4279 69.5408 79.6393C69.8162 79.8504 70.1898 79.975 70.5899 79.975V79.81C70.2228 79.81 69.8852 79.6954 69.6411 79.5083C69.3975 79.3216 69.2499 79.0655 69.2499 78.778H69.0849ZM69.0849 77.633V78.778H69.2499V77.633H69.0849ZM69.4149 77.633C69.4149 77.1876 69.8967 76.762 70.5899 76.762V76.597C69.8465 76.597 69.2499 77.0603 69.2499 77.633H69.4149ZM69.4149 78.778V77.633H69.2499V78.778H69.4149ZM70.5899 79.645C69.8959 79.645 69.4149 79.2217 69.4149 78.778H69.2499C69.2499 79.3496 69.8464 79.81 70.5899 79.81V79.645ZM71.7619 78.778C71.7619 79.2219 71.2807 79.645 70.5899 79.645V79.81C71.3304 79.81 71.9269 79.3496 71.9269 78.778H71.7619ZM71.7619 77.633V78.778H71.9269V77.633H71.7619ZM70.5899 76.762C71.2799 76.762 71.7619 77.1874 71.7619 77.633H71.9269C71.9269 77.0603 71.3304 76.597 70.5899 76.597V76.762Z"
              fill="#C8242B"
            />
            <Path
              id="Fill 574"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.536 77.4302H69.188C69.277 77.4302 69.35 77.5352 69.35 77.6652V78.5212C69.35 78.6512 69.277 78.7562 69.188 78.7562H66.536C66.447 78.7562 66.375 78.6512 66.375 78.5212V77.6652C66.375 77.5352 66.447 77.4302 66.536 77.4302Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 575"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M66.536 77.4302H69.188C69.277 77.4302 69.35 77.5352 69.35 77.6652V78.5212C69.35 78.6512 69.277 78.7562 69.188 78.7562H66.536C66.447 78.7562 66.375 78.6512 66.375 78.5212V77.6652C66.375 77.5352 66.447 77.4302 66.536 77.4302Z"
              stroke="#C8242B"
              strokeWidth={0.165}
            />
            <Path
              id="Fill 576"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.7434 77.21H65.2904C65.3424 77.21 65.3844 77.35 65.3844 77.523V78.665C65.3844 78.838 65.3424 78.978 65.2904 78.978H63.7434C63.6914 78.978 63.6494 78.838 63.6494 78.665V77.523C63.6494 77.35 63.6914 77.21 63.7434 77.21Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 577"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M63.7434 77.21H65.2904C65.3424 77.21 65.3844 77.35 65.3844 77.523V78.665C65.3844 78.838 65.3424 78.978 65.2904 78.978H63.7434C63.6914 78.978 63.6494 78.838 63.6494 78.665V77.523C63.6494 77.35 63.6914 77.21 63.7434 77.21Z"
              stroke="#C8242B"
              strokeWidth={0.165}
            />
            <Path
              id="Fill 578"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M55.5637 77.21H57.1107C57.1627 77.21 57.2047 77.35 57.2047 77.523V78.665C57.2047 78.838 57.1627 78.978 57.1107 78.978H55.5637C55.5117 78.978 55.4697 78.838 55.4697 78.665V77.523C55.4697 77.35 55.5117 77.21 55.5637 77.21Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 579"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M55.5637 77.21H57.1107C57.1627 77.21 57.2047 77.35 57.2047 77.523V78.665C57.2047 78.838 57.1627 78.978 57.1107 78.978H55.5637C55.5117 78.978 55.4697 78.838 55.4697 78.665V77.523C55.4697 77.35 55.5117 77.21 55.5637 77.21Z"
              stroke="#C8242B"
              strokeWidth={0.165}
            />
            <Path
              id="Fill 580"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50.2026 76.988H53.2966C53.4006 76.988 53.4846 77.163 53.4846 77.378V78.807C53.4846 79.023 53.4006 79.197 53.2966 79.197H50.2026C50.0986 79.197 50.0146 79.023 50.0146 78.807V77.378C50.0146 77.163 50.0986 76.988 50.2026 76.988Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 581"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M50.2026 76.988H53.2966C53.4006 76.988 53.4846 77.163 53.4846 77.378V78.807C53.4846 79.023 53.4006 79.197 53.2966 79.197H50.2026C50.0986 79.197 50.0146 79.023 50.0146 78.807V77.378C50.0146 77.163 50.0986 76.988 50.2026 76.988Z"
              stroke="#C8242B"
              strokeWidth={0.165}
            />
            <Path
              id="Fill 582"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M71.7541 77.21H74.6261C74.7231 77.21 74.8011 77.385 74.8011 77.601V79.029C74.8011 79.245 74.7231 79.42 74.6261 79.42H71.7541C71.6571 79.42 71.5791 79.245 71.5791 79.029V77.601C71.5791 77.385 71.6571 77.21 71.7541 77.21Z"
              fill="#FFFFFE"
            />
            <Path
              id="Stroke 583"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M71.7541 77.21H74.6261C74.7231 77.21 74.8011 77.385 74.8011 77.601V79.029C74.8011 79.245 74.7231 79.42 74.6261 79.42H71.7541C71.6571 79.42 71.5791 79.245 71.5791 79.029V77.601C71.5791 77.385 71.6571 77.21 71.7541 77.21Z"
              stroke="#C8242B"
              strokeWidth={0.165}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default Flag;
