import * as React from "react";
import {
  View,
  Pressable,
  Dimensions,
  Text,
  TouchableHighlight,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";
import LogoFly from "../assets/images/logo_fly_manu_light.svg";
import WorldMenu from "../assets/images/world-flags-tab-menu.svg";

const PAGE_WIDTH = 60;
const PAGE_HEIGHT = 120;
const DATA = ["Logo", "WorldFlags"];

function Index({ onPress }) {
  const r = React.useRef<ICarouselInstance>(null);
  const [loop, setLoop] = React.useState(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={{}}>
        <Carousel
          key={`${loop}`}
          ref={r}
          loop={loop}
          style={{
            width: Dimensions.get("window").width,
            height: PAGE_HEIGHT,
            justifyContent: "center",
            alignItems: "center",
            bottom: 200,
          }}
          width={80}
          height={PAGE_HEIGHT}
          data={DATA}
          renderItem={({ item, animationValue }) => {
            return (
              <Item
                animationValue={animationValue}
                label={item}
                onPress={() => {
                  onPress?.(item);
                  return r.current?.scrollTo({
                    count: animationValue.value,
                    animated: true,
                  });
                }}
              />
            );
          }}
          autoPlay={false}
        />
      </View>
    </View>
  );
}

export default Index;

interface Props {
  animationValue: Animated.SharedValue<number>;
  label: string;
  onPress?: () => void;
}

const Item: React.FC<Props> = (props) => {
  const { animationValue, label, onPress } = props;

  const translateY = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0.5, 1, 0.5],
      Extrapolate.CLAMP
    );

    return {
      opacity,
    };
  }, [animationValue]);

  const labelStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [1, 1.25, 1],
      Extrapolate.CLAMP
    );

    const color = interpolateColor(
      animationValue.value,
      [-1, 0, 1],
      ["#b6bbc0", "#0071fa", "#b6bbc0"]
    );

    return {
      transform: [{ scale }, { translateY: translateY.value }],
      color,
    };
  }, [animationValue, translateY]);

  const onPressIn = React.useCallback(() => {
    translateY.value = withTiming(-8, { duration: 250 });
  }, [translateY]);

  const onPressOut = React.useCallback(() => {
    translateY.value = withTiming(0, { duration: 250 });
  }, [translateY]);

  return (
    <Pressable onPress={onPress} onPressIn={onPressIn} onPressOut={onPressOut}>
      <Animated.View
        style={[
          {
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          },
          containerStyle,
        ]}
      >
        <View style={{}}>
          {label === "Logo" ? <LogoFly style={{ bottom: 3 }} /> : <WorldMenu />}
        </View>
      </Animated.View>
    </Pressable>
  );
};
